> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/testcasecount](https://developer.apple.com/documentation/xctest/xctest/testcasecount)

# testCaseCount (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The number of test cases in the test.

## Declaration

```swift
var testCaseCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.

## See Also

### Examining Test Properties

- [name](name.md): The name of the test.
- [testRun](testrun.md): The test run object that executes the test.
- [testRunClass](testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.

# testCaseCount (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The number of test cases in the test.

## Declaration

```objectivec
@property (readonly) NSUInteger testCaseCount;
```

<a id="Discussion"></a>

## Discussion

Must be overridden by subclasses.

## See Also

### Examining Test Properties

- [name](name.md): The name of the test.
- [testRun](testrun.md): The test run object that executes the test.
- [testRunClass](testrunclass.md): The test run subclass to instantiate when the test runs, which records the test’s results.
