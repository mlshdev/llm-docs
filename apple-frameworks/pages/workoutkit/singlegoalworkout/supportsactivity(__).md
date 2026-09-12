> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/singlegoalworkout/supportsactivity(_:)](https://developer.apple.com/documentation/workoutkit/singlegoalworkout/supportsactivity(_:))

# supportsActivity(\_:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Returns a Boolean value that indicates whether the system supports the provided workout activity.

## Declaration

```swift
static func supportsActivity(_ activity: HKWorkoutActivityType) -> Bool
```

## Parameters

- `activity`: The target workout activity type.

## See Also

### Creating single goal workouts

- [init(activity:location:swimmingLocation:goal:)](init%28activity_location_swimminglocation_goal_%29.md): Creates a new workout with a single goal.
- [supportsGoal(\_:activity:location:)](supportsgoal%28__activity_location_%29.md): Returns a Boolean value that determines whether the system supports the provided goal.
