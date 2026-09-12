> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/ismagnetometeractive](https://developer.apple.com/documentation/coremotion/cmmotionmanager/ismagnetometeractive)

# isMagnetometerActive (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A Boolean value that determines whether magnetometer updates are currently happening.

## Declaration

```swift
var isMagnetometerActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the [startMagnetometerUpdates(to:withHandler:)](startmagnetometerupdates%28to_withhandler_%29.md) or [startMagnetometerUpdates()](startmagnetometerupdates%28%29.md) method has been called since the last time the [stopMagnetometerUpdates()](stopmagnetometerupdates%28%29.md) method was called. (If the start methods hadn’t been called, the app could be getting updates from the magnetometer after calling, for example, [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md), but this property would return [false](https://developer.apple.com/documentation/swift/false).)

## See Also

### Related Documentation

- [isMagnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.

### Determining Which Services Are Active

- [isDeviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [isAccelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [isGyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.

# magnetometerActive (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A Boolean value that determines whether magnetometer updates are currently happening.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMagnetometerActive) BOOL magnetometerActive;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether the [startMagnetometerUpdatesToQueue:withHandler:](startmagnetometerupdates%28to_withhandler_%29.md) or [startMagnetometerUpdates](startmagnetometerupdates%28%29.md) method has been called since the last time the [stopMagnetometerUpdates](stopmagnetometerupdates%28%29.md) method was called. (If the start methods hadn’t been called, the app could be getting updates from the magnetometer after calling, for example, [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md), but this property would return [false](https://developer.apple.com/documentation/swift/false).)

## See Also

### Related Documentation

- [magnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.

### Determining Which Services Are Active

- [deviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [accelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [gyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.
