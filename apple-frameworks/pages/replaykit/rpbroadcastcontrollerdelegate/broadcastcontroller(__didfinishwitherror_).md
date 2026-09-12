> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontrollerdelegate/broadcastcontroller(_:didfinishwitherror:)](https://developer.apple.com/documentation/replaykit/rpbroadcastcontrollerdelegate/broadcastcontroller(_:didfinishwitherror:))

# broadcastController(\_:didFinishWithError:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that a broadcast ended due to an error.

> No longer supported

## Declaration

```swift
optional func broadcastController(_ broadcastController: RPBroadcastController, didFinishWithError error: (any Error)?)
```

## Parameters

- `broadcastController`: The current controller instance.
- `error`: An [RPRecordingErrorCode](../rprecordingerrorcode.md) error indicating why the broadcast finished.

<a id="Discussion"></a>

## Discussion

Use the returned error to inform the user why the broadcast failed and provide an option to resume the broadcast, if applicable.

# broadcastController:didFinishWithError: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate that a broadcast ended due to an error.

> No longer supported

## Declaration

```objectivec
- (void) broadcastController:(RPBroadcastController *) broadcastController didFinishWithError:(NSError *) error;
```

## Parameters

- `broadcastController`: The current controller instance.
- `error`: An [RPRecordingErrorCode](../rprecordingerrorcode.md) error indicating why the broadcast finished.

<a id="Discussion"></a>

## Discussion

Use the returned error to inform the user why the broadcast failed and provide an option to resume the broadcast, if applicable.
