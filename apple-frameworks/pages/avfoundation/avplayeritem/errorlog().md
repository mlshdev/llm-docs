> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/errorlog()](https://developer.apple.com/documentation/avfoundation/avplayeritem/errorlog())

# errorLog() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.3+ (deprecated in 27.0) · iPadOS 4.3+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

Returns an object that represents a snapshot of the error log.

> Use fetchErrorLogWithCompletionHandler:

## Declaration

```swift
nonisolated func errorLog() -> AVPlayerItemErrorLog?
```

<a id="return-value"></a>

## Return Value

An object that represents a snapshot of the error log. The returned value can be `nil`.

<a id="Discussion"></a>

## Discussion

If the method returns `nil`, there is no logging information currently available for the player item.

## See Also

### Accessing logging information

- [accessLog()](accesslog%28%29.md): Deprecated. Returns an object that represents a snapshot of the network access log.
- [AVPlayerItemAccessLog](../avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [AVPlayerItemAccessLogEvent](../avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [AVPlayerItemErrorLog](../avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](../avplayeritemerrorlogevent.md): A single item in a player item’s error log.

# errorLog (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.3+ (deprecated in 27.0) · iPadOS 4.3+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 1.0+ (deprecated in 27.0)

Returns an object that represents a snapshot of the error log.

> Use fetchErrorLogWithCompletionHandler:

## Declaration

```objectivec
- (AVPlayerItemErrorLog *) errorLog;
```

<a id="return-value"></a>

## Return Value

An object that represents a snapshot of the error log. The returned value can be `nil`.

<a id="Discussion"></a>

## Discussion

If the method returns `nil`, there is no logging information currently available for the player item.

## See Also

### Accessing logging information

- [accessLog](accesslog%28%29.md): Deprecated. Returns an object that represents a snapshot of the network access log.
- [AVPlayerItemAccessLog](../avplayeritemaccesslog.md): An object used to retrieve the access log associated with a player item.
- [AVPlayerItemAccessLogEvent](../avplayeritemaccesslogevent.md): A single entry in a player item’s access log.
- [AVPlayerItemErrorLog](../avplayeritemerrorlog.md): The error log associated with a player item.
- [AVPlayerItemErrorLogEvent](../avplayeritemerrorlogevent.md): A single item in a player item’s error log.
