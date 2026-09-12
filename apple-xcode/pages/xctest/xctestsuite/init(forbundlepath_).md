> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuite/init(forbundlepath:)](https://developer.apple.com/documentation/xctest/xctestsuite/init(forbundlepath:))

# init(forBundlePath:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates a test suite with the bundle at the specified path.

## Declaration

```swift
convenience init(forBundlePath bundlePath: String)
```

## Parameters

- `bundlePath`: A string that represents a file path to a bundle.

## See Also

### Creating Test Suites

- [default](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [init(name:)](init%28name_%29.md): Creates a test suite with the specified name.
- [init(forTestCaseClass:)](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [init(forTestCaseWithName:)](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.

# testSuiteForBundlePath: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates a test suite with the bundle at the specified path.

## Declaration

```objectivec
+ (instancetype) testSuiteForBundlePath:(NSString *) bundlePath;
```

## Parameters

- `bundlePath`: A string that represents a file path to a bundle.

## See Also

### Creating Test Suites

- [defaultTestSuite](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [initWithName:](init%28name_%29.md): Creates a test suite with the specified name.
- [testSuiteWithName:](testsuitewithname_.md): Creates a test suite with the specified name.
- [testSuiteForTestCaseClass:](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [testSuiteForTestCaseWithName:](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.
