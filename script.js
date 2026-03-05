
const inputField = document.getElementById("user-input");

const sendBtn = document.getElementById("send-btn");

const messagesContainer = document.getElementById("messages");

const sendMessage = () => {
    const message = inputField.value.trim();
    if (message !== null && message !== "") {
        messagesContainer.innerText += message + "\n";
        inputField.value = "";
    } else {
        alert("Please enter a message");
    }
};

sendBtn.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

const retrievalMethod = document.getElementById("retrieval-method");

retrievalMethod.addEventListener("change", () => {
    console.log("Retrieval method: ", retrievalMethod.value);
})

const uploadBtn = document.getElementById("upload-btn");

uploadBtn.addEventListener("click", () => {
    const fileInput = document.getElementById("file-input");
    console.log("Selected files: ", fileInput.files[fileInput.files.length - 1].name.toString().trim());
});
