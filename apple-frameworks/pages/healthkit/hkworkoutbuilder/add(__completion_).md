> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/add(_:completion:)](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/add(_:completion:))

# add(\_:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Adds a sample to be associated with the workout.

## Declaration

```swift
func add(_ samples: [HKSample], completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func addSamples(_ samples: [HKSample]) async throws
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Associating samples with the workout

- [seriesBuilder(for:)](seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
- [statistics(for:)](statistics%28for_%29.md): Returns the statistics calculated for matching samples added to the workout.

# addSamples:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Adds a sample to be associated with the workout.

## Declaration

```objectivec
- (void) addSamples:(NSArray<HKSample *> *) samples completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Associating samples with the workout

- [seriesBuilderForType:](seriesbuilder%28for_%29.md): Returns the series builder for the specified type, creating a new builder, if necessary.
- [statisticsForType:](statistics%28for_%29.md): Returns the statistics calculated for matching samples added to the workout.
