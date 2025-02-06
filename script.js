var isDate = function (input) {
  
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }

  
  if (typeof input === "string" || typeof input === "number") {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }

  // If input is not a valid date, return false
	
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

  