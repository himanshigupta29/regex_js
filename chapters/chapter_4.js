// Capture groups
// Create a group of characters and then apply a rule on that group
// groups are enclosed by parenthesis (<group>)

// Example
const regex1 = /abc+(xy)+/
/* Exact matching strings "abccxy", "abccxyxy",
 "abccxyxyxy", "abcccxyxyxy" and so on ...
*/

/*
  Not Matching strings examples "abxy", "abcx", "abcy"
*/