> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobservation/testcase(_:didfailwithdescription:infile:atline:)](https://developer.apple.com/documentation/xctest/xctestobservation/testcase(_:didfailwithdescription:infile:atline:))

# testCase(\_:didFailWithDescription:inFile:atLine:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case reports a failure.

> Use [testCase(\_:didRecord:)](testcase%28__didrecord_%29-4cou6.md) instead. If you implement both this method and [testCase(\_:didRecord:)](testcase%28__didrecord_%29-4cou6.md), the test will not call this method.

## Declaration

```swift
optional func testCase(_ testCase: XCTestCase, didFailWithDescription description: String, inFile filePath: String?, atLine lineNumber: Int)
```

## Parameters

- `testCase`: The test case that reported a failure. Additional information about the test case can be retrieved from the test case’s associated [XCTestRun](../xctestrun.md).
- `description`: A textual description of the failure.
- `filePath`: The path to the file in the failure occurred, or `nil` if the file path is unknown.
- `lineNumber`: The line number on which the failure was reported.

## See Also

### Observation Methods

- [testBundleWillStart(\_:)](testbundlewillstart%28__%29.md): Notifies the observer immediately before any tests in a test bundle begin.
- [testSuiteWillStart(\_:)](testsuitewillstart%28__%29.md): Notifies the observer immediately before a test suite begins executing.
- [testCaseWillStart(\_:)](testcasewillstart%28__%29.md): Notifies the observer immediately before a test case begins executing.
- [testCase(\_:didRecord:)](testcase%28__didrecord_%29-4cou6.md): Notifies the observer when a test case reports an issue.
- [testCase(\_:didRecord:)](testcase%28__didrecord_%29-8k955.md): Notifies the observer when a test case records an expected failure.
- [testCaseDidFinish(\_:)](testcasedidfinish%28__%29.md): Notifies the observer immediately after a test case finishes executing.
- [testSuite(\_:didRecord:)](testsuite%28__didrecord_%29-3rk9k.md): Notifies the observer when a test suite reports an issue.
- [testSuite(\_:didRecord:)](testsuite%28__didrecord_%29-1xjkv.md): Notifies the observer when a test suite records an expected failure.
- [testSuite(\_:didFailWithDescription:inFile:atLine:)](testsuite%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test suite reports a failure.
- [testSuiteDidFinish(\_:)](testsuitedidfinish%28__%29.md): Notifies the observer immediately after a test suite finishes executing.
- [testBundleDidFinish(\_:)](testbundledidfinish%28__%29.md): Notifies the observer immediately after all tests in a test bundle finish executing.

# testCase:didFailWithDescription:inFile:atLine: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case reports a failure.

> Use [testCase:didRecordIssue:](testcase%28__didrecord_%29-4cou6.md) instead. If you implement both this method and [testCase:didRecordIssue:](testcase%28__didrecord_%29-4cou6.md), the test will not call this method.

## Declaration

```objectivec
- (void) testCase:(XCTestCase *) testCase didFailWithDescription:(NSString *) description inFile:(NSString *) filePath atLine:(NSUInteger) lineNumber;
```

## Parameters

- `testCase`: The test case that reported a failure. Additional information about the test case can be retrieved from the test case’s associated [XCTestRun](../xctestrun.md).
- `description`: A textual description of the failure.
- `filePath`: The path to the file in the failure occurred, or `nil` if the file path is unknown.
- `lineNumber`: The line number on which the failure was reported.

## See Also

### Observation Methods

- [testBundleWillStart:](testbundlewillstart%28__%29.md): Notifies the observer immediately before any tests in a test bundle begin.
- [testSuiteWillStart:](testsuitewillstart%28__%29.md): Notifies the observer immediately before a test suite begins executing.
- [testCaseWillStart:](testcasewillstart%28__%29.md): Notifies the observer immediately before a test case begins executing.
- [testCase:didRecordIssue:](testcase%28__didrecord_%29-4cou6.md): Notifies the observer when a test case reports an issue.
- [testCase:didRecordExpectedFailure:](testcase%28__didrecord_%29-8k955.md): Notifies the observer when a test case records an expected failure.
- [testCaseDidFinish:](testcasedidfinish%28__%29.md): Notifies the observer immediately after a test case finishes executing.
- [testSuite:didRecordIssue:](testsuite%28__didrecord_%29-3rk9k.md): Notifies the observer when a test suite reports an issue.
- [testSuite:didRecordExpectedFailure:](testsuite%28__didrecord_%29-1xjkv.md): Notifies the observer when a test suite records an expected failure.
- [testSuite:didFailWithDescription:inFile:atLine:](testsuite%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test suite reports a failure.
- [testSuiteDidFinish:](testsuitedidfinish%28__%29.md): Notifies the observer immediately after a test suite finishes executing.
- [testBundleDidFinish:](testbundledidfinish%28__%29.md): Notifies the observer immediately after all tests in a test bundle finish executing.
