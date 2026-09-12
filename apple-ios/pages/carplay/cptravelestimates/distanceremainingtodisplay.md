> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptravelestimates/distanceremainingtodisplay](https://developer.apple.com/documentation/carplay/cptravelestimates/distanceremainingtodisplay)

# distanceRemainingToDisplay (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The distance remaining that the framework displays to a person, in the default units of measurement.

## Declaration

```swift
var distanceRemainingToDisplay: Measurement<UnitLength> { get }
```

<a id="Discussion"></a>

## Discussion

If not set, falls back to `distanceRemaining`.

## See Also

### Getting Travel Estimates

- [distanceRemaining](distanceremaining.md): The remaining distance for the travel estimate.
- [timeRemaining](timeremaining.md): The remaining time for the travel estimate.

# distanceRemainingToDisplay (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

The distance remaining that the framework displays to a person, in the default units of measurement.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSMeasurement<NSUnitLength *> * distanceRemainingToDisplay;
```

<a id="Discussion"></a>

## Discussion

If not set, falls back to `distanceRemaining`.

## See Also

### Getting Travel Estimates

- [distanceRemaining](distanceremaining.md): The remaining distance for the travel estimate.
- [timeRemaining](timeremaining.md): The remaining time for the travel estimate.
