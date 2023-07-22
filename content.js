function removePopup() {
  var bodyElement = document.querySelector("body")
  bodyElement.classList.remove("mdpDeblocker-style-compact")
  bodyElement.classList.remove("mdpDeblocker-blur")
  console.log("popup removed")
}

// Web sayfasının tamamen yüklendiğinde çalışacak olan kod
window.addEventListener("load", function () {
  removePopup()

  // MutationObserver oluşturulması
  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      // Eğer body elementine sınıf eklenmişse ve sınıfı kaldırmadıysak, sınıfı kaldıralım
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        removePopup()
      }
    }

    // İzlemeyi durdur
    observer.disconnect()
  })

  // Observer'ın başlatılması ve izlenecek değişikliklerin tanımlanması
  observer.observe(document.body, { attributes: true })
})
