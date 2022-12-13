let allowedSites = ['https://www.digiintern.com','https://www.nopaperforms.com','https://dheerajarora1997.github.io', 'https://omsaipacker.com','https://token-validation.pages.dev']


let domainName = document.location.origin;

if(allowedSites.includes(domainName) ){
  console.log(domainName);
}
else{
  console.log(domainName);
  document.body.innerHTML = "";
}
