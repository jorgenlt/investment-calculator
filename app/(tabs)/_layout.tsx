import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tabs.Screen
        name="(home)"
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          tabBarIcon: () => <FontAwesome name="gear" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
