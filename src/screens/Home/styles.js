import {StyleSheet, Dimensions} from 'react-native'


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
        height:50,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25

    },
    buttonText:{
        fontSize:16,
        fontWeight:"bold",
        

    },
    searchButton:{
        backgroundColor:"white",
        width:400,
        width: Dimensions.get('screen').width - 30,
        height:60,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        flexDirection:"row",
        alignItems:"center",
        position:"absolute",
        top:20,
        zIndex:100
        

    },
    searchButtonText:{
        fontSize:16,
        fontWeight:"bold",
        

    }
})
export default styles