> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestrun](https://developer.apple.com/documentation/xctest/xctestrun)

# XCTestRun (Swift)

**Framework:** XCTest  
**Kind:** Class

A base class for collecting information about a specific execution of a test.

## Declaration

```swift
class XCTestRun
```

<a id="overview"></a>

## Overview

`XCTestRun` classifies failures in explicit test assertions as *expected*, and failures from unrelated or uncaught exceptions as *unexpected*.

## Topics

### Creating Test Runs

- [init(test:)](xctestrun/init%28test_%29.md): Creates a new test run for the provided test.

### Performing Test Runs

- [start()](xctestrun/start%28%29.md): Starts a test run.
- [stop()](xctestrun/stop%28%29.md): Stops a test run.
- [record(\_:)](xctestrun/record%28__%29.md): Records an issue during test execution for the test run.

### Tracking Test Durations

- [startDate](xctestrun/startdate.md): The date and time when the test run started, or no value if the test hasn’t run.
- [stopDate](xctestrun/stopdate.md): The date and time when the test run stopped, or no value if the test hasn’t run.
- [testDuration](xctestrun/testduration.md): The number of seconds that elapse between when the run starts and when it stops.
- [totalDuration](xctestrun/totalduration.md): The number of seconds that elapse between when the run starts and when it stops.

### Gathering Test Outcomes

- [hasSucceeded](xctestrun/hassucceeded.md): A Boolean value that returns true if all tests in the run completed without recording any failures; otherwise, false.
- [hasBeenSkipped](xctestrun/hasbeenskipped.md): A Boolean value that indicates a skipped test.
- [executionCount](xctestrun/executioncount.md): The number of test executions during the run.
- [failureCount](xctestrun/failurecount.md): The number of test failures during the run.
- [skipCount](xctestrun/skipcount.md): The number of skipped tests during the run.
- [test](xctestrun/test.md): The test instance for the test run.
- [testCaseCount](xctestrun/testcasecount.md): The number of tests in the run.
- [totalFailureCount](xctestrun/totalfailurecount.md): The number of test failures and uncaught exceptions during the run.
- [unexpectedExceptionCount](xctestrun/unexpectedexceptioncount.md): The number of uncaught exceptions during the run.

### Deprecated

- [recordFailure(withDescription:inFile:atLine:expected:)](xctestrun/recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during test execution for the test run.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTestCaseRun](xctestcaserun.md)
- [XCTestSuiteRun](xctestsuiterun.md)

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
- [XCTestSuiteRun](xctestsuiterun.md): An object that collects information about a specific execution of a test suite.

# XCTestRun (Objective-C)

**Framework:** XCTest  
**Kind:** Class

A base class for collecting information about a specific execution of a test.

## Declaration

```objectivec
@interface XCTestRun : NSObject
```

<a id="overview"></a>

## Overview

`XCTestRun` classifies failures in explicit test assertions as *expected*, and failures from unrelated or uncaught exceptions as *unexpected*.

## Topics

### Creating Test Runs

- [initWithTest:](xctestrun/init%28test_%29.md): Creates a new test run for the provided test.
- [testRunWithTest:](xctestrun/testrunwithtest_.md): Creates a new [XCTestRun](xctestrun.md) for the provided test.

### Performing Test Runs

- [start](xctestrun/start%28%29.md): Starts a test run.
- [stop](xctestrun/stop%28%29.md): Stops a test run.
- [recordIssue:](xctestrun/record%28__%29.md): Records an issue during test execution for the test run.

### Tracking Test Durations

- [startDate](xctestrun/startdate.md): The date and time when the test run started, or no value if the test hasn’t run.
- [stopDate](xctestrun/stopdate.md): The date and time when the test run stopped, or no value if the test hasn’t run.
- [testDuration](xctestrun/testduration.md): The number of seconds that elapse between when the run starts and when it stops.
- [totalDuration](xctestrun/totalduration.md): The number of seconds that elapse between when the run starts and when it stops.

### Gathering Test Outcomes

- [hasSucceeded](xctestrun/hassucceeded.md): A Boolean value that returns true if all tests in the run completed without recording any failures; otherwise, false.
- [hasBeenSkipped](xctestrun/hasbeenskipped.md): A Boolean value that indicates a skipped test.
- [executionCount](xctestrun/executioncount.md): The number of test executions during the run.
- [failureCount](xctestrun/failurecount.md): The number of test failures during the run.
- [skipCount](xctestrun/skipcount.md): The number of skipped tests during the run.
- [test](xctestrun/test.md): The test instance for the test run.
- [testCaseCount](xctestrun/testcasecount.md): The number of tests in the run.
- [totalFailureCount](xctestrun/totalfailurecount.md): The number of test failures and uncaught exceptions during the run.
- [unexpectedExceptionCount](xctestrun/unexpectedexceptioncount.md): The number of uncaught exceptions during the run.

### Deprecated

- [recordFailureWithDescription:inFile:atLine:expected:](xctestrun/recordfailure%28withdescription_infile_atline_expected_%29.md): Deprecated. Records a failure during test execution for the test run.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTestCaseRun](xctestcaserun.md)
- [XCTestSuiteRun](xctestsuiterun.md)

## See Also

### Test Runs

- [XCTestCaseRun](xctestcaserun.md): An object that collects information about a specific execution of a test case.
- [XCTestSuiteRun](xctestsuiterun.md): An object that collects information about a specific execution of a test suite.
