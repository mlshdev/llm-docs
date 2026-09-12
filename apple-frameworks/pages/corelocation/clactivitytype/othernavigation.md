> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clactivitytype/othernavigation](https://developer.apple.com/documentation/corelocation/clactivitytype/othernavigation)

# CLActivityType.otherNavigation (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates positioning for activities that don’t or may not adhere to roads such as cycling, scooters, trains, boats and off-road vehicles.

## Declaration

```swift
case otherNavigation
```

<a id="Discussion"></a>

## Discussion

Use this activity type to track a positioning session such as by boat, train, or for pedestrian navigation tracking that’s not tied to a road network, paths, or trails. You can also use it for positioning activities indoors and outdoors, such as walking, that isn’t tied to a dedicated fitness session.

This activity might cause the system to pause location updates when the vehicle doesn’t move a significant distance over a period of time.

## See Also

### Activity types

- [CLActivityType.airborne](airborne.md): The value that indicates activities in the air.
- [CLActivityType.automotiveNavigation](automotivenavigation.md): The value that indicates positioning in an automobile following a road network.
- [CLActivityType.fitness](fitness.md): The value that indicates positioning during dedicated fitness sessions, such as walking workouts, running workouts, cycling workouts, and so on.
- [CLActivityType.maritime](maritime.md): The value that indicates positioning for activities in vessels on water, including while anchored.
- [CLActivityType.other](other.md): The value that indicates the app is using location manager for an unspecified activity.

# CLActivityTypeOtherNavigation (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value that indicates positioning for activities that don’t or may not adhere to roads such as cycling, scooters, trains, boats and off-road vehicles.

## Declaration

```objectivec
CLActivityTypeOtherNavigation
```

<a id="Discussion"></a>

## Discussion

Use this activity type to track a positioning session such as by boat, train, or for pedestrian navigation tracking that’s not tied to a road network, paths, or trails. You can also use it for positioning activities indoors and outdoors, such as walking, that isn’t tied to a dedicated fitness session.

This activity might cause the system to pause location updates when the vehicle doesn’t move a significant distance over a period of time.

## See Also

### Activity types

- [CLActivityTypeAirborne](airborne.md): The value that indicates activities in the air.
- [CLActivityTypeAutomotiveNavigation](automotivenavigation.md): The value that indicates positioning in an automobile following a road network.
- [CLActivityTypeFitness](fitness.md): The value that indicates positioning during dedicated fitness sessions, such as walking workouts, running workouts, cycling workouts, and so on.
- [CLActivityTypeMaritime](maritime.md): The value that indicates positioning for activities in vessels on water, including while anchored.
- [CLActivityTypeOther](other.md): The value that indicates the app is using location manager for an unspecified activity.
