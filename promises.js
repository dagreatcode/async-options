function readFile(myCallbackFunction) {
    setTimeout(() => {
      myCallbackFunction("This is the contents of the file.");
      // return "This is the contents of the file.";
    }, 3000);
  }
  
  // console.log(readFile());
  
  readFile((data) => {
    console.log(data);
  });
  