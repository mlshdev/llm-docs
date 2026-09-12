> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startdevicemotionupdates(using:to:withhandler:)](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startdevicemotionupdates(using:to:withhandler:))

# startDeviceMotionUpdates(using:to:withHandler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts device-motion updates on an operation queue and using a specified reference frame and block handler.

## Declaration

```swift
func startDeviceMotionUpdates(using referenceFrame: CMAttitudeReferenceFrame, to queue: OperationQueue, withHandler handler: @escaping CMDeviceMotionHandler)
```

## Parameters

- `referenceFrame`: A constant identifying the reference frame to use for device-motion updates. It’s your responsibility to specify a reference frame that’s available on the current device. Call [availableAttitudeReferenceFrames()](availableattitudereferenceframes%28%29.md) to determine which reference frames are currently available.
- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new device-motion data. The block must conform to the [CMDeviceMotionHandler](../cmdevicemotionhandler.md) type.

<a id="Discussion"></a>

## Discussion

You must call [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md) when you no longer want your app to process device-motion updates.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdates(to:withHandler:)](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdates(using:)](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

# startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts device-motion updates on an operation queue and using a specified reference frame and block handler.

## Declaration

```objectivec
- (void) startDeviceMotionUpdatesUsingReferenceFrame:(CMAttitudeReferenceFrame) referenceFrame toQueue:(NSOperationQueue *) queue withHandler:(CMDeviceMotionHandler) handler;
```

## Parameters

- `referenceFrame`: A constant identifying the reference frame to use for device-motion updates. It’s your responsibility to specify a reference frame that’s available on the current device. Call [availableAttitudeReferenceFrames](availableattitudereferenceframes%28%29.md) to determine which reference frames are currently available.
- `queue`: An operation queue provided by the caller. Because the processed events might arrive at a high rate, using the main operation queue is not recommended.
- `handler`: A block that is invoked with each update to handle new device-motion data. The block must conform to the [CMDeviceMotionHandler](../cmdevicemotionhandler.md) type.

<a id="Discussion"></a>

## Discussion

You must call [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md) when you no longer want your app to process device-motion updates.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdatesToQueue:withHandler:](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.
