import { StyleSheet, Image, Platform } from 'react-native'; 
import AntDesign from '@expo/vector-icons/AntDesign'; 
import { Collapsible } from '@/components/Collapsible'; 
import { ExternalLink } from '@/components/ExternalLink'; 
import ParallaxScrollView from '@/components/ParallaxScrollView'; 
import { ThemedText } from '@/components/ThemedText'; 
import { ThemedView } from '@/components/ThemedView'; 
import { IconSymbol } from '@/components/ui/IconSymbol'; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
 
export default function TabTwoScreen() { 
  return ( 
    <ParallaxScrollView 
      headerBackgroundColor={{ light: 'green', dark: '#353636' }} 
      headerImage={ 
        <Image 
          source={require('@/assets/images/3.jpg')} 
          style={styles.reactLogo} 
        /> 
      }> 
      <ThemedView style={styles.titleContainer}> 
        <ThemedText type="title">Combustível Inteligente!</ThemedText> 
      </ThemedView> 
      <ThemedText>Principal foco do App:</ThemedText> 
      <Collapsible title="Auxiliar"> 
      <ThemedText> 
      Auxiliar o motorista sobre a melhor opção de preço do combustível:<ThemedText type="defaultSemiBold"> Gasolina v Álcool.</ThemedText> 
      </ThemedText> 
        <ExternalLink href=""> 
          <ThemedText type="link">Saiba mais...</ThemedText> 
        </ExternalLink> 
      </Collapsible> 
      <Collapsible title="LGPD">
      <ThemedText> 
      Inibir e coibir tudo aquilo que contraria as léis, em específico a<ThemedText type="defaultSemiBold"> LGPD.</ThemedText> 
      </ThemedText> 
        <ExternalLink href=""> 
          <ThemedText type="link">Saiba mais...</ThemedText> 
        </ExternalLink> 
      </Collapsible> 
      <ThemedText>Deixe o seu feedback!</ThemedText>
      <ExternalLink href="https://wa.me/message/ENYLA6IADQOWE1"> 
          <ThemedText type="link">WhatsApp: <FontAwesome6 name="square-whatsapp" size={24} color="#7CFC00" /></ThemedText> 
        </ExternalLink>
    
    </ParallaxScrollView> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  headerImage: { 
    color: '#808080', 
    bottom: -90, 
    left: -35, 
    position: 'absolute', 
  }, 
  titleContainer: { 
    flexDirection: 'row', 
    gap: 8, 
  }, 
  reactLogo: { 
    height: 400, 
    width: 360, 
    bottom: 0, 
    left: 0, 
    position: 'absolute', 
  }, 
}); 