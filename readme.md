This particular folder is for the types that Typescript have
And how one can play around with the types for the variables in the Typescript.

HOW TO CONVERT TYPESCRIPT FILE INTO A JAVASCRIPT FILE

1. OPEN TERMINAL (Command Prompt)
2. WRITE THE COMMAND - tsc filename.ts
   'then compiler will return a .js file of the same name'
3. WRITE THE COMMAND - node filename.js
4. CODE RUNS 👍

EXPLANATION OF THE CODE THAT I WILL WRITE IN THE TYPESCRIPT FILE

LINE 10 and 11
For line 10 it is the modern way of assigning an array to a constant
For line 11 it is the generic way of assigning an array to a constant. Moreover as array by defination it means that it contains elements of same or different type so here we say that the constant should be an array and the elements that we make in it should be of type any or string or number. Try to change the type of the Array<string> to Array<number>, it will give an error as the elements that you have mentioned for now in the array are not of type number but of tpye string.

LINE 15
It is an example of a TUPLE. Tuple is like an array but you decide at what index you want element of what type.
So in the example I have mentioned that at the index number 1 I want my element of type number.
So if I try to pass a string or any other type of value then it will throw an error.

LINE 22
Enums are used to create certain constants with a certain fixed value so that we can use them anytime and anywhere in the project. It eliminates unecessary work and saves time.
For example I have made a function which is about a interview which will take two parameters -

1. Name of the person that has come up for the interview which is of type any
2. Statement for him that whether he is pass or not in the interview and it is of type ENUM that we have made.
   So I have made an array with names and the if statement says that if the name that you give me is YASHIT then return a statement and the same for Shanaya
   So instead of typing again and again the same statement whether a person has passed or faled just write it inside of a enum and you are good to go then.

LINE 61 and 67
Classes in easy words basically provides you a space where you can write a block of code and then assign it to a variable and then call whatever it have.
Also we can make two seperate classes and just join them by using EXTENDS keyword.
This extention is called inheritance
Classes are there in every angular project in the .ts file
Moreover in classes for making functions you have to declare variable without using const , let or var keyword and you have to make functions without writing function infront of them

LINE 89
Typeof is used for cheking the type of a variable.

LINE 99
On running command tsc -init it will create tsconfig.json file which is always present in out angular projects.
Also this concept is important from Maximus point of view
So the advance topic is called [ noImplicitAny ].
It means that you have to give a type to the variable that you make everytime otherwise it will throw an error.
Moreover other than type any , if you give your variable any other type then you can not go without initializing it.

LINE 116
Interface
Interface do not have common values but it goes towards a common behaviour

"Understanding from real-life"

For example in family everybody has different roles but has a common behaviour towards each other to make each other happy.

"Understanding for Maximus"
Beneficiary or Provider record has a lot of things to them which have different types and roles but when joins, they serve one purpose that is it defines a beneficiary or a provider.
They have addresses , Date of Birth , RoleTypes which are different in types but defines a Provdier or Beneficiary.

Enums
Enums basically have common values and each value has its different behaviour

"Understanding from real-life"

For example your father wants you to join hands and take Swami ji's name before eating food. So everybody does that.
Therefore everbody has the same values but different behaviour.
Behaviour as in preferences , character and level of intelligence

"Understanding for Maximus"

Will have to update this if I encouter it anywhere in the project

In short to make it one-liner - Interfaces are designed to define common behaviours, enums to define common values.

In Maximus
LINE 125
Go to this link first - https://benyoung.blog/content/images/size/w2000/2019/01/Screen-Shot-2019-01-22-at-12.02.03-PM.png
So whenever I will make a .ts file and I want the username so I will make this interface.
And then the function will look like on LINE 155
