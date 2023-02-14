import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from '../Screens/Login'
import Signup from '../Screens/Signup'
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';
import CreateAd from '../Screens/CreateAd';


import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase"


const Stack = createNativeStackNavigator();

export default function MainStack() {

    const [user, setUser] = useState()
    console.log("user", user)
    useEffect(() => {
        return (
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const uid = user.uid;
                    setUser(user)
                } else {
                    setUser()
                }
            })
        )
    }, [])


    return <NavigationContainer>
        {
            user ? <DashboardStack />
                :
                <AuthStack />
        }
    </NavigationContainer>
}

function AuthStack() {
    return <Stack.Navigator
        options={{ title: "" }}
    >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
}

function DashboardStack() {
    return <Stack.Navigator
        options={{ title: "" }}
    >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="createad" component={CreateAd} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
}