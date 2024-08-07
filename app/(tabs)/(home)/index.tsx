import { Text, View } from "react-native";
import {Link} from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/(tabs)/(home)/index.tsx to edit this screen.</Text>
      <Link href="/settings">Go to Settings</Link>
    </View>
  );
}
