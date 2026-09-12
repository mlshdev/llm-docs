> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptravelestimates/init(distanceremaining:distanceremainingtodisplay:timeremaining:)](https://developer.apple.com/documentation/carplay/cptravelestimates/init(distanceremaining:distanceremainingtodisplay:timeremaining:))

# init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Creates a travel estimates instance with the distance remaining that the framework displays to a person.

## Declaration

```swift
init(distanceRemaining: Measurement<UnitLength>, distanceRemainingToDisplay: Measurement<UnitLength>, timeRemaining time: TimeInterval)
```

## Parameters

- `distanceRemaining`: The distance remaining in `Measurement` units. distanceRemainingToDisplay: the disance remaining to dfisk to a person, in `Measurement` units. time: \`TimeInterval

<a id="return-value"></a>

## Return Value

A newly initialized travel estimates object.

<a id="Discussion"></a>

## Discussion

If not set, falls back to `distanceRemaining`.

## See Also

### Creating a Travel Estimates Object

- [init(distanceRemaining:timeRemaining:)](init%28distanceremaining_timeremaining_%29.md): Creates travel estimates with the remaining distance and time.

# initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Creates a travel estimates instance with the distance remaining that the framework displays to a person.

## Declaration

```objectivec
- (instancetype) initWithDistanceRemaining:(NSMeasurement<NSUnitLength *> *) distanceRemaining distanceRemainingToDisplay:(NSMeasurement<NSUnitLength *> *) distanceRemainingToDisplay timeRemaining:(NSTimeInterval) time;
```

## Parameters

- `distanceRemaining`: The distance remaining in `Measurement` units. distanceRemainingToDisplay: the disance remaining to dfisk to a person, in `Measurement` units. time: \`TimeInterval

<a id="return-value"></a>

## Return Value

A newly initialized travel estimates object.

<a id="Discussion"></a>

## Discussion

If not set, falls back to `distanceRemaining`.

## See Also

### Creating a Travel Estimates Object

- [initWithDistanceRemaining:timeRemaining:](init%28distanceremaining_timeremaining_%29.md): Creates travel estimates with the remaining distance and time.
