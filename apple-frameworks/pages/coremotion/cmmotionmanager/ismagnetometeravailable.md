> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/ismagnetometeravailable](https://developer.apple.com/documentation/coremotion/cmmotionmanager/ismagnetometeravailable)

# isMagnetometerAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A Boolean value that indicates whether a magnetometer is available on the device.

## Declaration

```swift
var isMagnetometerAvailable: Bool { get }
```

## See Also

### Related Documentation

- [isMagnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.

### Determining the Availability of Services

- [isDeviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [isAccelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [isGyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.

# magnetometerAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A Boolean value that indicates whether a magnetometer is available on the device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isMagnetometerAvailable) BOOL magnetometerAvailable;
```

## See Also

### Related Documentation

- [magnetometerActive](ismagnetometeractive.md): A Boolean value that determines whether magnetometer updates are currently happening.

### Determining the Availability of Services

- [deviceMotionAvailable](isdevicemotionavailable.md): A Boolean value that indicates whether the device-motion service is available on the device.
- [accelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [gyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.
