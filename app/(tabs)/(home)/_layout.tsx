import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Investment Calculator" }} />
    </Stack>
  );
}
