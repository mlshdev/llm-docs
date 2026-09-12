> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/allowsreplacementforcurrentlyhighlightedresult](https://developer.apple.com/documentation/uikit/uifindsession/allowsreplacementforcurrentlyhighlightedresult)

# allowsReplacementForCurrentlyHighlightedResult (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.

## Declaration

```swift
var allowsReplacementForCurrentlyHighlightedResult: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property determines whether the find panel supports replacement for the currently highlighted item. If [true](https://developer.apple.com/documentation/swift/true), the system enables the Replace button in the find panel and the hardware keyboard shortcuts for replacement.

The default value is [true](https://developer.apple.com/documentation/swift/true) if [supportsReplacement](supportsreplacement.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting session information

- [resultCount](resultcount.md): The total number of results the search matches.
- [highlightedResultIndex](highlightedresultindex.md): The index of the result the find panel highlights.
- [supportsReplacement](supportsreplacement.md): A Boolean value that indicates whether to allow replacing find panel results.
- [searchResultDisplayStyle](searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSession.SearchResultDisplayStyle](searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# allowsReplacementForCurrentlyHighlightedResult (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowsReplacementForCurrentlyHighlightedResult;
```

<a id="Discussion"></a>

## Discussion

This property determines whether the find panel supports replacement for the currently highlighted item. If [true](https://developer.apple.com/documentation/swift/true), the system enables the Replace button in the find panel and the hardware keyboard shortcuts for replacement.

The default value is [true](https://developer.apple.com/documentation/swift/true) if [supportsReplacement](supportsreplacement.md) is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Getting session information

- [resultCount](resultcount.md): The total number of results the search matches.
- [highlightedResultIndex](highlightedresultindex.md): The index of the result the find panel highlights.
- [supportsReplacement](supportsreplacement.md): A Boolean value that indicates whether to allow replacing find panel results.
- [searchResultDisplayStyle](searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSessionSearchResultDisplayStyle](searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
