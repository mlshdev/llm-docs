> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/performtextsearch(querystring:options:resultaggregator:)](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/performtextsearch(querystring:options:resultaggregator:))

# performTextSearch(queryString:options:resultAggregator:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Searches for ranges of text matching the string across all searchable documents and collects results in the aggregator.

## Declaration

```swift
func performTextSearch(queryString: String, options: UITextSearchOptions, resultAggregator: UITextSearchAggregator<Self.DocumentIdentifier>)
```

## Parameters

- `queryString`: The string to search for.
- `options`: The configurable options to use for matching words and comparing strings.
- `resultAggregator`: An object you use to collect matching results. The aggregator is thread-safe, so you may send it messages on other threads.

<a id="Discussion"></a>

## Discussion

The system calls this method during a find session to perform the search. Your implenentation should search for matching text ranges in your app’s documents and call [foundRange(\_:searchString:document:)](../uitextsearchaggregator-swift.struct/foundrange%28__searchstring_document_%29.md) on the aggregator object to add them to the set of matching ranges.

## See Also

### Handling searches

- [UITextSearchAggregator](../uitextsearchaggregator-swift.struct.md): The methods you use on a find session’s aggregator to collect matching text ranges for a search.
- [compare(\_:toRange:document:)](compare%28__torange_document_%29.md): Compares ranges from the set of matches the aggregator provides to determine navigation order.
- [compare(document:toDocument:)](compare%28document_todocument_%29.md): Compares documents containing matching ranges from the set the aggregator provides to determine navigation order.
- [DocumentIdentifier](documentidentifier.md): An object that uniquely identifies a specific document when searching for matching text across multiple documents.
