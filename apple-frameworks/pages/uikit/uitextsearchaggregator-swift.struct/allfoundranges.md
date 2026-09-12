> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-swift.struct/allfoundranges](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-swift.struct/allfoundranges)

# allFoundRanges

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

An ordered set of all the text ranges that match the search.

## Declaration

```swift
var allFoundRanges: [UITextRange] { get }
```

## See Also

### Tracking search results

- [foundRange(\_:searchString:document:)](foundrange%28__searchstring_document_%29.md): Adds a text range to the set of matches.
- [invalidateFoundRange(\_:document:)](invalidatefoundrange%28__document_%29.md): Removes a text range from the set of matches.
- [invalidate()](invalidate%28%29.md): Invalidates all currently shown ranges.
- [finishedSearching()](finishedsearching%28%29.md): Finishes the search for text ranges.
