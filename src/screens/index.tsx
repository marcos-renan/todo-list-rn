import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../components/Header";
import { Task } from "../components/Task";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.countContainer}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluidas</Text>
            <View style={styles.countContainer}>
              <Text style={styles.countText}>0</Text>
            </View>
          </View>
        </View>
        <Task title="estudar rn" isCompleted/>
        <Task title="estudar rn" isCompleted={false}/>
        <Task title="estudar rn" isCompleted/>
      </View>
    </View>
  );
}
