> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/singlegoalworkout](https://developer.apple.com/documentation/workoutkit/singlegoalworkout)

# SingleGoalWorkout

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A workout with a single goal.

## Declaration

```swift
struct SingleGoalWorkout
```

## Topics

### Creating single goal workouts

- [init(activity:location:swimmingLocation:goal:)](singlegoalworkout/init%28activity_location_swimminglocation_goal_%29.md): Creates a new workout with a single goal.
- [supportsActivity(\_:)](singlegoalworkout/supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports the provided workout activity.
- [supportsGoal(\_:activity:location:)](singlegoalworkout/supportsgoal%28__activity_location_%29.md): Returns a Boolean value that determines whether the system supports the provided goal.

### Accessing workout data

- [activity](singlegoalworkout/activity.md): The workout activity type.
- [location](singlegoalworkout/location.md): The workout location.
- [swimmingLocation](singlegoalworkout/swimminglocation.md): For swimming workouts, the workout’s swimming location.
- [goal](singlegoalworkout/goal.md): The goal for the workout.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common workouts

- [PacerWorkout](pacerworkout.md): A workout in which a person covers a specific distance in a given time.
- [SwimBikeRunWorkout](swimbikerunworkout.md): A workout for multisport activities that include running, biking, and swimming.
