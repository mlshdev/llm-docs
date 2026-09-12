> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmrotationrate](https://developer.apple.com/documentation/coremotion/cmrotationrate)

# CMRotationRate (Swift)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of structures representing a measurement of rotation rate.

## Declaration

```swift
struct CMRotationRate
```

## Topics

### Getting the Rotation Rates

- [x](cmrotationrate/x.md): The value for the X-axis.
- [y](cmrotationrate/y.md): The value for the Y-axis.
- [z](cmrotationrate/z.md): The value for the Z-axis.

### Initializers

- [init()](cmrotationrate/init%28%29.md)
- [init(x:y:z:)](cmrotationrate/init%28x_y_z_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting the Rotation Rate

- [rotationRate](cmgyrodata/rotationrate.md): The rotation rate as measured by the device’s gyroscope.
- [CMRotationRateData](cmrotationratedata.md): A data object that contains a single rotation-rate measurement.
- [CMRecordedRotationRateData](cmrecordedrotationratedata.md): A data object that contains a single rotation-rate measurement at a specific time.

# CMRotationRate (Objective-C)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The type of structures representing a measurement of rotation rate.

## Declaration

```objectivec
typedef struct { ... } CMRotationRate;
```

## Topics

### Getting the Rotation Rates

- [x](cmrotationrate/x.md): The value for the X-axis.
- [y](cmrotationrate/y.md): The value for the Y-axis.
- [z](cmrotationrate/z.md): The value for the Z-axis.

## See Also

### Getting the Rotation Rate

- [rotationRate](cmgyrodata/rotationrate.md): The rotation rate as measured by the device’s gyroscope.
- [CMRotationRateData](cmrotationratedata.md): A data object that contains a single rotation-rate measurement.
- [CMRecordedRotationRateData](cmrecordedrotationratedata.md): A data object that contains a single rotation-rate measurement at a specific time.
