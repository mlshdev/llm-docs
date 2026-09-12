> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/isgyroactive](https://developer.apple.com/documentation/coremotion/cmmotionmanager/isgyroactive)

# isGyroActive (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether gyroscope updates are currently happening.

## Declaration

```swift
var isGyroActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property indicates whether [startGyroUpdates(to:withHandler:)](startgyroupdates%28to_withhandler_%29.md) or [startGyroUpdates()](startgyroupdates%28%29.md) has been called since the last time [stopGyroUpdates()](stopgyroupdates%28%29.md) was called. (If the start methods hadn’t been called, the app could be getting updates from the gyroscope after calling, for example, [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md), but this property would return [false](https://developer.apple.com/documentation/swift/false).)

## See Also

### Related Documentation

- [isGyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.

### Determining Which Services Are Active

- [isDeviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [isAccelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [isMagnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.

# gyroActive (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether gyroscope updates are currently happening.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isGyroActive) BOOL gyroActive;
```

<a id="Discussion"></a>

## Discussion

This property indicates whether [startGyroUpdatesToQueue:withHandler:](startgyroupdates%28to_withhandler_%29.md) or [startGyroUpdates](startgyroupdates%28%29.md) has been called since the last time [stopGyroUpdates](stopgyroupdates%28%29.md) was called. (If the start methods hadn’t been called, the app could be getting updates from the gyroscope after calling, for example, [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md), but this property would return [false](https://developer.apple.com/documentation/swift/false).)

## See Also

### Related Documentation

- [gyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.

### Determining Which Services Are Active

- [deviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.
- [accelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.
- [magnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.
