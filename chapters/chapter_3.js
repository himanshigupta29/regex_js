// Quantifiers
// indicates the number of characters or expression  to match
/*

    ?  indicates 0 or 1 times
    *  indicates 0 or more times
    +  indicates 1 or more times
    {n}  indicates n times, n can be any number

*/

// Quantifiers are applied directly to the character preceding it

// Example
const regex1 = /abc*jkl*/; 
/* Exact matching strings "abjk", "abcjk", 
"abccjk", "abcccjk", "abcccjkl", "abcccjkll",
 "abcccjkllllll", and so on ...
*/

// In above quantifier * is applied only to characters c and l
// If want to apply quantifiers to more than one character then use capture group

const regex2 = /abc+jkl+/;
/* Exact matching strings  "abcjkl", "abccjkl",
 "abcccjkl", "abcccjkll", "abcccjklll", and so on ...
*/

const regex3 = /abc?jkl?/; 
/* Exact matching strings "abjk", "abcjk",
"abcjkl", "abjkl"
*/

const regex4 = /abc{3}jkl{5}/;
/* Exact matching strings "abcccjklllll"
*/