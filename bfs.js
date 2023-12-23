function BFS(startNode, endNode){
    let queueOfNodes=[];
    let isVisited=[];
    let path=[];
    let visitedNodes=[];
    queueOfNodes.unshift(startNode);
    while(queueOfNodes.length>0)
    {
          let current=queueOfNodes.pop();
          if(!isVisited.includes(current)){
          isVisited.push(current);
          if(current===endNode){
            let temp=current;
            path.push(temp);
            while(temp.previous){
                path.push(temp.previous);
                temp = temp.previous;
            }
           // console.log(path);
            return {path, visitedNodes};
          }else{
            visitedNodes.push(current);
          }
          let neighbours=current.neighbours;
          for(let i=0;i<neighbours.length;i++){
              if(!isVisited.includes(neighbours[i]) && !neighbours[i].isWall){
                  neighbours[i].previous=current;
                  queueOfNodes.unshift(neighbours[i]);//pushing in front of the list
              }
          }
        }
    }

    return {path,visitedNodes, error:"No Path Found!"};
}


export default BFS;

