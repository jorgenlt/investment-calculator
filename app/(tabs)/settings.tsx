import { Text, View } from "react-native";
import {Link} from 'expo-router'

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/(tabs)/settings.tsx to edit this screen.</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}
