import React from 'react'

class GraphNode extends React{

    constructor(props){
        super(props);

        this.state = {
            // Enumerated Value
            enum : 0,
            // Boolean Expression -- may not need this.
            alreadyVisited : false,
            // Path source to current node
            path : [],    
            // How long it takes to get to the current node from source
            effort: Infinity
        }

    }

}