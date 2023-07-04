import {StyleProp, View, TextStyle, Text, Image} from "react-native"
import CardStyle from "../../styles/Card.style"
import React from "react"

interface IPropsCard{
    code: string, 
    name: string, 
    url: string,
    style?: StyleProp<TextStyle>
}

const Card: React.FC<IPropsCard> = ({code, name, url, style}) =>{
    return(
        <View style={CardStyle.container}>
            <View style={CardStyle.labelCode}>
            <Text >{code}
            </Text>
            <Image source={require("../../../assets/eu.png")} />
            </View>
            <View style={CardStyle.imageContainer}>
                <Image 
                style={CardStyle.image}
                source={{uri: url}}
                />
            </View>
            <View style={CardStyle.subContainer}>
                <Text style={CardStyle.labelName}>{name}</Text>
            </View>
        </View>
    )
}
export default Card