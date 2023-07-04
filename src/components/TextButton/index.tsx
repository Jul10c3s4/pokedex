import { TouchableOpacity, Text, StyleProp, TextStyle } from "react-native"

interface IPropsTextButton {
    label: string,
    onclick?: ()=>void,
    style?: StyleProp<TextStyle>
}
const TextButton: React.FC<IPropsTextButton> = ({label, onclick, style}) => {
    return (
        <TouchableOpacity onPress={onclick} style={style} >
            <Text style={{textAlign: "center", fontSize: 25, color: "#87ceeb"}}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton