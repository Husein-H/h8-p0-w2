//tugas 1
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word+ " " + second + " " + third+ " " + fourth+ " " + fifth+ " " + sixth+ " " + seventh)
console.log(" ")
//tugas 2 -----------------------------------------------------------------------------------------
var word = 'wow JavaScript is so cool';
var FirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13];
var thirdWord= word[15]+word[16]; 
var fourthWord = word[18]+word[19];
var fifthWord = word[21]+word[22]+word[23]+word[24]; 

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

console.log("")
//tugas 3----------------------------------------------------------------------------------------
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4,14) ;
var thirdWord3 = word.substring(15,17);
var fourthWord3 = word.substring(18,20);
var fifthWord3 = word.substring(21,25);

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

console.log('')
//tugas4--------------------------------------------------------------------------------------
var word4 = 'wow JavaScript is so cool';
var FirstWord4 = word.substring(0, 3);
var secondWord4 = word.substring(4,14) ;
var thirdWord4 = word.substring(15,17);
var fourthWord4 = word.substring(18,20);
var fifthWord4 = word.substring(21,25);

var firstWordLength = FirstWord4.length;
var secondWordLength = secondWord4.length;
var thirtdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + FirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirtdWordLength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordLength);