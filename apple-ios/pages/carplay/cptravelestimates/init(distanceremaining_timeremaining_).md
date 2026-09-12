> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptravelestimates/init(distanceremaining:timeremaining:)](https://developer.apple.com/documentation/carplay/cptravelestimates/init(distanceremaining:timeremaining:))

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

### Creating a Travel Estimates Object

- [init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:)](init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.

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

### Creating a Travel Estimates Object

- [initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:](init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.
