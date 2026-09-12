> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/seriesbuilder(for:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/seriesbuilder(for:))

# seriesBuilder(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Returns the series builder for the specified type, creating a new builder, if necessary.

## Declaration

```swift
func seriesBuilder(for seriesType: HKSeriesType) -> HKSeriesBuilder?
```

## Mentioned In

- [Creating a workout route](../creating-a-workout-route.md)

## See Also

### Associating samples with the workout

- [add(\_:completion:)](add%28__completion_%29.md): Adds a sample to be associated with the workout.
- [statistics(for:)](statistics%28for_%29.md): Returns the statistics calculated for matching samples added to the workout.

# seriesBuilderForType: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Returns the series builder for the specified type, creating a new builder, if necessary.

## Declaration

```objectivec
- (HKSeriesBuilder *) seriesBuilderForType:(HKSeriesType *) seriesType;
```

## Mentioned In

- [Creating a workout route](../creating-a-workout-route.md)

## See Also

### Associating samples with the workout

- [addSamples:completion:](add%28__completion_%29.md): Adds a sample to be associated with the workout.
- [statisticsForType:](statistics%28for_%29.md): Returns the statistics calculated for matching samples added to the workout.
