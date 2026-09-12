> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuite](https://developer.apple.com/documentation/xctest/xctestsuite)

# XCTestSuite (Swift)

**Framework:** XCTest  
**Kind:** Class

A collection of test cases to manage as a test suite.

## Declaration

```swift
class XCTestSuite
```

<a id="overview"></a>

## Overview

Typically, Xcode automatically manages test suites for you. Only use [XCTestSuite](xctestsuite.md) if you need to define your own custom test suites programmatically.

## Topics

### Creating Test Suites

- [default](xctestsuite/default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [init(name:)](xctestsuite/init%28name_%29.md): Creates a test suite with the specified name.
- [init(forBundlePath:)](xctestsuite/init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [init(forTestCaseClass:)](xctestsuite/init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [init(forTestCaseWithName:)](xctestsuite/init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.

### Managing Tests

- [addTest(\_:)](xctestsuite/addtest%28__%29.md): Adds a test to the test suite.
- [tests](xctestsuite/tests.md): All tests currently in the test suite.

## Relationships

### Inherits From

- [XCTest](xctest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# XCTestSuite (Objective-C)

**Framework:** XCTest  
**Kind:** Class

A collection of test cases to manage as a test suite.

## Declaration

```objectivec
@interface XCTestSuite : XCTest
```

<a id="overview"></a>

## Overview

Typically, Xcode automatically manages test suites for you. Only use [XCTestSuite](xctestsuite.md) if you need to define your own custom test suites programmatically.

## Topics

### Creating Test Suites

- [defaultTestSuite](xctestsuite/default.md): Creates a suite of test suites that represents all test case methods in the current runtime.
- [initWithName:](xctestsuite/init%28name_%29.md): Creates a test suite with the specified name.
- [testSuiteWithName:](xctestsuite/testsuitewithname_.md): Creates a test suite with the specified name.
- [testSuiteForBundlePath:](xctestsuite/init%28forbundlepath_%29.md): Creates a test suite with the bundle at the specified path.
- [testSuiteForTestCaseClass:](xctestsuite/init%28fortestcaseclass_%29.md): Creates a test suite that contains all test methods in the specified class.
- [testSuiteForTestCaseWithName:](xctestsuite/init%28fortestcasewithname_%29.md): Creates a test suite that contains a test case with the specified name.

### Managing Tests

- [addTest:](xctestsuite/addtest%28__%29.md): Adds a test to the test suite.
- [tests](xctestsuite/tests.md): All tests currently in the test suite.

## Relationships

### Inherits From

- [XCTest](xctest.md)
