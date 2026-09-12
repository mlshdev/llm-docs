> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobserver/testcasedidfail(_:withdescription:infile:atline:)](https://developer.apple.com/documentation/xctest/xctestobserver/testcasedidfail(_:withdescription:infile:atline:))

# testCaseDidFail(\_:withDescription:inFile:atLine:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case fails.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```swift
func testCaseDidFail(_ testRun: XCTestRun!, withDescription description: String!, inFile filePath: String!, atLine lineNumber: Int)
```

## Parameters

- `testRun`: The test run object that calls this method.
- `description`: A string description of the failed test.
- `filePath`: A string that represents a file path to a source code file when the test encounters a failure.
- `lineNumber`: An integer value that represents the line number in the source code file when the test encounters a failure.

## See Also

### Monitoring Test Activity

- [testCaseDidStart(\_:)](testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testCaseDidStop(\_:)](testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStart(\_:)](testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop(\_:)](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.

# testCaseDidFail:withDescription:inFile:atLine: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Notifies the observer when a test case fails.

> Use the XCTestObservationCenter class and XCTestObservation protocol instead.

## Declaration

```objectivec
- (void) testCaseDidFail:(XCTestRun *) testRun withDescription:(NSString *) description inFile:(NSString *) filePath atLine:(NSUInteger) lineNumber;
```

## Parameters

- `testRun`: The test run object that calls this method.
- `description`: A string description of the failed test.
- `filePath`: A string that represents a file path to a source code file when the test encounters a failure.
- `lineNumber`: An integer value that represents the line number in the source code file when the test encounters a failure.

## See Also

### Monitoring Test Activity

- [testCaseDidStart:](testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testCaseDidStop:](testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStart:](testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop:](testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.
