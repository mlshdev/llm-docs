> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemaccesslog](https://developer.apple.com/documentation/avfoundation/avplayeritemaccesslog)

# AVPlayerItemAccessLog (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object used to retrieve the access log associated with a player item.

## Declaration

```swift
class AVPlayerItemAccessLog
```

<a id="overview"></a>

## Overview

An `AVPlayerItemAccessLog` object accumulates key metrics about network playback and presents them as a collection of [AVPlayerItemAccessLogEvent](avplayeritemaccesslogevent.md) instances. Each event instance collates the data that relates to each uninterrupted period of playback.

## Topics

### Accessing log data

- [events](avplayeritemaccesslog/events.md): A chronologically ordered array of player item access log events.
- [extendedLogData()](avplayeritemaccesslog/extendedlogdata%28%29.md): Returns a serialized representation of the access log in the Extended Log File Format.
- [extendedLogDataStringEncoding](avplayeritemaccesslog/extendedlogdatastringencoding.md): The string encoding of the extended log data.

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
- [AVPlayerItemAccessLogEvent](avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [errorLog()](avplayeritem/errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLog](avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](avplayeritemerrorlogevent.md): A single item in a player item’s error log.

# AVPlayerItemAccessLog (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

An object used to retrieve the access log associated with a player item.

## Declaration

```objectivec
@interface AVPlayerItemAccessLog : NSObject
```

<a id="overview"></a>

## Overview

An `AVPlayerItemAccessLog` object accumulates key metrics about network playback and presents them as a collection of [AVPlayerItemAccessLogEvent](avplayeritemaccesslogevent.md) instances. Each event instance collates the data that relates to each uninterrupted period of playback.

## Topics

### Accessing log data

- [events](avplayeritemaccesslog/events.md): A chronologically ordered array of player item access log events.
- [extendedLogData](avplayeritemaccesslog/extendedlogdata%28%29.md): Returns a serialized representation of the access log in the Extended Log File Format.
- [extendedLogDataStringEncoding](avplayeritemaccesslog/extendedlogdatastringencoding.md): The string encoding of the extended log data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Accessing logging information

- [accessLog](avplayeritem/accesslog%28%29.md): Deprecated. Returns an object that represents a snapshot of the network access log.
- [AVPlayerItemAccessLogEvent](avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [errorLog](avplayeritem/errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLog](avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](avplayeritemerrorlogevent.md): A single item in a player item’s error log.
