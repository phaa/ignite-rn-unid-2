// Bibliotecas 
import { ThemeProvider } from 'styled-components/native';

// Tema
import { Theme } from './src/theme';

// Fontes
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

// Telas
import { Groups } from '@screens/Groups';

// Componentes
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}

