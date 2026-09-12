> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmdevicemotionhandler](https://developer.apple.com/documentation/coremotion/cmdevicemotionhandler)

# CMDeviceMotionHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of block callback for handling device-motion data.

## Declaration

```swift
typealias CMDeviceMotionHandler = (CMDeviceMotion?, (any Error)?) -> Void
```

## Mentioned In

- [Getting processed device-motion data](getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

Blocks of type `CMDeviceMotionHandler` are called when there is device-motion data to process. You pass the block into [startDeviceMotionUpdates(to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value but take two arguments:

- **`motion`**: A [CMDeviceMotion](cmdevicemotion.md) object, which encapsulates other objects and a structure representing attitude, rotation rate, gravity, and user acceleration.
- **`error`**: An error object representing an error encountered in providing device-motion data. If an error occurs, you should stop device-motion data updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](cmmotionmanager/showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](cmmotionmanager/devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdates(using:to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdates(to:withHandler:)](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdates(using:)](cmmotionmanager/startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates()](cmmotionmanager/startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates()](cmmotionmanager/stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](cmmotionmanager/devicemotion.md): The latest sample of device-motion data.

# CMDeviceMotionHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of block callback for handling device-motion data.

## Declaration

```objectivec
typedef void (^)(CMDeviceMotion *, NSError *) CMDeviceMotionHandler;
```

## Mentioned In

- [Getting processed device-motion data](getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

Blocks of type `CMDeviceMotionHandler` are called when there is device-motion data to process. You pass the block into [startDeviceMotionUpdatesToQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value but take two arguments:

- **`motion`**: A [CMDeviceMotion](cmdevicemotion.md) object, which encapsulates other objects and a structure representing attitude, rotation rate, gravity, and user acceleration.
- **`error`**: An error object representing an error encountered in providing device-motion data. If an error occurs, you should stop device-motion data updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](cmerrordomain.md) domain and the [CMError](cmerror.md) type.

## See Also

### Managing Device Motion Updates

- [showsDeviceMovementDisplay](cmmotionmanager/showsdevicemovementdisplay.md): Controls whether the device-movement display is shown.
- [deviceMotionUpdateInterval](cmmotionmanager/devicemotionupdateinterval.md): The interval, in seconds, for providing device-motion updates to the block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:toQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28using_to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified reference frame and block handler.
- [startDeviceMotionUpdatesToQueue:withHandler:](cmmotionmanager/startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates on an operation queue and using a specified block handler.
- [startDeviceMotionUpdatesUsingReferenceFrame:](cmmotionmanager/startdevicemotionupdates%28using_%29.md): Starts device-motion updates using a reference frame but without a block handler.
- [startDeviceMotionUpdates](cmmotionmanager/startdevicemotionupdates%28%29.md): Starts device-motion updates without a block handler.
- [stopDeviceMotionUpdates](cmmotionmanager/stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [deviceMotion](cmmotionmanager/devicemotion.md): The latest sample of device-motion data.
