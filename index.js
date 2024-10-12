const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Function to convert tutorial names to title case
function titleCased() {
  return tutorials.map(tutorial => {
      // Split the tutorial into words
      const words = tutorial.split(' ');

      // Capitalize the first letter of each word
      const capitalizedWords = words.map(word => {
          // Capitalize the first letter and add the rest of the word
          return word.charAt(0).toUpperCase() + word.slice(1);
      });

      // Join the capitalized words back into a string
      return capitalizedWords.join(' ');
  });
}
