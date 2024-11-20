
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import "./global.css";


const app = () => {
  return  (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pblack'>Hi I'm same victor  a software developer</Text>
      <Link href="/profile">Go to profile</Link>
    </View>
  );
}



export default app
