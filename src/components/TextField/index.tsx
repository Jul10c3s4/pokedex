import { TextInput, View, Image} from "react-native"
import TextFieldStyle from "../../styles/TextField.style"
const TextField = () =>{

    return(
        <View style={TextFieldStyle.container}>
            <Image source={require("../../../assets/lupa.png")} style={TextFieldStyle.lupa}/>
            <TextInput placeholder="Search" placeholderTextColor={"black"} style={TextFieldStyle.textInput}></TextInput>
        </View>
    )
}
export default TextField