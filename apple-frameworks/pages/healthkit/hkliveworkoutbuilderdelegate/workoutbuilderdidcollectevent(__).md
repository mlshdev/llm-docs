> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkliveworkoutbuilderdelegate/workoutbuilderdidcollectevent(_:)

# workoutBuilderDidCollectEvent(\_:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Tells the delegate that a new event has been added to the builder.

## Declaration

```swift
func workoutBuilderDidCollectEvent(_ workoutBuilder: HKLiveWorkoutBuilder)
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Receiving data updates

- [workoutBuilder(\_:didCollectDataOf:)](workoutbuilder%28__didcollectdataof_%29.md): Tells the delegate that new data has been added to the builder.

# workoutBuilderDidCollectEvent: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS · watchOS 5.0+

Tells the delegate that a new event has been added to the builder.

## Declaration

```objectivec
- (void) workoutBuilderDidCollectEvent:(HKLiveWorkoutBuilder *) workoutBuilder;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Receiving data updates

- [workoutBuilder:didCollectDataOfTypes:](workoutbuilder%28__didcollectdataof_%29.md): Tells the delegate that new data has been added to the builder.
