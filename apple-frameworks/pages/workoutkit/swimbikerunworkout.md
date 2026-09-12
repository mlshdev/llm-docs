> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/swimbikerunworkout](https://developer.apple.com/documentation/workoutkit/swimbikerunworkout)

# SwimBikeRunWorkout

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A workout for multisport activities that include running, biking, and swimming.

## Declaration

```swift
struct SwimBikeRunWorkout
```

## Topics

### Creating new multisport workouts.

- [init(activities:displayName:)](swimbikerunworkout/init%28activities_displayname_%29.md): Creates a new multisport workout for the specified activities.
- [SwimBikeRunWorkout.Activity](swimbikerunworkout/activity.md): An activity in a multisport workout.
- [supportsActivityOrdering(\_:)](swimbikerunworkout/supportsactivityordering%28__%29.md): Returns a Boolean value that indicates whether the system supports a multisport workout with the specified list of activities.

### Accessing workout data

- [activities](swimbikerunworkout/activities.md): An ordered list of activities for the multisport workout.
- [displayName](swimbikerunworkout/displayname.md): The name that the system uses when displaying the workout.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common workouts

- [SingleGoalWorkout](singlegoalworkout.md): A workout with a single goal.
- [PacerWorkout](pacerworkout.md): A workout in which a person covers a specific distance in a given time.
