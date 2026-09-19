> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptravelestimates/distanceremaining

# distanceRemaining (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The remaining distance for the travel estimate.

## Declaration

```swift
var distanceRemaining: Measurement<UnitLength> { get }
```

## See Also

### Getting Travel Estimates

- [distanceRemainingToDisplay](distanceremainingtodisplay.md): The distance remaining that the framework displays to a person, in the default units of measurement.
- [timeRemaining](timeremaining.md): The remaining time for the travel estimate.

# distanceRemaining (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The remaining distance for the travel estimate.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSMeasurement<NSUnitLength *> * distanceRemaining;
```

## See Also

### Getting Travel Estimates

- [distanceRemainingToDisplay](distanceremainingtodisplay.md): The distance remaining that the framework displays to a person, in the default units of measurement.
- [timeRemaining](timeremaining.md): The remaining time for the travel estimate.
