import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const index = () => {
  const dummyData = [
    {
      name: "Mystoria",
      gold: 1500000,
      silver: -250000,
    },
    {
      name: "Shadowhaven",
      gold: -500000,
      silver: 800000,
    },
    {
      name: "Eternum",
      gold: -300000,
      silver: -100000,
    },
    {
      name: "Phantom's Rest",
      gold: 700000,
      silver: 450000,
    },
  ];

  let total = 0;
  let totalGold = 0;
  let totalSilver = 0;

  dummyData.forEach((data) => {
    total += data.gold + data.silver;
  });
  dummyData.forEach((data) => {
    totalGold += data.gold;
  });
  dummyData.forEach((data) => {
    totalSilver += data.silver;
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");

  const [datas, setData] = useState(dummyData);
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleSearch = (text) => {
    const filtered = datas.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handlePress = () => {
    const newData = {
      name: name,
      gold: Number(gold),
      silver: Number(silver),
    };
    setData([newData, ...datas]);
    setFilteredData([newData, ...datas])
    setGold("");
    setName("");
    setSilver("");
    setModalVisible(false);
  };

  return (
    <View className=" flex pb-[100px]">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          className="bg-slate-800/40 h-screen w-screen flex justify-center items-center"
          style={styles.centeredView}
        >
          <View className="bg-white p-4 rounded-xl w-[350px]">
            <Text className="text-xl font-bold text-slate-500">Add Party</Text>
            <TextInput
              className=" border-2 border-slate-500 bg-slate-100 rounded-xl p-3 mt-7"
              placeholder="Enter Party Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              className=" border-2 border-slate-500 bg-slate-100 rounded-xl p-3 mt-4"
              placeholder="Enter Gold Ammount"
              value={gold}
              onChangeText={(text) => setGold(text)}
            />
            <TextInput
              className=" border-2 border-slate-500 bg-slate-100 rounded-xl p-3 mt-4"
              placeholder="Enter Silver Ammount"
              value={silver}
              onChangeText={(text) => setSilver(text)}
            />
            <TouchableOpacity
              onPress={() => handlePress()}
              className="bg-slate-500 w-full rounded-xl p-4 mt-4 flex justify-center items-center"
            >
              <Text className="text-white font-bold text-xl"> Add Party </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            className="absolute bottom-[115px] bg-slate-500 justify-center items-center p-1 w-[60px] aspect-square right-[20px] rounded-full"
          >
            <Ionicons name="chevron-forward" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
      <TextInput
        onChangeText={handleSearch}
        className="border-2 border-slate-300 p-3 rounded-xl mt-8 text-2xl mx-6"
        placeholderTextColor={"grey"}
        placeholder="Search Party"
      />

      <View className="flex flex-row gap-2 mt-4 px-6">
        <Text className="text-lg bg-slate-500 text-white px-3 text-center rounded-3xl">
          Both
        </Text>
        <Text className="text-lg border-slate-500 border-[1px] text-slate-500 text-center px-3 rounded-3xl">
          Gold
        </Text>
        <Text className="text-lg border-slate-500 border-[1px] text-slate-500 text-center px-3 rounded-3xl">
          Silver
        </Text>
      </View>

      <ScrollView className="flex mt-3 px-6">
        <View className="p-4 shadow shadow-black border-slate-300 border-4 mb-3 bg-white rounded-lg mt-7">
          <Text className="text-xl font-bold text-slate-500">Total</Text>
          <View className="flex flex-row mt-4 justify-between">
            <View className="flex gap-2">
              <Text className=" text-lg">Silver</Text>
              <Text
                className={` text-lg ${
                  totalSilver > 0 ? "text-green-500" : "text-red-500"
                } font-semibold`}
              >
                {totalSilver} gm
              </Text>
            </View>
            <View className="flex gap-2">
              <Text className=" text-lg">Gold</Text>
              <Text
                className={` text-lg ${
                  totalGold > 0 ? "text-green-500" : "text-red-500"
                } font-semibold`}
              >
                {totalGold} gm
              </Text>
            </View>
            <View className="flex gap-2">
              <Text className=" text-lg">Ammount</Text>
              <Text
                className={` text-lg ${
                  total > 0 ? "text-green-500" : "text-red-500"
                } font-semibold`}
              >
                ${total}
              </Text>
            </View>
          </View>
        </View>
        {filteredData.map((data, i) => (
          <View
            key={i}
            className="p-4 shadow shadow-black mb-3 bg-white rounded-lg"
          >
            <Text className="text-xl font-bold text-slate-500">
              {data.name}
            </Text>
            <View className="flex flex-row mt-4 justify-between">
              <View className="flex gap-2">
                <Text className=" text-lg">Silver</Text>
                <Text
                  className={` text-lg ${
                    data.silver > 0 ? "text-green-500" : "text-red-500"
                  } font-semibold`}
                >
                  {data.silver} gm
                </Text>
              </View>
              <View className="flex gap-2">
                <Text className=" text-lg">Gold</Text>
                <Text
                  className={` text-lg ${
                    data.gold > 0 ? "text-green-500" : "text-red-500"
                  } font-semibold`}
                >
                  {data.gold} gm
                </Text>
              </View>
              <View className="flex gap-2">
                <Text className=" text-lg">Ammount</Text>
                <Text
                  className={` text-lg ${
                    data.silver + data.gold > 0
                      ? "text-green-500"
                      : "text-red-500"
                  } font-semibold`}
                >
                  ${data.silver + data.gold}
                </Text>
              </View>
            </View>
          </View>
        ))}

        <View className="h-[80px]"></View>
      </ScrollView>
      <TouchableOpacity
      
        onPress={() => setModalVisible(!modalVisible)}
        className="absolute bottom-[150px] right-[20px] bg-white rounded-full"
      >
        <Ionicons name="add-circle" size={60} color="#64748b" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // margin: 20,
    // backgroundColor: 'white',
    // borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default index;
