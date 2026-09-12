> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/customworkout/supportsactivity(_:)](https://developer.apple.com/documentation/workoutkit/customworkout/supportsactivity(_:))

# supportsActivity(\_:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Returns a Boolean value that indicates whether the system supports the specified workout activity .

## Declaration

```swift
static func supportsActivity(_ activity: HKWorkoutActivityType) -> Bool
```

## Parameters

- `activity`: The activity to check.

## See Also

### Creating custom workouts

- [init(activity:location:displayName:warmup:blocks:cooldown:)](init%28activity_location_displayname_warmup_blocks_cooldown_%29.md): Create a new custom workout.
- [supportsAlert(\_:activity:location:)](supportsalert%28__activity_location_%29.md): Returns a Boolean value that indicates whether the system supports the specified alert for the given activity type and location.
- [supportsGoal(\_:activity:location:)](supportsgoal%28__activity_location_%29.md): Returns a Boolean value that indicates whether the system supports the specified goal for the given activity type and location.
