> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/workoutalert/supports(activity:location:)

# supports(activity:location:)

**Framework:** WorkoutKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Returns a Boolean value that indicates whether the alert supports the provided activity and location.

## Declaration

```swift
func supports(activity: HKWorkoutActivityType, location: HKWorkoutSessionLocationType) -> Bool
```

## Parameters

- `activity`: The workout’s activity type.
- `location`: The workout’s location type.
