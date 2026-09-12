> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/init(recordtypes:sourcetypes:predicate:)](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/init(recordtypes:sourcetypes:predicate:))

# init(recordTypes:sourceTypes:predicate:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS

Creates a query descriptor for reading verifiable clinical records.

## Declaration

```swift
init(recordTypes: [HKVerifiableClinicalRecordCredentialType], sourceTypes: [HKVerifiableClinicalRecordSourceType], predicate: NSPredicate? = nil)
```

## Parameters

- `recordTypes`: The types of records that this query returns. For a list of valid record types, see [HKVerifiableClinicalRecordCredentialType](../hkverifiableclinicalrecordcredentialtype.md).
- `sourceTypes`: The format of the verifiable clinical records. For a list of valid sources, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).
- `predicate`: A predicate that limits the results that this query returns. Pass `nil` to receive all records of the specified source and record type.
