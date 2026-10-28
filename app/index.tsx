import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

const Index = () => {
  const { isLoaded, isSignedIn } = useAuth();

  console.log("Clerk state:", { isLoaded, isSignedIn });

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
        <Text>Loading authentication...</Text>
      </View>
    );
  }

  return isSignedIn ? (
    <Redirect href="/dashboard" />
  ) : (
    <Redirect href="/(auth)/SignIn" />
  );
};

export default Index;
