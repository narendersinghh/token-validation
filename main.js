let allowedSites = ['https://dheerajarora1997.github.io','https://token-validation.pages.dev','https://omsaipacker.com', 'https://demo3.narendersingh.com','https://www.fundootutor.com','https://fundootutor.com']


let domainName = document.location.origin;

if(allowedSites.includes(domainName) ){
  console.log(domainName);
}
else{
  console.log(domainName);
  document.body.innerHTML = "";
}
