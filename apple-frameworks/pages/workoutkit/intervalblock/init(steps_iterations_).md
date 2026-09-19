> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/intervalblock/init(steps:iterations:)

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
