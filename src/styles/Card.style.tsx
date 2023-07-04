import { StyleSheet } from "react-native"

const CardStyle = StyleSheet.create({
    container:{
        backgroundColor: "#87ceeb",
        marginTop: 10,
        height: 108,
        width:104,
        borderRadius: 10,
        shadowOffset: {
            width:0, 
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation:10,
        shadowColor: "#000",
        overflow: "hidden",
    }, 
    
    subContainer:{
        backgroundColor: "#7cfc00",
        marginTop: "10%",
        height: "40%",
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
        width:"100%",
        bottom:0,
        position:"absolute",
    },

    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: "contain",
        marginBottom: 40,
        zIndex: 10,
    },
    
    labelCode:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginRight:5,
        paddingHorizontal: 1
    },

    labelName:{
        marginTop: 25,
        textAlign: "center",
    },
    image:{
        width: 75,
        height:75,
        marginBottom: 60,
        justifyContent: "center",
        alignItems: "center"
    },


})

export default CardStyle