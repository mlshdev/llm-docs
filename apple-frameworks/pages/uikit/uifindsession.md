> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifindsession](https://developer.apple.com/documentation/uikit/uifindsession)

# UIFindSession (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.

## Declaration

```swift
@MainActor class UIFindSession
```

<a id="overview"></a>

## Overview

You return a session object from the delegate of a [UIFindInteraction](uifindinteraction.md) to manage the state, presentation, and behavior for a given search. The session object responds to navigation and replacement requests through its [highlightNextResult(in:)](uifindsession/highlightnextresult%28in_%29.md) and [performSingleReplacement(query:replacementString:options:)](uifindsession/performsinglereplacement%28query_replacementstring_options_%29.md) methods. It also provides presentation information to the system find panel through [resultCount](uifindsession/resultcount.md) and [highlightedResultIndex](uifindsession/highlightedresultindex.md).

UIKit can manage the state when you implement the [UITextSearching](uitextsearching-53wjq.md) protocol on a class that encapsulates the searchable content. To do this, create an instance of [UITextSearchingFindSession](uitextsearchingfindsession.md) and provide it a [searchableObject](uitextsearchingfindsession/searchableobject.md) using an instance of your class.

If you want to manage the state yourself or already have a class that implements find and replace for your app, you can subclass [UIFindSession](uifindsession.md) to bridge your custom implementation to the system UI.

## Topics

### Getting session information

- [resultCount](uifindsession/resultcount.md): The total number of results the search matches.
- [highlightedResultIndex](uifindsession/highlightedresultindex.md): The index of the result the find panel highlights.
- [supportsReplacement](uifindsession/supportsreplacement.md): A Boolean value that indicates whether to allow replacing find panel results.
- [allowsReplacementForCurrentlyHighlightedResult](uifindsession/allowsreplacementforcurrentlyhighlightedresult.md): A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.
- [searchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

### Managing session interactions

- [performSearch(query:options:)](uifindsession/performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacement(query:replacementString:options:)](uifindsession/performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAll(searchQuery:replacementString:options:)](uifindsession/replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResult(in:)](uifindsession/highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults()](uifindsession/invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.

### Deprecated

- [allowsReplacement](uifindsession/allowsreplacement.md): Deprecated. A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UITextSearchingFindSession](uitextsearchingfindsession.md)

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
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-3wkjv.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

# UIFindSession (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.

## Declaration

```objectivec
@interface UIFindSession : NSObject
```

<a id="overview"></a>

## Overview

You return a session object from the delegate of a [UIFindInteraction](uifindinteraction.md) to manage the state, presentation, and behavior for a given search. The session object responds to navigation and replacement requests through its [highlightNextResultInDirection:](uifindsession/highlightnextresult%28in_%29.md) and [performSingleReplacementWithSearchQuery:replacementString:options:](uifindsession/performsinglereplacement%28query_replacementstring_options_%29.md) methods. It also provides presentation information to the system find panel through [resultCount](uifindsession/resultcount.md) and [highlightedResultIndex](uifindsession/highlightedresultindex.md).

UIKit can manage the state when you implement the [UITextSearching](uitextsearching-53wjq.md) protocol on a class that encapsulates the searchable content. To do this, create an instance of [UITextSearchingFindSession](uitextsearchingfindsession.md) and provide it a [searchableObject](uitextsearchingfindsession/searchableobject.md) using an instance of your class.

If you want to manage the state yourself or already have a class that implements find and replace for your app, you can subclass [UIFindSession](uifindsession.md) to bridge your custom implementation to the system UI.

## Topics

### Getting session information

- [resultCount](uifindsession/resultcount.md): The total number of results the search matches.
- [highlightedResultIndex](uifindsession/highlightedresultindex.md): The index of the result the find panel highlights.
- [supportsReplacement](uifindsession/supportsreplacement.md): A Boolean value that indicates whether to allow replacing find panel results.
- [allowsReplacementForCurrentlyHighlightedResult](uifindsession/allowsreplacementforcurrentlyhighlightedresult.md): A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.
- [searchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.property.md): The information the find panel includes in the summary of found results.
- [UIFindSessionSearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.

### Managing session interactions

- [performSearchWithQuery:options:](uifindsession/performsearch%28query_options_%29.md): Initiates a search for the query string you provide.
- [performSingleReplacementWithSearchQuery:replacementString:options:](uifindsession/performsinglereplacement%28query_replacementstring_options_%29.md): Replaces a single instance of the query string with the replacement string you provide.
- [replaceAllInstancesOfSearchQuery:withReplacementString:options:](uifindsession/replaceall%28searchquery_replacementstring_options_%29.md): Replaces all matching instances of the query string with the replacement string you provide.
- [highlightNextResultInDirection:](uifindsession/highlightnextresult%28in_%29.md): Updates the highlighted result to the next or previous match.
- [invalidateFoundResults](uifindsession/invalidatefoundresults%28%29.md): Invalidates the found ranges and updates the system find panel.

### Deprecated

- [allowsReplacement](uifindsession/allowsreplacement.md): Deprecated. A Boolean value that indicates whether to allow replacing the result the find panel is highlighting.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UITextSearchingFindSession](uitextsearchingfindsession.md)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearching](uitextsearching-53wjq.md): The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSessionSearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
