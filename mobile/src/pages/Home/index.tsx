import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
  Container,
  Card,
  Title,
  CardTitle,
  CardSubTitle,
  Input,
  Button,
  CardInfo,
  Avatar,
  ButtonText,
} from './styles';

import LogoBackground from '../../assets/github-background.png';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [inputText, setInputText] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function NewAddRepo() {
    const response = await api.get<Repository>(`repos/${inputText}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setInputText('');
  }

  function navigateToRepository(full_name: string) {
    navigation.navigate('Repository', {
      full_name,
    });
  }

  return (
    <Container source={LogoBackground}>
      <Title>Explore repositórios no Github</Title>

      <Input
        value={inputText}
        placeholder="Ex.: facebook/react-native"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setInputText}
      />

      <FlatList
        data={repositories}
        keyExtractor={repository => repository.full_name}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: repository }) => (
          <Card onPress={() => navigateToRepository(repository.full_name)}>
            <Avatar
              source={{
                uri: `${repository.owner.avatar_url}`,
              }}
            />
            <CardInfo>
              <CardTitle numberOfLines={1}>{repository.full_name}</CardTitle>
              <CardSubTitle>{repository.description}</CardSubTitle>
            </CardInfo>
          </Card>
        )}
      />

      <Button>
        <ButtonText onPress={NewAddRepo}>Pesquisar</ButtonText>
      </Button>
    </Container>
  );
};

export default Home;
