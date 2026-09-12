> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutstep/init(goal:alert:)](https://developer.apple.com/documentation/workoutkit/workoutstep/init(goal:alert:))

# init(goal:alert:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new workout step with the provided goal and alerts.

## Declaration

```swift
init(goal: WorkoutGoal = .open, alert: (any WorkoutAlert)? = nil)
```

## Parameters

- `goal`: A goal that determines when the step ends.
- `alert`: Optional alerts used during the step.
