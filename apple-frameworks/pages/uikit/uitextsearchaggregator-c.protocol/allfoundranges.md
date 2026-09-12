> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchaggregator-c.protocol/allfoundranges](https://developer.apple.com/documentation/uikit/uitextsearchaggregator-c.protocol/allfoundranges)

# allFoundRanges

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An ordered set of all the text ranges that match the search.

## Declaration

```objectivec
@property (nonatomic, readonly) NSOrderedSet<UITextRange *> * allFoundRanges;
```

## See Also

### Tracking search results

- [foundRange:forSearchString:inDocument:](foundrange_forsearchstring_indocument_.md): Adds a text range to the set of matches.
- [invalidateFoundRange:inDocument:](invalidatefoundrange_indocument_.md): Removes a text range from the set of matches.
- [invalidate](invalidate.md): Invalidates all currently shown ranges.
- [finishedSearching](finishedsearching.md): Finishes the search for text ranges.
