> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemerrorlog](https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlog)

# AVPlayerItemErrorLog (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The error log associated with a player item.

## Declaration

```swift
class AVPlayerItemErrorLog
```

## Topics

### Accessing error data

- [events](avplayeritemerrorlog/events.md): A chronologically ordered array of player item error log event objects.
- [extendedLogData()](avplayeritemerrorlog/extendedlogdata%28%29.md): Returns a serialized representation of the error log in the Extended Log File Format.
- [extendedLogDataStringEncoding](avplayeritemerrorlog/extendedlogdatastringencoding.md): The string encoding of the extended log data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing logging information

- [accessLog()](avplayeritem/accesslog%28%29.md): Deprecated. Returns an object that represents a snapshot of the network access log.
- [AVPlayerItemAccessLog](avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [AVPlayerItemAccessLogEvent](avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [errorLog()](avplayeritem/errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLogEvent](avplayeritemerrorlogevent.md): A single item in a player item’s error log.

# AVPlayerItemErrorLog (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The error log associated with a player item.

## Declaration

```objectivec
@interface AVPlayerItemErrorLog : NSObject
```

## Topics

### Accessing error data

- [events](avplayeritemerrorlog/events.md): A chronologically ordered array of player item error log event objects.
- [extendedLogData](avplayeritemerrorlog/extendedlogdata%28%29.md): Returns a serialized representation of the error log in the Extended Log File Format.
- [extendedLogDataStringEncoding](avplayeritemerrorlog/extendedlogdatastringencoding.md): The string encoding of the extended log data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing logging information

- [accessLog](avplayeritem/accesslog%28%29.md): Deprecated. Returns an object that represents a snapshot of the network access log.
- [AVPlayerItemAccessLog](avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [AVPlayerItemAccessLogEvent](avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [errorLog](avplayeritem/errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLogEvent](avplayeritemerrorlogevent.md): A single item in a player item’s error log.
