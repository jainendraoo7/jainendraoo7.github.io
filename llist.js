class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedLIst{
  constructor(){
    this.head = null
    this.size = 0
  }
   add(element){
    var node  = new Node(element)
    if(!this.head){
        this.head = node
    }
    else{
        var current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node 
    }
    this.size++
   }

}

var list = new LinkedLIst()
list.add(1);
list.add(2);
console.log(list)


