> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuite/testsuitewithname:](https://developer.apple.com/documentation/xctest/xctestsuite/testsuitewithname:)

# testSuiteWithName:

**Interface language:** Objective-C

**Framework:** XCTest  
**Kind:** Type Method

Creates a test suite with the specified name.

## Declaration

```objectivec
+ (instancetype) testSuiteWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the test.

## See Also

### Creating Test Suites

- [defaultTestSuite](default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [initWithName:](init%28name_%29.md): Creates a test suite with the specified name.
- [testSuiteForBundlePath:](init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [testSuiteForTestCaseClass:](init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [testSuiteForTestCaseWithName:](init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.
