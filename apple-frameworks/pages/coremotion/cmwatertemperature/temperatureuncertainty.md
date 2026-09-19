> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmwatertemperature/temperatureuncertainty

# temperatureUncertainty (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The amount of uncertainty in the measurement of the water temperature.

## Declaration

```swift
var temperatureUncertainty: Measurement<UnitTemperature> { get }
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [temperature](temperature.md): The water temperature.

# temperatureUncertainty (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The amount of uncertainty in the measurement of the water temperature.

## Declaration

```objectivec
@property (nonatomic, readonly) NSMeasurement<NSUnitTemperature *> * temperatureUncertainty;
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [temperature](temperature.md): The water temperature.
