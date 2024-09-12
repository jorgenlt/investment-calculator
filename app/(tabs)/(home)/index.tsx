import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router'

export default function Index() {
  return (
    <View
      style={styles.container}
    >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyConent: "center",
    // alignItems: "center",
  }
})

{/* <View
style={{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}}
>
<Text>Edit app/(tabs)/(home)/index.tsx to edit this screen.</Text>
<Link href="/settings">Go to Settings</Link>
</View> */}
