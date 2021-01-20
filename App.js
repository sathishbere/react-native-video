import React, { useEffect, useState } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import ReactPlayer from 'react-player';


const App = () => {
const [names, setNames] = useState([]);
const [vid, setVid]=useState([{}]);

let url= {web:"http://localhost:8089/api/names", ios:"http://localhost:8080/getVideo",android:"http://localhost:8085/getVideo"};

  useEffect(() => {
    try{
    fetch(url[Platform.OS]).then(response=>response.json().then(data=>setNames(data)))
    }catch(error){
      console.error(error)
    }
    }, []);

    const btnHandler=(id)=>{
      try{
      fetch(`http://localhost:8089/api/names/${id}`).then(response=>response.json().then(data=>setVid(data)))
      }catch(error){
        console.error(error)
      }
    }  

  return (

    <View style={{ flex: 1, padding: 24, justifyContent:'center', alignItems:'center', }}>      
    < Text testID={'Mynames'}>{names.map((el,ind)=><Button title="Start Video" key={ind} onPress={()=>btnHandler(ind)}/> )}</Text>
    <Text ><ReactPlayer playing url={vid.video} controls={true}
    onReady={()=>console.log("OnReady")}
    onStart={()=>console.log("OnStart")}
    onPause={()=>console.log("OnPause")}
    onEnded={()=>console.log("OnEnded")}
    onError={()=>console.log("OnError")}/></Text>
       
      </View>
  );
};

export default App;