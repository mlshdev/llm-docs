> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestrun/test](https://developer.apple.com/documentation/xctest/xctestrun/test)

# test (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The test instance for the test run.

## Declaration

```swift
var test: XCTest { get }
```

## See Also

### Gathering Test Outcomes

- [hasSucceeded](hassucceeded.md): A Boolean value that returns true if all tests in the run completed without recording any failures; otherwise, false.
- [hasBeenSkipped](hasbeenskipped.md): A Boolean value that indicates a skipped test.
- [executionCount](executioncount.md): The number of test executions during the run.
- [failureCount](failurecount.md): The number of test failures during the run.
- [skipCount](skipcount.md): The number of skipped tests during the run.
- [testCaseCount](testcasecount.md): The number of tests in the run.
- [totalFailureCount](totalfailurecount.md): The number of test failures and uncaught exceptions during the run.
- [unexpectedExceptionCount](unexpectedexceptioncount.md): The number of uncaught exceptions during the run.

# test (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The test instance for the test run.

## Declaration

```objectivec
@property (strong, readonly) XCTest * test;
```

## See Also

### Gathering Test Outcomes

- [hasSucceeded](hassucceeded.md): A Boolean value that returns true if all tests in the run completed without recording any failures; otherwise, false.
- [hasBeenSkipped](hasbeenskipped.md): A Boolean value that indicates a skipped test.
- [executionCount](executioncount.md): The number of test executions during the run.
- [failureCount](failurecount.md): The number of test failures during the run.
- [skipCount](skipcount.md): The number of skipped tests during the run.
- [testCaseCount](testcasecount.md): The number of tests in the run.
- [totalFailureCount](totalfailurecount.md): The number of test failures and uncaught exceptions during the run.
- [unexpectedExceptionCount](unexpectedexceptioncount.md): The number of uncaught exceptions during the run.
