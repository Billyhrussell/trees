/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root, counter = 0, minCount = Infinity) {
    //count nodes until we reach a node without a child
    //have to remember count at ancestor node to add as diving down
    
    //move from root to first node: count plus 1
    //move from node to first node on left: count plus 1
    //move from node to node with not children: count plus 1, total = 3, return to node above
    
    
    let stack = [node];

    while (stack.length) {
      let current = stack.pop();
      counter++;

      if (current) {

        if (current.left) {
          minCount = this.minDepth(current.left, counter, minCount);
        }

        if (current.right) {
          minCount = this.minDepth(current.right, counter, minCount);
        }

        if (current.left === null && current.right === null) {
          if (minCount > counter) {  
            minCount = counter;
          }
          return minCount;
        }
      }
    }

    return minCount === Infinity ? 0 : minCount;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
