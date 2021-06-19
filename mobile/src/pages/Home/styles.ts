import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconRepository from 'react-native-vector-icons/Entypo';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.Image`
  top: 20px;
`;
export const Title = styled.Text`
  align-items: center;
  justify-content: center;
  max-width: 300px;
  font-size: 32px;
  margin-top: 50px;
  font-family: 'Roboto-Medium';
`;
export const Input = styled.TextInput`
  background-color: #ffff;
  font-family: 'Roboto-Regular';
  font-size: 16px;
  border-radius: 10px;
  width: 90%;
  height: 60px;
  padding-left: 10px;
  margin-top: 40px;
`;
export const Button = styled(RectButton)`
  border-radius: 10px;
  width: 80%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: #04d361;
`;

export const IconButton = styled(Icon)`
  left: 28px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 24px;

  align-items: center;
  justify-content: center;

  font-family: 'Roboto-Regular';
`;

export const Card = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  width: 330px;
  height: 80px;
  border-radius: 5px;
  background-color: #ffff;
  padding-left: 5px;
  margin-top: 20px;
`;
export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;
export const CardInfo = styled.View`
  padding-left: 10px;
`;
export const CardTitle = styled.Text`
  max-width: 100%;
  margin-left: 30px;
  font-weight: bold;
  color: #3a3a3a;
  font-size: 15px;
  margin: 5px;
`;
export const CardSubTitle = styled.Text`
  max-width: 240px;

  color: #a8a8b3;
  font-size: 13px;
`;
export const IconCardRepository = styled(IconRepository)`
  left: 50px;
`;
