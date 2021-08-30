/*
Falsy:
false
0
''(empty string)
undefined
null 
NaN

Truthy:
true
any number (positive or negative)
string 
'0'() inside brakcet will be true
' '(string with space)
[]
{}
anything else that not false is truthy
*/

const x = false;
if (x) {
    console.log('variable is truthy');
} else {
    console.log('variable is Falsy');
}