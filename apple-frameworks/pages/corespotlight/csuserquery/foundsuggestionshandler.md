> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/foundsuggestionshandler](https://developer.apple.com/documentation/corespotlight/csuserquery/foundsuggestionshandler)

# foundSuggestionsHandler (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The block to execute when the query delivers a new batch of suggested items.

## Declaration

```swift
var foundSuggestionsHandler: (([CSSuggestion]) -> Void)? { get set }
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Specify a value for this property only if you start your query with the [start()](start%28%29.md) method. While the query runs, the query object executes the provided closure one or more times to deliver suggested completions for the current search term. Use your handler to retrieve the suggested completions and update your app’s search interface. The query object stops delivering suggested items when it runs out of suggestions or reaches the maximum number found in the [maxSuggestionCount](../csuserquerycontext/maxsuggestioncount.md) property of the query configuration parameters.

If you start the query by accessing the [responses](responses-swift.property.md) property, the query object doesn’t execute the block in this property.

## See Also

### Executing the query with handler blocks

- [start()](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [foundSuggestionCount](foundsuggestioncount.md): The number of suggested items the query found so far.

# foundSuggestionsHandler (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The block to execute when the query delivers a new batch of suggested items.

## Declaration

```objectivec
@property (copy, nullable) void (^foundSuggestionsHandler)(NSArray<CSSuggestion *> *suggestions);
```

## Mentioned In

- [Building a search interface for your app](../building-a-search-interface-for-your-app.md)

<a id="Discussion"></a>

## Discussion

Specify a value for this property only if you start your query with the [start](start%28%29.md) method. While the query runs, the query object executes the provided closure one or more times to deliver suggested completions for the current search term. Use your handler to retrieve the suggested completions and update your app’s search interface. The query object stops delivering suggested items when it runs out of suggestions or reaches the maximum number found in the [maxSuggestionCount](../csuserquerycontext/maxsuggestioncount.md) property of the query configuration parameters.

If you start the query by accessing the [responses](responses-swift.property.md) property, the query object doesn’t execute the block in this property.

## See Also

### Executing the query with handler blocks

- [start](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel](cancel%28%29.md): Cancels the current query operation.
- [foundSuggestionCount](foundsuggestioncount.md): The number of suggested items the query found so far.
