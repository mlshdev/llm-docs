> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-swift.struct/finishedsearching()](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-swift.struct/finishedsearching())

# finishedSearching()

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Finishes the search for text ranges.

## Declaration

```swift
func finishedSearching()
```

<a id="Discussion"></a>

## Discussion

Call this method after searching all documents.

## See Also

### Tracking search results

- [foundRange(\_:searchString:document:)](foundrange%28__searchstring_document_%29.md): Adds a text range to the set of matches.
- [invalidateFoundRange(\_:document:)](invalidatefoundrange%28__document_%29.md): Removes a text range from the set of matches.
- [invalidate()](invalidate%28%29.md): Invalidates all currently shown ranges.
- [allFoundRanges](allfoundranges.md): An ordered set of all the text ranges that match the search.
