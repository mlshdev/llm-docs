> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobserver/testsuitedidstart(_:)](https://developer.apple.com/documentation/xctest/xctestobserver/testsuitedidstart(_:))

# testSuiteDidStart(\_:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test suite starts.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```swift
func testSuiteDidStart(_ testRun: XCTestRun!)
```

## Parameters

- `testRun`: The test run object that calls this method.

## See Also

### Monitoring Test Activity

- [testCaseDidFail(\_:withDescription:inFile:atLine:)](testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStart(\_:)](testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testCaseDidStop(\_:)](testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStop(\_:)](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.

# testSuiteDidStart: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test suite starts.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```objectivec
- (void) testSuiteDidStart:(XCTestRun *) testRun;
```

## Parameters

- `testRun`: The test run object that calls this method.

## See Also

### Monitoring Test Activity

- [testCaseDidFail:withDescription:inFile:atLine:](testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStart:](testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testCaseDidStop:](testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStop:](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.
