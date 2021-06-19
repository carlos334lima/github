import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
import LogoBackground from '../../assets/github-background.png';

import {
  Container,
  ButtonBack,
  ButtonText,
  Avatar,
  Card,
  CardIssues,
  Title,
  Caption,
  CardIconIssue,
  NameRepo,
  BioRepo,
  CardGlobal,
  CardInfoText,
  CardInfoTitle,
  CardInfoCaption,
  Language,
  CardInfo,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const navigation = useNavigation();
  const routes = useRoute();

  const routeParams = routes.params as Repository;

  useEffect(() => {
    api.get(`repos/${routeParams.full_name}`).then(response => {
      setRepository(response.data);
    });
    api.get(`repos/${routeParams.full_name}/issues`).then(response => {
      setIssues(response.data);
    });
  }, [routeParams.full_name]);

  function handleIssue(html_url: string) {
    navigation.navigate('Issue', {
      html_url,
    });
  }

  function BackNavigate() {
    navigation.goBack();
  }

  return (
    <Container source={LogoBackground}>
      <ButtonBack onPress={BackNavigate}>
        <ButtonText>Voltar</ButtonText>
      </ButtonBack>
      <Avatar
        source={{
          uri: `${repository?.owner.avatar_url}`,
        }}
      />
      <NameRepo numberOfLines={1}>{repository?.full_name}</NameRepo>
      <BioRepo>{repository?.description}</BioRepo>

      <CardGlobal>
        <Language>{repository?.language}</Language>
        <CardInfo>
          <CardInfoText>
            <CardInfoTitle>{repository?.stargazers_count}</CardInfoTitle>
            <CardInfoCaption>Stars</CardInfoCaption>
          </CardInfoText>
          <CardInfoText>
            <CardInfoTitle>{repository?.forks_count}</CardInfoTitle>
            <CardInfoCaption>Forks</CardInfoCaption>
          </CardInfoText>
        </CardInfo>
        <CardInfo>
          <CardInfoText>
            <CardInfoTitle>{repository?.open_issues_count}</CardInfoTitle>
            <CardInfoCaption>Issues abertas</CardInfoCaption>
          </CardInfoText>
        </CardInfo>
      </CardGlobal>

      <FlatList
        data={issues}
        keyExtractor={issue => issue.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: issue }) => (
          <Card onPress={() => handleIssue(issue.html_url)}>
            <CardIssues>
              <Title numberOfLines={1}>{issue.title}</Title>
              <Caption>{issue.user.login}</Caption>
            </CardIssues>
            <CardIconIssue name="chevron-right" size={20} color="#A8A8B3" />
          </Card>
        )}
      />
    </Container>
  );
};

export default Repository;
