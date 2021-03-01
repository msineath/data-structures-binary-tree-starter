// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a pre-order
// traversal.
function preOrderArray(root, values = []) {
    if (!root) return [];

    values.push(root.val);
    preOrderArray(root.left, values);
    preOrderArray(root.right, values);

    return values;
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from an in-order
// traversal.
function inOrderArray(root, values = []) {
    if (!root) return [];

    inOrderArray(root.left, values);
    values.push(root.val);
    inOrderArray(root.right, values);

    return values;
}

// Implement a function that takes the root of a Binary Tree
// and returns an array containing the values from a post-order
// traversal.
function postOrderArray(root, values = []) {
    if (!root) return [];

    postOrderArray(root.left, values);
    postOrderArray(root.right, values);
    values.push(root.val);

    return values;
}


module.exports = {
  preOrderArray,
  inOrderArray,
  postOrderArray
};
