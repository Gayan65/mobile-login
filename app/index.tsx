import Home from "@/components/Home";
import Login from "@/components/Login";
import { Text, View } from "react-native";

export default function Index() {
    const isAuth = false;

    return (
        <View>
            <Text> Main screen </Text>
            {isAuth ? <Home /> : <Login />}
        </View>
    );
}
