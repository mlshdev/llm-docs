> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/workoutscheduler/schedule(_:at:)](https://developer.apple.com/documentation/workoutkit/workoutscheduler/schedule(_:at:))

# schedule(\_:at:)

**Framework:** WorkoutKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Schedules the provided workout at the specified date.

## Declaration

```swift
final func schedule(_ workout: WorkoutPlan, at: DateComponents) async
```

## Parameters

- `workout`: The workout to schedule.
- `at`: Date components that represent the workout’s starting time.
