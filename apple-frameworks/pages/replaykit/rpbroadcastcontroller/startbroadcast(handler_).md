> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontroller/startbroadcast(handler:)](https://developer.apple.com/documentation/replaykit/rpbroadcastcontroller/startbroadcast(handler:))

# startBroadcast(handler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts a broadcast.

> No longer supported

## Declaration

```swift
func startBroadcast(handler: @escaping ((any Error)?) -> Void)
```

## Parameters

- `handler`: A block that is called after a broadcast has started.

  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

## See Also

### Controlling the Broadcast

- [broadcastURL](broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [pauseBroadcast()](pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast()](resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [finishBroadcast(handler:)](finishbroadcast%28handler_%29.md): Deprecated. Stops the current broadcast.
- [serviceInfo](serviceinfo.md): Deprecated. Information updated by the service during a broadcast.

# startBroadcastWithHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Starts a broadcast.

> No longer supported

## Declaration

```objectivec
- (void) startBroadcastWithHandler:(void (^)(NSError *error)) handler;
```

## Parameters

- `handler`: A block that is called after a broadcast has started.

  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

## See Also

### Controlling the Broadcast

- [broadcastURL](broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [pauseBroadcast](pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast](resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [finishBroadcastWithHandler:](finishbroadcast%28handler_%29.md): Deprecated. Stops the current broadcast.
- [serviceInfo](serviceinfo.md): Deprecated. Information updated by the service during a broadcast.
