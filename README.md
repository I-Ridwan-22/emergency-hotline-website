# emergency-hotline-website
Question-Answers:

1) The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are getElementById finds an element by the same ID and that should be unique also, getElementsByClassName finds all the elements that have same name of the class, querySelector finds the first element that satisfies and querySelectorAll finds all the elements that satisfies.

2) By using .createElement() and later .appendChild().

3) When we click an child element, the event occurs in its parent element too, this is Event Bubbling. Therefore, if we click a inner button then it will also affect on the div function.

4) When we add a event listener in a parent element for handling the events from its children, it is called Event delegation. It is useful cause when we have a lot of child elements then it makes it more dynamic.

5) preventDefault() stops the default action such as submitting a form or opening a link whereas preventDefault() stops the event from bubbling up from child element to parent element.