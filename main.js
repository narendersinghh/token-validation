let allowedSites = ['https://www.digiintern.com','https://www.nopaperforms.com','https://dheerajarora1997.github.io']


let domainName = document.location.origin;

if(allowedSites.includes(domainName) ){
  console.log(domainName);
}
else{
  document.body.innerHTML = "";
}
