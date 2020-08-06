import React from 'react';

//Import react-native components
import { Image, Text , ScrollView , View ,SafeAreaView, AppState } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Import css
import appStyle from './AppStyle'

//Import static files
import logo from './assets/logo.png'; 

//Import elements
import ImagePickerBtn from './elements/imagePicker'
import CountBtn from './elements/countBtn'
import CountBtnRedux from './elements/countBtnRedux'
import { FacebookSocialButton,GoogleSocialButton,AmazonSocialButton,InstagramSocialButton,LinkedInSocialButton } from "react-native-social-buttons";

//Import Redux to connect to App
import store from './redux/store'
import { Provider } from 'react-redux'

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView style={appStyle.scrollViewOuter} contentContainerStyle = {appStyle.scrollViewInner}>
          <View style={appStyle.container}>

            <Image source={logo} style={appStyle.logo} /> 
            <Text style={appStyle.instructions} >To share a photo !</Text>

            <ImagePickerBtn />
            <Text>{"\n"}</Text>
            <Text style={appStyle.instructions} >Count Button using React status</Text>
            <CountBtn />
            <Text>{"\n"}</Text>
            <Text style={appStyle.instructions} >Count Button using Redux</Text>
            <CountBtnRedux />
            <Text>{"\n"}</Text>
            <Text style={appStyle.instructions} >Social login testing</Text>
            <FacebookSocialButton />
            <GoogleSocialButton />
            <InstagramSocialButton />
            <AmazonSocialButton />
            <LinkedInSocialButton />

            <StatusBar hidden='false' />

          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
   );
  }
