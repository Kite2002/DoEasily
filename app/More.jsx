import { View, Text, Image } from 'react-native'
import React from 'react'

const More = () => {
  return (
    <View className = "flex justify-center items-center flex-1" >
      <Image className="w-[350px] h-[350px]" source={require("../assets/main.png")} />
      <Text className = "text-3xl text-slate-500 font-bold">More is Coming Soon</Text>
    </View>
  )
}

export default More