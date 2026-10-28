import { Text, View } from "react-native";
import SafeAreaView from "../../../src/components/SafeAreaView";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-magnolia dark:bg-cinder">
      <View className="pt-12 px-6">
        <Text className="text-5xl font-extrabold tracking-tight dark:text-athens-gray font-mono uppercase text-gun-powder text-center">
          spendwise
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
