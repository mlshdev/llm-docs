> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/founditemshandler](https://developer.apple.com/documentation/corespotlight/cssearchquery/founditemshandler)

# foundItemsHandler (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The block to execute when the query delivers a new batch of matching items.

## Declaration

```swift
var foundItemsHandler: (([CSSearchableItem]) -> Void)? { get set }
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)
- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Assign a block to this property that has no return value and takes the following parameter:

- **items**: An array of items that match the specified query.

Specify a value for this property only if you start your query with the [start()](start%28%29.md) method. While the query runs, the query object executes the provided closure one or more times to deliver suggested search results for the current search term. Use your handler to retrieve the those results and display them. The query object stops delivering matching items when it reaches the maximum number found in the [maxResultCount](../csuserquerycontext/maxresultcount.md) property of the query configuration parameters.

Each time the query object calls your handler, it delivers only the new items that it found since the last time it called your handler. However, the query object updates the value of the [foundItemCount](founditemcount.md) property with the total number of items before it calls your handler.

If you start the query by accessing the [results](results-swift.property.md) property of [CSSearchQuery](../cssearchquery.md) or the [responses](../csuserquery/responses-swift.property.md) property of [CSUserQuery](../csuserquery.md), the query object doesn’t execute the block in this property. property of [CSUserQuery](../csuserquery.md), the query object doesn’t execute the block in this property.

## See Also

### Executing the query with handler blocks

- [start()](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.

# foundItemsHandler (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

The block to execute when the query delivers a new batch of matching items.

## Declaration

```objectivec
@property (copy, nullable) void (^foundItemsHandler)(NSArray<CSSearchableItem *> *items);
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)
- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Assign a block to this property that has no return value and takes the following parameter:

- **items**: An array of items that match the specified query.

Specify a value for this property only if you start your query with the [start](start%28%29.md) method. While the query runs, the query object executes the provided closure one or more times to deliver suggested search results for the current search term. Use your handler to retrieve the those results and display them. The query object stops delivering matching items when it reaches the maximum number found in the [maxResultCount](../csuserquerycontext/maxresultcount.md) property of the query configuration parameters.

Each time the query object calls your handler, it delivers only the new items that it found since the last time it called your handler. However, the query object updates the value of the [foundItemCount](founditemcount.md) property with the total number of items before it calls your handler.

If you start the query by accessing the [results](results-swift.property.md) property of [CSSearchQuery](../cssearchquery.md) or the [responses](../csuserquery/responses-swift.property.md) property of [CSUserQuery](../csuserquery.md), the query object doesn’t execute the block in this property. property of [CSUserQuery](../csuserquery.md), the query object doesn’t execute the block in this property.

## See Also

### Executing the query with handler blocks

- [start](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel](cancel%28%29.md): Cancels the current query operation.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.
