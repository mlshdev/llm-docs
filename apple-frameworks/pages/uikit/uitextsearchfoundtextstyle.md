> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchfoundtextstyle](https://developer.apple.com/documentation/uikit/uitextsearchfoundtextstyle)

# UITextSearchFoundTextStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that describe the style a find session uses to decorate the text.

## Declaration

```swift
enum UITextSearchFoundTextStyle
```

<a id="overview"></a>

## Overview

Use [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md) to identify ranges of text your app decorates to indicate matches, highlighted matches and non-matching text.

## Topics

### Constants

- [UITextSearchFoundTextStyle.normal](uitextsearchfoundtextstyle/normal.md): A style that indicates the text isn’t a match.
- [UITextSearchFoundTextStyle.found](uitextsearchfoundtextstyle/found.md): A style that indicates the text is a match, but not highlighted.
- [UITextSearchFoundTextStyle.highlighted](uitextsearchfoundtextstyle/highlighted.md): A style that indicates the text is a highlighted match.

### Initializers

- [init(rawValue:)](uitextsearchfoundtextstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-3wkjv.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# UITextSearchFoundTextStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that describe the style a find session uses to decorate the text.

## Declaration

```objectivec
enum UITextSearchFoundTextStyle : NSInteger;
```

<a id="overview"></a>

## Overview

Use [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md) to identify ranges of text your app decorates to indicate matches, highlighted matches and non-matching text.

## Topics

### Constants

- [UITextSearchFoundTextStyleNormal](uitextsearchfoundtextstyle/normal.md): A style that indicates the text isn’t a match.
- [UITextSearchFoundTextStyleFound](uitextsearchfoundtextstyle/found.md): A style that indicates the text is a match, but not highlighted.
- [UITextSearchFoundTextStyleHighlighted](uitextsearchfoundtextstyle/highlighted.md): A style that indicates the text is a highlighted match.

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSessionSearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
