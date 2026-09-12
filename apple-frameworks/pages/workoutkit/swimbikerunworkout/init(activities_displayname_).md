> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/swimbikerunworkout/init(activities:displayname:)](https://developer.apple.com/documentation/workoutkit/swimbikerunworkout/init(activities:displayname:))

# init(activities:displayName:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new multisport workout for the specified activities.

## Declaration

```swift
init(activities: [SwimBikeRunWorkout.Activity], displayName: String? = nil)
```

## Parameters

- `activities`: An ordered list of workout activity types included in the workout.
- `displayName`: The name that the system uses when displaying the workout.

## See Also

### Creating new multisport workouts.

- [SwimBikeRunWorkout.Activity](activity.md): An activity in a multisport workout.
- [supportsActivityOrdering(\_:)](supportsactivityordering%28__%29.md): Returns a Boolean value that indicates whether the system supports a multisport workout with the specified list of activities.
