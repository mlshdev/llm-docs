> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestrun/totalfailurecount](https://developer.apple.com/documentation/xctest/xctestrun/totalfailurecount)

# totalFailureCount (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The number of test failures and uncaught exceptions during the run.

## Declaration

```swift
var totalFailureCount: Int { get }
```

## See Also

### Gathering Test Outcomes

- [hasSucceeded](hassucceeded.md): A Boolean value that returns true if all tests in the run completed without recording any failures; otherwise, false.
- [hasBeenSkipped](hasbeenskipped.md): A Boolean value that indicates a skipped test.
- [executionCount](executioncount.md): The number of test executions during the run.
- [failureCount](failurecount.md): The number of test failures during the run.
- [skipCount](skipcount.md): The number of skipped tests during the run.
- [test](test.md): The test instance for the test run.
- [testCaseCount](testcasecount.md): The number of tests in the run.
- [unexpectedExceptionCount](unexpectedexceptioncount.md): The number of uncaught exceptions during the run.

# totalFailureCount (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The number of test failures and uncaught exceptions during the run.

## Declaration

```objectivec
@property (readonly) NSUInteger totalFailureCount;
```

## See Also

### Gathering Test Outcomes

- [hasSucceeded](hassucceeded.md): A Boolean value that returns true if all tests in the run completed without recording any failures; otherwise, false.
- [hasBeenSkipped](hasbeenskipped.md): A Boolean value that indicates a skipped test.
- [executionCount](executioncount.md): The number of test executions during the run.
- [failureCount](failurecount.md): The number of test failures during the run.
- [skipCount](skipcount.md): The number of skipped tests during the run.
- [test](test.md): The test instance for the test run.
- [testCaseCount](testcasecount.md): The number of tests in the run.
- [unexpectedExceptionCount](unexpectedexceptioncount.md): The number of uncaught exceptions during the run.
