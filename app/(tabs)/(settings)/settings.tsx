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
      <Text>Edit app/(tabs)/(settings)/settings.tsx to edit this screen.</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
}
