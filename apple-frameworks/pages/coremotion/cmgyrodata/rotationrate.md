> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmgyrodata/rotationrate](https://developer.apple.com/documentation/coremotion/cmgyrodata/rotationrate)

# rotationRate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The rotation rate as measured by the device’s gyroscope.

## Declaration

```swift
var rotationRate: CMRotationRate { get }
```

<a id="Discussion"></a>

## Discussion

This property yields a measurement of the device’s rate of rotation around three axes. Whereas this property gives the raw data from the gyroscope, the identically named property of [CMDeviceMotion](../cmdevicemotion.md) gives a [CMRotationRate](../cmrotationrate.md) structure measuring gyroscope data whose bias has been removed by Core Motion algorithms.

## See Also

### Related Documentation

- [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html?language=swift#//apple_ref/doc/uid/TP40009541)

### Getting the Rotation Rate

- [CMRotationRate](../cmrotationrate.md): The type of structures representing a measurement of rotation rate.
- [CMRotationRateData](../cmrotationratedata.md): A data object that contains a single rotation-rate measurement.
- [CMRecordedRotationRateData](../cmrecordedrotationratedata.md): A data object that contains a single rotation-rate measurement at a specific time.

# rotationRate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The rotation rate as measured by the device’s gyroscope.

## Declaration

```objectivec
@property (nonatomic, readonly) CMRotationRate rotationRate;
```

<a id="Discussion"></a>

## Discussion

This property yields a measurement of the device’s rate of rotation around three axes. Whereas this property gives the raw data from the gyroscope, the identically named property of [CMDeviceMotion](../cmdevicemotion.md) gives a [CMRotationRate](../cmrotationrate.md) structure measuring gyroscope data whose bias has been removed by Core Motion algorithms.

## See Also

### Related Documentation

- [Event Handling Guide for UIKit Apps](https://developer.apple.com/library/archive/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/index.html?language=swift#//apple_ref/doc/uid/TP40009541)

### Getting the Rotation Rate

- [CMRotationRate](../cmrotationrate.md): The type of structures representing a measurement of rotation rate.
- [CMRotationRateData](../cmrotationratedata.md): A data object that contains a single rotation-rate measurement.
- [CMRecordedRotationRateData](../cmrecordedrotationratedata.md): A data object that contains a single rotation-rate measurement at a specific time.
