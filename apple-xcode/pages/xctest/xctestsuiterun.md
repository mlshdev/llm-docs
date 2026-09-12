> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestsuiterun](https://developer.apple.com/documentation/xctest/xctestsuiterun)

# XCTestSuiteRun (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that collects information about a specific execution of a test suite.

## Declaration

```swift
class XCTestSuiteRun
```

<a id="overview"></a>

## Overview

The test runner manages the creation and tracking of `XCTestSuiteRun` for an [XCTestSuite](xctestsuite.md).

## Topics

### Managing Test Runs

- [addTestRun(\_:)](xctestsuiterun/addtestrun%28__%29.md): Adds a test run to the test suite.
- [testRuns](xctestsuiterun/testruns.md): An array of test runs that the test suite manages.

## Relationships

### Inherits From

- [XCTestRun](xctestrun.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Test Runs

- [XCTestCaseRun](xctestcaserun.md): An object that collects information about a specific execution of a test case.
- [XCTestRun](xctestrun.md): A base class for collecting information about a specific execution of a test.

# XCTestSuiteRun (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that collects information about a specific execution of a test suite.

## Declaration

```objectivec
@interface XCTestSuiteRun : XCTestRun
```

<a id="overview"></a>

## Overview

The test runner manages the creation and tracking of `XCTestSuiteRun` for an [XCTestSuite](xctestsuite.md).

## Topics

### Managing Test Runs

- [addTestRun:](xctestsuiterun/addtestrun%28__%29.md): Adds a test run to the test suite.
- [testRuns](xctestsuiterun/testruns.md): An array of test runs that the test suite manages.

## Relationships

### Inherits From

- [XCTestRun](xctestrun.md)

## See Also

### Test Runs

- [XCTestCaseRun](xctestcaserun.md): An object that collects information about a specific execution of a test case.
- [XCTestRun](xctestrun.md): A base class for collecting information about a specific execution of a test.
