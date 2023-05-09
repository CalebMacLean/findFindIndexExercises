// Find User by Username
function findByUsername(arr, userName) {
    return arr.find(obj => {
        return obj["username"] === userName;
    })
};

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];

//   Remove User Function
function removeUser(arr, userName) {
    const removeObjIdx = arr.findIndex(obj => {
        return obj['username'] === userName;
    });
    const removeObj = arr.find(obj => {
        return obj['username'] === userName;
    });
    arr.splice(removeObjIdx, 1);
    return removeObj;
};