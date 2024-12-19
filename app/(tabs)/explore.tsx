
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Combustível Inteligente:</ThemedText>
      </ThemedView>
      <ThemedText>Principal foco do app:</ThemedText>
      <Collapsible title="Auxiliar na melhor escolha de preço do combustivel:">
        <ThemedText>
          Veículo Popular:{' '}
        </ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold">Gasolina:</ThemedText>{' '}
          13 Km/litros.
        </ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold">Álcool:</ThemedText>{' '}
          9 Km/litros.
        </ThemedText>
        <ThemedText>
          Meu Veículo:{' '}
        </ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold">Gasolina/Álcool:</ThemedText>{' '}
        </ThemedText>
        <ThemedText>
          Veículo específico.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Saiba mais...</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Submeter-se as principais regras, normas e protocolos da LGPD.">
        <ThemedText>
          O App, foca em ajudar o motorista a encontrar a melhor opção de preço do Combustível,{' '}
          <ThemedText type="defaultSemiBold">descartando tudo aquilo que contraria as léis, em específico a LGPD.</ThemedText>
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Saiba mais...</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Deixe o seu feedback:">
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Saiba mais...</ThemedText>
        </ExternalLink>
      </Collapsible>
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
    textAlign: 'center',
  },
});

