> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/isaccelerometeractive](https://developer.apple.com/documentation/coremotion/cmmotionmanager/isaccelerometeractive)

# isAccelerometerActive (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether accelerometer updates are currently happening.

## Declaration

```swift
var isAccelerometerActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether [startAccelerometerUpdates(to:withHandler:)](startaccelerometerupdates%28to_withhandler_%29.md) or [startAccelerometerUpdates()](startaccelerometerupdates%28%29.md) has been called since the last time [stopAccelerometerUpdates()](stopaccelerometerupdates%28%29.md) was called. (If the start methods hadn’t been called, the app could be getting updates from the accelerometer after calling, for example, [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md), but this property would return [false](https://developer.apple.com/documentation/swift/false).)

## See Also

### Related Documentation

- [isAccelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.

### Determining Which Services Are Active

- [isDeviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [isGyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.
- [isMagnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.

# accelerometerActive (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether accelerometer updates are currently happening.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAccelerometerActive) BOOL accelerometerActive;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether [startAccelerometerUpdatesToQueue:withHandler:](startaccelerometerupdates%28to_withhandler_%29.md) or [startAccelerometerUpdates](startaccelerometerupdates%28%29.md) has been called since the last time [stopAccelerometerUpdates](stopaccelerometerupdates%28%29.md) was called. (If the start methods hadn’t been called, the app could be getting updates from the accelerometer after calling, for example, [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md), but this property would return [false](https://developer.apple.com/documentation/swift/false).)

## See Also

### Related Documentation

- [accelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.

### Determining Which Services Are Active

- [deviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [gyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.
- [magnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.
