> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/supportsreplacement](https://developer.apple.com/documentation/uikit/uifindsession/supportsreplacement)

# supportsReplacement (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to allow replacing find panel results.

## Declaration

```swift
var supportsReplacement: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property determines whether the find panel shows the replacement UI.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting session information

- [resultCount](resultcount.md): The total number of results the search matches.
- [highlightedResultIndex](highlightedresultindex.md): The index of the result the find panel highlights.
- [allowsReplacementForCurrentlyHighlightedResult](allowsreplacementforcurrentlyhighlightedresult.md): A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.
- [searchResultDisplayStyle](searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSession.SearchResultDisplayStyle](searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# supportsReplacement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A Boolean value that indicates whether to allow replacing find panel results.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsReplacement;
```

<a id="Discussion"></a>

## Discussion

This property determines whether the find panel shows the replacement UI.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Getting session information

- [resultCount](resultcount.md): The total number of results the search matches.
- [highlightedResultIndex](highlightedresultindex.md): The index of the result the find panel highlights.
- [allowsReplacementForCurrentlyHighlightedResult](allowsreplacementforcurrentlyhighlightedresult.md): A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.
- [searchResultDisplayStyle](searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSessionSearchResultDisplayStyle](searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
