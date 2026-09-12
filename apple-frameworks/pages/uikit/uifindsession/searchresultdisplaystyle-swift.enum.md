> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession/searchresultdisplaystyle-swift.enum](https://developer.apple.com/documentation/uikit/uifindsession/searchresultdisplaystyle-swift.enum)

# UIFindSession.SearchResultDisplayStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that describe the results summary the find panel UI includes.

## Declaration

```swift
enum SearchResultDisplayStyle
```

## Topics

### Constants

- [UIFindSession.SearchResultDisplayStyle.currentAndTotal](searchresultdisplaystyle-swift.enum/currentandtotal.md): The find panel includes the total number of results the session reports and the index of the target result.
- [UIFindSession.SearchResultDisplayStyle.total](searchresultdisplaystyle-swift.enum/total.md): The find panel includes the total number of results the session reports.
- [UIFindSession.SearchResultDisplayStyle.none](searchresultdisplaystyle-swift.enum/none.md): The find panel doesn’t include the number of results the session reports.

### Initializers

- [init(rawValue:)](searchresultdisplaystyle-swift.enum/init%28rawvalue_%29.md)

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

- [UIFindInteraction](../uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](../uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](../uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](../uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](../uitextsearching-3wkjv.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](../uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](../uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchOptions.WordMatchMethod](../uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.

# UIFindSessionSearchResultDisplayStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that describe the results summary the find panel UI includes.

## Declaration

```objectivec
enum UIFindSessionSearchResultDisplayStyle : NSInteger;
```

## Topics

### Constants

- [UIFindSessionSearchResultDisplayStyleCurrentAndTotal](searchresultdisplaystyle-swift.enum/currentandtotal.md): The find panel includes the total number of results the session reports and the index of the target result.
- [UIFindSessionSearchResultDisplayStyleTotal](searchresultdisplaystyle-swift.enum/total.md): The find panel includes the total number of results the session reports.
- [UIFindSessionSearchResultDisplayStyleNone](searchresultdisplaystyle-swift.enum/none.md): The find panel doesn’t include the number of results the session reports.

## See Also

### Find and replace

- [UIFindInteraction](../uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](../uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](../uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](../uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](../uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](../uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](../uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchMatchMethod](../uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
