> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didcollectdataof:)](https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilder(_:didcollectdataof:))

# workoutBuilder(\_:didCollectDataOf:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · watchOS 5.0+

Tells the delegate that new data has been added to the builder.

## Declaration

```swift
func workoutBuilder(_ workoutBuilder: HKLiveWorkoutBuilder, didCollectDataOf collectedTypes: Set<HKSampleType>)
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Receiving data updates

- [workoutBuilderDidCollectEvent(\_:)](workoutbuilderdidcollectevent%28__%29.md): Tells the delegate that a new event has been added to the builder.

# workoutBuilder:didCollectDataOfTypes: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Tells the delegate that new data has been added to the builder.

## Declaration

```objectivec
- (void) workoutBuilder:(HKLiveWorkoutBuilder *) workoutBuilder didCollectDataOfTypes:(NSSet<HKSampleType *> *) collectedTypes;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Receiving data updates

- [workoutBuilderDidCollectEvent:](workoutbuilderdidcollectevent%28__%29.md): Tells the delegate that a new event has been added to the builder.
