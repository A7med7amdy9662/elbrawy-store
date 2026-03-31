// تسجيل البصمة
function registerBiometric() {
    if (!window.PublicKeyCredential) {
        alert("متصفحك مش بيدعم البصمة!");
        return;
    }
    alert("هنا هيتسجل البصمة. للعرض فقط حاليا.");
}

// تسجيل الدخول بالبصمة
function loginBiometric() {
    if (!window.PublicKeyCredential) {
        alert("متصفحك مش بيدعم البصمة!");
        return;
    }
    alert("هنا هيتم تسجيل الدخول بالبصمة. للعرض فقط حاليا.");
}