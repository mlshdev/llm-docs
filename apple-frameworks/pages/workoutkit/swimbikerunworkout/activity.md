> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/swimbikerunworkout/activity](https://developer.apple.com/documentation/workoutkit/swimbikerunworkout/activity)

# SwimBikeRunWorkout.Activity

**Framework:** WorkoutKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

An activity in a multisport workout.

## Declaration

```swift
enum Activity
```

## Topics

### Setting valid activities

- [SwimBikeRunWorkout.Activity.cycling(\_:)](activity/cycling%28__%29.md): A cycling workout activity, with the specified location type.
- [SwimBikeRunWorkout.Activity.running(\_:)](activity/running%28__%29.md): A running workout activity, with the specified location type.
- [SwimBikeRunWorkout.Activity.swimming(\_:)](activity/swimming%28__%29.md): A swimming workout activity, with the specified location type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating new multisport workouts.

- [init(activities:displayName:)](init%28activities_displayname_%29.md): Creates a new multisport workout for the specified activities.
- [supportsActivityOrdering(\_:)](supportsactivityordering%28__%29.md): Returns a Boolean value that indicates whether the system supports a multisport workout with the specified list of activities.
