import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Chandan kumar sah',
            status: 'Just an extra ordinary developer',
            imageUrl: 'https://media.licdn.com/dms/image/D5603AQGmPFLHibqrlg/profile-displayphoto-shrink_800_800/0/1716091471198?e=1726099200&v=beta&t=MMujW52EimslLX7pRhjqFMJc45VUBOmrytQrwuF1V74'
        },
        {
            uid: 2,
            name: 'Abhishek Tiwari',
            status: 'Just an extra ordinary Student',
            imageUrl: 'https://media.licdn.com/dms/image/C4D03AQFW8jvTmwVUXQ/profile-displayphoto-shrink_800_800/0/1639080671221?e=1726099200&v=beta&t=ncIXUGIdM1329xCAjJmUCOvR__lvNbLxlmpChGrA3_A'
        },
        {
            uid: 3,
            name: 'Dr. Deepti',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://media.licdn.com/dms/image/D5603AQEu7UJelMXr0A/profile-displayphoto-shrink_800_800/0/1719047932986?e=1726099200&v=beta&t=JPfit6ogJyMraqJg5NQmr4Es14Nb6XHS_LIRVTTL-0Y'
        },
        {
            uid: 4,
            name: 'Dean mam',
            status: 'Just an extra ordinary Dean',
            imageUrl: 'https://media.licdn.com/dms/image/D5603AQHul66D41HHwA/profile-displayphoto-shrink_800_800/0/1698072757980?e=1726099200&v=beta&t=hFsgQ7TIKABB0gYZ9X8r2V7XYkpoiAtGPG3o_W3sVmM'
        },
        
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}>
         {contacts.map(({uid, name, status, imageUrl}) => (
           <View key={uid} style={styles.userCard}>
            <Image 
            source={{
                uri: imageUrl
            }}
            style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
           </View>
         ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#FFFFFF'
      },
      container:{
        paddingHorizontal: 16,
        marginBottom: 4,
        marginVertical: 12
      },
      userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
      },
      userImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14
      },
      userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
      },
      userStatus: {
        fontSize: 12
      },
})