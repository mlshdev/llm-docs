> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-swift.struct](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-swift.struct)

# UITextSearchAggregator

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

The methods you use on a find session’s aggregator to collect matching text ranges for a search.

## Declaration

```swift
struct UITextSearchAggregator<DocumentIdentifier> where DocumentIdentifier : Hashable
```

<a id="overview"></a>

## Overview

To track text ranges that match the search, call these methods on the aggregator for the searchable object implementing the [UITextSearching](uitextsearching-53wjq.md) protocol for a [UITextSearchingFindSession](uitextsearchingfindsession.md).

## Topics

### Tracking search results

- [foundRange(\_:searchString:document:)](uitextsearchaggregator-swift.struct/foundrange%28__searchstring_document_%29.md): Adds a text range to the set of matches.
- [invalidateFoundRange(\_:document:)](uitextsearchaggregator-swift.struct/invalidatefoundrange%28__document_%29.md): Removes a text range from the set of matches.
- [invalidate()](uitextsearchaggregator-swift.struct/invalidate%28%29.md): Invalidates all currently shown ranges.
- [finishedSearching()](uitextsearchaggregator-swift.struct/finishedsearching%28%29.md): Finishes the search for text ranges.
- [allFoundRanges](uitextsearchaggregator-swift.struct/allfoundranges.md): An ordered set of all the text ranges that match the search.

## See Also

### Handling searches

- [performTextSearch(queryString:options:resultAggregator:)](uitextsearching-3wkjv/performtextsearch%28querystring_options_resultaggregator_%29.md): Searches for ranges of text matching the string across all searchable documents and collects results in the aggregator.
- [compare(\_:toRange:document:)](uitextsearching-3wkjv/compare%28__torange_document_%29.md): Compares ranges from the set of matches the aggregator provides to determine navigation order.
- [compare(document:toDocument:)](uitextsearching-3wkjv/compare%28document_todocument_%29.md): Compares documents containing matching ranges from the set the aggregator provides to determine navigation order.
- [DocumentIdentifier](uitextsearching-3wkjv/documentidentifier.md): An object that uniquely identifies a specific document when searching for matching text across multiple documents.
