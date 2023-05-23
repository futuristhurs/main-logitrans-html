function showSection(sectionId) {
  var sections = document.getElementsByClassName("form-section");
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove("visible");
  }
  document.getElementById(sectionId).classList.add("visible");
}

document.getElementById("document-upload").addEventListener("change", function() {
  var fileInput = document.getElementById("document-upload");
  var file = fileInput.files[0];
  var documentType = document.getElementById("document-type").value;

  // Generate a unique ID for the uploaded file
  var fileId = "file_" + Date.now();

  // Attach the ID to the file object
  file.fileId = fileId;

  // You can now use the fileId to identify the uploaded file at the backend

  console.log("File ID:", fileId);
  console.log("Document Type:", documentType);
  console.log("Uploaded File:", file);
});
