const {TreeNode} = require('./01-tree-node')

// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function bfs(root){
    if (!root) return [];
    let q = [root];
    let res = [];
    while (q.length) {
        let current = q[0];
        if(current.left) q.push(current.left);
        if(current.right) q.push(current.right);
        res.push(q.shift().val);
    }
    return res;
}

let root = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

root.left = b;
root.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(bfs(root))

module.exports = { bfs };