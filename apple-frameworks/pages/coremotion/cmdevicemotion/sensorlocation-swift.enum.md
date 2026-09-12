> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmdevicemotion/sensorlocation-swift.enum](https://developer.apple.com/documentation/coremotion/cmdevicemotion/sensorlocation-swift.enum)

# CMDeviceMotion.SensorLocation (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Defines the device’s sensor locations.

## Declaration

```swift
enum SensorLocation
```

## Topics

### Sensor Locations

- [CMDeviceMotion.SensorLocation.default](sensorlocation-swift.enum/default.md): The default sensor location.
- [CMDeviceMotion.SensorLocation.headphoneLeft](sensorlocation-swift.enum/headphoneleft.md): The sensor is in the left headphone.
- [CMDeviceMotion.SensorLocation.headphoneRight](sensorlocation-swift.enum/headphoneright.md): The sensor is in the right headphone.

### Initializers

- [init(rawValue:)](sensorlocation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Sensor Location

- [sensorLocation](sensorlocation-swift.property.md): The location of the sensors that compute the device-motion data.

# CMDeviceMotionSensorLocation (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Defines the device’s sensor locations.

## Declaration

```objectivec
enum CMDeviceMotionSensorLocation : NSInteger;
```

## Topics

### Sensor Locations

- [CMDeviceMotionSensorLocationDefault](sensorlocation-swift.enum/default.md): The default sensor location.
- [CMDeviceMotionSensorLocationHeadphoneLeft](sensorlocation-swift.enum/headphoneleft.md): The sensor is in the left headphone.
- [CMDeviceMotionSensorLocationHeadphoneRight](sensorlocation-swift.enum/headphoneright.md): The sensor is in the right headphone.

## See Also

### Getting the Sensor Location

- [sensorLocation](sensorlocation-swift.property.md): The location of the sensors that compute the device-motion data.
