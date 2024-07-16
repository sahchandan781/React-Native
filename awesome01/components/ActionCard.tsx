import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 - ES12
            </Text>
        </View>
        <Image
        source={
           {
             uri: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp'
           }
        } style={styles.cardImage} />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={2}>Just like every year, JavaScript brings in new features.
               This year javascript is bringing 4 new features, which are 
               almost in production rollout. i won't be wasting much more time 
               and directly jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://en.wikipedia.org/wiki/Blog')}>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/sahchandan781/')}>
              <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      color: '#FFFFFF'
    },
    card:{
      width: 350,
      height: 380,
      borderRadius: 6,
      marginHorizontal: 16,
      marginVertical: 12
    },
    cardElevated:{
      backgroundColor: '#E07C24',
      elevation:3,
      shadowOffset: {
            width:1,
            height:1
      },
      shadowColor: '#333',
      shadowOpacity: 0.4,
      shadowRadius: 2
    },
    headingContainer:{
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText:{
      color: '#000',
      fontSize: 16,
      fontWeight: '600'
    },
    cardImage:{
        height: 190,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    bodyContainer: {
      padding:10
    },
    footerContainer:{
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    socialLinks:{
      fontSize: 16,
      color: '#000',
      backgroundColor: '#FFF',
      paddingHorizontal: 20,
      paddingVertical:6,
      borderRadius: 6
    }
})