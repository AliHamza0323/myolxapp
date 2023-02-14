import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import { signUp } from "../../Config/Firebase"

export default function Signup({ navigation }) {

    const [formData, setFormData] = React.useState({})
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    console.log(email)
    const [password, setPassword] = useState("")

    const handleclick = async () => {
        // const profilePic = await uploadImage(formData.image)
        const result = await signUp(email, password)
        console.log("result", result)
        if (result.error) {
            swal("Error!", result.message, "error");
        } else {
            swal("Success!", result.message, "success");
        }
    }
    return (
        <>
            <TextInput
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                label="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                label="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
            />
            <Button mode="contained" onPress={handleclick}>
                Signup
            </Button>
            <Text>Already have an account?
                <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                >
                    <Text> Login</Text>
                </TouchableOpacity>
            </Text>
        </>
    )
}