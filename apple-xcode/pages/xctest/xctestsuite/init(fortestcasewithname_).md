> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuite/init(fortestcasewithname:)](https://developer.apple.com/documentation/xctest/xctestsuite/init(fortestcasewithname:))

# init(forTestCaseWithName:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates a test suite that contains a test case with the specified name.

## Declaration

```swift
convenience init(forTestCaseWithName name: String)
```

## Parameters

- `name`: A string that specifies a test case.

## See Also

### Creating Test Suites

- [default](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [init(name:)](init%28name_%29.md): Creates a test suite with the specified name.
- [init(forBundlePath:)](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [init(forTestCaseClass:)](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.

# testSuiteForTestCaseWithName: (Objective-C)

**Framework:** XCTest  
**Kind:** Type Method

Creates a test suite that contains a test case with the specified name.

## Declaration

```objectivec
+ (instancetype) testSuiteForTestCaseWithName:(NSString *) name;
```

## Parameters

- `name`: A string that specifies a test case.

## See Also

### Creating Test Suites

- [defaultTestSuite](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [initWithName:](init%28name_%29.md): Creates a test suite with the specified name.
- [testSuiteWithName:](testsuitewithname_.md): Creates a test suite with the specified name.
- [testSuiteForBundlePath:](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [testSuiteForTestCaseClass:](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
