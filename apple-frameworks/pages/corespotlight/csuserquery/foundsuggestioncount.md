> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csuserquery/foundsuggestioncount](https://developer.apple.com/documentation/corespotlight/csuserquery/foundsuggestioncount)

# foundSuggestionCount (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The number of suggested items the query found so far.

## Declaration

```swift
var foundSuggestionCount: Int { get }
```

<a id="discussion"></a>

## Discussion

As the query runs, it updates the value in this property to reflect the total number of suggestions.

## See Also

### Executing the query with handler blocks

- [start()](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel()](cancel%28%29.md): Cancels the current query operation.
- [foundSuggestionsHandler](foundsuggestionshandler.md): The block to execute when the query delivers a new batch of suggested items.

# foundSuggestionCount (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The number of suggested items the query found so far.

## Declaration

```objectivec
@property (readonly) NSInteger foundSuggestionCount;
```

<a id="discussion"></a>

## Discussion

As the query runs, it updates the value in this property to reflect the total number of suggestions.

## See Also

### Executing the query with handler blocks

- [start](start%28%29.md): Starts searching the index for items that match the current query string and parameters.
- [cancel](cancel%28%29.md): Cancels the current query operation.
- [foundSuggestionsHandler](foundsuggestionshandler.md): The block to execute when the query delivers a new batch of suggested items.
