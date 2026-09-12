> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/name](https://developer.apple.com/documentation/xctest/xctest/name)

# name (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The name of the test.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.

## See Also

### Examining Test Properties

- [testCaseCount](testcasecount.md): The number of test cases in the test.
- [testRun](testrun.md): The test run object that executes the test.
- [testRunClass](testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.

# name (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The name of the test.

## Declaration

```objectivec
@property (copy, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.

## See Also

### Examining Test Properties

- [testCaseCount](testcasecount.md): The number of test cases in the test.
- [testRun](testrun.md): The test run object that executes the test.
- [testRunClass](testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.
