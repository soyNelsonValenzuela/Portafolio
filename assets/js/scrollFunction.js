// Get the buttons:

let topButton = document.getElementById("myBtn");
let socialSharing = document.getElementById('social-sharing-float');

export function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        topButton.style.display = "flex";
        if (document.body.clientWidth > 1024) {
            socialSharing.style.display = "block"
        }
    } else {
        topButton.style.display = "none";
        socialSharing.style.display = "none";
    }
}
