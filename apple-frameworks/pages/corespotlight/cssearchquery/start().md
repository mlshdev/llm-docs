> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchquery/start()](https://developer.apple.com/documentation/corespotlight/cssearchquery/start())

# start() (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Starts searching the index for items that match the current query string and parameters.

## Declaration

```swift
func start()
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This method uses the configured search parameters and query string to begin a search of the index. It then delivers the results of that search to the closures in the [foundItemsHandler](founditemshandler.md) and [completionHandler](completionhandler.md) properties of the query object.

> **Note**

> Don’t call this method if you fetch the query results using the [results](results-swift.property.md) property. Accessing that property automatically starts the query.

## See Also

### Executing the query with handler blocks

- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [isCancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.

# start (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+

Starts searching the index for items that match the current query string and parameters.

## Declaration

```objectivec
- (void) start;
```

## Mentioned In

- [Searching for information in your app](../searching-for-information-in-your-app.md)

<a id="Discussion"></a>

## Discussion

This method uses the configured search parameters and query string to begin a search of the index. It then delivers the results of that search to the closures in the [foundItemsHandler](founditemshandler.md) and [completionHandler](completionhandler.md) properties of the query object.

> **Note**

> Don’t call this method if you fetch the query results using the [results](results-swift.property.md) property. Accessing that property automatically starts the query.

## See Also

### Executing the query with handler blocks

- [cancel](cancel%28%29.md): Cancels the current query operation.
- [cancelled](iscancelled.md): A Boolean value that indicates whether the current query is no longer running.
- [foundItemCount](founditemcount.md): The number of matching items found for the given query string.
- [foundItemsHandler](founditemshandler.md): The block to execute when the query delivers a new batch of matching items.
- [completionHandler](completionhandler.md): The block to execute when the query finishes delivering all results.
