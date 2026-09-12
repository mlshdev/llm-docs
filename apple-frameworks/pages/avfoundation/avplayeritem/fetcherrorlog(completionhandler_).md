> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/fetcherrorlog(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avplayeritem/fetcherrorlog(completionhandler:))

# fetchErrorLog(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Asynchronously retrieves the error log without blocking the calling thread.

## Declaration

```swift
nonisolated func fetchErrorLog(completionHandler: @escaping @Sendable (sending AVPlayerItemErrorLog?) -> Void)
```

```swift
nonisolated var errorLog: AVPlayerItemErrorLog? { get async }
```

## Parameters

- `completionHandler`: A block that is called with the error log. May be called with nil if no logging information is available.

<a id="discussion"></a>

## Discussion

An AVPlayerItemErrorLog provides methods to retrieve the error log in a format suitable for serialization. If nil is returned then there is no logging information currently available for this AVPlayerItem.

# fetchErrorLogWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Asynchronously retrieves the error log without blocking the calling thread.

## Declaration

```objectivec
- (void) fetchErrorLogWithCompletionHandler:(void (^)(AVPlayerItemErrorLog *errorLog)) completionHandler;
```

## Parameters

- `completionHandler`: A block that is called with the error log. May be called with nil if no logging information is available.

<a id="discussion"></a>

## Discussion

An AVPlayerItemErrorLog provides methods to retrieve the error log in a format suitable for serialization. If nil is returned then there is no logging information currently available for this AVPlayerItem.
