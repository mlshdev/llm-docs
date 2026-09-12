> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/cancel()](https://developer.apple.com/documentation/corespotlight/csuserquery/cancel())

# cancel() (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Cancels the current query operation.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Cancel a query operation when you no longer need the results. You can use this method to cancel queries started using either the [start()](start%28%29.md) method or by accessing the [responses](responses-swift.property.md) property.  After you cancel a query operation, you can’t restart it. To perform a new query, create a new query object. For example, you might cancel one query and start a new one when the text in your app’s search control changes.

## See Also

### Executing the query with handler blocks

- [start()](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [foundSuggestionsHandler](foundsuggestionshandler.md): The block to execute when the query delivers a new batch of suggested items.
- [foundSuggestionCount](foundsuggestioncount.md): The number of suggested items the query found so far.

# cancel (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Cancels the current query operation.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

Cancel a query operation when you no longer need the results. You can use this method to cancel queries started using either the [start](start%28%29.md) method or by accessing the [responses](responses-swift.property.md) property.  After you cancel a query operation, you can’t restart it. To perform a new query, create a new query object. For example, you might cancel one query and start a new one when the text in your app’s search control changes.

## See Also

### Executing the query with handler blocks

- [start](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [foundSuggestionsHandler](foundsuggestionshandler.md): The block to execute when the query delivers a new batch of suggested items.
- [foundSuggestionCount](foundsuggestioncount.md): The number of suggested items the query found so far.
