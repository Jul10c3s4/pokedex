import {StyleSheet} from "react-native";

const HomeStyle = StyleSheet.create({
    home:{
        flex: 1,
        backgroundColor: "#87ceeb",
    },
    rowContainer:{
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 15,
        alignItems: "center"
    },
    container:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    subContainer:{
        backgroundColor: '#fff',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomEndRadius: 8,
        borderBottomLeftRadius: 8,
        height: "95%",
        width: "98%",
        marginBottom: 4
    },
    textButton:{
        backgroundColor:'white', 
        borderRadius: 50,
        height: 40,
        width: 40,
        marginLeft: 15,
        justifyContent: "center",
        flexDirection: "column",
    },

    cardRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
})

export default HomeStyle