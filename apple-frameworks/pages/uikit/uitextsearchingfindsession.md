> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearchingfindsession](https://developer.apple.com/documentation/uikit/uitextsearchingfindsession)

# UITextSearchingFindSession (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A find session object that wraps a searchable object implementing the text-searching protocol.

## Declaration

```swift
@MainActor class UITextSearchingFindSession
```

<a id="overview"></a>

## Overview

Implement the [UITextSearching](uitextsearching-53wjq.md) protocol on the class that encapsulates the searchable content for your view to use an instance of [UITextSearchingFindSession](uitextsearchingfindsession.md) as the session object. Alternatively, you can subclass [UIFindSession](uifindsession.md) to manage the details of the session using a custom class.

The find session’s reference to [searchableObject](uitextsearchingfindsession/searchableobject.md) is weakly held to avoid a retain cycle if the view you install the interaction on is the searchable object itself. Ensure that your app maintains a strong reference to the searchable object.

## Topics

### Creating a text searching find session

- [init(searchableObject:)](uitextsearchingfindsession/init%28searchableobject_%29-9zc4e.md): Initializes an object to manage the search for the searchable object you specify.
- [init(searchableObject:)](uitextsearchingfindsession/init%28searchableobject_%29-7swl5.md): Initializes an object to manage the search for the searchable object you specify.

### Getting the searchable object

- [searchableObject](uitextsearchingfindsession/searchableobject.md): The object to search, responsible for performing the search operation and decorating the results.

## Relationships

### Inherits From

- [UIFindSession](uifindsession.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearching](uitextsearching-3wkjv.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# UITextSearchingFindSession (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A find session object that wraps a searchable object implementing the text-searching protocol.

## Declaration

```objectivec
@interface UITextSearchingFindSession : UIFindSession
```

<a id="overview"></a>

## Overview

Implement the [UITextSearching](uitextsearching-53wjq.md) protocol on the class that encapsulates the searchable content for your view to use an instance of [UITextSearchingFindSession](uitextsearchingfindsession.md) as the session object. Alternatively, you can subclass [UIFindSession](uifindsession.md) to manage the details of the session using a custom class.

The find session’s reference to [searchableObject](uitextsearchingfindsession/searchableobject.md) is weakly held to avoid a retain cycle if the view you install the interaction on is the searchable object itself. Ensure that your app maintains a strong reference to the searchable object.

## Topics

### Creating a text searching find session

- [initWithSearchableObject:](uitextsearchingfindsession/init%28searchableobject_%29-9zc4e.md): Initializes an object to manage the search for the searchable object you specify.

### Getting the searchable object

- [searchableObject](uitextsearchingfindsession/searchableobject.md): The object to search, responsible for performing the search operation and decorating the results.

## Relationships

### Inherits From

- [UIFindSession](uifindsession.md)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearching](uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSessionSearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
