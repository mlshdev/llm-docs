> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srwristtemperature/timestamp](https://developer.apple.com/documentation/sensorkit/srwristtemperature/timestamp)

# timestamp (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The date and time when the device records the temperature.

## Declaration

```swift
var timestamp: Date { get }
```

## See Also

### Getting temperature information

- [value](value.md): The temperature sensor value in celsius.
- [errorEstimate](errorestimate.md): An estimate of the amount of error in the temperature measurement.

# timestamp (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The date and time when the device records the temperature.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDate * timestamp;
```

## See Also

### Getting temperature information

- [value](value.md): The temperature sensor value in celsius.
- [errorEstimate](errorestimate.md): An estimate of the amount of error in the temperature measurement.
