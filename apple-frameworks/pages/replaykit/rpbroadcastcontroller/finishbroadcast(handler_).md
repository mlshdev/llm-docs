> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontroller/finishbroadcast(handler:)](https://developer.apple.com/documentation/replaykit/rpbroadcastcontroller/finishbroadcast(handler:))

# finishBroadcast(handler:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the current broadcast.

> No longer supported

## Declaration

```swift
func finishBroadcast(handler: @escaping ((any Error)?) -> Void)
```

## Parameters

- `handler`: A block that is called after the broadcast has finished.

  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

<a id="Discussion"></a>

## Discussion

Use this method when the user is finished with a broadcast. To temporarily pause a broadcast, use [pauseBroadcast()](pausebroadcast%28%29.md).

## See Also

### Controlling the Broadcast

- [broadcastURL](broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [startBroadcast(handler:)](startbroadcast%28handler_%29.md): Deprecated. Starts a broadcast.
- [pauseBroadcast()](pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast()](resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [serviceInfo](serviceinfo.md): Deprecated. Information updated by the service during a broadcast.

# finishBroadcastWithHandler: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Stops the current broadcast.

> No longer supported

## Declaration

```objectivec
- (void) finishBroadcastWithHandler:(void (^)(NSError *error)) handler;
```

## Parameters

- `handler`: A block that is called after the broadcast has finished.

  - **`error`**: If an error occurred, this parameter holds an object that explains the error. Otherwise, the value of this parameter is `nil`. See [RPRecordingErrorCode](../rprecordingerrorcode.md) for a list of error codes specific to ReplayKit.

<a id="Discussion"></a>

## Discussion

Use this method when the user is finished with a broadcast. To temporarily pause a broadcast, use [pauseBroadcast](pausebroadcast%28%29.md).

## See Also

### Controlling the Broadcast

- [broadcastURL](broadcasturl.md): Deprecated. A URL that redirects users to an ongoing or completed broadcast.
- [startBroadcastWithHandler:](startbroadcast%28handler_%29.md): Deprecated. Starts a broadcast.
- [pauseBroadcast](pausebroadcast%28%29.md): Deprecated. Pauses the current broadcast.
- [resumeBroadcast](resumebroadcast%28%29.md): Deprecated. Resumes a paused broadcast.
- [serviceInfo](serviceinfo.md): Deprecated. Information updated by the service during a broadcast.
