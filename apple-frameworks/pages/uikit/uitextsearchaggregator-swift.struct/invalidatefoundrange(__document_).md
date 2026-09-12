> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-swift.struct/invalidatefoundrange(_:document:)](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-swift.struct/invalidatefoundrange(_:document:))

# invalidateFoundRange(\_:document:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Removes a text range from the set of matches.

## Declaration

```swift
func invalidateFoundRange(_ range: UITextRange, document: DocumentIdentifier)
```

## Parameters

- `range`: The text range to remove from the set of matches.
- `document`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.

<a id="Discussion"></a>

## Discussion

Call this method to invalidate a text range when removing or changing text in the document. This causes the system find panel to update it’s current state, and if the range is the highlighted range, the find panel advances to the next found result.

## See Also

### Tracking search results

- [foundRange(\_:searchString:document:)](foundrange%28__searchstring_document_%29.md): Adds a text range to the set of matches.
- [invalidate()](invalidate%28%29.md): Invalidates all currently shown ranges.
- [finishedSearching()](finishedsearching%28%29.md): Finishes the search for text ranges.
- [allFoundRanges](allfoundranges.md): An ordered set of all the text ranges that match the search.
