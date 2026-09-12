> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/pacerworkout/supportsactivity(_:)](https://developer.apple.com/documentation/workoutkit/pacerworkout/supportsactivity(_:))

# supportsActivity(\_:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Returns a Boolean value that indicates whether the system supports pacer workouts for the given workout activity type.

## Declaration

```swift
static func supportsActivity(_ activity: HKWorkoutActivityType) -> Bool
```

## Parameters

- `activity`: The target workout activity type.

## See Also

### Creating a new pacer workout

- [init(activity:location:distance:time:)](init%28activity_location_distance_time_%29.md): Creates a new pacer workout for the specified distance and time.
