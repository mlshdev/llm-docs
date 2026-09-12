> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-swift.struct/foundrange(_:searchstring:document:)](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-swift.struct/foundrange(_:searchstring:document:))

# foundRange(\_:searchString:document:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Adds a text range to the set of matches.

## Declaration

```swift
func foundRange(_ range: UITextRange, searchString: String, document: DocumentIdentifier)
```

## Parameters

- `range`: The text range to add to the set of matches.
- `searchString`: The query string the search used to locate this range of text.
- `document`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.

<a id="Discussion"></a>

## Discussion

Call this method to add a text range found in your document to the set of matches.

## See Also

### Tracking search results

- [invalidateFoundRange(\_:document:)](invalidatefoundrange%28__document_%29.md): Removes a text range from the set of matches.
- [invalidate()](invalidate%28%29.md): Invalidates all currently shown ranges.
- [finishedSearching()](finishedsearching%28%29.md): Finishes the search for text ranges.
- [allFoundRanges](allfoundranges.md): An ordered set of all the text ranges that match the search.
