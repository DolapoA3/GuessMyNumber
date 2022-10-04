import { TextInput, View, StyleSheet } from 'react-native';

import MainButton from '../components/MainButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
      />
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
    backgroundColor: '#131590',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ef9929',
    borderBottomWidth: 2,
    color: '#ef9929',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
