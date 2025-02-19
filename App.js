import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, LogBox } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./styles/GlobalStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./styles/theme";
import WorkoutScreen from "./screens/WorkoutScreen";
import TimerScreen from "./screens/TimerScreen";
import StopWatch from "./components/shared/StopWatch";
import CreateTemplateScreen from "./screens/CreateTemplateScreen";
import HistoryScreen from "./screens/HistoryScreen";
import { MenuProvider } from "react-native-popup-menu";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <PaperProvider theme={theme}>
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
          <NavigationContainer>
            <Stack.Navigator>
              {/* <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerTitleAlign: "center",
                  // headerBackVisible: false,
                }}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                  headerTitleAlign: "center",
                  // headerBackVisible: false,
                }}
              /> */}
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerTitleAlign: "center",
                }}
              />
              <Stack.Screen
                name="WorkoutScreen"
                component={WorkoutScreen}
                options={{
                  headerTitleAlign: "center",
                  headerTitle: (props) => <StopWatch />,
                }}
              />
              <Stack.Screen
                name="Timer"
                component={TimerScreen}
                options={{
                  headerTitleAlign: "center",
                  title: "Timer",
                }}
              />
              <Stack.Screen
                name="StopWatch"
                component={StopWatch}
                options={{
                  headerTitleAlign: "center",
                  title: "Timer",
                }}
              />
              <Stack.Screen
                name="CreateTemplate"
                component={CreateTemplateScreen}
                options={{
                  headerTitleAlign: "center",
                  title: "🔨 Create Template 🔨",
                }}
              />
              <Stack.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{
                  headerTitleAlign: "center",
                  title: "History",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </MenuProvider>
  );
}
