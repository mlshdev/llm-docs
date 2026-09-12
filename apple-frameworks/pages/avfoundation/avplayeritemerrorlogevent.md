> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemerrorlogevent](https://developer.apple.com/documentation/avfoundation/avplayeritemerrorlogevent)

# AVPlayerItemErrorLogEvent (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A single item in a player item’s error log.

## Declaration

```swift
class AVPlayerItemErrorLogEvent
```

<a id="overview"></a>

## Overview

This object provides properties for accessing the data fields of each log event. Each event is a single entry in an [AVPlayerItem](avplayeritem.md) object’s error log.

These properties aren’t observable. For more information about key-value observing, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## Topics

### Getting information about the event

- [date](avplayeritemerrorlogevent/date.md): The date and time when the error occurred.
- [uri](avplayeritemerrorlogevent/uri.md): The URI of the playback item that had an error.
- [serverAddress](avplayeritemerrorlogevent/serveraddress.md): The IP address of the server that was the source of the error.
- [playbackSessionID](avplayeritemerrorlogevent/playbacksessionid.md): A GUID that identifies the playback session that had an error.
- [errorStatusCode](avplayeritemerrorlogevent/errorstatuscode.md): A unique error code identifier.
- [errorDomain](avplayeritemerrorlogevent/errordomain.md): The domain of the error.
- [errorComment](avplayeritemerrorlogevent/errorcomment.md): A description of the error encountered.
- [allHTTPResponseHeaderFields](avplayeritemerrorlogevent/allhttpresponseheaderfields.md): The HTTP header fields the server returns.

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
- [AVPlayerItemErrorLog](avplayeritemerrorlog.md): The error log associated with a player item.

# AVPlayerItemErrorLogEvent (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.3+ · iPadOS 4.3+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

A single item in a player item’s error log.

## Declaration

```objectivec
@interface AVPlayerItemErrorLogEvent : NSObject
```

<a id="overview"></a>

## Overview

This object provides properties for accessing the data fields of each log event. Each event is a single entry in an [AVPlayerItem](avplayeritem.md) object’s error log.

These properties aren’t observable. For more information about key-value observing, see [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift).

## Topics

### Getting information about the event

- [date](avplayeritemerrorlogevent/date.md): The date and time when the error occurred.
- [URI](avplayeritemerrorlogevent/uri.md): The URI of the playback item that had an error.
- [serverAddress](avplayeritemerrorlogevent/serveraddress.md): The IP address of the server that was the source of the error.
- [playbackSessionID](avplayeritemerrorlogevent/playbacksessionid.md): A GUID that identifies the playback session that had an error.
- [errorStatusCode](avplayeritemerrorlogevent/errorstatuscode.md): A unique error code identifier.
- [errorDomain](avplayeritemerrorlogevent/errordomain.md): The domain of the error.
- [errorComment](avplayeritemerrorlogevent/errorcomment.md): A description of the error encountered.
- [allHTTPResponseHeaderFields](avplayeritemerrorlogevent/allhttpresponseheaderfields.md): The HTTP header fields the server returns.

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
- [AVPlayerItemErrorLog](avplayeritemerrorlog.md): The error log associated with a player item.
