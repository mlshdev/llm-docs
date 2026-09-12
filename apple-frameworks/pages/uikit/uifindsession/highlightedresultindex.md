> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/highlightedresultindex](https://developer.apple.com/documentation/uikit/uifindsession/highlightedresultindex)

# highlightedResultIndex (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The index of the result the find panel highlights.

## Declaration

```swift
var highlightedResultIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

To indicate no highlighted result, return `nil` (Swift) or [NSNotFound](../../foundation/nsnotfound-9t5v2.md) (Objective-C).

## See Also

### Getting session information

- [resultCount](resultcount.md): The total number of results the search matches.
- [supportsReplacement](supportsreplacement.md): A Boolean value that indicates whether to allow replacing find panel results.
- [allowsReplacementForCurrentlyHighlightedResult](allowsreplacementforcurrentlyhighlightedresult.md): A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.
- [searchResultDisplayStyle](searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSession.SearchResultDisplayStyle](searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# highlightedResultIndex (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The index of the result the find panel highlights.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger highlightedResultIndex;
```

<a id="Discussion"></a>

## Discussion

To indicate no highlighted result, return `nil` (Swift) or [NSNotFound](../../foundation/nsnotfound-9t5v2.md) (Objective-C).

## See Also

### Getting session information

- [resultCount](resultcount.md): The total number of results the search matches.
- [supportsReplacement](supportsreplacement.md): A Boolean value that indicates whether to allow replacing find panel results.
- [allowsReplacementForCurrentlyHighlightedResult](allowsreplacementforcurrentlyhighlightedresult.md): A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.
- [searchResultDisplayStyle](searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSessionSearchResultDisplayStyle](searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
