import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";

import { signIn } from "../../Config/Firebase";


export default function Login({ navigation }) {
    const [formData, setFormData] = React.useState({})
    const [email, setEmail] = useState("")
    console.log(email)
    const [password, setPassword] = useState("")

    const handleclick = async () => {
        const result = await signIn(email, password)
        console.log("Login Result", result)
        if (result.error) {
            swal("Error!", result.message, "error");
        } else {
            swal("Logged In!", result.message, "success");
        }
    }
    return (
        <>
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
                Login
            </Button>

            <Text>Don't have an Account? <TouchableOpacity
                onPress={() => navigation.navigate('signup')}
            >
                <Text>
                    signup
                </Text>
            </TouchableOpacity></Text>
        </>
    )
}