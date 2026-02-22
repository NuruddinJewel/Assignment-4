# Questions and Answers

**1) What is the difference between getElementById, getElementsByClassName, and query Selector/query selector All?** <br>
Ans : getElementById() searches one element based on its id and returns single element. In contrast getElementsByClassName() searches a group of elements based on their class and returns a list of elements known as HTML collection. It’s a live collection of elements. <br>
querySelector() searches first matching element and stops. On the other hand querySelectorAll() searches all matching elements and returns a static list of all elments called NodeList.
querySelector() and querySelectorAll() are the most flexible because they accept any CSS selector like (.class, #id, or div).

**2) How do you create and insert a new element into the DOM?** <br>
Ans : To create and insert new element into DOM the following steps are to be followed: <br>
First use document.createElement() method to generate the element in memory. Such as :const newButton=document.createElement(‘button’). <br>
Second, we can add content or attributes like textContent or inner HTML. Such as: newButton.textContent= ‘Button Clicked’.<br> 
Third step is to find the target location where we can place the new element. Such as :  const parentDiv = document.getElementById(‘conatiner’).<br>
Finally use a method to attach new element to selected parent element with a mehod like document.getElementById() or document.querySelector() and then using appendChild() or appened() to add it. <br>
For example : document.body.appendchild(newParagraph) or document.getElementByID(‘Container’).append(new paragraph).

**3) What is event bubbling? And how does it work?** <br>
Ans: Event bubbling in JS is when an event triggered on a nested element “bubbles up” through its parent elements in the DOM hierarchy, allowing each ancestor to potentially respond to the same event. <br>
Working Procedure : If a button is clicked inside a div, the click event first runs on the button itself , then on its parent div, then on the body and continues upward until it reaches the document root, making it possible to handle events efficiently at a higher level rather than attaching individual listeners to every child element.

**4) What is Event Delegation in JavaScript? Why is it useful?** <br>
Ans: Event delegation is a technique in JS  where we can attach a single event listener to a parent element instead of attaching multiple listeners to individual child elements and that parent listener uses event bubbling to detect and handle events triggered on any of its children. <br>
It’s useful because it improves performance by reducing memory usage, simplifies code maintenance and automatically works for dynamically added child elements without needing to attach new event handlers to them.

**5) What is the difference between preventDefault() and stopPropagation() methods?** <br>
Ans: In JS prevenetDefault() stops the default action of an element from happening such as preventing a form submission or a link from navigating a new page, while stopPropagation() prevents the event from bubbling up to a parent elements so that parent event don’t get triggered. 












