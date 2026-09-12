> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutbuilder/delegate](https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilder/delegate)

# delegate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

The live builder’s delegate.

## Declaration

```swift
weak var delegate: (any HKLiveWorkoutBuilderDelegate)? { get set }
```

## See Also

### Configuring a live workout builder

- [dataSource](datasource.md): A data source that provides live data from a workout session automatically.
- [workoutSession](workoutsession.md): The workout session created by the data source and associated with this builder.

# delegate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

The live builder’s delegate.

## Declaration

```objectivec
@property (weak) id<HKLiveWorkoutBuilderDelegate> delegate;
```

## See Also

### Configuring a live workout builder

- [dataSource](datasource.md): A data source that provides live data from a workout session automatically.
- [workoutSession](workoutsession.md): The workout session created by the data source and associated with this builder.
