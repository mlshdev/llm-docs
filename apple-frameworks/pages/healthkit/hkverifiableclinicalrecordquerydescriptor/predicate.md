> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/predicate](https://developer.apple.com/documentation/healthkit/hkverifiableclinicalrecordquerydescriptor/predicate)

# predicate

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS

A predicate that limits the results returned by the query.

## Declaration

```swift
var predicate: NSPredicate?
```

<a id="Discussion"></a>

## Discussion

If this property is `nil`, the query returns all records of the specified type.

## See Also

### Accessing Query Properties

- [recordTypes](recordtypes.md): The types of records returned by this query.
- [sourceTypes](sourcetypes.md): The source for the verifiable clinical records, for example from a SMART Health Card or an EU Digital COVID Certificate.
