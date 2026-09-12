> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/statistics(for:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/statistics(for:))

# statistics(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Returns the statistics calculated for matching samples added to the workout.

## Declaration

```swift
func statistics(for quantityType: HKQuantityType) -> HKStatistics?
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Associating samples with the workout

- [add(\_:completion:)](add%28__completion_%29.md): Adds a sample to be associated with the workout.
- [seriesBuilder(for:)](seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.

# statisticsForType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Returns the statistics calculated for matching samples added to the workout.

## Declaration

```objectivec
- (HKStatistics *) statisticsForType:(HKQuantityType *) quantityType;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Associating samples with the workout

- [addSamples:completion:](add%28__completion_%29.md): Adds a sample to be associated with the workout.
- [seriesBuilderForType:](seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
