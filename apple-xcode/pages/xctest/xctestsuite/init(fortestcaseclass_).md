> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuite/init(fortestcaseclass:)](https://developer.apple.com/documentation/xctest/xctestsuite/init(fortestcaseclass:))

# init(forTestCaseClass:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates a test suite that contains all test methods in the specified class.

## Declaration

```swift
convenience init(forTestCaseClass testCaseClass: AnyClass)
```

## Parameters

- `testCaseClass`: A class that contains test cases.

## See Also

### Creating Test Suites

- [default](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [init(name:)](init%28name_%29.md): Creates a test suite with the specified name.
- [init(forBundlePath:)](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [init(forTestCaseWithName:)](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.

# testSuiteForTestCaseClass: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates a test suite that contains all test methods in the specified class.

## Declaration

```objectivec
+ (instancetype) testSuiteForTestCaseClass:(Class) testCaseClass;
```

## Parameters

- `testCaseClass`: A class that contains test cases.

## See Also

### Creating Test Suites

- [defaultTestSuite](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [initWithName:](init%28name_%29.md): Creates a test suite with the specified name.
- [testSuiteWithName:](testsuitewithname_.md): Creates a test suite with the specified name.
- [testSuiteForBundlePath:](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [testSuiteForTestCaseWithName:](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.
