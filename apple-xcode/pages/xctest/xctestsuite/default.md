> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuite/default](https://developer.apple.com/documentation/xctest/xctestsuite/default)

# default (Swift)

**Framework:** XCTest  
**Kind:** Type Property

Creates a suite of test suites that represents all test case methods in the current runtime.

## Declaration

```swift
class var `default`: XCTestSuite { get }
```

## See Also

### Creating Test Suites

- [init(name:)](init%28name_%29.md): Creates a test suite with the specified name.
- [init(forBundlePath:)](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [init(forTestCaseClass:)](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [init(forTestCaseWithName:)](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.

# defaultTestSuite (Objective-C)

**Framework:** XCTest  
**Kind:** Type Property

Creates a suite of test suites that represents all test case methods in the current runtime.

## Declaration

```objectivec
@property (class, readonly) XCTestSuite * defaultTestSuite;
```

## See Also

### Creating Test Suites

- [initWithName:](init%28name_%29.md): Creates a test suite with the specified name.
- [testSuiteWithName:](testsuitewithname_.md): Creates a test suite with the specified name.
- [testSuiteForBundlePath:](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [testSuiteForTestCaseClass:](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [testSuiteForTestCaseWithName:](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.
