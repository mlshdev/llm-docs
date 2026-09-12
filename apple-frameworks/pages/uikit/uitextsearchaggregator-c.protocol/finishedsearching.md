> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-c.protocol/finishedsearching](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-c.protocol/finishedsearching)

# finishedSearching

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Finishes the search for text ranges.

## Declaration

```objectivec
- (void) finishedSearching;
```

<a id="Discussion"></a>

## Discussion

Call this method after searching all documents.

## See Also

### Tracking search results

- [foundRange:forSearchString:inDocument:](foundrange_forsearchstring_indocument_.md): Adds a text range to the set of matches.
- [invalidateFoundRange:inDocument:](invalidatefoundrange_indocument_.md): Removes a text range from the set of matches.
- [invalidate](invalidate.md): Invalidates all currently shown ranges.
- [allFoundRanges](allfoundranges.md): An ordered set of all the text ranges that match the search.
