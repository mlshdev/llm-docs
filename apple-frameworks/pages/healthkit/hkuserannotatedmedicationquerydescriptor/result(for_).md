> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkuserannotatedmedicationquerydescriptor/result(for:)](https://developer.apple.com/documentation/healthkit/hkuserannotatedmedicationquerydescriptor/result(for:))

# result(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the user annotated medications given the query descriptor configuration. Returns the empty array if no HKUserAnnotatedMedication objects match.

## Declaration

```swift
func result(for healthStore: HKHealthStore) async throws -> [HKUserAnnotatedMedication]
```
