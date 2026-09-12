> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobserver/testcasedidstop(_:)](https://developer.apple.com/documentation/xctest/xctestobserver/testcasedidstop(_:))

# testCaseDidStop(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case stops.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```swift
func testCaseDidStop(_ testRun: XCTestRun!)
```

## Parameters

- `testRun`: The test run object that calls this method.

## See Also

### Monitoring Test Activity

- [testCaseDidFail(\_:withDescription:inFile:atLine:)](testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStart(\_:)](testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testSuiteDidStart(\_:)](testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop(\_:)](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.

# testCaseDidStop: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case stops.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```objectivec
- (void) testCaseDidStop:(XCTestRun *) testRun;
```

## Parameters

- `testRun`: The test run object that calls this method.

## See Also

### Monitoring Test Activity

- [testCaseDidFail:withDescription:inFile:atLine:](testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStart:](testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testSuiteDidStart:](testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop:](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.
