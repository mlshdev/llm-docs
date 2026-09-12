> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindinteractiondelegate](https://developer.apple.com/documentation/uikit/uifindinteractiondelegate)

# UIFindInteractionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.

## Declaration

```swift
@MainActor protocol UIFindInteractionDelegate : NSObjectProtocol
```

## Topics

### Beginning the search

- [findInteraction(\_:sessionFor:)](uifindinteractiondelegate/findinteraction%28__sessionfor_%29.md): Provides the object for managing the state, presentation, and behavior of the search.

### Decorating the searched content

- [findInteraction(\_:didBegin:)](uifindinteractiondelegate/findinteraction%28__didbegin_%29.md): Informs the delegate when the interaction is about to present the find panel.
- [findInteraction(\_:didEnd:)](uifindinteractiondelegate/findinteraction%28__didend_%29.md): Informs the delegate when the interaction is about to dismiss the find panel.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextView](uitextview.md)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-3wkjv.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# UIFindInteractionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.

## Declaration

```objectivec
@protocol UIFindInteractionDelegate <NSObject>
```

## Topics

### Beginning the search

- [findInteraction:sessionForView:](uifindinteractiondelegate/findinteraction%28__sessionfor_%29.md): Provides the object for managing the state, presentation, and behavior of the search.

### Decorating the searched content

- [findInteraction:didBeginFindSession:](uifindinteractiondelegate/findinteraction%28__didbegin_%29.md): Informs the delegate when the interaction is about to present the find panel.
- [findInteraction:didEndFindSession:](uifindinteractiondelegate/findinteraction%28__didend_%29.md): Informs the delegate when the interaction is about to dismiss the find panel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextView](uitextview.md)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSessionSearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
