import { TextInput, View, StyleSheet } from 'react-native';

import MainButton from '../components/MainButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <MainButton>Reset</MainButton>
      <MainButton>Confirm</MainButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
inputContainer: {
  padding: 16,
  marginHorizontal: 24,
  marginTop: 100,
  backgroundColor: '#1e21ba',
  borderRadius: 8,
  elevation: 4,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.25
}
});