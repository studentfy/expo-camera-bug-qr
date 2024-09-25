import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="scanner" options={{ title: 'QR Scanner' }} />
    </Stack>
  );
}
