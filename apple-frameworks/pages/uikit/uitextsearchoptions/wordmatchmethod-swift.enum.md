> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchoptions/wordmatchmethod-swift.enum](https://developer.apple.com/documentation/uikit/uitextsearchoptions/wordmatchmethod-swift.enum)

# UITextSearchOptions.WordMatchMethod (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Constants that describe the method to use when searching text for words that match a string.

## Declaration

```swift
enum WordMatchMethod
```

## Topics

### Constants

- [UITextSearchOptions.WordMatchMethod.contains](wordmatchmethod-swift.enum/contains.md): The word contains the search string.
- [UITextSearchOptions.WordMatchMethod.startsWith](wordmatchmethod-swift.enum/startswith.md): The word contains the search string as a prefix.
- [UITextSearchOptions.WordMatchMethod.fullWord](wordmatchmethod-swift.enum/fullword.md): The word matches the search string exactly.

### Initializers

- [init(rawValue:)](wordmatchmethod-swift.enum/init%28rawvalue_%29.md)

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
- [UIFindSession.SearchResultDisplayStyle](../uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# UITextSearchMatchMethod (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that describe the method to use when searching text for words that match a string.

## Declaration

```objectivec
enum UITextSearchMatchMethod : NSInteger;
```

## Topics

### Constants

- [UITextSearchMatchMethodContains](wordmatchmethod-swift.enum/contains.md): The word contains the search string.
- [UITextSearchMatchMethodStartsWith](wordmatchmethod-swift.enum/startswith.md): The word contains the search string as a prefix.
- [UITextSearchMatchMethodFullWord](wordmatchmethod-swift.enum/fullword.md): The word matches the search string exactly.

## See Also

### Find and replace

- [UIFindInteraction](../uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](../uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](../uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](../uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](../uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](../uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](../uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UIFindSessionSearchResultDisplayStyle](../uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
