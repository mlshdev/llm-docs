> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristtemperature/value](https://developer.apple.com/documentation/sensorkit/srwristtemperature/value)

# value (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The temperature sensor value in celsius.

## Declaration

```swift
var value: Measurement<UnitTemperature> { get }
```

## See Also

### Getting temperature information

- [timestamp](timestamp.md): The date and time when the device records the temperature.
- [errorEstimate](errorestimate.md): An estimate of the amount of error in the temperature measurement.

# value (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The temperature sensor value in celsius.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSMeasurement<NSUnitTemperature *> * value;
```

## See Also

### Getting temperature information

- [timestamp](timestamp.md): The date and time when the device records the temperature.
- [errorEstimate](errorestimate.md): An estimate of the amount of error in the temperature measurement.
