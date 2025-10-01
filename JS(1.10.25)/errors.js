// Try...catch
try {
  let num = 10 / 0;
  console.log(num);

  // Reference Error
  console.log(unknownVar);  /* unknownvar is not defines anywhwhere in the code */
} catch (error) {
  console.log("An error occurred:", error.message);
}
// finally
try {
  let a = JSON.parse('{"name": "Shreya"}');  /* converting JSON string into javascript object */
                                            /* if error occur in try block it automatically jumps to catch block if the error is not in try block it jumps to finally block */
  console.log(a.name);
} catch (error) {
  console.log("Error parsing JSON:", error.message);
} finally {
  console.log("This will always run ✅");
}
// throw block
function divide(a,b){
    if(b===0){
        throw new Error("Divide by zero is not allowed")
    }
    return a/b
}
try{
    console.log(divide(10,2))
    console.log(divide(10,0))
}catch(error){
    console.log("Error:",error.message) /* error.message shows only the text of the error */
}

// custom errors
class ValidationError extends Error {  /* custom class validationwrror extends the parent construtor error */
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(username) {
  if (!username) {
    throw new ValidationError("Username is required!");
  }
  return `${username} registered successfully 🎉`;
}

try {
  console.log(registerUser("Subasri"));
  console.log(registerUser("")); // ❌ Custom Error
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Error:", error.message);
  } else {
    console.log("Unexpected Error:", error.message);
  }
}
