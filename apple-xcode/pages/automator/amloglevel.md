> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/automator/amloglevel](https://developer.apple.com/documentation/automator/amloglevel)

# AMLogLevel (Swift)

**Framework:** Automator  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Logging levels that Automator supports.

## Declaration

```swift
enum AMLogLevel
```

## Topics

### Constants

- [AMLogLevel.debug](amloglevel/debug.md): The debug log level.
- [AMLogLevel.info](amloglevel/info.md): The informational log level.
- [AMLogLevel.warn](amloglevel/warn.md): The warning log level.
- [AMLogLevel.error](amloglevel/error.md): The error log level.

### Initializers

- [init(rawValue:)](amloglevel/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AMLogLevel (Objective-C)

**Framework:** Automator  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.4+

Logging levels that Automator supports.

## Declaration

```objectivec
enum AMLogLevel : NSUInteger;
```

## Topics

### Constants

- [AMLogLevelDebug](amloglevel/debug.md): The debug log level.
- [AMLogLevelInfo](amloglevel/info.md): The informational log level.
- [AMLogLevelWarn](amloglevel/warn.md): The warning log level.
- [AMLogLevelError](amloglevel/error.md): The error log level.

## See Also

### Performing Logging

- [logMessageWithLevel:format:](amaction/logmessagewithlevel_format_.md): Displays a message in Automator’s log area.
