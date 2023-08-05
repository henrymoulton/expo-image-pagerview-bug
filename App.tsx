import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from "react-native-pager-view";
import { Image as ExpoImage} from "expo-image"

const images = [
    "https://www.datocms-assets.com/54483/1650389131-main-background-img-sofar-sounds.jpg?auto=enhance&fm=webp",
    "https://www.datocms-assets.com/54483/1685045447-main-background-img-orasay.jpg?auto=enhance&fm=webp",
    "https://www.datocms-assets.com/54483/1659117336-main-background-img-koya.jpg?auto=enhance&fm=webp"
]
export default function App() {
  return (
      <PagerView style={{ flex: 1 }}>
        {images.map(url => <View key={url} style={{ flex:1 }}>
          <ExpoImage style={{ width: "100%", height: "100%"}} contentPosition={"center"} contentFit={"cover"}  source={{ uri: url}} />
        </View>)}

      </PagerView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
