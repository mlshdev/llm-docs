> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/startdevicemotionupdates(using:)](https://developer.apple.com/documentation/coremotion/cmmotionmanager/startdevicemotionupdates(using:))

# startDeviceMotionUpdates(using:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts device-motion updates using a reference frame but without a block handler.

## Declaration

```swift
func startDeviceMotionUpdates(using referenceFrame: CMAttitudeReferenceFrame)
```

## Parameters

- `referenceFrame`: A constant identifying the reference frame to use for device-motion updates. It’s your responsibility to specify a reference frame that’s available on the current device. Call [availableAttitudeReferenceFrames()](availableattitudereferenceframes%28%29.md) to determine which reference frames are currently available.

<a id="Discussion"></a>

## Discussion

You can get the latest device-motion data through the [deviceMotion](devicemotion.md) property. You must call [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md) when you no longer want your app to process device-motion updates.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdates(using:to:withHandler:)](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdates(to:withHandler:)](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

# startDeviceMotionUpdatesUsingReferenceFrame: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Starts device-motion updates using a reference frame but without a block handler.

## Declaration

```objectivec
- (void) startDeviceMotionUpdatesUsingReferenceFrame:(CMAttitudeReferenceFrame) referenceFrame;
```

## Parameters

- `referenceFrame`: A constant identifying the reference frame to use for device-motion updates. It’s your responsibility to specify a reference frame that’s available on the current device. Call [availableAttitudeReferenceFrames](availableattitudereferenceframes%28%29.md) to determine which reference frames are currently available.

<a id="Discussion"></a>

## Discussion

You can get the latest device-motion data through the [deviceMotion](devicemotion.md) property. You must call [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md) when you no longer want your app to process device-motion updates.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdatesToQueue:withHandler:](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.
