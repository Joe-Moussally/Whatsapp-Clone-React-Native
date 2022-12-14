import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import IconButton from '../IconButton';

import { View, Text } from 'react-native';
import React from 'react';

const UserNavigationHeader = () => {
  return (
    <View className='flex-row justify-between bg-[#156b4d] py-1 px-1 items-center'>

        {/* Header Title */}
        <Text className='text-white text-[21px] font-bold px-2'>WhatsApp</Text>

        {/* Right header container */}
        <View className='flex-row'>

          {/* Search icon */}
          <IconButton
            icon={<Ionicons name="search" size={22} color="white" />}
          />

          {/* Header Menu icon */}          
          <IconButton
            icon={<MaterialCommunityIcons name="dots-vertical" size={22} color="white"/>}
          />
          
          
        </View>
    </View>
  )
}


export default UserNavigationHeader