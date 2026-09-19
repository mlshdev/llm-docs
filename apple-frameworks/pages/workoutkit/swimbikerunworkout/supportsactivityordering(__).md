> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/swimbikerunworkout/supportsactivityordering(_:)

# supportsActivityOrdering(\_:)

**Framework:** WorkoutKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Returns a Boolean value that indicates whether the system supports a multisport workout with the specified list of activities.

## Declaration

```swift
static func supportsActivityOrdering(_ activities: [SwimBikeRunWorkout.Activity]) -> Bool
```

## Parameters

- `activities`: An ordered list of activities for the multisport workout.

## See Also

### Creating new multisport workouts.

- [init(activities:displayName:)](init%28activities_displayname_%29.md): Creates a new multisport workout for the specified activities.
- [SwimBikeRunWorkout.Activity](activity.md): An activity in a multisport workout.
