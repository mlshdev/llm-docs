> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlloglevel](https://developer.apple.com/documentation/metal/mtlloglevel)

# MTLLogLevel (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The supported log levels for shader logging.

## Declaration

```swift
enum MTLLogLevel
```

## Topics

### Enumeration cases

- [MTLLogLevel.debug](mtlloglevel/debug.md): The log level that captures diagnostic information.
- [MTLLogLevel.info](mtlloglevel/info.md): The log level that captures additional information.
- [MTLLogLevel.notice](mtlloglevel/notice.md): The log level that captures notifications.
- [MTLLogLevel.error](mtlloglevel/error.md): The log level that captures error information.
- [MTLLogLevel.fault](mtlloglevel/fault.md): The log level that captures fault information.
- [MTLLogLevel.undefined](mtlloglevel/undefined.md): The log level when the log level hasn’t been configured.

### Initializers

- [init(rawValue:)](mtlloglevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTLLogLevel (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The supported log levels for shader logging.

## Declaration

```objectivec
enum MTLLogLevel : NSInteger;
```

## Topics

### Enumeration cases

- [MTLLogLevelDebug](mtlloglevel/debug.md): The log level that captures diagnostic information.
- [MTLLogLevelInfo](mtlloglevel/info.md): The log level that captures additional information.
- [MTLLogLevelNotice](mtlloglevel/notice.md): The log level that captures notifications.
- [MTLLogLevelError](mtlloglevel/error.md): The log level that captures error information.
- [MTLLogLevelFault](mtlloglevel/fault.md): The log level that captures fault information.
- [MTLLogLevelUndefined](mtlloglevel/undefined.md): The log level when the log level hasn’t been configured.
