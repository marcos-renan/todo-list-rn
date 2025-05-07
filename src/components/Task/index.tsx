import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TaskDTO } from "../../dtos/TaskDTO";
import { styles } from "./styles";
import { theme } from "../../theme/index";

type TaskProps = TaskDTO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
}: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => onTaskDone(id)}>
        <MaterialCommunityIcons
          name={
            isCompleted
              ? "checkbox-marked-circle-outline"
              : "checkbox-blank-circle-outline"
          }
          size={22}
          color={
            isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
          }
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={isCompleted ? styles.textDone : styles.textCreated}>
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onTaskDeleted(id)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
    </View>
  );
}
