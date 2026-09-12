> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/cursor-swift.property](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/cursor-swift.property)

# cursor (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The cursor for continuing the search.

## Declaration

```swift
@NSCopying var cursor: CKQueryOperation.Cursor? { get set }
```

<a id="discussion"></a>

## Discussion

The initial value of this property is the cursor that you provide to the [init(cursor:)](init%28cursor_%29.md) method. When you use a cursor, the operation ignores the contents of the [query](query.md) property. This property’s value is an opaque value that CloudKit provides. For more information, see the [queryCompletionBlock](querycompletionblock.md) property.

If you intend to specify or change the value in this property, do so before you execute the operation or submit it to a queue.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [CKQueryOperation.Cursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [maximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-7qrse.md): The fields of the records to fetch.

# cursor (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

The cursor for continuing the search.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CKQueryCursor * cursor;
```

<a id="discussion"></a>

## Discussion

The initial value of this property is the cursor that you provide to the [initWithCursor:](init%28cursor_%29.md) method. When you use a cursor, the operation ignores the contents of the [query](query.md) property. This property’s value is an opaque value that CloudKit provides. For more information, see the [queryCompletionBlock](querycompletionblock.md) property.

If you intend to specify or change the value in this property, do so before you execute the operation or submit it to a queue.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [CKQueryCursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [CKQueryOperationMaximumResults](maximumresults.md): A constant value that represents the maximum number of results CloudKit retrieves.
- [desiredKeys](desiredkeys-4a6vy.md): The fields of the records to fetch.
