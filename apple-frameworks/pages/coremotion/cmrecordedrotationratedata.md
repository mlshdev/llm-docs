> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmrecordedrotationratedata](https://developer.apple.com/documentation/coremotion/cmrecordedrotationratedata)

# CMRecordedRotationRateData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 7.0+

A data object that contains a single rotation-rate measurement at a specific time.

## Declaration

```swift
class CMRecordedRotationRateData
```

## Topics

### Accessing Rotation Data

- [startDate](cmrecordedrotationratedata/startdate.md): The time when the gyroscope measured the rotation data.

## Relationships

### Inherits From

- [CMRotationRateData](cmrotationratedata.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Rotation Rate

- [rotationRate](cmgyrodata/rotationrate.md): The rotation rate as measured by the device’s gyroscope.
- [CMRotationRate](cmrotationrate.md): The type of structures representing a measurement of rotation rate.
- [CMRotationRateData](cmrotationratedata.md): A data object that contains a single rotation-rate measurement.

# CMRecordedRotationRateData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 7.0+

A data object that contains a single rotation-rate measurement at a specific time.

## Declaration

```objectivec
@interface CMRecordedRotationRateData : CMRotationRateData
```

## Topics

### Accessing Rotation Data

- [startDate](cmrecordedrotationratedata/startdate.md): The time when the gyroscope measured the rotation data.

## Relationships

### Inherits From

- [CMRotationRateData](cmrotationratedata.md)

## See Also

### Getting the Rotation Rate

- [rotationRate](cmgyrodata/rotationrate.md): The rotation rate as measured by the device’s gyroscope.
- [CMRotationRate](cmrotationrate.md): The type of structures representing a measurement of rotation rate.
- [CMRotationRateData](cmrotationratedata.md): A data object that contains a single rotation-rate measurement.
