> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/resultslimit](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/resultslimit)

# resultsLimit (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The maximum number of records to return at one time.

## Declaration

```swift
var resultsLimit: Int { get set }
```

<a id="discussion"></a>

## Discussion

For most queries, leave the value of this property as the default value, which is the [maximumResults](maximumresults.md) constant. When using that value, CloudKit returns as many records as possible while minimizing delays in receiving those records. If you want to process a fixed number of results, change the value of this property accordingly.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryOperation.Cursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [maximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-7qrse.md): The fields of the records to fetch.

# resultsLimit (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The maximum number of records to return at one time.

## Declaration

```objectivec
@property (nonatomic, assign) NSUInteger resultsLimit;
```

<a id="discussion"></a>

## Discussion

For most queries, leave the value of this property as the default value, which is the [CKQueryOperationMaximumResults](maximumresults.md) constant. When using that value, CloudKit returns as many records as possible while minimizing delays in receiving those records. If you want to process a fixed number of results, change the value of this property accordingly.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryCursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [CKQueryOperationMaximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-4a6vy.md): The fields of the records to fetch.
