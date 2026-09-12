> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastactivityviewcontrollerdelegate/broadcastactivityviewcontroller(_:didfinishwith:error:)](https://developer.apple.com/documentation/replaykit/rpbroadcastactivityviewcontrollerdelegate/broadcastactivityviewcontroller(_:didfinishwith:error:))

# broadcastActivityViewController(\_:didFinishWith:error:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the broadcast activity view controller is ready to be dismissed.

> No longer supported

## Declaration

```swift
func broadcastActivityViewController(_ broadcastActivityViewController: RPBroadcastActivityViewController, didFinishWith broadcastController: RPBroadcastController?, error: (any Error)?)
```

## Parameters

- `broadcastActivityViewController`: The broadcast activity view controller to be dismissed.
- `broadcastController`: Optional. The [RPBroadcastController](../rpbroadcastcontroller.md) instance used to start and stop broadcasts to a selected service.  When the user cancels service setup, this parameter is nil.
- `error`: An [RPRecordingErrorDomain](../rprecordingerrordomain.md) error. When a connection to a broadcast service has been set up successfully and the app is ready to broadcast, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called after a broadcast has been set up successfully, retain a reference to the [RPBroadcastController](../rpbroadcastcontroller.md) instance contained in the `broadcastController` parameter to start and stop broadcasting.

# broadcastActivityViewController:didFinishWithBroadcastController:error: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates that the broadcast activity view controller is ready to be dismissed.

> No longer supported

## Declaration

```objectivec
- (void) broadcastActivityViewController:(RPBroadcastActivityViewController *) broadcastActivityViewController didFinishWithBroadcastController:(RPBroadcastController *) broadcastController error:(NSError *) error;
```

## Parameters

- `broadcastActivityViewController`: The broadcast activity view controller to be dismissed.
- `broadcastController`: Optional. The [RPBroadcastController](../rpbroadcastcontroller.md) instance used to start and stop broadcasts to a selected service.  When the user cancels service setup, this parameter is nil.
- `error`: An [RPRecordingErrorDomain](../rprecordingerrordomain.md) error. When a connection to a broadcast service has been set up successfully and the app is ready to broadcast, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

When this method is called after a broadcast has been set up successfully, retain a reference to the [RPBroadcastController](../rpbroadcastcontroller.md) instance contained in the `broadcastController` parameter to start and stop broadcasting.
