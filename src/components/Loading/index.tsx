import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme";

export function Loading(){

    return(
        <>
            <ActivityIndicator size={50} color={theme.colors.brand.blue}/>
        </>
    )
}