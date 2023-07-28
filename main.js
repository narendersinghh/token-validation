let allowedSites = ['https://dheerajarora1997.github.io','https://token-validation.pages.dev','https://omsaipacker.com', 'https://www.uhcstaffing.com']


let domainName = document.location.origin;

if(allowedSites.includes(domainName) ){
  console.log(domainName);
}
else{
  console.log(domainName);
  document.body.innerHTML = "";
}
