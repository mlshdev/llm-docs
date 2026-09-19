> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
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

# initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:routeDetails: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Initialize a @c CPTravelEstimates with distance, distance to display, time remaining, and additional trip information.

## Declaration

```objectivec
- (instancetype) initWithDistanceRemaining:(NSMeasurement<NSUnitLength *> *) distanceRemaining distanceRemainingToDisplay:(NSMeasurement<NSUnitLength *> *) distanceRemainingToDisplay timeRemaining:(NSTimeInterval) time routeDetails:(NSArray<CPRouteDetail *> *) routeDetails;
```
