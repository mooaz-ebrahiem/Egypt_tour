/* =========================================================
WhatsApp Booking
========================================================= */

function bookNow() {

 
// رقم WhatsApp بصيغة دولية بدون +
const phoneNumber = "201501541424";

// الرسالة التي ستظهر تلقائياً في WhatsApp
const message =
    "مرحباً، أرغب في التعرف على البرامج السياحية المتاحة لديكم.";

// تحويل الرسالة إلى صيغة مناسبة للرابط
const encodedMessage = encodeURIComponent(message);

// إنشاء رابط WhatsApp
const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

// فتح WhatsApp في تبويب جديد
window.open(whatsappURL, "_blank");
 

}

/* =========================================================
Navbar Scroll Effect
========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

 
if (!navbar) return;

if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

} else {

    navbar.classList.remove("scrolled");

}
 

}

// تشغيل الوظيفة عند الـScroll
window.addEventListener("scroll", updateNavbar);

// تشغيلها مرة عند تحميل الصفحة
updateNavbar();

/* =========================================================
Hero Slider
========================================================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

const slideDuration = 6000; // 6 ثواني

/* إظهار Slide محددة */

function showSlide(index) {

 
if (!slides.length) return;

// إزالة active من جميع الصور
slides.forEach((slide) => {
    slide.classList.remove("active");
});

// إضافة active للصورة المطلوبة
slides[index].classList.add("active");

// تحديث رقم الصورة الحالية
currentSlide = index;
 

}

/* الانتقال للصورة التالية */

function nextSlide() {

 
if (!slides.length) return;

const nextIndex =
    (currentSlide + 1) % slides.length;

showSlide(nextIndex);
 

}

/* تشغيل الـSlider */

function startSlider() {

 
if (slides.length <= 1) return;

setInterval(nextSlide, slideDuration);
 

}

/* تشغيل الـSlider */

if (slides.length > 0) {

 
showSlide(0);

startSlider();
 

}

/* =========================================================
Prevent Empty Links
========================================================= */

document.querySelectorAll('a[href="#"]').forEach((link) => {

 
link.addEventListener("click", function(event) {

    event.preventDefault();

});
 

});

/* =========================================================
Page Loaded
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

 
console.log("آفاق للسياحة - Website Loaded Successfully");
 

});
