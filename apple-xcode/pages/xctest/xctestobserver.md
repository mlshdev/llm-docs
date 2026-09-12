> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestobserver](https://developer.apple.com/documentation/xctest/xctestobserver)

# XCTestObserver (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that observes test activity and events.

> Use [XCTestObservationCenter](xctestobservationcenter.md) instead.

## Declaration

```swift
class XCTestObserver
```

## Topics

### Starting and Stopping Test Observation

- [startObserving()](xctestobserver/startobserving%28%29.md): Deprecated. Starts observing a test.
- [stopObserving()](xctestobserver/stopobserving%28%29.md): Deprecated. Stops observing a test.

### Monitoring Test Activity

- [testCaseDidFail(\_:withDescription:inFile:atLine:)](xctestobserver/testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStart(\_:)](xctestobserver/testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testCaseDidStop(\_:)](xctestobserver/testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStart(\_:)](xctestobserver/testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop(\_:)](xctestobserver/testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTestLog](xctestlog.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated Classes

- [XCTestLog](xctestlog.md): Deprecated. An object that logs test failures and errors.
- [XCTestProbe](xctestprobe.md): Deprecated. An object that observes test activity status.

# XCTestObserver (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that observes test activity and events.

> Use [XCTestObservationCenter](xctestobservationcenter.md) instead.

## Declaration

```objectivec
@interface XCTestObserver : NSObject
```

## Topics

### Starting and Stopping Test Observation

- [startObserving](xctestobserver/startobserving%28%29.md): Deprecated. Starts observing a test.
- [stopObserving](xctestobserver/stopobserving%28%29.md): Deprecated. Stops observing a test.

### Monitoring Test Activity

- [testCaseDidFail:withDescription:inFile:atLine:](xctestobserver/testcasedidfail%28__withdescription_infile_atline_%29.md): Deprecated. Notifies the observer when a test case fails.
- [testCaseDidStart:](xctestobserver/testcasedidstart%28__%29.md): Deprecated. Notifies the observer when a test case starts.
- [testCaseDidStop:](xctestobserver/testcasedidstop%28__%29.md): Deprecated. Notifies the observer when a test case stops.
- [testSuiteDidStart:](xctestobserver/testsuitedidstart%28__%29.md): Deprecated. Notifies the observer when a test suite starts.
- [testSuiteDidStop:](xctestobserver/testsuitedidstop%28__%29.md): Deprecated. Notifies the observer when a test suite stops.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCTestLog](xctestlog.md)

## See Also

### Deprecated Classes

- [XCTestLog](xctestlog.md): Deprecated. An object that logs test failures and errors.
- [XCTestProbe](xctestprobe.md): Deprecated. An object that observes test activity status.
