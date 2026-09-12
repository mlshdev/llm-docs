> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogentrylog/level-swift.enum](https://developer.apple.com/documentation/oslog/oslogentrylog/level-swift.enum)

# OSLogEntryLog.Level (Swift)

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The log level at which the entry was generated.

## Declaration

```swift
enum Level
```

## Topics

### Log Levels

- [OSLogEntryLog.Level.undefined](level-swift.enum/undefined.md): The log level was never specified.
- [OSLogEntryLog.Level.debug](level-swift.enum/debug.md): A log level that captures diagnostic information.
- [OSLogEntryLog.Level.info](level-swift.enum/info.md): The log level that captures additional information.
- [OSLogEntryLog.Level.notice](level-swift.enum/notice.md): The log level that captures notifications.
- [OSLogEntryLog.Level.error](level-swift.enum/error.md): The log level that captures errors.
- [OSLogEntryLog.Level.fault](level-swift.enum/fault.md): The log level that captures fault information.

### Initializers

- [init(rawValue:)](level-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Log Levels

- [level](level-swift.property.md): The log level of the entry.

# OSLogEntryLogLevel (Objective-C)

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The log level at which the entry was generated.

## Declaration

```objectivec
enum OSLogEntryLogLevel : NSInteger;
```

## Topics

### Log Levels

- [OSLogEntryLogLevelUndefined](level-swift.enum/undefined.md): The log level was never specified.
- [OSLogEntryLogLevelDebug](level-swift.enum/debug.md): A log level that captures diagnostic information.
- [OSLogEntryLogLevelInfo](level-swift.enum/info.md): The log level that captures additional information.
- [OSLogEntryLogLevelNotice](level-swift.enum/notice.md): The log level that captures notifications.
- [OSLogEntryLogLevelError](level-swift.enum/error.md): The log level that captures errors.
- [OSLogEntryLogLevelFault](level-swift.enum/fault.md): The log level that captures fault information.

## See Also

### Accessing Log Levels

- [level](level-swift.property.md): The log level of the entry.
