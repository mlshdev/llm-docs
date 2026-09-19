> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/speedrangealert/init(target:metric:)

# init(target:metric:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new speed alert for the provided range of values.

## Declaration

```swift
init(target: ClosedRange<Measurement<UnitSpeed>>, metric: WorkoutAlertMetric)
```

## Parameters

- `target`: A range of speed measurements.
- `metric`: The metric used to measure the speed.
