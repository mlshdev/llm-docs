> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastactivitycontrollerdelegate/broadcastactivitycontroller(_:didfinishwith:error:)](https://developer.apple.com/documentation/replaykit/rpbroadcastactivitycontrollerdelegate/broadcastactivitycontroller(_:didfinishwith:error:))

# broadcastActivityController(\_:didFinishWith:error:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 27.0)

Tells the delegate that a user selected a broadcast.

> No longer supported

## Declaration

```swift
func broadcastActivityController(_ broadcastActivityController: RPBroadcastActivityController, didFinishWith broadcastController: RPBroadcastController?, error: (any Error)?)
```

## Parameters

- `broadcastActivityController`: The broadcast activity controller instance.
- `broadcastController`: The broadcast controller instance used to start and stop broadcasts to a user selected service.
- `error`: An optional error indicating a failure.

# broadcastActivityController:didFinishWithBroadcastController:error: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+ (deprecated in 27.0)

Tells the delegate that a user selected a broadcast.

> No longer supported

## Declaration

```objectivec
- (void) broadcastActivityController:(RPBroadcastActivityController *) broadcastActivityController didFinishWithBroadcastController:(RPBroadcastController *) broadcastController error:(NSError *) error;
```

## Parameters

- `broadcastActivityController`: The broadcast activity controller instance.
- `broadcastController`: The broadcast controller instance used to start and stop broadcasts to a user selected service.
- `error`: An optional error indicating a failure.
