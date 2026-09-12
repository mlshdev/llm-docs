> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/zoneid](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/zoneid)

# zoneID (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the record zone that contains the records to search.

## Declaration

```swift
@NSCopying var zoneID: CKRecordZone.ID? { get set }
```

<a id="discussion"></a>

## Discussion

The value of this property limits the scope of the search to only the records in the specified record zone. If you don’t specify a record zone, the search includes all record zones.

When you create an operation using the [init(cursor:)](init%28cursor_%29.md) method, this property’s value is `nil` and CloudKit ignores any changes that you make to it. When the operation executes, the cursor provides the record zone information from the original search that provides the cursor.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryOperation.Cursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [maximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-7qrse.md): The fields of the records to fetch.

# zoneID (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The ID of the record zone that contains the records to search.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CKRecordZoneID * zoneID;
```

<a id="discussion"></a>

## Discussion

The value of this property limits the scope of the search to only the records in the specified record zone. If you don’t specify a record zone, the search includes all record zones.

When you create an operation using the [initWithCursor:](init%28cursor_%29.md) method, this property’s value is `nil` and CloudKit ignores any changes that you make to it. When the operation executes, the cursor provides the record zone information from the original search that provides the cursor.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryCursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [CKQueryOperationMaximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-4a6vy.md): The fields of the records to fetch.
