// Este arquivo é um fallback para usar MaterialIcons no Android e na web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';


// Adicione seu SFSymbol aos mapeamentos de MaterialIcons aqui.
const MAPPING = {
  // Veja MaterialIcons aqui: https://icons.expo.fyi
  // Veja Símbolos SF no aplicativo Símbolos SF no Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
    
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * Um componente de ícone que usa SFSymbols nativos no iOS e MaterialIcons no Android e na web. Isso garante uma aparência consistente em todas as plataformas e uso ideal de recursos.
 *
 * Os `nomes` dos ícones são baseados em SFSymbols e exigem mapeamento manual para MaterialIcons.
 */

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
<Entypo name="info-with-circle" size={24} color="black" />