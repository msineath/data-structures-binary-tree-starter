// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./01-tree-node.js');

function buildTree(preorder, inorder) {

    let root = new TreeNode(preorder[0]);
    if (preorder.length === 0 && inorder.length === 0)  return [];
    let pivot = inorder.indexOf(preorder[0]);
    let leftyIn = inorder.slice(0, pivot);
    let rightyIn = inorder.slice(pivot + 1);
    let leftyPre = preorder.filter(el => leftyIn.includes(el));
    let rightyPre = preorder.filter(el => rightyIn.includes(el));
    let leftySub = buildTree(leftyPre, leftyIn);
    let rightySub = buildTree(rightyPre, rightyIn);
    root.left = leftySub;
    root.right = rightySub;

    if (!root) return [];
    let q = [root];
    let final = [];
    while (q.length) {
        let current = q[0];
        if (current.left) q.push(current.left);
        if (current.right) q.push(current.right);
        
        final.push(current.val);
        q.shift();
    }
    return final;
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
