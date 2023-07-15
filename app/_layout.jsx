import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 100,
          paddingBottom: 24,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 18,
        },
        tabBarActiveTintColor: "#4F617D",
        headerLeft: () => (
          <View className ="flex flex-row items-center mx-6 " >
            <Ionicons name="person-circle-sharp" size={40} color="#4F617D" />
            <Text className = "text-[#4F617D] font-bold text-2xl ml-3" >Mannalal Manaklal</Text>
          </View>
        ),
        headerTitle: "",
        tabBarHideOnKeyboard : true
      }}
    >
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Boxes"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-dropbox" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Books"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-bitcoin" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ellipsis-horizontal-circle-sharp"
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
