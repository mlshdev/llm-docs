> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkactivitysummaryquerydescriptor/result(for:)

# result(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Runs a one-shot query and asynchronously returns a snapshot of the current matching results.

## Declaration

```swift
func result(for healthStore: HKHealthStore) async throws -> [HKActivitySummary]
```

## Parameters

- `healthStore`: The access point for HealthKit data.

## See Also

### Running queries

- [results(for:)](results%28for_%29.md): Initiates a long-running query that returns its results using an asynchronous sequence.
- [HKActivitySummaryQueryDescriptor.Results](results.md): An asynchronous sequence that emits updates from an activity summary query.
