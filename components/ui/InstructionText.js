import {Text, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

function InstructionText({children}) {
  return <Text style={styles.gameInstruction}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
  gameInstruction: {
    color: Colors.accent1,
    fontSize: 24,
  },
});