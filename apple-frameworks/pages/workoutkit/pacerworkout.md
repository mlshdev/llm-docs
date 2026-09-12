> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/pacerworkout](https://developer.apple.com/documentation/workoutkit/pacerworkout)

# PacerWorkout

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A workout in which a person covers a specific distance in a given time.

## Declaration

```swift
struct PacerWorkout
```

## Topics

### Creating a new pacer workout

- [init(activity:location:distance:time:)](pacerworkout/init%28activity_location_distance_time_%29.md): Creates a new pacer workout for the specified distance and time.
- [supportsActivity(\_:)](pacerworkout/supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports pacer workouts for the given workout activity type.

### Accessing workout data

- [activity](pacerworkout/activity.md): The workout activity type.
- [location](pacerworkout/location.md): The workout location.
- [distance](pacerworkout/distance.md): A length measurement representing the distance goal.
- [time](pacerworkout/time.md): A time measurement representing the time goal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common workouts

- [SingleGoalWorkout](singlegoalworkout.md): A workout with a single goal.
- [SwimBikeRunWorkout](swimbikerunworkout.md): A workout for multisport activities that include running, biking, and swimming.
