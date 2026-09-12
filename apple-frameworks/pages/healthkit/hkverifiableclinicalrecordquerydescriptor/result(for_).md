> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/result(for:)](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/result(for:))

# result(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS

Runs a one-shot query that asynchronously reads matching clinical records.

## Declaration

```swift
func result(for healthStore: HKHealthStore) async throws -> [HKVerifiableClinicalRecord]
```

## Parameters

- `healthStore`: The access point for HealthKit data.
