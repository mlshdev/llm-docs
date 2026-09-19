> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilder/workoutsession

# workoutSession (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

The workout session created by the data source and associated with this builder.

## Declaration

```swift
weak var workoutSession: HKWorkoutSession? { get }
```

## See Also

### Configuring a live workout builder

- [dataSource](datasource.md): A data source that provides live data from a workout session automatically.
- [delegate](delegate.md): The live builder’s delegate.

# workoutSession (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

The workout session created by the data source and associated with this builder.

## Declaration

```objectivec
@property (weak, readonly) HKWorkoutSession * workoutSession;
```

## See Also

### Configuring a live workout builder

- [dataSource](datasource.md): A data source that provides live data from a workout session automatically.
- [delegate](delegate.md): The live builder’s delegate.
