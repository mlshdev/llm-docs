> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristtemperature/errorestimate](https://developer.apple.com/documentation/sensorkit/srwristtemperature/errorestimate)

# errorEstimate (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An estimate of the amount of error in the temperature measurement.

## Declaration

```swift
var errorEstimate: Measurement<UnitTemperature> { get }
```

<a id="Discussion"></a>

## Discussion

This property is a delta value that can be positive or negative.

## See Also

### Getting temperature information

- [timestamp](timestamp.md): The date and time when the device records the temperature.
- [value](value.md): The temperature sensor value in celsius.

# errorEstimate (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An estimate of the amount of error in the temperature measurement.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSMeasurement<NSUnitTemperature *> * errorEstimate;
```

<a id="Discussion"></a>

## Discussion

This property is a delta value that can be positive or negative.

## See Also

### Getting temperature information

- [timestamp](timestamp.md): The date and time when the device records the temperature.
- [value](value.md): The temperature sensor value in celsius.
