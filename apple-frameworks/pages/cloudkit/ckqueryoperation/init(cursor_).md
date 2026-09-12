> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/init(cursor:)](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/init(cursor:))

# init(cursor:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an operation with additional results from a previous search.

## Declaration

```swift
convenience init(cursor: CKQueryOperation.Cursor)
```

## Parameters

- `cursor`: The cursor that identifies the previous search. CloudKit passes this value to the completion handler of the previous search. For more information, see the [queryCompletionBlock](querycompletionblock.md) property.

<a id="discussion"></a>

## Discussion

Use this method to create an operation that retrieves the next batch of results from a previous search. When executing searches for a cursor, don’t cache cursors for a long time before using them. A cursor isn’t a snapshot of the previous search results; it stores a relative offset into the results list. An operation that you create from a cursor performs a new search, sorts the new set of results, and uses the previous offset value to determine where the next batch of results starts.

## See Also

### Creating a Query Operation

- [init(query:)](init%28query_%29.md): Creates an operation that searches for records in the specified record zone.
- [init()](init%28%29.md): Creates an empty query operation.

# initWithCursor: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an operation with additional results from a previous search.

## Declaration

```objectivec
- (instancetype) initWithCursor:(CKQueryCursor *) cursor;
```

## Parameters

- `cursor`: The cursor that identifies the previous search. CloudKit passes this value to the completion handler of the previous search. For more information, see the [queryCompletionBlock](querycompletionblock.md) property.

<a id="discussion"></a>

## Discussion

Use this method to create an operation that retrieves the next batch of results from a previous search. When executing searches for a cursor, don’t cache cursors for a long time before using them. A cursor isn’t a snapshot of the previous search results; it stores a relative offset into the results list. An operation that you create from a cursor performs a new search, sorts the new set of results, and uses the previous offset value to determine where the next batch of results starts.

## See Also

### Creating a Query Operation

- [initWithQuery:](init%28query_%29.md): Creates an operation that searches for records in the specified record zone.
- [init](init%28%29.md): Creates an empty query operation.
