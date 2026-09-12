> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/customworkout/supportsgoal(_:activity:location:)](https://developer.apple.com/documentation/workoutkit/customworkout/supportsgoal(_:activity:location:))

# supportsGoal(\_:activity:location:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Returns a Boolean value that indicates whether the system supports the specified goal for the given activity type and location.

## Declaration

```swift
static func supportsGoal(_ goal: WorkoutGoal, activity: HKWorkoutActivityType, location: HKWorkoutSessionLocationType = .unknown) -> Bool
```

## Parameters

- `goal`: The goal to check.
- `activity`: The workout activity.
- `location`: The workout location.

## See Also

### Creating custom workouts

- [init(activity:location:displayName:warmup:blocks:cooldown:)](init%28activity_location_displayname_warmup_blocks_cooldown_%29.md): Create a new custom workout.
- [supportsActivity(\_:)](supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports the specified workout activity .
- [supportsAlert(\_:activity:location:)](supportsalert%28__activity_location_%29.md): Returns a Boolean value that indicates whether the system supports the specified alert for the given activity type and location.
