> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/testrun](https://developer.apple.com/documentation/xctest/xctest/testrun)

# testRun (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The test run object that executes the test.

## Declaration

```swift
var testRun: XCTestRun? { get }
```

<a id="Discussion"></a>

## Discussion

An instance of [testRunClass](testrunclass.md), or `nil` if the test hasn’t run.

## See Also

### Examining Test Properties

- [name](name.md): The name of the test.
- [testCaseCount](testcasecount.md): The number of test cases in the test.
- [testRunClass](testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.

# testRun (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The test run object that executes the test.

## Declaration

```objectivec
@property (readonly, nullable) XCTestRun * testRun;
```

<a id="Discussion"></a>

## Discussion

An instance of [testRunClass](testrunclass.md), or `nil` if the test hasn’t run.

## See Also

### Examining Test Properties

- [name](name.md): The name of the test.
- [testCaseCount](testcasecount.md): The number of test cases in the test.
- [testRunClass](testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.
