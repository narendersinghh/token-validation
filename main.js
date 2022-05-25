let allowedSites = ['https://www.digiintern.com','https://www.nopaperforms.com']


let domainName = document.location.origin;

if(allowedSites.includes(domainName) ){
  console.log(domainName);
}
else{
  document.body.innerHTML = "";
}