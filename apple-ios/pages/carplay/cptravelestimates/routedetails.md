> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptravelestimates/routedetails

# routeDetails (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Additional trip information such as battery, fuel, or toll information to display with travel estimates.

## Declaration

```swift
var routeDetails: [CPRouteDetail] { get }
```

## See Also

### Getting travel estimates

- [distanceRemaining](distanceremaining.md): The remaining distance for the travel estimate.
- [distanceRemainingToDisplay](distanceremainingtodisplay.md): The distance remaining that the framework displays to a person, in the default units of measurement.
- [timeRemaining](timeremaining.md): The remaining time for the travel estimate.

# routeDetails (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Additional trip information such as battery, fuel, or toll information to display with travel estimates.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<CPRouteDetail *> * routeDetails;
```

## See Also

### Getting travel estimates

- [distanceRemaining](distanceremaining.md): The remaining distance for the travel estimate.
- [distanceRemainingToDisplay](distanceremainingtodisplay.md): The distance remaining that the framework displays to a person, in the default units of measurement.
- [timeRemaining](timeremaining.md): The remaining time for the travel estimate.
