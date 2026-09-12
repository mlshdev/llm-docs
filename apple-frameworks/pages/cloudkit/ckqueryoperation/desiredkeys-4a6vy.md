> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/desiredkeys-4a6vy](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/desiredkeys-4a6vy)

# desiredKeys

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The fields of the records to fetch.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSString *> * desiredKeys;
```

<a id="discussion"></a>

## Discussion

Use this property to limit the amount of data that CloudKit returns for each record. When CloudKit returns a record, it only includes fields with names that match one of the keys in this property. The property’s default value is `nil`, which instructs CloudKit to return all of a record’s keys.

If you intend to specify a value other than `nil`, do so before you execute the operation or add the operation to a queue.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryCursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [CKQueryOperationMaximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
