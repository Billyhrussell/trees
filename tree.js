/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;

    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();

      if (current) {
        if(typeof current.val === 'number'){
          sum += current.val;
        }

        if (current.children) {
          for (let child of current.children) {
            stack.push(child);
          }
        }
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    let stack = [this.root];

    while(stack.length){
      let current = stack.pop();

      if(current){
        if(current.val % 2 === 0){
          count++;
        }

        if(current.children){
          for (let child of current.children) {
            stack.push(child);
          }
        }
      }
    }
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    let stack = [this.root];

    while(stack.length){
      let current = stack.pop();

      if(current){
        if(current.val > lowerBound){
          count++;
        }

        if(current.children){
          for (let child of current.children) {
            stack.push(child);
          }
        }
      }
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
