# Repro for Jest issue 9473
https://github.com/facebook/jest/issues/9473

Using io redis without disconnecting is a simple way to reproduce the issue where jest produces no output when attempting to detect open handles.

NOTE: This requires a local redis to be running to connect to.

## Repro Steps
Ensure redis is running on localhost:6379 (default port)
Ensure dependencies are installed with `yarn`
Verified using node 12.14.1

To reproduce the issue of no output, run only the 9473 test:
1. `yarn test 9473.test --detectOpenHandles`

To demonstrate proper open handle detection, run ONLY the server test:
1. `yarn test server --detectOpenHandles`
