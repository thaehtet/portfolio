function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

const image_fb = document.querySelector(".icon-fb"); 
const image_lk = document.querySelector(".icon-lk");
const image_git = document.querySelector(".icon-git");
const image_email = document.querySelector(".icon-email");
const image_lk2 = document.querySelector(".icon-lk2");

const initial_fb = "/assets/images/b_facebook.jpg"; 
const hover_fb = "/assets/images/rb_facebook.png"; 

const initial_lk = "/assets/images/b_linkedin.png"; 
const hover_lk = "/assets/images/rb_linkedin.jpg"; 

const initial_git = "/assets/images/b_github.jpg"; 
const hover_git = "/assets/images/rb_github.png"; 

const initial_email = "/assets/images/b_email.jpg"; 
const hover_email= "/assets/images/hb-email.jpg"; 

image_fb.addEventListener("mouseenter", function() { 
    image_fb.src = hover_fb; 
}); 
image_fb.addEventListener("mouseleave", function() { 
    image_fb.src = initial_fb; 
}); 

image_lk.addEventListener("mouseenter", function() { 
    image_lk.src = hover_lk; 
}); 
image_lk.addEventListener("mouseleave", function() { 
    image_lk.src = initial_lk; 
}); 

image_lk2.addEventListener("mouseenter", function() { 
    image_lk2.src = hover_lk; 
}); 
image_lk2.addEventListener("mouseleave", function() { 
    image_lk2.src = initial_lk; 
}); 

image_git.addEventListener("mouseenter", function() { 
    image_git.src = hover_git; 
}); 
image_git.addEventListener("mouseleave", function() { 
    image_git.src = initial_git; 
}); 

image_email.addEventListener("mouseenter", function() { 
    image_email.src = hover_email; 
}); 
image_email.addEventListener("mouseleave", function() { 
    image_email.src = initial_email; 
}); 