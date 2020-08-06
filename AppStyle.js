import { StyleSheet } from "react-native"

export default StyleSheet.create({
    scrollViewOuter: {
      height: '100%'
    },
    scrollViewInner: {
      marginTop: 20 ,
      // height: auto,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40 ,
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 10,
    },
    instructions: {
      color: '#888',
      fontSize: 20,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
      textAlign: "center",
    }, 
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    },
    buttonRedux: {
      backgroundColor: "green",
      padding: 20,
      borderRadius: 5,
      marginBottom: 10,
    },
  });
  