var bodyElement = document.querySelector("body")

function removePopup() {
  bodyElement.classList.remove("mdpDeblocker-style-compact")
  bodyElement.classList.remove("mdpDeblocker-blur")
  console.log("popup removed")
}

window.addEventListener("load", function () {
  removePopup()

  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class" &&
        (bodyElement.classList.contains("mdpDeblocker-style-compact") ||
          bodyElement.classList.contains("mdpDeblocker-blur"))
      ) {
        removePopup()
      }
    }
  })

  observer.observe(document.body, { attributes: true })
})
