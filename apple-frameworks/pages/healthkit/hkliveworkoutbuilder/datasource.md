> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutbuilder/datasource](https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilder/datasource)

# dataSource (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

A data source that provides live data from a workout session automatically.

## Declaration

```swift
var dataSource: HKLiveWorkoutDataSource? { get set }
```

## See Also

### Configuring a live workout builder

- [workoutSession](workoutsession.md): The workout session created by the data source and associated with this builder.
- [delegate](delegate.md): The live builder’s delegate.

# dataSource (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

A data source that provides live data from a workout session automatically.

## Declaration

```objectivec
@property (strong, nullable) HKLiveWorkoutDataSource * dataSource;
```

## See Also

### Configuring a live workout builder

- [workoutSession](workoutsession.md): The workout session created by the data source and associated with this builder.
- [delegate](delegate.md): The live builder’s delegate.
