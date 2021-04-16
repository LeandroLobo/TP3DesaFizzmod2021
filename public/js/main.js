/************************************************
 * Saludo inicial:
 */
let salute = 'Buenas noches!';
const HOUR = new Date().getHours();
if(HOUR >= 6) salute = 'Buenos dias!';
if(HOUR >= 13) salute = 'Buenas tardes!';
if(HOUR >= 19) salute = 'Buenas noches!';
document.getElementById('salute').innerHTML = salute;
console.log('Locale Time => '+ new Date().toLocaleTimeString('en-GB'));