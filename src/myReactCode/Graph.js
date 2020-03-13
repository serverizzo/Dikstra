import React from 'react';
class Graph extends React.Component{
  
    constructor(props) {
      super(props);

      this.state = {
        directedGraph : [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ],
        length : 3
      }

      // Binding -- only done for functions?
      // this.directedGraph = this.directedGraph.bind(this);
      // this.length = this.length.bind(this);
      this.addNode = this.addNode.bind(this)
      // this.length - this.length.bind(this)

    }

    


    // working
    addNode(){
      for (let i = 0; i < this.state.directedGraph.length; i++){
          this.state.directedGraph[i].push(0)
      }

      // Defintily can be optimized--make temp a lasting varriable
      let temp = [0];
      for (let i = 0; i < this.state.length; i++){
        temp.push(0)
      }
      this.state.directedGraph.push(temp);
      this.state.length += 1;

      // This will be the enumerated value of the node (i.e. its row and column in the matrix)
      // return length-1;

      //Debuging -- Show array
      console.log(this.state.directedGraph)

    }

    render(){
      return(
        <div className = "GraphDiv">
          <button onClick = {this.addNode}> Add Node (dose nothing for now) </button>
        </div>
      )
    }

}

// g = new Graph()
// g.addNode();
// // g.print();
// console.log(g.directedGraph)
// g.addNode();
// console.log(g.directedGraph)
// g.addNode()
// g.addNode()
// g.addNode()
// console.log(g.directedGraph)


// console.log(g.directedGraph);
// g.addNode();
// console.log(g.directedGraph);




export default Graph;