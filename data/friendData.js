// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var friendArray = [
  {
    name: "Tiffany",
    age: "22",
    answers:["1","2","3","3","4","2","1","3","2","1"]
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
