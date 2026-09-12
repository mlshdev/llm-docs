> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/isaccelerometeravailable](https://developer.apple.com/documentation/coremotion/cmmotionmanager/isaccelerometeravailable)

# isAccelerometerAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether an accelerometer is available on the device.

## Declaration

```swift
var isAccelerometerAvailable: Bool { get }
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

## See Also

### Related Documentation

- [isAccelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.

### Determining the Availability of Services

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [isGyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.
- [isMagnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.

# accelerometerAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether an accelerometer is available on the device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAccelerometerAvailable) BOOL accelerometerAvailable;
```

## Mentioned In

- [Getting raw accelerometer events](../getting-raw-accelerometer-events.md)

## See Also

### Related Documentation

- [accelerometerActive](isaccelerometeractive.md): A Boolean value that indicates whether accelerometer updates are currently happening.

### Determining the Availability of Services

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [gyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.
- [magnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.
