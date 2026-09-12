> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckqueryoperation/init(query:)](https://developer.apple.com/documentation/cloudkit/ckqueryoperation/init(query:))

# init(query:) (Swift)

**Framework:** CloudKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an operation that searches for records in the specified record zone.

## Declaration

```swift
convenience init(query: CKQuery)
```

## Parameters

- `query`: The query for the search.

<a id="discussion"></a>

## Discussion

You can use the operation that this method returns only once to perform a search, but you can reuse the query that you provide. During execution, the operation performs a new search and returns the first batch of results. If there are more results available, you must create a separate query object using the provided cursor object.

## See Also

### Creating a Query Operation

- [init(cursor:)](init%28cursor_%29.md): Creates an operation with additional results from a previous search.
- [init()](init%28%29.md): Creates an empty query operation.

# initWithQuery: (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 3.0+

Creates an operation that searches for records in the specified record zone.

## Declaration

```objectivec
- (instancetype) initWithQuery:(CKQuery *) query;
```

## Parameters

- `query`: The query for the search.

<a id="discussion"></a>

## Discussion

You can use the operation that this method returns only once to perform a search, but you can reuse the query that you provide. During execution, the operation performs a new search and returns the first batch of results. If there are more results available, you must create a separate query object using the provided cursor object.

## See Also

### Creating a Query Operation

- [initWithCursor:](init%28cursor_%29.md): Creates an operation with additional results from a previous search.
- [init](init%28%29.md): Creates an empty query operation.
