> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/sourcetypes](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/sourcetypes)

# sourceTypes

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS

The source for the verifiable clinical records, for example from a SMART Health Card or an EU Digital COVID Certificate.

## Declaration

```swift
var sourceTypes: [HKVerifiableClinicalRecordSourceType]
```

<a id="Discussion"></a>

## Discussion

For a list of valid sources, see [HKVerifiableClinicalRecordSourceType](../hkverifiableclinicalrecordsourcetype.md).

## See Also

### Accessing Query Properties

- [recordTypes](recordtypes.md): The types of records returned by this query.
- [predicate](predicate.md): A predicate that limits the results returned by the query.
