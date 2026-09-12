> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/customworkout/init(activity:location:displayname:warmup:blocks:cooldown:)](https://developer.apple.com/documentation/workoutkit/customworkout/init(activity:location:displayname:warmup:blocks:cooldown:))

# init(activity:location:displayName:warmup:blocks:cooldown:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Create a new custom workout.

## Declaration

```swift
init(activity: HKWorkoutActivityType, location: HKWorkoutSessionLocationType = .unknown, displayName: String? = nil, warmup: WorkoutStep? = nil, blocks: [IntervalBlock] = [], cooldown: WorkoutStep? = nil)
```

## Parameters

- `activity`: The type of activity performed during the workout.
- `location`: The workout session location for the workout.
- `displayName`: The name that the system uses when displaying the workout.
- `warmup`: The warmup step (if any).
- `blocks`: A block of repeating work and recovery steps.
- `cooldown`: The cooldown step (if any).

## See Also

### Creating custom workouts

- [supportsActivity(\_:)](supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports the specified workout activity .
- [supportsAlert(\_:activity:location:)](supportsalert%28__activity_location_%29.md): Returns a Boolean value that indicates whether the system supports the specified alert for the given activity type and location.
- [supportsGoal(\_:activity:location:)](supportsgoal%28__activity_location_%29.md): Returns a Boolean value that indicates whether the system supports the specified goal for the given activity type and location.
