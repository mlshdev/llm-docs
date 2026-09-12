> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckfetchrecordzonechangesconfiguration/desiredkeys](https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/desiredkeys)

# desiredKeys

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The fields to fetch for the requested records.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSString *> * desiredKeys;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the amount of data that CloudKit retrieves for each record during the fetch operation. This property contains an array of strings, each of which is the name of a field from the target records. When you retrieve a record, CloudKit only includes fields with names that match one of the keys in this property. The default value is `nil`, which causes CloudKit to fetch all of the record’s keys.

Because you can fetch records of different types, configure the array to include the merged set of all field names for the requested records and at least one field name from each record type.

If you intend to specify the desired set of keys, set the value of this property before executing the operation or submitting it to a queue.

## See Also

### Accessing a Zone Change Configuration

- [previousServerChangeToken](../ckfetchrecordzonechangesoperation/zoneconfiguration/previousserverchangetoken.md): The token that identifies the starting point for retrieving changes.
- [resultsLimit](../ckfetchrecordzonechangesoperation/zoneconfiguration/resultslimit.md): The maximum number of records to fetch from the record zone.
