> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/fetchaccesslog(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/fetchaccesslog(completionhandler:))

# fetchAccessLog(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Asynchronously retrieves the access log without blocking the calling thread.

## Declaration

```swift
nonisolated func fetchAccessLog(completionHandler: @escaping @Sendable (sending AVPlayerItemAccessLog?) -> Void)
```

```swift
nonisolated var accessLog: AVPlayerItemAccessLog? { get async }
```

## Parameters

- `completionHandler`: A block that is called with the access log. May be called with nil if no logging information is available.

<a id="discussion"></a>

## Discussion

An AVPlayerItemAccessLog provides methods to retrieve the network access log in a format suitable for serialization. If nil is returned then there is no logging information currently available for this AVPlayerItem. An AVPlayerItemNewAccessLogEntryNotification will be posted when new logging information becomes available. However, accessLog might already return a non-nil value even before the first notification is posted.

# fetchAccessLogWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Asynchronously retrieves the access log without blocking the calling thread.

## Declaration

```objectivec
- (void) fetchAccessLogWithCompletionHandler:(void (^)(AVPlayerItemAccessLog *accessLog)) completionHandler;
```

## Parameters

- `completionHandler`: A block that is called with the access log. May be called with nil if no logging information is available.

<a id="discussion"></a>

## Discussion

An AVPlayerItemAccessLog provides methods to retrieve the network access log in a format suitable for serialization. If nil is returned then there is no logging information currently available for this AVPlayerItem. An AVPlayerItemNewAccessLogEntryNotification will be posted when new logging information becomes available. However, accessLog might already return a non-nil value even before the first notification is posted.
