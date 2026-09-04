// وظيفة زر الحجز التي تفتح شات الواتساب مباشرة
function bookNow() {
    let phoneNumber = "201229904614"; 
    let message = "Hello! I would like to book a trip with you."; 
    let encodedMessage = encodeURIComponent(message); 
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// إضافة تأثير ظل للقائمة العلوية عند التمرير للأسفل
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
    } else {
        navbar.style.boxShadow = "none";
    }
});