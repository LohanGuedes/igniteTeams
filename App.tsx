import Groups from '@screens/Groups';
import React from 'react';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';

import { Loading } from '@components/Loading';
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import NewGroup from '@screens/NewGroup';

export default function App() {
   const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

    return (
        <ThemeProvider theme={theme}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            {/* { fontsLoaded ? <Groups /> : <Loading /> } */}
            { fontsLoaded ? <NewGroup /> : <Loading /> }
        </ThemeProvider>
    );
}