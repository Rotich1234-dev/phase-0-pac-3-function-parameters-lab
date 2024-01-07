function introduction(name){
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Example usage:
  console.log(introductionWithLanguageOptional("Jane")); // Outputs: Hello, my name is Jane and I am learning JavaScript.
  console.log(introductionWithLanguageOptional("Rotich", "React")); // Outputs: Hello, my name is Rotich and I am learning React.
  
  function introductionWithLanguageOptional(name, language) {
    const defaultLanguage = language || "JavaScript";
    
    return `Hi, my name is ${name} and I am learning to program in ${defaultLanguage}.`;
  }
  
  