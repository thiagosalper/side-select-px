import React from 'react' 
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const style = StyleSheet.create({
  base: {
    backgroundColor:'#ccc',
    borderWidth:1, 
    padding:2, 
    paddingHorizontal:2,
    borderRadius:16,
    flexDirection:'row',
    minWidth:240, 
    justifyContent:'center', 
    marginBottom:12,
    marginTop:8,
  }
})

const PickerSwitch = (props) => {
  
  return (
    <View style={[style.base, {borderColor:"#333"}]}>
      {props.labels.map((val,i)=>{
        return <TouchableOpacity 
                activeOpacity={1} 
                onPress={()=>props.onChange(i)}
                style={{
                  flex:1, 
                  backgroundColor: (i==props.position?"#333":null),
                  borderRadius: 12,
                  padding:4,
                }}>
                <Text 
                style={{color: (i==props.position?'white':'gray'), textAlign:'center'}}>{val}</Text>
                </TouchableOpacity>
      })}
    </View>
  )
  
}

export default PickerSwitch