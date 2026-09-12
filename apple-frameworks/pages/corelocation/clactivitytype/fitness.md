> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clactivitytype/fitness](https://developer.apple.com/documentation/corelocation/clactivitytype/fitness)

# CLActivityType.fitness (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates positioning during dedicated fitness sessions, such as walking workouts, running workouts, cycling workouts, and so on.

## Declaration

```swift
case fitness
```

<a id="Discussion"></a>

## Discussion

For other positioning sessions that aren’t workouts, use [CLActivityType.otherNavigation](othernavigation.md) or [CLActivityType.other](other.md). This activity might cause the system to pause location updates when the user doesn’t move a significant distance over a period of time.

When [activityType](../cllocationmanager/activitytype.md) is [CLActivityType.fitness](fitness.md), the system disables indoor positioning.

## See Also

### Activity types

- [CLActivityType.airborne](airborne.md): The value that indicates activities in the air.
- [CLActivityType.automotiveNavigation](automotivenavigation.md): The value that indicates positioning in an automobile following a road network.
- [CLActivityType.maritime](maritime.md): The value that indicates positioning for activities in vessels on water, including while anchored.
- [CLActivityType.other](other.md): The value that indicates the app is using location manager for an unspecified activity.
- [CLActivityType.otherNavigation](othernavigation.md): The value that indicates positioning for activities that don’t or may not adhere to roads such as cycling, scooters, trains, boats and off-road vehicles.

# CLActivityTypeFitness (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates positioning during dedicated fitness sessions, such as walking workouts, running workouts, cycling workouts, and so on.

## Declaration

```objectivec
CLActivityTypeFitness
```

<a id="Discussion"></a>

## Discussion

For other positioning sessions that aren’t workouts, use [CLActivityTypeOtherNavigation](othernavigation.md) or [CLActivityTypeOther](other.md). This activity might cause the system to pause location updates when the user doesn’t move a significant distance over a period of time.

When [activityType](../cllocationmanager/activitytype.md) is [CLActivityTypeFitness](fitness.md), the system disables indoor positioning.

## See Also

### Activity types

- [CLActivityTypeAirborne](airborne.md): The value that indicates activities in the air.
- [CLActivityTypeAutomotiveNavigation](automotivenavigation.md): The value that indicates positioning in an automobile following a road network.
- [CLActivityTypeMaritime](maritime.md): The value that indicates positioning for activities in vessels on water, including while anchored.
- [CLActivityTypeOther](other.md): The value that indicates the app is using location manager for an unspecified activity.
- [CLActivityTypeOtherNavigation](othernavigation.md): The value that indicates positioning for activities that don’t or may not adhere to roads such as cycling, scooters, trains, boats and off-road vehicles.
