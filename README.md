# React Side Effects

## Task 0

Open the console and add some to dos. Look at when each function is being called. Add some more console logs if you need!

Talk through with your partner about when each component rerenders, and articulate why.

Note: Remember that due to strict mode, you may see doubles of console.logs (as React does an extra render to check for any errors in strict mode). The important thing is seeing which components render in what order (and which ones don't).

## Task 1

My first side effect: changing the page title.

In `App`, change the page title to `<NUMBER_OF_THINGS> things to do...` (keep in mind you need to replace `NUMBER_OF_THINGS` with an actual value). This should change every time the length of things to do changes. By interacting with the DOM directly, we are reaching outside of React as a side effect, so we should use the effect hook.

## Resources

New React docs:

- [Syncronizing with effects](https://beta.reactjs.org/learn/synchronizing-with-effects)
- [useEffect](https://beta.reactjs.org/apis/react/useEffect)

[Old React docs - useEffect](https://reactjs.org/docs/hooks-effect.html)
