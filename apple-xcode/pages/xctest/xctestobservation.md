> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobservation](https://developer.apple.com/documentation/xctest/xctestobservation)

# XCTestObservation (Swift)

**Framework:** XCTest  
**Kind:** Protocol

A protocol that defines methods the test runner calls in response to significant events during test runs.

## Declaration

```swift
protocol XCTestObservation : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The system calls the notification methods for [XCTestObservation](xctestobservation.md) in the following sequence for a test bundle:

1. [testBundleWillStart(\_:)](xctestobservation/testbundlewillstart%28__%29.md) — exactly once per test bundle
2. [testSuiteWillStart(\_:)](xctestobservation/testsuitewillstart%28__%29.md) — exactly once per test suite
3. [testCaseWillStart(\_:)](xctestobservation/testcasewillstart%28__%29.md) — exactly once per test case
4. [testCase(\_:didRecord:)](xctestobservation/testcase%28__didrecord_%29-4cou6.md)  — for each test failure, zero or more times per test case at any point between test case start and finish
5. [testCase(\_:didRecord:)](xctestobservation/testcase%28__didrecord_%29-8k955.md)  — for each expected test failure, zero or more times per test case at any point between test case start and finish
6. [testCaseDidFinish(\_:)](xctestobservation/testcasedidfinish%28__%29.md) — exactly once per test case
7. [testSuite(\_:didRecord:)](xctestobservation/testsuite%28__didrecord_%29-3rk9k.md) — for each test failure, zero or more times per test suite at any point between test suite start and finish
8. [testSuite(\_:didRecord:)](xctestobservation/testsuite%28__didrecord_%29-1xjkv.md) — for each expected test failure, zero or more times per test suite at any point between test suite start and finish
9. [testSuiteDidFinish(\_:)](xctestobservation/testsuitedidfinish%28__%29.md) — exactly once per test suite
10. [testBundleDidFinish(\_:)](xctestobservation/testbundledidfinish%28__%29.md) — exactly once per test bundle

See [XCTestObservationCenter](xctestobservationcenter.md) for details about registering and removing test observers.

## Topics

### Observation Methods

- [testBundleWillStart(\_:)](xctestobservation/testbundlewillstart%28__%29.md): Notifies the observer immediately before any tests in a test bundle begin.
- [testSuiteWillStart(\_:)](xctestobservation/testsuitewillstart%28__%29.md): Notifies the observer immediately before a test suite begins executing.
- [testCaseWillStart(\_:)](xctestobservation/testcasewillstart%28__%29.md): Notifies the observer immediately before a test case begins executing.
- [testCase(\_:didRecord:)](xctestobservation/testcase%28__didrecord_%29-4cou6.md): Notifies the observer when a test case reports an issue.
- [testCase(\_:didRecord:)](xctestobservation/testcase%28__didrecord_%29-8k955.md): Notifies the observer when a test case records an expected failure.
- [testCase(\_:didFailWithDescription:inFile:atLine:)](xctestobservation/testcase%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case reports a failure.
- [testCaseDidFinish(\_:)](xctestobservation/testcasedidfinish%28__%29.md): Notifies the observer immediately after a test case finishes executing.
- [testSuite(\_:didRecord:)](xctestobservation/testsuite%28__didrecord_%29-3rk9k.md): Notifies the observer when a test suite reports an issue.
- [testSuite(\_:didRecord:)](xctestobservation/testsuite%28__didrecord_%29-1xjkv.md): Notifies the observer when a test suite records an expected failure.
- [testSuite(\_:didFailWithDescription:inFile:atLine:)](xctestobservation/testsuite%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test suite reports a failure.
- [testSuiteDidFinish(\_:)](xctestobservation/testsuitedidfinish%28__%29.md): Notifies the observer immediately after a test suite finishes executing.
- [testBundleDidFinish(\_:)](xctestobservation/testbundledidfinish%28__%29.md): Notifies the observer immediately after all tests in a test bundle finish executing.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Test Observation

- [XCTestObservationCenter](xctestobservationcenter.md): Provides information about the progress of test runs to registered observers.

# XCTestObservation (Objective-C)

**Framework:** XCTest  
**Kind:** Protocol

A protocol that defines methods the test runner calls in response to significant events during test runs.

## Declaration

```objectivec
@protocol XCTestObservation <NSObject>
```

<a id="overview"></a>

## Overview

The system calls the notification methods for [XCTestObservation](xctestobservation.md) in the following sequence for a test bundle:

1. [testBundleWillStart:](xctestobservation/testbundlewillstart%28__%29.md) — exactly once per test bundle
2. [testSuiteWillStart:](xctestobservation/testsuitewillstart%28__%29.md) — exactly once per test suite
3. [testCaseWillStart:](xctestobservation/testcasewillstart%28__%29.md) — exactly once per test case
4. [testCase:didRecordIssue:](xctestobservation/testcase%28__didrecord_%29-4cou6.md)  — for each test failure, zero or more times per test case at any point between test case start and finish
5. [testCase:didRecordExpectedFailure:](xctestobservation/testcase%28__didrecord_%29-8k955.md)  — for each expected test failure, zero or more times per test case at any point between test case start and finish
6. [testCaseDidFinish:](xctestobservation/testcasedidfinish%28__%29.md) — exactly once per test case
7. [testSuite:didRecordIssue:](xctestobservation/testsuite%28__didrecord_%29-3rk9k.md) — for each test failure, zero or more times per test suite at any point between test suite start and finish
8. [testSuite:didRecordExpectedFailure:](xctestobservation/testsuite%28__didrecord_%29-1xjkv.md) — for each expected test failure, zero or more times per test suite at any point between test suite start and finish
9. [testSuiteDidFinish:](xctestobservation/testsuitedidfinish%28__%29.md) — exactly once per test suite
10. [testBundleDidFinish:](xctestobservation/testbundledidfinish%28__%29.md) — exactly once per test bundle

See [XCTestObservationCenter](xctestobservationcenter.md) for details about registering and removing test observers.

## Topics

### Observation Methods

- [testBundleWillStart:](xctestobservation/testbundlewillstart%28__%29.md): Notifies the observer immediately before any tests in a test bundle begin.
- [testSuiteWillStart:](xctestobservation/testsuitewillstart%28__%29.md): Notifies the observer immediately before a test suite begins executing.
- [testCaseWillStart:](xctestobservation/testcasewillstart%28__%29.md): Notifies the observer immediately before a test case begins executing.
- [testCase:didRecordIssue:](xctestobservation/testcase%28__didrecord_%29-4cou6.md): Notifies the observer when a test case reports an issue.
- [testCase:didRecordExpectedFailure:](xctestobservation/testcase%28__didrecord_%29-8k955.md): Notifies the observer when a test case records an expected failure.
- [testCase:didFailWithDescription:inFile:atLine:](xctestobservation/testcase%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case reports a failure.
- [testCaseDidFinish:](xctestobservation/testcasedidfinish%28__%29.md): Notifies the observer immediately after a test case finishes executing.
- [testSuite:didRecordIssue:](xctestobservation/testsuite%28__didrecord_%29-3rk9k.md): Notifies the observer when a test suite reports an issue.
- [testSuite:didRecordExpectedFailure:](xctestobservation/testsuite%28__didrecord_%29-1xjkv.md): Notifies the observer when a test suite records an expected failure.
- [testSuite:didFailWithDescription:inFile:atLine:](xctestobservation/testsuite%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test suite reports a failure.
- [testSuiteDidFinish:](xctestobservation/testsuitedidfinish%28__%29.md): Notifies the observer immediately after a test suite finishes executing.
- [testBundleDidFinish:](xctestobservation/testbundledidfinish%28__%29.md): Notifies the observer immediately after all tests in a test bundle finish executing.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Test Observation

- [XCTestObservationCenter](xctestobservationcenter.md): Provides information about the progress of test runs to registered observers.
