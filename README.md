# preact-hook-htm
A triplicate of dependencies that I like to use together.

We use a beta version of preact because I am tired of waiting for preactX to be published. I also autobind htm to preact because I like doing that. Hopefully can not do this in the future.

## Exports
### Preact
```javascript
export { render };
```
`render()` is from `preact`

### Hooks
```javascript
export { useState, useEffect, useRef, useReducer };
```
`useState()`, `useRef()`, `useReducer` and `useEffect()` are from `preact/hooks`

### Htm
```javascript
export { html };
```
`html` is `Htm.bind(preact.createElement);`
