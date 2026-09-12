> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/maximumresults](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/maximumresults)

# maximumResults (Swift)

**Framework:** CloudKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A constant value that represents the maximum number of results CloudKit retrieves.

## Declaration

```swift
class let maximumResults: Int
```

<a id="discussion"></a>

## Discussion

The value of this constant doesn’t correspond to the actual number of records. CloudKit dynamically determines the actual number according to various conditions at runtime.

This constant is the [resultsLimit](resultslimit.md) property’s default value.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryOperation.Cursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [desiredKeys](desiredkeys-7qrse.md): The fields of the records to fetch.

# CKQueryOperationMaximumResults (Objective-C)

**Framework:** CloudKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

A constant value that represents the maximum number of results CloudKit retrieves.

## Declaration

```objectivec
extern const NSUInteger CKQueryOperationMaximumResults;
```

<a id="discussion"></a>

## Discussion

The value of this constant doesn’t correspond to the actual number of records. CloudKit dynamically determines the actual number according to various conditions at runtime.

This constant is the [resultsLimit](resultslimit.md) property’s default value.

## See Also

### Configuring the Query Operation

- [query](query.md): The query for the search.
- [cursor](cursor-swift.property.md): The cursor for continuing the search.
- [CKQueryCursor](cursor-swift.class.md): An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
- [zoneID](zoneid.md): The ID of the record zone that contains the records to search.
- [resultsLimit](resultslimit.md): The maximum number of records to return at one time.
- [desiredKeys](desiredkeys-4a6vy.md): The fields of the records to fetch.
