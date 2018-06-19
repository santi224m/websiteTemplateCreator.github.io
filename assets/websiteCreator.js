var companyName = [
  'Joes Burgers',
  'Marios Flower Shop',
  'Ryders Collectables',
  'Plants world',
  'Georges Pizza',
  'Tacos Mexico',
  'Sunny Outfits',
  'Car detailing',
  'Computer Fix Shop',
  'Bycle Repairs',
  'West Coast Fishing Store',
  'Dentist Group',
  'Soccer World',
  'Sports Land',
  'Phone Repair Shop',
  'Green Buffet'
]
companyNamerand = Math.floor(Math.random() * (companyName.length));
var officialCompanyName = (companyName[companyNamerand]);
var rewriteCompanyName = document.getElementById('changeCompanyName');
rewriteCompanyName.textContent = officialCompanyName;


var phoneNumbers = [
  '(751) 549-7907',
  '(671) 749-0016',
  '(858) 851-2700',
  '(906) 955-8194',
  '(363) 466-5137',
  '(931) 827-3701'
]
phoneNumbersrand = Math.floor(Math.random() * (phoneNumbers.length));
var officialPhoneNumbers = (phoneNumbers[phoneNumbersrand]);
var rewritePhoneNumbers = document.getElementById('changePhoneNumbers');
rewritePhoneNumbers.textContent = officialPhoneNumbers;


var address = [
  '57 Wayne Street Glendora, CA 91740',
  '9794 Fulton Ave. Onalaska, WI 54650',
  '9530 Shore Rd. Mechanicsville, VA 23111',
  '267 Roberts Street Yorktown, VA 23693',
  '9507 Newcastle Rd. Rockford, MI 49341',
  '8779 Warren Rd. Griffin, GA 30223'
]
addressrand = Math.floor(Math.random() * (address.length));
var officialaddress = (address[addressrand]);
var rewriteAddress = document.getElementById('changeAddress');
rewriteAddress.textContent = officialaddress;


var keyServices = [
  'online service',
  'local service',
  'best in the field',
  'available all over the country',
  'fast',
  'free shipping'
]
keyServicesrand = Math.floor(Math.random() * (keyServices.length));
var officialKeyServices = (keyServices[keyServicesrand]);
var rewriteKeyServices = document.getElementById('changeKeyServices');
rewriteKeyServices.textContent = officialKeyServices;


var objectives = [
  'do things faster than the competion',
  'have the best quality',
  'have the lowest prices',
  'increase efficiancy',
  'provide the best costumer service',
  'help the environment',
  'help people in need'
]
objectivesrand =  Math.floor(Math.random() * (objectives.length));
var officalObjectives = (objectives[objectivesrand]);
var rewriteObjectives = document.getElementById('changeObjectives');
rewriteObjectives.textContent = officalObjectives;


var mainColor = [
  'red',
  'green',
  'blue',
  'brown',
  'white',
  'black',
  'grey'
]
mainColorrand =  Math.floor(Math.random() * (mainColor.length));
var officalmainColor = (mainColor[mainColorrand]);
var rewriteMainColor = document.getElementById('changeMainColor');
rewriteMainColor.textContent = officalmainColor;


var audience = [
  'teenagers',
  'adults',
  'seniors',
  'children',
  'everyone'
]
audiencerand =  Math.floor(Math.random() * (audience.length));
var officalAudience = (audience[audiencerand]);
var rewriteAudience = document.getElementById('changeAudience');
rewriteAudience.textContent = officalAudience;


var majorAchievment = [
  'Best in the Country',
  'Best in the State',
  'Best in the city',
  'More than a million clients',
  'More than 20 years of experience'
]
majorAchievmentrand =  Math.floor(Math.random() * (majorAchievment.length));
var officalMajorAchievment = (majorAchievment[majorAchievmentrand]);
var rewriteMajorAchievment = document.getElementById('changeMajorAchivement');
rewriteMajorAchievment.textContent = officalMajorAchievment;

var officialEmployees = Math.floor(Math.random() * 1000);
var rewriteEmployees = document.getElementById('changeEmployees');
rewriteEmployees.textContent = officialEmployees;
