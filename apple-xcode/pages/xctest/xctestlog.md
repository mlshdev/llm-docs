> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestlog](https://developer.apple.com/documentation/xctest/xctestlog)

# XCTestLog (Swift)

**Framework:** XCTest  
**Kind:** Class

An object that logs test failures and errors.

> Use [XCTIssue](xctissue-swift.struct.md) instead.

## Declaration

```swift
class XCTestLog
```

## Topics

### Logging Test Results

- [logFileHandle](xctestlog/logfilehandle.md): Deprecated. An object to interact with the test log file.
- [testLog(withFormat:arguments:)](xctestlog/testlog%28withformat_arguments_%29.md): Deprecated. Logs test results to the test log.

## Relationships

### Inherits From

- [XCTestObserver](xctestobserver.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Deprecated Classes

- [XCTestObserver](xctestobserver.md): Deprecated. An object that observes test activity and events.
- [XCTestProbe](xctestprobe.md): Deprecated. An object that observes test activity status.

# XCTestLog (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An object that logs test failures and errors.

> Use [XCTIssue](xctissue-swift.struct.md) instead.

## Declaration

```objectivec
@interface XCTestLog : XCTestObserver
```

## Topics

### Logging Test Results

- [logFileHandle](xctestlog/logfilehandle.md): Deprecated. An object to interact with the test log file.
- [testLogWithFormat:arguments:](xctestlog/testlog%28withformat_arguments_%29.md): Deprecated. Logs test results to the test log.
- [testLogWithFormat:](xctestlog/testlogwithformat_.md): Deprecated. Logs test results to the test log.

## Relationships

### Inherits From

- [XCTestObserver](xctestobserver.md)

## See Also

### Deprecated Classes

- [XCTestObserver](xctestobserver.md): Deprecated. An object that observes test activity and events.
- [XCTestProbe](xctestprobe.md): Deprecated. An object that observes test activity status.
