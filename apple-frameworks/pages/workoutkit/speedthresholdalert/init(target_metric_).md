> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/workoutkit/speedthresholdalert/init(target:metric:)

# init(target:metric:)

**Framework:** WorkoutKit  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 10.0+

Creates a new speed threshold alert.

## Declaration

```swift
init(target: Measurement<UnitSpeed>, metric: WorkoutAlertMetric)
```

## Parameters

- `target`: A speed measurement that represents the target threshold.
- `metric`: The metric used to measure the speed.
