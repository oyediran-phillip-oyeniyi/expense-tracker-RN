import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

const DashboardLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/(auth)/SignIn" />;

  return <Stack />;
};

export default DashboardLayout;
