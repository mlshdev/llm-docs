> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/init(healthstore:configuration:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/init(healthstore:configuration:))

# init(healthStore:configuration:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · watchOS 5.0+

Returns a newly instantiated workout session with an associated workout builder.

## Declaration

```swift
init(healthStore: HKHealthStore, configuration workoutConfiguration: HKWorkoutConfiguration) throws
```

## See Also

### Related Documentation

- [associatedWorkoutBuilder()](associatedworkoutbuilder%28%29.md): Returns the live workout builder associated with the workout session.

# initWithHealthStore:configuration:error: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · watchOS 5.0+

Returns a newly instantiated workout session with an associated workout builder.

## Declaration

```objectivec
- (instancetype) initWithHealthStore:(HKHealthStore *) healthStore configuration:(HKWorkoutConfiguration *) workoutConfiguration error:(NSError **) error;
```

## See Also

### Related Documentation

- [associatedWorkoutBuilder](associatedworkoutbuilder%28%29.md): Returns the live workout builder associated with the workout session.
