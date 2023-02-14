import React from 'react'
import { useState, useEffect } from 'react';

import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';

import { getAllAds, auth } from '../../Config/Firebase';
import { signOut } from "firebase/auth";

export default function Dashboard({ navigation }) {

    const [allAds, setAllAds] = useState()
    console.log("add aya", allAds)

    const callApi = async () => {
        const result = await getAllAds()
        setAllAds(result.data)
    }


    useEffect(() => {
        callApi()
    }, [])

    if (!allAds) {
        return (
            <View><Text>Loading</Text></View>
        )
    }

    return (
        <>
            <View>
                <Text>Dashboard</Text>
                <Button
                onPress={
                   () => navigation.navigate('createad')}
                >Creat an Ad</Button>
                <Button
                    onPress={async () => {
                        // props.setUserData()
                        await signOut(auth)
                        navigate('login')
                    }}
                >Logout</Button>
            </View>
            <ScrollView>
                {
                    allAds.map((item, index) => {
                        return <View>
                            <Card key={index}>
                                <Card.Cover source={{ uri: item.image }} />
                                <Card.Title title={item.title} subtitle={item.price} />
                                <Card.Content>
                                    <Text variant="bodyMedium">{item.descryption}</Text>
                                </Card.Content>
                            </Card>
                        </View>
                    })
                }
            </ScrollView>
        </>
    )
}