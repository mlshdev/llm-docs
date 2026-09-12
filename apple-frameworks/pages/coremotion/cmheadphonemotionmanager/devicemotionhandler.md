> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanager/devicemotionhandler](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/devicemotionhandler)

# CMHeadphoneMotionManager.DeviceMotionHandler (Swift)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · watchOS 2.0+

The type of block callback for handling headphone-motion data.

## Declaration

```swift
typealias DeviceMotionHandler = (CMDeviceMotion?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The system calls `CMDeviceMotionHandler` blocks when there is device-motion data to process. You pass the block into [startDeviceMotionUpdates(to:withHandler:)](startdevicemotionupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value, but take two arguments:

- **`motion`**: A [CMHeadphoneMotionManager](../cmheadphonemotionmanager.md) object, which encapsulates other objects and a structure representing attitude, rotation rate, gravity, and user acceleration.
- **`error`**: An error object representing an error when providing gyroscope data. If an error occurs, you should stop gyroscope updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](../cmerrordomain.md) domain and the [CMError](../cmerror.md) type.

## See Also

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidConnect(\_:)](../cmheadphonemotionmanagerdelegate/headphonemotionmanagerdidconnect%28__%29.md): Performs a callback to the delegate after you connect headphones.
- [headphoneMotionManagerDidDisconnect(\_:)](../cmheadphonemotionmanagerdelegate/headphonemotionmanagerdiddisconnect%28__%29.md): Performs a callback to the delegate after you disconnect headphones.

# CMHeadphoneDeviceMotionHandler (Objective-C)

**Framework:** Core Motion  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of block callback for handling headphone-motion data.

## Declaration

```objectivec
typedef void (^)(CMDeviceMotion *, NSError *) CMHeadphoneDeviceMotionHandler;
```

<a id="Discussion"></a>

## Discussion

The system calls `CMDeviceMotionHandler` blocks when there is device-motion data to process. You pass the block into [startDeviceMotionUpdatesToQueue:withHandler:](startdevicemotionupdates%28to_withhandler_%29.md) as the second argument. Blocks of this type return no value, but take two arguments:

- **`motion`**: A [CMHeadphoneMotionManager](../cmheadphonemotionmanager.md) object, which encapsulates other objects and a structure representing attitude, rotation rate, gravity, and user acceleration.
- **`error`**: An error object representing an error when providing gyroscope data. If an error occurs, you should stop gyroscope updates and inform the user of the problem. If there is no error, this argument is `nil`. Core Motion errors are of the [CMErrorDomain](../cmerrordomain.md) domain and the [CMError](../cmerror.md) type.

## See Also

### Connecting and Disconnecting Headphones

- [headphoneMotionManagerDidConnect:](../cmheadphonemotionmanagerdelegate/headphonemotionmanagerdidconnect%28__%29.md): Performs a callback to the delegate after you connect headphones.
- [headphoneMotionManagerDidDisconnect:](../cmheadphonemotionmanagerdelegate/headphonemotionmanagerdiddisconnect%28__%29.md): Performs a callback to the delegate after you disconnect headphones.
