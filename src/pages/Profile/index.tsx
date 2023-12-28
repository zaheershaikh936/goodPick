import React, { useState } from "react"
import { ScrollView, View } from "react-native"
import { IMAGES } from "../../assets"
import { GpText } from "../../components/elements"
import { txtHead } from "../../components/common/constants"
import styles from "../../components/common/styles"
import {
  preferencesList,
  profileList,
  profileListT,
  supportList,
  supportListT,
} from "../../utility/profileList"
import ProfileListView from "./options/ProfileListView"
import { Divider } from "react-native-paper"

const Profile: React.FC = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => setVisible(true)

  const closeMenu = () => setVisible(false)
  const userData = {
    name: "Haris Patel",
    designation: "Designation here",
    image: IMAGES.FACEBOOK,
  }
  const handleNavigation = (to) => {
    navigation.navigate(to)
  }
  return (
    <ScrollView>
      {/* <ProfileHeader
        visible={visible}
        closeMenu={closeMenu}
        openMenu={openMenu}
        userData={userData}
      /> */}
      <View style={styles.contentContainer}>
        <GpText type={txtHead.heading3} style={{ ...styles.ml15 }}>
          Your Account
        </GpText>
        {profileList.map((item: profileListT, index: number) => {
          return (
            <ProfileListView
              key={index}
              item={item}
              handleNavigation={handleNavigation}
            />
          )
        })}

        <Divider style={styles.mt15} />
        <GpText
          type={txtHead.heading3}
          style={{ ...styles.ml15, ...styles.mt5 }}
        >
          Support
        </GpText>
        {supportList.map((item: supportListT, index: number) => {
          return (
            <ProfileListView
              key={index}
              item={item}
              handleNavigation={handleNavigation}
            />
          )
        })}
        <Divider style={styles.mt15} />

        <GpText
          type={txtHead.heading3}
          style={{ ...styles.ml15, ...styles.mt5 }}
        >
          Preferences
        </GpText>
        {preferencesList.map((item: supportListT, index: number) => {
          return (
            <ProfileListView
              key={index}
              item={item}
              handleNavigation={handleNavigation}
            />
          )
        })}
        <Divider style={styles.mt15} />
      </View>
    </ScrollView>
  )
}

export default Profile
