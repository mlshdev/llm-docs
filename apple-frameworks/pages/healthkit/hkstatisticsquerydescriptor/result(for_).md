> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkstatisticsquerydescriptor/result(for:)

# result(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Runs a one-shot query and asynchronously returns a snapshot of the current matching results.

## Declaration

```swift
func result(for healthStore: HKHealthStore) async throws -> HKStatistics?
```

## Parameters

- `healthStore`: The access point for HealthKit data.
