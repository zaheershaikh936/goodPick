import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GpImage, GpText} from '../../../components/elements';
import styles from '../../../components/common/styles';

export default function BecomeVendor() {
  return (
    <View>
      <GpText
        style={[styles.textBlack, styles.textXL, styles.semiBold, styles.p10]}>
        Find the easiest
        <GpText> recruitment of people</GpText>
        <GpText> with us</GpText>
      </GpText>
      <GpText
        style={[styles.textBlack, styles.semiBold, styles.mb10, styles.mt5]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolorem
        iure eum, culpa sed error maiores dicta adipisci ipsum hic quam enim
        consequatur odio eius deleniti quis veniam. Tempora, ab.
      </GpText>
      <View>
        <TouchableOpacity>
          <GpText style={[styles.semiBold, styles.textBlack, styles.textRight]}>
            Know More
          </GpText>
        </TouchableOpacity>
      </View>
      <GpImage
        style={[styles.becomeVendor, styles.mb10, styles.mt5]}
        source={{
          uri: 'https://i.postimg.cc/cHmVhFQ4/Wavy-Tech-14-Single-07-Photo-Room-png-Photo-Room.png',
        }}
        accessibilityLabel="AppleStore"
      />
    </View>
  );
}
