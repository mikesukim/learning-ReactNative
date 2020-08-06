import React from 'react';

import {TouchableOpacity,Text, View}  from 'react-native';

import appStyle from '../AppStyle'



export default function CountBtn(){

    //Define Status using Hook
    const [count, setCount] = React.useState(0);

    //Handle Count 
    let addOneCount = async () => {
        setCount(count + 1);
    }
    let resetCount = async () => {
        setCount(0);
    }
    
    //Render
    return (
        <View>
            <TouchableOpacity
                onPress={addOneCount} 
                style={appStyle.button}>
                <Text style={appStyle.buttonText}>{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={resetCount} 
                style={appStyle.button}>
                <Text style={appStyle.buttonText}>reset</Text>
            </TouchableOpacity>
        </View>

    )
}
