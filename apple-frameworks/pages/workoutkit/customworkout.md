> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/customworkout](https://developer.apple.com/documentation/workoutkit/customworkout)

# CustomWorkout

**Framework:** WorkoutKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

A workout that includes a repeating series of work and recovery steps.

## Declaration

```swift
struct CustomWorkout
```

## Topics

### Creating custom workouts

- [init(activity:location:displayName:warmup:blocks:cooldown:)](customworkout/init%28activity_location_displayname_warmup_blocks_cooldown_%29.md): Create a new custom workout.
- [supportsActivity(\_:)](customworkout/supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports the specified workout activity .
- [supportsAlert(\_:activity:location:)](customworkout/supportsalert%28__activity_location_%29.md): Returns a Boolean value that indicates whether the system supports the specified alert for the given activity type and location.
- [supportsGoal(\_:activity:location:)](customworkout/supportsgoal%28__activity_location_%29.md): Returns a Boolean value that indicates whether the system supports the specified goal for the given activity type and location.

### Accessing workout data

- [displayName](customworkout/displayname.md): The name that the system uses when displaying the workout.
- [activity](customworkout/activity.md): The type of activity performed during the workout.
- [location](customworkout/location.md): The workout session location for the workout.
- [warmup](customworkout/warmup.md): The warmup step (if any).
- [blocks](customworkout/blocks.md): A block of repeating work and recovery steps.
- [cooldown](customworkout/cooldown.md): The cooldown step (if any).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom interval workouts

- [WorkoutStep](workoutstep.md): A step in a workout.
- [IntervalBlock](intervalblock.md): Blocks of work and recovery steps that repeat in a custom workout.
- [IntervalStep](intervalstep.md): An interval that represents a work or recovery step in a workout.
- [WorkoutGoal](workoutgoal.md): A value that specifies the goal for a workout.
- [WorkoutAlert](workoutalert.md): An alert that notifies the user of significant events during a workout.
