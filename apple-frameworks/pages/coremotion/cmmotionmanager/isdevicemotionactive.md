> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/isdevicemotionactive](https://developer.apple.com/documentation/coremotion/cmmotionmanager/isdevicemotionactive)

# isDeviceMotionActive (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the app is receiving updates from the device-motion service.

## Declaration

```swift
var isDeviceMotionActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether [startDeviceMotionUpdates(to:withHandler:)](startdevicemotionupdates%28to_withhandler_%29.md) or [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md) has been called since the last time [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md) was called.

## See Also

### Related Documentation

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.

### Determining Which Services Are Active

- [isAccelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [isGyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.
- [isMagnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.

# deviceMotionActive (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether the app is receiving updates from the device-motion service.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDeviceMotionActive) BOOL deviceMotionActive;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether [startDeviceMotionUpdatesToQueue:withHandler:](startdevicemotionupdates%28to_withhandler_%29.md) or [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md) has been called since the last time [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md) was called.

## See Also

### Related Documentation

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.

### Determining Which Services Are Active

- [accelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [gyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.
- [magnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.
