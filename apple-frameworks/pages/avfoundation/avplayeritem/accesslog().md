> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/accesslog()](https://developer.apple.com/documentation/avfoundation/avplayeritem/accesslog())

# accessLog() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.3+ (deprecated in 27.0) · iPadOS 4.3+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

Returns an object that represents a snapshot of the network access log.

> Use fetchAccessLogWithCompletionHandler:

## Declaration

```swift
nonisolated func accessLog() -> AVPlayerItemAccessLog?
```

<a id="return-value"></a>

## Return Value

An object that represents a snapshot of the network access log. The returned value can be `nil`.

<a id="Discussion"></a>

## Discussion

If the method returns `nil`, there is no logging information currently available for the player item.

## See Also

### Accessing logging information

- [AVPlayerItemAccessLog](../avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [AVPlayerItemAccessLogEvent](../avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [errorLog()](errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLog](../avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](../avplayeritemerrorlogevent.md): A single item in a player item’s error log.

# accessLog (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.3+ (deprecated in 27.0) · iPadOS 4.3+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

Returns an object that represents a snapshot of the network access log.

> Use fetchAccessLogWithCompletionHandler:

## Declaration

```objectivec
- (AVPlayerItemAccessLog *) accessLog;
```

<a id="return-value"></a>

## Return Value

An object that represents a snapshot of the network access log. The returned value can be `nil`.

<a id="Discussion"></a>

## Discussion

If the method returns `nil`, there is no logging information currently available for the player item.

## See Also

### Accessing logging information

- [AVPlayerItemAccessLog](../avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [AVPlayerItemAccessLogEvent](../avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [errorLog](errorlog%28%29.md): Deprecated. Returns an object that represents a snapshot of the error log.
- [AVPlayerItemErrorLog](../avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](../avplayeritemerrorlogevent.md): A single item in a player item’s error log.
