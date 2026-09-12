> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv/documentidentifier](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv/documentidentifier)

# DocumentIdentifier

**Framework:** UIKit  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

An object that uniquely identifies a specific document when searching for matching text across multiple documents.

## Declaration

```swift
associatedtype DocumentIdentifier : Hashable = AnyHashable?
```

<a id="Discussion"></a>

## Discussion

The [UITextSearching](../uitextsearching-53wjq.md) and [UITextSearchAggregator](../uitextsearchaggregator-swift.struct.md) protocols use this type to distinguish matches in a specific document from text in other documents with the same range.

## See Also

### Handling searches

- [performTextSearch(queryString:options:resultAggregator:)](performtextsearch%28querystring_options_resultaggregator_%29.md): Searches for ranges of text matching the string across all searchable documents and collects results in the aggregator.
- [UITextSearchAggregator](../uitextsearchaggregator-swift.struct.md): The methods you use on a find session’s aggregator to collect matching text ranges for a search.
- [compare(\_:toRange:document:)](compare%28__torange_document_%29.md): Compares ranges from the set of matches the aggregator provides to determine navigation order.
- [compare(document:toDocument:)](compare%28document_todocument_%29.md): Compares documents containing matching ranges from the set the aggregator provides to determine navigation order.
