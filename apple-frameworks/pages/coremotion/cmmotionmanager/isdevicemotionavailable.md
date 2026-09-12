> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmmotionmanager/isdevicemotionavailable](https://developer.apple.com/documentation/coremotion/cmmotionmanager/isdevicemotionavailable)

# isDeviceMotionAvailable (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the device-motion service is available on the device.

## Declaration

```swift
var isDeviceMotionAvailable: Bool { get }
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

The device-motion service is available if a device has both an accelerometer and a gyroscope. Because all devices have accelerometers, this property is functionally equivalent to [isGyroAvailable](isgyroavailable.md).

## See Also

### Related Documentation

- [isDeviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.

### Determining the Availability of Services

- [isAccelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [isGyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.
- [isMagnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.

# deviceMotionAvailable (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the device-motion service is available on the device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isDeviceMotionAvailable) BOOL deviceMotionAvailable;
```

## Mentioned In

- [Getting processed device-motion data](../getting-processed-device-motion-data.md)

<a id="Discussion"></a>

## Discussion

The device-motion service is available if a device has both an accelerometer and a gyroscope. Because all devices have accelerometers, this property is functionally equivalent to [gyroAvailable](isgyroavailable.md).

## See Also

### Related Documentation

- [deviceMotionActive](isdevicemotionactive.md): A Boolean value that determines whether the app is receiving updates from the device-motion service.

### Determining the Availability of Services

- [accelerometerAvailable](isaccelerometeravailable.md): A Boolean value that indicates whether an accelerometer is available on the device.
- [gyroAvailable](isgyroavailable.md): A Boolean value that indicates whether a gyroscope is available on the device.
- [magnetometerAvailable](ismagnetometeravailable.md): A Boolean value that indicates whether a magnetometer is available on the device.
