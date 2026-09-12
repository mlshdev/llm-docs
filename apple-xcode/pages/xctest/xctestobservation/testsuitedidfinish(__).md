> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobservation/testsuitedidfinish(_:)](https://developer.apple.com/documentation/xctest/xctestobservation/testsuitedidfinish(_:))

# testSuiteDidFinish(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer immediately after a test suite finishes executing.

## Declaration

```swift
optional func testSuiteDidFinish(_ testSuite: XCTestSuite)
```

## Parameters

- `testSuite`: The test suite that finished executing. Additional information about the suite can be retrieved from the test suite’s associated [XCTestRun](../xctestrun.md).

## See Also

### Observation Methods

- [testBundleWillStart(\_:)](testbundlewillstart%28__%29.md): Notifies the observer immediately before any tests in a test bundle begin.
- [testSuiteWillStart(\_:)](testsuitewillstart%28__%29.md): Notifies the observer immediately before a test suite begins executing.
- [testCaseWillStart(\_:)](testcasewillstart%28__%29.md): Notifies the observer immediately before a test case begins executing.
- [testCase(\_:didRecord:)](testcase%28__didrecord_%29-4cou6.md): Notifies the observer when a test case reports an issue.
- [testCase(\_:didRecord:)](testcase%28__didrecord_%29-8k955.md): Notifies the observer when a test case records an expected failure.
- [testCase(\_:didFailWithDescription:inFile:atLine:)](testcase%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case reports a failure.
- [testCaseDidFinish(\_:)](testcasedidfinish%28__%29.md): Notifies the observer immediately after a test case finishes executing.
- [testSuite(\_:didRecord:)](testsuite%28__didrecord_%29-3rk9k.md): Notifies the observer when a test suite reports an issue.
- [testSuite(\_:didRecord:)](testsuite%28__didrecord_%29-1xjkv.md): Notifies the observer when a test suite records an expected failure.
- [testSuite(\_:didFailWithDescription:inFile:atLine:)](testsuite%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test suite reports a failure.
- [testBundleDidFinish(\_:)](testbundledidfinish%28__%29.md): Notifies the observer immediately after all tests in a test bundle finish executing.

# testSuiteDidFinish: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer immediately after a test suite finishes executing.

## Declaration

```objectivec
- (void) testSuiteDidFinish:(XCTestSuite *) testSuite;
```

## Parameters

- `testSuite`: The test suite that finished executing. Additional information about the suite can be retrieved from the test suite’s associated [XCTestRun](../xctestrun.md).

## See Also

### Observation Methods

- [testBundleWillStart:](testbundlewillstart%28__%29.md): Notifies the observer immediately before any tests in a test bundle begin.
- [testSuiteWillStart:](testsuitewillstart%28__%29.md): Notifies the observer immediately before a test suite begins executing.
- [testCaseWillStart:](testcasewillstart%28__%29.md): Notifies the observer immediately before a test case begins executing.
- [testCase:didRecordIssue:](testcase%28__didrecord_%29-4cou6.md): Notifies the observer when a test case reports an issue.
- [testCase:didRecordExpectedFailure:](testcase%28__didrecord_%29-8k955.md): Notifies the observer when a test case records an expected failure.
- [testCase:didFailWithDescription:inFile:atLine:](testcase%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case reports a failure.
- [testCaseDidFinish:](testcasedidfinish%28__%29.md): Notifies the observer immediately after a test case finishes executing.
- [testSuite:didRecordIssue:](testsuite%28__didrecord_%29-3rk9k.md): Notifies the observer when a test suite reports an issue.
- [testSuite:didRecordExpectedFailure:](testsuite%28__didrecord_%29-1xjkv.md): Notifies the observer when a test suite records an expected failure.
- [testSuite:didFailWithDescription:inFile:atLine:](testsuite%28__didfailwithdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test suite reports a failure.
- [testBundleDidFinish:](testbundledidfinish%28__%29.md): Notifies the observer immediately after all tests in a test bundle finish executing.
