import React from 'react';

import { View,Text,TouchableOpacity,Image } from 'react-native';

import appStyle from '../AppStyle'

import * as ImagePicker from 'expo-image-picker';





export default function ImagePickerBtn() {

    //Define Status using Hook
    const [selectedImage, setSelectedImage] = React.useState(null);

    //Handle Image Picking Process
    let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
    //   <View style={appStyle.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={appStyle.thumbnail}
        />
    //   </View>
    );
  }


    //Render
    return(

            <TouchableOpacity
            onPress={openImagePickerAsync} 
            style={appStyle.button}>
            <Text style={appStyle.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
            
    )

}