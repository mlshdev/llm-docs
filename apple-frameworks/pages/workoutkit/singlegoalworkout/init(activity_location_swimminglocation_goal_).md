> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/singlegoalworkout/init(activity:location:swimminglocation:goal:)](https://developer.apple.com/documentation/workoutkit/singlegoalworkout/init(activity:location:swimminglocation:goal:))

# init(activity:location:swimmingLocation:goal:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new workout with a single goal.

## Declaration

```swift
init(activity: HKWorkoutActivityType, location: HKWorkoutSessionLocationType = .unknown, swimmingLocation: HKWorkoutSwimmingLocationType = .unknown, goal: WorkoutGoal = .open)
```

## Parameters

- `activity`: The workout activity type.
- `location`: The workout location.
- `swimmingLocation`: For swimming workouts, the workout’s swimming location.
- `goal`: The goal for the workout.

## See Also

### Creating single goal workouts

- [supportsActivity(\_:)](supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports the provided workout activity.
- [supportsGoal(\_:activity:location:)](supportsgoal%28__activity_location_%29.md): Returns a Boolean value that determines whether the system supports the provided goal.
