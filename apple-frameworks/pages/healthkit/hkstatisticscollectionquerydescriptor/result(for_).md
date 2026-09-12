> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkstatisticscollectionquerydescriptor/result(for:)](https://developer.apple.com/documentation/healthkit/hkstatisticscollectionquerydescriptor/result(for:))

# result(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Runs a one-shot query and asynchronously returns statistics calculated from the current matching results.

## Declaration

```swift
func result(for healthStore: HKHealthStore) async throws -> HKStatisticsCollection
```

## Parameters

- `healthStore`: The access point for HealthKit data.

## See Also

### Running Queries

- [results(for:)](results%28for_%29.md): Initiates a long-running query that returns statistics and updates using an asynchronous sequence.
- [HKStatisticsCollectionQueryDescriptor.Results](results.md): An asynchronous sequence that emits updates from a statistics collection query.
