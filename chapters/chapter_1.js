// In JavaScript, regular expressions are also objects.

const str = 'hello'; // A Way to represent string in Javascript

// Two ways to write a regex in Javascript

// 1st way - enclosed by forward slashes - regular expression literal
const reges1 = /hello/;

// 2nd way - Calling constructor function of RegExp object 
const regex2 = new RegExp('hello');



// MORE INFO - SOURCE MDN

/* Regular expression literals provide compilation of the regular expression
 when the script is loaded. If the regular expression remains constant,
  using this can improve performance. */

/* Using the constructor function provides runtime compilation of the regular
 expression. Use the constructor function when you know the regular expression
  pattern will be changing, or you don't know the pattern and are getting
   it from another source, such as user input.
*/