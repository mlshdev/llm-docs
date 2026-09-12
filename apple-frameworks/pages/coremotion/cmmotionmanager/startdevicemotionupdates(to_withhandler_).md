> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startdevicemotionupdates(to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startdevicemotionupdates(to:withhandler:))

# startDeviceMotionUpdates(to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts device-motion updates on an operation queue and using a specified block handler.

## Declaration

```swift
func startDeviceMotionUpdates(to queue: OperationQueue, withHandler handler: @escaping CMDeviceMotionHandler)
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new device-motion data. The block must conform to the [CMDeviceMotionHandler](../cmdevicemotionhandler.md) type.

<a id="Discussion"></a>

## Discussion

This method reports motion relative to the reference frame in the [attitudeReferenceFrame](attitudereferenceframe.md) property. You must call [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md) when you no longer want your app to process device-motion updates.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdates(using:to:withHandler:)](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdates(using:)](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

# startDeviceMotionUpdatesToQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts device-motion updates on an operation queue and using a specified block handler.

## Declaration

```objectivec
- (void) startDeviceMotionUpdatesToQueue:(NSOperationQueue *) queue withHandler:(CMDeviceMotionHandler) handler;
```

## Parameters

- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new device-motion data. The block must conform to the [CMDeviceMotionHandler](../cmdevicemotionhandler.md) type.

<a id="Discussion"></a>

## Discussion

This method reports motion relative to the reference frame in the [attitudeReferenceFrame](attitudereferenceframe.md) property. You must call [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md) when you no longer want your app to process device-motion updates.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.
