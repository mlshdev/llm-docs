> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcaserun](https://developer.apple.com/documentation/xctest/xctestcaserun)

# XCTestCaseRun (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that collects information about a specific execution of a test case.

## Declaration

```swift
class XCTestCaseRun
```

<a id="overview"></a>

## Overview

The test runner manages the creation and tracking of `XCTestCaseRun` for each [XCTestCase](xctestcase.md) in an [XCTestSuite](xctestsuite.md).

## Topics

### Deprecated

- [recordFailure(inTest:withDescription:inFile:atLine:expected:)](xctestcaserun/recordfailure%28intest_withdescription_infile_atline_expected_%29.md): Deprecated. Records a test failure during test execution for this test run.

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

- [XCTestSuiteRun](xctestsuiterun.md): An object that collects information about a specific execution of a test suite.
- [XCTestRun](xctestrun.md): A base class for collecting information about a specific execution of a test.

# XCTestCaseRun (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that collects information about a specific execution of a test case.

## Declaration

```objectivec
@interface XCTestCaseRun : XCTestRun
```

<a id="overview"></a>

## Overview

The test runner manages the creation and tracking of `XCTestCaseRun` for each [XCTestCase](xctestcase.md) in an [XCTestSuite](xctestsuite.md).

## Topics

### Deprecated

- [recordFailureInTest:withDescription:inFile:atLine:expected:](xctestcaserun/recordfailure%28intest_withdescription_infile_atline_expected_%29.md): Deprecated. Records a test failure during test execution for this test run.

## Relationships

### Inherits From

- [XCTestRun](xctestrun.md)

## See Also

### Test Runs

- [XCTestSuiteRun](xctestsuiterun.md): An object that collects information about a specific execution of a test suite.
- [XCTestRun](xctestrun.md): A base class for collecting information about a specific execution of a test.
