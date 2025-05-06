import { Image, Text, View } from "react-native";
import clipboard from "../../assets/clipboard.png";
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={clipboard} style={styles.image} />
      <Text style={styles.textBold}>Nenhuma tarefa cadastrada</Text>
      <Text style={[styles.textBold, styles.textRegular]}>Crie uma tarefa</Text>
    </View>
  );
}
