class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) this.root = new Node(val);

    let current = this.root;

    while (current) {
      if (current.left === null && val < current.val) {
        current.left = new Node(val);
      } else if (current.right === null && val > current.val) {
        current.right = new Node(val);
      }

      current = (val < current.val)
        ? current.left
        : current.right;
    }

  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {

    if (this.root === null){
      this.root = new Node(val);
      return this;
    }

    let current = node;

    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val);
        return this;
      }
        return this.insertRecursively(val, current.left);

    } else if(val > current.val){
      if(current.right === null){
        current.right = new Node(val);
        return this;
      }
        return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while(current){
      if(current.val === val) return current;

      if(val < current.val){
        current = current.left;
      } else if(val > current.val){
        current = current.right;
      }
    }

    return undefined;
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(node === null) return;
    if(node.val === val) return node;

    if(val < node.val){
      return this.findRecursively(val, node.left);
    }else{
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, vals = []) {
    if(node){
      vals.push(node.val);
      this.dfsPreOrder(node.left, vals);
      this.dfsPreOrder(node.right, vals);
    }
    return vals;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, vals = []) {
    if(node){
      this.dfsInOrder(node.left, vals);
      vals.push(node.val);
      this.dfsInOrder(node.right, vals);
    }
    return vals;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, vals = []) {
    if(node){
      this.dfsPostOrder(node.left, vals);
      this.dfsPostOrder(node.right, vals);
      vals.push(node.val);
    }
    return vals;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(this.root === null){
      return [];
    }

    let node = this.root;
    let queue = [this.root];
    let visited = [];

    while(queue.length){
      let current = queue.shift();
      visited.push(current.val);

      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }
    }

    return visited;

  }

  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
