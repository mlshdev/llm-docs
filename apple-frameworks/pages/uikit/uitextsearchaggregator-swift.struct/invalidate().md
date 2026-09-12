> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-swift.struct/invalidate()](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-swift.struct/invalidate())

# invalidate()

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Invalidates all currently shown ranges.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

Calling this method causes the system find panel to update its current state, and might trigger a new search using [performTextSearch(queryString:options:resultAggregator:)](../uitextsearching-3wkjv/performtextsearch%28querystring_options_resultaggregator_%29.md) (Swift) or [performTextSearchWithQueryString:usingOptions:resultAggregator:](../uitextsearching-53wjq/performtextsearchwithquerystring_usingoptions_resultaggregator_.md) (Objective-C) immediately after.

## See Also

### Tracking search results

- [foundRange(\_:searchString:document:)](foundrange%28__searchstring_document_%29.md): Adds a text range to the set of matches.
- [invalidateFoundRange(\_:document:)](invalidatefoundrange%28__document_%29.md): Removes a text range from the set of matches.
- [finishedSearching()](finishedsearching%28%29.md): Finishes the search for text ranges.
- [allFoundRanges](allfoundranges.md): An ordered set of all the text ranges that match the search.
