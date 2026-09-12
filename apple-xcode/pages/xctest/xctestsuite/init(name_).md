> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuite/init(name:)](https://developer.apple.com/documentation/xctest/xctestsuite/init(name:))

# init(name:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates a test suite with the specified name.

## Declaration

```swift
init(name: String)
```

## Parameters

- `name`: The name of the test.

## See Also

### Creating Test Suites

- [default](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [init(forBundlePath:)](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [init(forTestCaseClass:)](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [init(forTestCaseWithName:)](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.

# initWithName: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a test suite with the specified name.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the test.

## See Also

### Creating Test Suites

- [defaultTestSuite](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [testSuiteWithName:](testsuitewithname_.md): Creates a test suite with the specified name.
- [testSuiteForBundlePath:](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [testSuiteForTestCaseClass:](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [testSuiteForTestCaseWithName:](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.
