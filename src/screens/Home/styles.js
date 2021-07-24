import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    image:{
        width:400,
        height:750,
        resizeMode:'cover',
        justifyContent:'center',

    },
    title:{
        fontSize:70,
        fontWeight:'bold',
        color:'white',
        marginLeft:25
        
    
    },
    button:{
        backgroundColor:"white",
        width:200,
        marginLeft:25,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25

    },
    buttonText:{
        fontSize:16,
        fontWeight:"bold",
        

    }
})
export default styles