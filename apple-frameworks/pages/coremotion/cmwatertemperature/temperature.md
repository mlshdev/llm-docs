> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatertemperature/temperature](https://developer.apple.com/documentation/coremotion/cmwatertemperature/temperature)

# temperature (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The water temperature.

## Declaration

```swift
var temperature: Measurement<UnitTemperature> { get }
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [temperatureUncertainty](temperatureuncertainty.md): The amount of uncertainty in the measurement of the water temperature.

# temperature (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The water temperature.

## Declaration

```objectivec
@property (nonatomic, readonly) NSMeasurement<NSUnitTemperature *> * temperature;
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [temperatureUncertainty](temperatureuncertainty.md): The amount of uncertainty in the measurement of the water temperature.
