> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobserver/testcasedidstart(_:)](https://developer.apple.com/documentation/xctest/xctestobserver/testcasedidstart(_:))

# testCaseDidStart(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case starts.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```swift
func testCaseDidStart(_ testRun: XCTestRun!)
```

## Parameters

- `testRun`: The test run object that calls this method.

## See Also

### Monitoring Test Activity

- [testCaseDidFail(\_:withDescription:inFile:atLine:)](testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStop(\_:)](testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStart(\_:)](testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop(\_:)](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.

# testCaseDidStart: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case starts.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```objectivec
- (void) testCaseDidStart:(XCTestRun *) testRun;
```

## Parameters

- `testRun`: The test run object that calls this method.

## See Also

### Monitoring Test Activity

- [testCaseDidFail:withDescription:inFile:atLine:](testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStop:](testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStart:](testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop:](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.
