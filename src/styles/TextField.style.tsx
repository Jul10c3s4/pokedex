import {StyleSheet} from "react-native"

const TextFieldStyle = StyleSheet.create({
    container:{
        paddingLeft: 15,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 30,
        width: "80%",
        height: 40,
        elevation: 10,
        
        
    },

    lupa:{
        width: 22,
        height: 22,
        tintColor: "#87ceeb"
    },

    textInput:{
        marginLeft: 10,
        flex: 1,
    }
})

export default TextFieldStyle