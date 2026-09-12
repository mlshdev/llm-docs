> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/pacerworkout/init(activity:location:distance:time:)](https://developer.apple.com/documentation/workoutkit/pacerworkout/init(activity:location:distance:time:))

# init(activity:location:distance:time:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new pacer workout for the specified distance and time.

## Declaration

```swift
init(activity: HKWorkoutActivityType, location: HKWorkoutSessionLocationType = .unknown, distance: Measurement<UnitLength>, time: Measurement<UnitDuration>)
```

## Parameters

- `activity`: The workout activity type.
- `location`: The workout location.
- `distance`: The distance goal for the workout.
- `time`: The time goal for the workout.

## See Also

### Creating a new pacer workout

- [supportsActivity(\_:)](supportsactivity%28__%29.md): Returns a Boolean value that indicates whether the system supports pacer workouts for the given workout activity type.
