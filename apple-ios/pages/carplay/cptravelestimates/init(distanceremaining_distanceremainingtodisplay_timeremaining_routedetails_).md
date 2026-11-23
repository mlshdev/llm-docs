> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptravelestimates/init(distanceremaining:distanceremainingtodisplay:timeremaining:routedetails:)

# init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:routeDetails:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize a @c CPTravelEstimates with distance, distance to display, time remaining, and additional trip information.

## Declaration

```swift
init(distanceRemaining: Measurement<UnitLength>, distanceRemainingToDisplay: Measurement<UnitLength>, timeRemaining time: TimeInterval, routeDetails: [CPRouteDetail])
```

## See Also

### Creating travel estimates

- [init(distanceRemaining:timeRemaining:)](init%28distanceremaining_timeremaining_%29.md): Creates travel estimates with the remaining distance and time.
- [init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:)](init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.
- [init(coder:)](init%28coder_%29.md)

# initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:routeDetails: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize a @c CPTravelEstimates with distance, distance to display, time remaining, and additional trip information.

## Declaration

```objectivec
- (instancetype) initWithDistanceRemaining:(NSMeasurement<NSUnitLength *> *) distanceRemaining distanceRemainingToDisplay:(NSMeasurement<NSUnitLength *> *) distanceRemainingToDisplay timeRemaining:(NSTimeInterval) time routeDetails:(NSArray<CPRouteDetail *> *) routeDetails;
```

## See Also

### Creating travel estimates

- [initWithDistanceRemaining:timeRemaining:](init%28distanceremaining_timeremaining_%29.md): Creates travel estimates with the remaining distance and time.
- [initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:](init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.
