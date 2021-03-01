// Implement a function that takes in the root of a
// binary tree, traverses it in depth-first-search
// order, and returns an array containing the values
// in the order you visited them.
function dfs(root, values = []){
    if (!root) return [];

    values.push(root.val);
    dfs(root.left, values);
    dfs(root.right, values);

    return values;
}

module.exports = { dfs };