> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcequerydescriptor/result(for:)](https://developer.apple.com/documentation/healthkit/hksourcequerydescriptor/result(for:))

# result(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS · watchOS 8.5+

Runs a one-shot query that asynchronously returns a snapshot of all the sources that saved matching data.

## Declaration

```swift
func result(for healthStore: HKHealthStore) async throws -> [HKSource]
```

## Parameters

- `healthStore`: The access point for HealthKit data.
