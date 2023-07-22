function removePopup() {
  var bodyElement = document.querySelector("body")
  bodyElement.classList.remove("mdpDeblocker-style-compact")
  bodyElement.classList.remove("mdpDeblocker-blur")
  console.log("popup removed")
}


window.addEventListener("load", function () {
  removePopup()

  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
    
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        removePopup()
      }
    }

    
    observer.disconnect()
  })


  observer.observe(document.body, { attributes: true })
})
