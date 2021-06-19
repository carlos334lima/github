import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import ArrowLeft from 'react-native-vector-icons/AntDesign';
import CheronRihgt from 'react-native-vector-icons/Entypo';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;

export const ButtonBack = styled(RectButton)`
  align-items: center;
  left: 130px;
  top: 18px;
  justify-content: space-between;
  flex-direction: row;
`;

export const LogoButton = styled(ArrowLeft)`
  padding-right: 3px;
`;

export const ButtonText = styled.Text`
  top: -2px;
  font-size: 22px;
  color: #a8a8b3;
`;

export const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 50px;
  top: 52px;
  right: 144px;
  margin-left: 50px;
`;

export const CardIconIssue = styled(CheronRihgt)`
  right: 28px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  max-width: 260px;
  margin-left: 5px;
`;

export const Caption = styled.Text`
  color: #a8a8b3;
  font-family: 'Roboto-Regular';
  margin-left: 5px;
  padding-top: 5px;
`;

export const CardIssues = styled.View``;
export const Card = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  border-radius: 5px;
  padding-left: 5px;
  height: 70px;
  margin-top: 15px;
  background-color: #fff;
`;

export const NameRepo = styled.Text`
  margin-left: 70px;
  top: -22px;
  font-family: 'Roboto-Regular';
  font-size: 20px;
  font-weight: bold;
  color: #3d3d4d;
`;

export const BioRepo = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  left: 38px;
  top: -35px;
  max-width: 190px;
  margin-top: 20px;
  font-weight: bold;
  color: #3d3d4d;
`;

export const CardGlobal = styled.View`
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const CardInfo = styled.View`
  flex-direction: row;
  margin-left: 50px;
`;

export const Language = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3d3d4d;
  margin-bottom: 10px;
`;

export const CardInfoText = styled.Text`
  flex-direction: column;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  margin-right: 50px;
`;

export const CardInfoTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #3d3d4d;
`;

export const CardInfoCaption = styled.Text`
  font-size: 16px;
  color: #6c6c80;
`;
