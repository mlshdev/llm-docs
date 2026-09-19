> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/workoutplan/init(_:id:)

# init(\_:id:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new workout plan from the provided workout and ID.

## Declaration

```swift
init(_ workout: WorkoutPlan.Workout, id: UUID = UUID())
```

## Parameters

- `workout`: The workout represented by this plan.
- `id`: A unique ID for the plan.

## See Also

### Creating a workout plan

- [WorkoutPlan.Workout](workout-swift.enum.md): The workout for the workout plan.
