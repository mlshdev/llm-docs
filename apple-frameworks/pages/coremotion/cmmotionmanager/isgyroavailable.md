> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/isgyroavailable](https://developer.apple.com/documentation/coremotion/cmmotionmanager/isgyroavailable)

# isGyroAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether a gyroscope is available on the device.

## Declaration

```swift
var isGyroAvailable: Bool { get }
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

## See Also

### Related Documentation

- [isGyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.

### Determining the Availability of Services

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [isAccelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [isMagnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.

# gyroAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether a gyroscope is available on the device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isGyroAvailable) BOOL gyroAvailable;
```

## Mentioned In

- [Getting raw gyroscope events](../getting-raw-gyroscope-events.md)

## See Also

### Related Documentation

- [gyroActive](isgyroactive.md): A Boolean value that determines whether gyroscope updates are currently happening.

### Determining the Availability of Services

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [accelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [magnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.
