> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/recordtypes](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/recordtypes)

# recordTypes

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS

The types of records returned by this query.

## Declaration

```swift
var recordTypes: [HKVerifiableClinicalRecordCredentialType]
```

<a id="Discussion"></a>

## Discussion

For a list of valid record types, see [HKVerifiableClinicalRecordCredentialType](../hkverifiableclinicalrecordcredentialtype.md).

## See Also

### Accessing Query Properties

- [sourceTypes](sourcetypes.md): The source for the verifiable clinical records, for example from a SMART Health Card or an EU Digital COVID Certificate.
- [predicate](predicate.md): A predicate that limits the results returned by the query.
