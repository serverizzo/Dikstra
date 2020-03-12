
// This is an example of a class that has been exported into another place (App.js)

import React from 'react';

class ExportedExample extends React.Component{

    AnotherHello(){
        console.log("Exported Example: Say Hello.... H-hello?")
    }


    render(){

        //We can place js befor the return
        console.log("hello from Exported Example!!")
        // We can also call fucntions from here
        this.AnotherHello()

        return(
            <h3> I am from the ExportedExample class. </h3>
        )
    }
}

export default ExportedExample;