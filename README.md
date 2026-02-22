# Questions and Answers
** 1) What is the difference between getElementById, getElementsByClassName, and query Selector/query selector All?**
Ans : getElementById() searches one elemnet based on its id and returns single element. In contrast getElementsByClassName() searches a group of elements based on their class and returns a list of elements known as HTML collection. It’s a live collection of elements.
querySelector() searches first matching element and stops. On the other hand querySelectorAll() searches all matching elements and returns a static list of all elments called NodeList.
querySelector() and querySelectorAll() are the most flexible because they accept any CSS selector like (.class, #id, or div).

** 2) How do you create and insert a new element into the DOM? **
Ans : To create and insert new element into DOM the following steps are to be followed:
First use document.createElement() method to generate the element in memory. Such as :const newButton=document.createElement(‘button’). 
Second, we can add content or attributes like textContent or inner HTML . Such as: newButton.textContent= ‘Button Clicked’.  
Third step is to find the target location where we can place the new element. Such as :  const parentDiv = document.getElementById(‘conatiner’).
Finally use a method to attach new element to selected parent element with a mehod like document.getElementById() or document.querySelector() and then using appendChild() or appened() to add it. 
For example : document.body.appendchild(newParagraph) or document.getElementByID(‘Container’).append(new paragraph).


