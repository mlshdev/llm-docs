> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-c.protocol/invalidatefoundrange:indocument:](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-c.protocol/invalidatefoundrange:indocument:)

# invalidateFoundRange:inDocument:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Removes a text range from the set of matches.

## Declaration

```objectivec
- (void) invalidateFoundRange:(UITextRange *) range inDocument:(UITextSearchDocumentIdentifier) document;
```

## Parameters

- `range`: The text range to remove from the set of matches.
- `document`: A string that uniquely identifies the document containing the text range. `Nil` when searching a single document.

<a id="Discussion"></a>

## Discussion

Call this method to invalidate a text range when removing or changing text in the document. This causes the system find panel to update its current state, and if the range is the highlighted range, the find panel advances to the next found result.

## See Also

### Tracking search results

- [foundRange:forSearchString:inDocument:](foundrange_forsearchstring_indocument_.md): Adds a text range to the set of matches.
- [invalidate](invalidate.md): Invalidates all currently shown ranges.
- [finishedSearching](finishedsearching.md): Finishes the search for text ranges.
- [allFoundRanges](allfoundranges.md): An ordered set of all the text ranges that match the search.
