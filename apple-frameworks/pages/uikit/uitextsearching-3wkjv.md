> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextsearching-3wkjv](https://developer.apple.com/documentation/uikit/uitextsearching-3wkjv)

# UITextSearching

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

The methods you use on a find session’s searchable objects to perform search operations and decorate the found text results.

## Declaration

```swift
protocol UITextSearching : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol on the class that encapsulates the searchable content for your view. This allows you to use an instance of [UITextSearchingFindSession](uitextsearchingfindsession.md) to manage the session for a find interaction.

## Topics

### Handling searches

- [performTextSearch(queryString:options:resultAggregator:)](uitextsearching-3wkjv/performtextsearch%28querystring_options_resultaggregator_%29.md): Searches for ranges of text matching the string across all searchable documents and collects results in the aggregator.
- [UITextSearchAggregator](uitextsearchaggregator-swift.struct.md): The methods you use on a find session’s aggregator to collect matching text ranges for a search.
- [compare(\_:toRange:document:)](uitextsearching-3wkjv/compare%28__torange_document_%29.md): Compares ranges from the set of matches the aggregator provides to determine navigation order.
- [compare(document:toDocument:)](uitextsearching-3wkjv/compare%28document_todocument_%29.md): Compares documents containing matching ranges from the set the aggregator provides to determine navigation order.
- [DocumentIdentifier](uitextsearching-3wkjv/documentidentifier.md): An object that uniquely identifies a specific document when searching for matching text across multiple documents.

### Displaying results

- [decorate(foundTextRange:document:usingStyle:)](uitextsearching-3wkjv/decorate%28foundtextrange_document_usingstyle_%29.md): Applies the style to a specific text range to indicate found and highlighted results.
- [clearAllDecoratedFoundText()](uitextsearching-3wkjv/clearalldecoratedfoundtext%28%29.md): Clears the style from all found and highlighted results.
- [willHighlight(foundTextRange:document:)](uitextsearching-3wkjv/willhighlight%28foundtextrange_document_%29.md): Informs the searchable object when the highlighted search result is about to change.
- [scrollRangeToVisible(\_:inDocument:)](uitextsearching-3wkjv/scrollrangetovisible%28__indocument_%29.md): Scrolls to the containing view to make the text range visible.

### Identifying selected text

- [selectedTextRange](uitextsearching-3wkjv/selectedtextrange.md): The range of selected text in a document.
- [selectedTextSearchDocument](uitextsearching-3wkjv/selectedtextsearchdocument.md): The object that uniquely identifies the specific document with selected text.

### Handling replacements

- [supportsTextReplacement](uitextsearching-3wkjv/supportstextreplacement.md): A Boolean value that indicates whether the searchable object supports replacing text.
- [replace(foundTextRange:document:withText:)](uitextsearching-3wkjv/replace%28foundtextrange_document_withtext_%29.md): Informs the searchable object to replace the text range for the highlighted search result.
- [replaceAll(queryString:options:withText:)](uitextsearching-3wkjv/replaceall%28querystring_options_withtext_%29.md): Informs the searchable object to replace all matching text across all searchable documents.
- [shouldReplace(foundTextRange:document:withText:)](uitextsearching-3wkjv/shouldreplace%28foundtextrange_document_withtext_%29.md): Determines whether the searchable object allows replacement of the text range you provide.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextView](uitextview.md)

## See Also

### Find and replace

- [UIFindInteraction](uifindinteraction.md): An interaction that provides text finding and replacing operations using a system find panel.
- [UIFindInteractionDelegate](uifindinteractiondelegate.md): A delegate object that provides a session object to manage the search state for a find interaction and receives notifications of search session lifetimes.
- [UIFindSession](uifindsession.md): An abstract base class that manages the state, presentation, and behavior for a search that the find interaction initiates.
- [UITextSearchingFindSession](uitextsearchingfindsession.md): A find session object that wraps a searchable object implementing the text-searching protocol.
- [UITextSearchOptions](uitextsearchoptions.md): An object containing the configurable options for a text search.
- [UITextSearchFoundTextStyle](uitextsearchfoundtextstyle.md): Constants that describe the style a find session uses to decorate the text.
- [UITextSearchOptions.WordMatchMethod](uitextsearchoptions/wordmatchmethod-swift.enum.md): Constants that describe the method to use when searching text for words that match a string.
- [UIFindSession.SearchResultDisplayStyle](uifindsession/searchresultdisplaystyle-swift.enum.md): Constants that describe the results summary the find panel UI includes.
