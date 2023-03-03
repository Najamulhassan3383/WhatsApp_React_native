import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import PictureCard from "./PictureCard";
import UnreadMessages from "./UnreadMessages";
export default function CenterView() {
  const [myarray, setMyarray] = useState([
    {
      key: 0,
      name: "Shoaib Rana",
      message: "Hello How are you",
      source: require("./assets/align-fingers-71282_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 1,
      name: "Ali",
      message: "Where How are you",
      source: require("./assets/child-817373_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 2,
      name: "Amir",
      message: "Kahaan Ho",
      source: require("./assets/children-817368_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 3,
      name: "Anam",
      message: "Yes",
      source: require("./assets/gehlert-852762_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 4,
      name: "AMina",
      message: "I am here",
      source: require("./assets/girl-1894125_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 5,
      name: "Shahzaib",
      message: "Main yahaan hun",
      source: require("./assets/woman-1284411_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },
    {
      key: 6,
      name: "Shoaib Rana",
      message: "Hello How are you",
      source: require("./assets/align-fingers-71282_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 7,
      name: "Ali",
      message: "Where How are you",
      source: require("./assets/child-817373_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 8,
      name: "Amir",
      message: "Kahaan Ho",
      source: require("./assets/children-817368_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 9,
      name: "Anam",
      message: "Yes",
      source: require("./assets/gehlert-852762_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 10,
      name: "AMina",
      message: "I am here",
      source: require("./assets/girl-1894125_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },

    {
      key: 11,
      name: "Shahzaib",
      message: "Main yahaan hun",
      source: require("./assets/woman-1284411_640.jpg"),
      time: "8:45 AM",
      unread: 2,
    },
  ]);

  const myOnClick = (item) => {
    Alert.alert("Name = " + item.name);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myarray}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              marginBottom: 10,
              backgroundColor: "white",
              flex: 1,
              flexDirection: "row",
              height: 60,
            }}
            onPress={() => myOnClick(item)}
          >
            <View style={{ flex: 0.2 }}>
              <PictureCard source={item.source} />
            </View>
            <View style={{ flex: 0.6 }}>
              {/* <Text>123</Text> */}
              <View style={{ flex: 0.5 }}>
                <Text style={{ fontSize: 18, color: "black" }}>
                  {item.name}
                </Text>
              </View>
              <View style={{ flex: 0.5 }}>
                <Text>{item.message}</Text>
              </View>
            </View>
            <View style={{ flex: 0.2, padding: 15 }}>
              <View style={{ flex: 0.5 }}>
                <Text>{item.time}</Text>
              </View>
              <UnreadMessages count={item.unread} />
            </View>
          </TouchableOpacity>
        )}

        // data={dummyArray}
        // keyExtractor={item=>item.key}
        // renderItem={({item})=>(
        //   <View>
        //     <Text>
        //       {item.title}
        //     </Text>
        //   </View>
        // )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
