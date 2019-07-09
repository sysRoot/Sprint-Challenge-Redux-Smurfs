1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
	>> Array.prototype.map(), Array.prototype.filter(), Object.assign(), I believe the latter is the one used to extend properties while creating.                            

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  >> The store is a container of application level state, and is kept sync'd across different parts of a react application via actions and reducers. An Action is a trigger that is initiated by an action on the page, and the reducer is the execution of a change of state based on action type
  
3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
  >> Application state is throughout the entire system of components and keeps track of a state that is relative to the overall function of an application. Component level is just restricted to itself and any children components that receive the state through prop drilling. One good use for application state would be a like counter, that needs to be possibly checked on different pages. Whereas a toggle button for a menu, may be specific just to that one component, and not relevant for the rest of the application to know whether or not the menu is open.

4.  What is middleware?
  >> Middleware is an extensible loader of enhancing tools that allows you to pad the capabilities of a functionality before its output is complete. Like a layer of extra functionality. It sits in the background allowing the data to undergo additional processing

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  >>It allows us to check whether or not the action is an object or function, presenting us a bit better of a handle on ansynchronous tasks, as by design, redux is synchronous

6.  Which `react-redux` method links up our `components` with our `redux store`?
  >> If I am not mistaken, that is the connect() method
