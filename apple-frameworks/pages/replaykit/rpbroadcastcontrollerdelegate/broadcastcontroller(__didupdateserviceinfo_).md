> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit/rpbroadcastcontrollerdelegate/broadcastcontroller(_:didupdateserviceinfo:)](https://developer.apple.com/documentation/replaykit/rpbroadcastcontrollerdelegate/broadcastcontroller(_:didupdateserviceinfo:))

# broadcastController(\_:didUpdateServiceInfo:) (Swift)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate the broadcast service has data to pass back to the broadcasting app.

> No longer supported

## Declaration

```swift
optional func broadcastController(_ broadcastController: RPBroadcastController, didUpdateServiceInfo serviceInfo: [String : any NSCoding & NSObjectProtocol])
```

## Parameters

- `broadcastController`: The RPBroadcastController instance.
- `serviceInfo`: Dictionary that is passed back to the broadcasting app and contains information about the ongoing broadcast.

## See Also

### Updating a Broadcast

- [broadcastController(\_:didUpdateBroadcast:)](broadcastcontroller%28__didupdatebroadcast_%29.md): Deprecated. Tells the broadcast service the broadcast URL has been updated.

# broadcastController:didUpdateServiceInfo: (Objective-C)

**Framework:** ReplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · tvOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Tells the delegate the broadcast service has data to pass back to the broadcasting app.

> No longer supported

## Declaration

```objectivec
- (void) broadcastController:(RPBroadcastController *) broadcastController didUpdateServiceInfo:(NSDictionary<NSString *,NSObject<NSCoding> *> *) serviceInfo;
```

## Parameters

- `broadcastController`: The RPBroadcastController instance.
- `serviceInfo`: Dictionary that is passed back to the broadcasting app and contains information about the ongoing broadcast.

## See Also

### Updating a Broadcast

- [broadcastController:didUpdateBroadcastURL:](broadcastcontroller%28__didupdatebroadcast_%29.md): Deprecated. Tells the broadcast service the broadcast URL has been updated.
