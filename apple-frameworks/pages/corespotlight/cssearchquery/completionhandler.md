> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/completionhandler](https://developer.apple.com/documentation/corespotlight/cssearchquery/completionhandler)

# completionHandler (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The block to execute when the query finishes delivering all results.

## Declaration

```swift
var completionHandler: (((any Error)?) -> Void)? { get set }
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Specify a value for this property only if you start your query with the [start()](start%28%29.md) method. When the query finishes, the query object executes the provided closure once to let you know the search is complete. Use your handler to perform any related cleanup. The block you assign to this property returns no parameters and takes the following parameter:

- **error**: An error object with details about a problem that occurred, or `nil` if the query completed successfully.

If you start the query by accessing the [results](results-swift.property.md) property of [CSSearchQuery](../cssearchquery.md) or the [responses](../csuserquery/responses-swift.property.md) property of [CSUserQuery](../csuserquery.md), the query object doesn’t execute the block in this property.

## See Also

### Executing the query with handler blocks

- [start()](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.

# completionHandler (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The block to execute when the query finishes delivering all results.

## Declaration

```objectivec
@property (copy, nullable) void (^completionHandler)(NSError *error);
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

<a id="Discussion"></a>

## Discussion

Specify a value for this property only if you start your query with the [start](start%28%29.md) method. When the query finishes, the query object executes the provided closure once to let you know the search is complete. Use your handler to perform any related cleanup. The block you assign to this property returns no parameters and takes the following parameter:

- **error**: An error object with details about a problem that occurred, or `nil` if the query completed successfully.

If you start the query by accessing the [results](results-swift.property.md) property of [CSSearchQuery](../cssearchquery.md) or the [responses](../csuserquery/responses-swift.property.md) property of [CSUserQuery](../csuserquery.md), the query object doesn’t execute the block in this property.

## See Also

### Executing the query with handler blocks

- [start](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel](cancel%28%29.md): Cancels the current query operation.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
