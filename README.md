# Yarn Workspaces with Jest Multiple Projects

## Setup

1. `yarn` to install dependencies and link workspaces
2. `yarn test` to ensure tests work correctly

## Reproducing The Issue

In this example, we would like to see the following happen:

1. Make a change to the return of `projects/bar/index.js`
2. Run `yarn test --findRelatedTests --listTests` (`test` is a package script shortcut to `jest`) 

### Expectation

We should expect to see the following files as related in the output:

```
projects/bar/__tests__/index.test.js
projects/foo/__tests__/index.test.js
```

### Actual results

Jest does not appear to resolve related changes across project configurations and we receive the following:

```
projects/bar/__tests__/index.test.js
```
