> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/singlegoalworkout/supportsgoal(_:activity:location:)

# supportsGoal(\_:activity:location:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Returns a Boolean value that determines whether the system supports the provided goal.

## Declaration

```swift
static func supportsGoal(_ goal: WorkoutGoal, activity: HKWorkoutActivityType, location: HKWorkoutSessionLocationType = .unknown) -> Bool
```

## Parameters

- `goal`: The target goal.
- `activity`: The workout’s activity type.
- `location`: The workout’s location.

## See Also

### Creating single goal workouts

- [init(activity:location:swimmingLocation:goal:)](init%28activity_location_swimminglocation_goal_%29.md): Creates a new workout with a single goal.
- [supportsActivity(\_:)](supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports the provided workout activity.
