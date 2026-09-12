> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/workoutkit/intervalblock/init(steps:iterations:)](https://developer.apple.com/documentation/workoutkit/intervalblock/init(steps:iterations:))

# init(steps:iterations:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new interval block, in which the workout repeats the provided steps the specified number of times.

## Declaration

```swift
init(steps: [IntervalStep] = [], iterations: Int = 1)
```

## Parameters

- `steps`: A series of work and recovery steps for the interval block.
- `iterations`: The number of times the interval block repeats its steps.
