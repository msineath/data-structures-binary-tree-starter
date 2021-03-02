// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01_tree_node.js');

let preorder = [3,9,20,15,7];
let inorder = [9, 3, 15, 20, 7];

let preorder2 = [-1];
let inorder2 = [-1];

function buildTree(preorder, inorder) {
  let root = new TreeNode(preorder[0]);

  if (preorder[1] >= root) {
    root.right = new TreeNode(preorder[1]);
  } 
  
}

// Input: , inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.