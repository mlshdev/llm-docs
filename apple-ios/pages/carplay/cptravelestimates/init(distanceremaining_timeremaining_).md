> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptravelestimates/init(distanceremaining:timeremaining:)

# init(distanceRemaining:timeRemaining:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates travel estimates with the remaining distance and time.

## Declaration

```swift
init(distanceRemaining distance: Measurement<UnitLength>, timeRemaining time: TimeInterval)
```

## Parameters

- `distance`: The remaining distance for the travel estimate.
- `time`: The remaining time for the travel estimate.

<a id="return-value"></a>

## Return Value

A newly initialized travel estimates object.

## See Also

### Creating travel estimates

- [init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:)](init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.
- [init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:routeDetails:)](init%28distanceremaining_distanceremainingtodisplay_timeremaining_routedetails_%29.md): Initialize a @c CPTravelEstimates with distance, distance to display, time remaining, and additional trip information.
- [init(coder:)](init%28coder_%29.md)

# initWithDistanceRemaining:timeRemaining: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates travel estimates with the remaining distance and time.

## Declaration

```objectivec
- (instancetype) initWithDistanceRemaining:(NSMeasurement<NSUnitLength *> *) distance timeRemaining:(NSTimeInterval) time;
```

## Parameters

- `distance`: The remaining distance for the travel estimate.
- `time`: The remaining time for the travel estimate.

<a id="return-value"></a>

## Return Value

A newly initialized travel estimates object.

## See Also

### Creating travel estimates

- [initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:](init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.
- [initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:routeDetails:](init%28distanceremaining_distanceremainingtodisplay_timeremaining_routedetails_%29.md): Initialize a @c CPTravelEstimates with distance, distance to display, time remaining, and additional trip information.
