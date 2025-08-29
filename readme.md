<!-- Question-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

Ans:
The methods getElementById, getElementsByClassName, querySelector, and querySelectorAll are all used in JavaScript to select elements from the HTML Document Object Model (DOM), but they differ in their selection criteria, return types, and behavior.

getElementById(id):
Selects a single element based on its unique id attribute. Since IDs are intended to be unique within an HTML document, this method always returns at most one element.
Returns a single Element object if an element with the specified ID is found, otherwise returns null.
Direct and highly efficient for selecting a specific, uniquely identified element.

getElementsByClassName(className):
Selects all elements that possess the specified class name(s).
Returns a live HTMLCollection of elements. "Live" means that if elements with the specified class are added or removed from the DOM after the collection is created, the collection will automatically update to reflect these changes.
 Useful for selecting multiple elements sharing a common class, and the live nature can be advantageous for dynamic content.

 querySelector(selector):
 Selects the first element that matches the specified CSS selector. This selector can be an ID, class, tag name, attribute selector, or any combination of these, just like in CSS.
 Returns a single Element object if a matching element is found, otherwise returns null.
 Offers a flexible way to select a single element using the power of CSS selectors, but only returns the first match. 

querySelectorAll(selector):
 Selects all elements that match the specified CSS selector.
Returns a static NodeList of elements. "Static" means that the collection does not automatically update if elements are added or removed from the DOM after the collection is created.
Provides the most versatile method for selecting multiple elements using CSS selectors, and the static nature can be predictable in scenarios where the DOM is expected to change. 

<!-- Question-2: How do you create and insert a new element into the DOM? -->
Ans:
Creating and inserting a new element into the Document Object Model (DOM) in JavaScript involves two main steps: creating the element.
The document.createElement() method is used to create a new HTML element. It takes a string as an argument, which specifies the tag name of the element to be created.

<!-- Question-3: What is Event Bubbling and how does it work? -->
Ans:
Event bubbling is a browser mechanism where a triggered DOM event propagates from the specific element that fired it, up through its ancestors (parent, grandparent, etc.) in the DOM tree, to the root of the document.

How Event Bubbling Works
1. Target Element:
An event, such as a click or a keyboard event, is triggered on a specific HTML element. 
2. Propagation Begins:
The event starts at this target element. 
3. Bubbling Up:
The event then moves up the DOM hierarchy to the target element's parent, then to its grandparent, and so on, until it reaches the outermost element or the document root. 
4. Listeners Triggered:
If an event listener is attached to any of these parent or ancestor elements, it will also be triggered as the event bubbles through them. 
5. Event Stops:
The bubbling process can be stopped by using methods like event.stopPropagation() in the event handler of any element, preventing it from reaching the higher-level ancestors. 

<!-- Question-4: What is Event Delegation in JavaScript? Why is it useful? -->
Ans:
Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each child. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to its parent elements in the Document Object Model (DOM) tree. 

Why it is useful:
Performance Optimization:
Reduces the number of event listeners attached to the DOM, leading to lower memory consumption and improved performance, especially in applications with a large number of interactive elements or dynamically added content.
Simplified Code and Maintainability:
Centralizes event handling logic in one place, making the code cleaner, easier to understand, and simpler to manage, particularly when dealing with complex or dynamic interfaces.
Handling Dynamic Content:
Automatically handles events for elements that are added to the DOM after the initial page load without requiring new event listeners to be attached to each newly created element. This is a significant advantage when working with data-driven applications or user-generated content.
Reduced Code Duplication:
Avoids repeating the same event listener code for multiple similar elements, promoting a more efficient and DRY (Don't Repeat Yourself) coding style.

<!-- Question-5: What is the difference between preventDefault() and stopPropagation() methods? -->
Ans:
preventDefault() and stopPropagation() are distinct methods used in event handling within the Document Object Model (DOM), each serving a specific purpose.
event.preventDefault():
This method prevents the default action associated with a specific event from occurring. For example:
Clicking a link (<a>) with preventDefault() will prevent the browser from navigating to the URL specified in its href attribute.
Submitting a form with preventDefault() will prevent the form from being submitted and the page from reloading.
Clicking a checkbox with preventDefault() will prevent the checkbox from being checked or unchecked.

event.stopPropagation():
This method prevents the event from propagating further up or down the DOM tree.
For example:
If a button inside a div has a click listener, and the div also has a click listener, clicking the button would normally trigger both listeners due to event bubbling. Calling stopPropagation() within the button's click handler would prevent the div's click handler from being triggered.