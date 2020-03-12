// import React from 'react';
class Graph{
  
    directedGraph = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ];
    length = 3;

    constructor(){}

    // working
    addNode(){
      for (let i = 0; i < this.directedGraph.length; i++){
          this.directedGraph[i].push(0)
      }

      let temp = [0];
      for (let i = 0; i < this.length; i++){
        temp.push(0)
      }

      // Defintily can be optimized--make temp a lasting varriable
      this.directedGraph.push(temp);
      this.length += 1;

      // This will be the enumerated value of the node (i.e. its row and column in the matrix)
      // return length-1;
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