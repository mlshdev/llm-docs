> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanager/startdevicemotionupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/startdevicemotionupdates(to:withhandler:))

# startDeviceMotionUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Starts device-motion updates with a handler.

## Declaration

```swift
func startDeviceMotionUpdates(to queue: OperationQueue, withHandler handler: @escaping CMHeadphoneMotionManager.DeviceMotionHandler)
```

## Parameters

- `queue`: The queue for handling updates.
- `handler`: The handler that receives the updates.

## See Also

### Starting and Stopping Updates

- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md): Starts device-motion updates.
- [startConnectionStatusUpdates()](startconnectionstatusupdates%28%29.md)
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [stopConnectionStatusUpdates()](stopconnectionstatusupdates%28%29.md)

# startDeviceMotionUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Starts device-motion updates with a handler.

## Declaration

```objectivec
- (void) startDeviceMotionUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMHeadphoneDeviceMotionHandler) handler;
```

## Parameters

- `queue`: The queue for handling updates.
- `handler`: The handler that receives the updates.

## See Also

### Starting and Stopping Updates

- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md): Starts device-motion updates.
- [startConnectionStatusUpdates](startconnectionstatusupdates%28%29.md)
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [stopConnectionStatusUpdates](stopconnectionstatusupdates%28%29.md)
