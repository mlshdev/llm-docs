> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctest/testrunclass](https://developer.apple.com/documentation/xctest/xctest/testrunclass)

# testRunClass (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The test run subclass to instantiate when the test runs, which records the test’s results.

## Declaration

```swift
var testRunClass: AnyClass? { get }
```

<a id="Discussion"></a>

## Discussion

Subclasses must override `testRunClass`.

## See Also

### Examining Test Properties

- [name](name.md): The name of the test.
- [testCaseCount](testcasecount.md): The number of test cases in the test.
- [testRun](testrun.md): The test run object that executes the test.

# testRunClass (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The test run subclass to instantiate when the test runs, which records the test’s results.

## Declaration

```objectivec
@property (readonly, nullable) Class testRunClass;
```

<a id="Discussion"></a>

## Discussion

Subclasses must override `testRunClass`.

## See Also

### Examining Test Properties

- [name](name.md): The name of the test.
- [testCaseCount](testcasecount.md): The number of test cases in the test.
- [testRun](testrun.md): The test run object that executes the test.
