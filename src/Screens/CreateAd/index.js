import React from "react";
import { useState } from 'react'
import { Text, View, TextInput, Button } from "react-native-paper";

import { createAd } from "../../Config/Firebase";


export default function CreateAd() {
    const [title, setTitle] = useState("")
    const [descryption, setDescryption] = useState("")
    const [price, setPrice] = useState("")

    const handleclick = async () => {
        // const res = await uploadImage(formData.image)
        // console.log("Image Return ", res)
        // createAd(formData, res)
        createAd(title, descryption, price)
        // navigate("/createad")
    }

    return (
        <>
            <Text>Post an Ad</Text>
            <TextInput
                label="Title"
                value={title}
                onChangeText={title => setTitle(title)}
            />
            <TextInput
                label="Descryption"
                value={descryption}
                onChangeText={descryption => setDescryption(descryption)}
            />
            <TextInput
                label="Price"
                value={price}
                onChangeText={price => setPrice(price)}
            />
            <Button mode="contained" onPress={handleclick}>
                Post
            </Button>
        </>
    )
}