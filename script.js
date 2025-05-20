function upDate(previewPic) {
    // Check if function is triggered
    console.log("Mouse over image");
    console.log("ALT:", previewPic.alt);
    console.log("SRC:", previewPic.src);
  
    const displayDiv = document.getElementById("image");
  
    // Change background image
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  
    // Change text to alt text
    displayDiv.innerHTML = previewPic.alt;
  }
  
  function undo() {
    console.log("Mouse out of image");
  
    const displayDiv = document.getElementById("image");
  
    // Reset background and text
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
  }
 