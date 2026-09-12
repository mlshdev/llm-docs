> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/start()](https://developer.apple.com/documentation/corespotlight/csuserquery/start())

# start() (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Starts searching the index for items that match the current query string and parameters.

## Declaration

```swift
func start()
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="discussion"></a>

## Discussion

This method uses the configured search parameters and query string to begin a search of the index. It then delivers the results of that search to the closures in the [foundItemsHandler](../cssearchquery/founditemshandler.md), [foundSuggestionsHandler](foundsuggestionshandler.md), and [completionHandler](../cssearchquery/completionhandler.md) properties of the query object.

> **Note**

> Don’t call this method if you fetch the query results using the [responses](responses-swift.property.md) property. Accessing that property automatically starts the query.

## See Also

### Executing the query with handler blocks

- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [foundSuggestionsHandler](foundsuggestionshandler.md): The block to execute when the query delivers a new batch of suggested items.
- [foundSuggestionCount](foundsuggestioncount.md): The number of suggested items the query found so far.

# start (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Starts searching the index for items that match the current query string and parameters.

## Declaration

```objectivec
- (void) start;
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="discussion"></a>

## Discussion

This method uses the configured search parameters and query string to begin a search of the index. It then delivers the results of that search to the closures in the [foundItemsHandler](../cssearchquery/founditemshandler.md), [foundSuggestionsHandler](foundsuggestionshandler.md), and [completionHandler](../cssearchquery/completionhandler.md) properties of the query object.

> **Note**

> Don’t call this method if you fetch the query results using the [responses](responses-swift.property.md) property. Accessing that property automatically starts the query.

## See Also

### Executing the query with handler blocks

- [cancel](cancel%28%29.md): Cancels the current query operation.
- [foundSuggestionsHandler](foundsuggestionshandler.md): The block to execute when the query delivers a new batch of suggested items.
- [foundSuggestionCount](foundsuggestioncount.md): The number of suggested items the query found so far.
