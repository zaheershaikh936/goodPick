/* eslint-disable prettier/prettier */
import React from "react"
import { ImageBackground, Text, View } from "react-native"
import { CommonActions } from "@react-navigation/native"

// Components
import { STACK } from "../../components/common/stackNames"
import styles from "../../components/common/styles"
import GpButton from "../../components/elements/GpButton"
import { IMAGES } from "../../assets"
import WkContainer from "../../components/wlkthContent"
import GpIcons from "../../components/elements/GpIcons"
import { COLORS } from "../../components/common/colors"

interface WalkthroughScreenProps {
  navigation: any
}

const Walkthrough2: React.FC<WalkthroughScreenProps> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate(STACK.WALKTHROUGH3)
  }
  const handlePrevious = () => {
    navigation.navigate(STACK.WALKTHROUGH1)
  }
  const handleSkip = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: STACK.LOGIN }],
      })
    )
  }
  return (
    <View style={styles.viewFlex}>
      <ImageBackground
        source={IMAGES.BGIMG}
        resizeMode="cover"
        style={styles.logo}
      >
        <GpIcons
          onPress={handlePrevious}
          type={"Feather"}
          name={"chevron-left"}
          color={COLORS.PRIMARY_TXT}
          style={[styles.mt15, styles.pl20, styles.wt20]}
          size={30}
        />
      </ImageBackground>
      <WkContainer
        image={IMAGES.COMMUNITY}
        text={"Some Content Walkthrough 2"}
        handleNext={handleNext}
        handleSkip={handleSkip}
        handlePrevious={handlePrevious}
      />
    </View>
  )
}

export default Walkthrough2
