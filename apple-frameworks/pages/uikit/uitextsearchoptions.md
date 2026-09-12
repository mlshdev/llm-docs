> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchoptions](https://developer.apple.com/documentation/uikit/uitextsearchoptions)

# UITextSearchOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object containing the configurable options for a text search.

## Declaration

```swift
@MainActor class UITextSearchOptions
```

## Topics

### Configuring searches

- [stringCompareOptions](uitextsearchoptions/stringcompareoptions.md): The options to use in comparisons when searching text for matches to a string.
- [wordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.property.md): The method to use when searching text for matches to words.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-3wkjv.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# UITextSearchOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object containing the configurable options for a text search.

## Declaration

```objectivec
@interface UITextSearchOptions : NSObject
```

## Topics

### Configuring searches

- [stringCompareOptions](uitextsearchoptions/stringcompareoptions.md): The options to use in comparisons when searching text for matches to a string.
- [wordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.property.md): The method to use when searching text for matches to words.
- [UITextSearchMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSessionSearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
