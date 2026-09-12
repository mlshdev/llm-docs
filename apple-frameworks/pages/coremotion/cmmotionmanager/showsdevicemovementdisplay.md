> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/showsdevicemovementdisplay](https://developer.apple.com/documentation/coremotion/cmmotionmanager/showsdevicemovementdisplay)

# showsDeviceMovementDisplay (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Controls whether the device-movement display is shown.

## Declaration

```swift
var showsDeviceMovementDisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When a device requires movement (for example, to calibrate the compass), the value of this property indicates if the system’s device-movement display should be shown. When a device requires movement, the block handler of type [CMDeviceMotionHandler](../cmdevicemotionhandler.md) reports the [CMErrorDeviceRequiresMovement](../cmerrordevicerequiresmovement.md) error once. By default, this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Device Motion Updates

- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdates(using:to:withHandler:)](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdates(to:withHandler:)](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdates(using:)](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.

# showsDeviceMovementDisplay (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Controls whether the device-movement display is shown.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL showsDeviceMovementDisplay;
```

<a id="Discussion"></a>

## Discussion

When a device requires movement (for example, to calibrate the compass), the value of this property indicates if the system’s device-movement display should be shown. When a device requires movement, the block handler of type [CMDeviceMotionHandler](../cmdevicemotionhandler.md) reports the [CMErrorDeviceRequiresMovement](../cmerrordevicerequiresmovement.md) error once. By default, this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Device Motion Updates

- [deviceMotionUpdateInterval](devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdatesToQueue:withHandler:](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:](startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](devicemotion.md): The latest sample of device-motion data.
- [CMDeviceMotionHandler](../cmdevicemotionhandler.md): The type of block callback for handling device-motion data.
