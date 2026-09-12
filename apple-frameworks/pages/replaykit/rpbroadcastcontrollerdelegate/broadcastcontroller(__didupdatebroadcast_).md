> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontrollerdelegate/broadcastcontroller(_:didupdatebroadcast:)](https://developer.apple.com/documentation/replaykit/rpbroadcastcontrollerdelegate/broadcastcontroller(_:didupdatebroadcast:))

# broadcastController(\_:didUpdateBroadcast:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the broadcast service the broadcast URL has been updated.

> No longer supported

## Declaration

```swift
optional func broadcastController(_ broadcastController: RPBroadcastController, didUpdateBroadcast broadcastURL: URL)
```

## Parameters

- `broadcastController`: The broadcast controller instance.
- `broadcastURL`: The URL of the resource where the broadcast can be viewed.

## See Also

### Updating a Broadcast

- [broadcastController(\_:didUpdateServiceInfo:)](broadcastcontroller%28__didupdateserviceinfo_%29.md): Deprecated. Tells the delegate the broadcast service has data to pass back to the broadcasting app.

# broadcastController:didUpdateBroadcastURL: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the broadcast service the broadcast URL has been updated.

> No longer supported

## Declaration

```objectivec
- (void) broadcastController:(RPBroadcastController *) broadcastController didUpdateBroadcastURL:(NSURL *) broadcastURL;
```

## Parameters

- `broadcastController`: The broadcast controller instance.
- `broadcastURL`: The URL of the resource where the broadcast can be viewed.

## See Also

### Updating a Broadcast

- [broadcastController:didUpdateServiceInfo:](broadcastcontroller%28__didupdateserviceinfo_%29.md): Deprecated. Tells the delegate the broadcast service has data to pass back to the broadcasting app.
