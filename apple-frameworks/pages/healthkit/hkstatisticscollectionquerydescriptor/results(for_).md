> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquerydescriptor/results(for:)](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquerydescriptor/results(for:))

# results(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Initiates a long-running query that returns statistics and updates using an asynchronous sequence.

## Declaration

```swift
func results(for healthStore: HKHealthStore) -> HKStatisticsCollectionQueryDescriptor.Results
```

## Parameters

- `healthStore`: The access point for HealthKit data.

## See Also

### Running Queries

- [result(for:)](result%28for_%29.md): Runs a one-shot query and asynchronously returns statistics calculated from the current matching results.
- [HKStatisticsCollectionQueryDescriptor.Results](results.md): An asynchronous sequence that emits updates from a statistics collection query.
