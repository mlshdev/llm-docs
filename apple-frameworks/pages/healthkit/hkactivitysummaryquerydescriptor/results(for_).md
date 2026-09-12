> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummaryquerydescriptor/results(for:)](https://developer.apple.com/documentation/healthkit/hkactivitysummaryquerydescriptor/results(for:))

# results(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Initiates a long-running query that returns its results using an asynchronous sequence.

## Declaration

```swift
func results(for healthStore: HKHealthStore) -> HKActivitySummaryQueryDescriptor.Results
```

## Parameters

- `healthStore`: The access point for HealthKit data.

## See Also

### Running queries

- [result(for:)](result%28for_%29.md): Runs a one-shot query and asynchronously returns a snapshot of the current matching results.
- [HKActivitySummaryQueryDescriptor.Results](results.md): An asynchronous sequence that emits updates from an activity summary query.
