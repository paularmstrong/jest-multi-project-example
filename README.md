# Yarn Workspaces with Jest Multiple Projects

## Setup

1. `yarn` to install dependencies and link workspaces
2. `yarn test` to ensure tests work correctly

## Reproducing The Issue

In this example, we would like to see the following happen:

1.Run `yarn test --findRelatedTests --listTests projects/bar/bar.js` (`test` is a package script shortcut to `jest`) 

### Expectation

We should expect to see the following files as related in the output:

```
projects/bar/__tests__/index.test.js
projects/foo/__tests__/index.test.js
```

### Actual results

Jest does not appear to resolve related changes across project configurations and we do no receive any listed tests.

## Alternatively

If we run `yarn test --findRelatedTests --listTests projects/bar/index.js`, we _do_ receive the original two files expected from the previous case.

## Why this is problematic

This is a problem because if we are in a sufficiently large project with many workspaces and many interdependencies, we may make a change to one file in a single workspace and expect to be able to run only the related tests for that change, but none will be run.

We could argue that we should just run all tests, but this can take too long (15+ minutes) to realistically ask people to do every time they make a change.
