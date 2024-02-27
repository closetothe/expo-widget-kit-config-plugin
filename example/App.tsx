import * as ExpoWidgetKitConfigPlugin from 'expo-widget-kit-config-plugin';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>API key: {ExpoWidgetKitConfigPlugin.getApiKey()}</Text>
    </View>
  );
}