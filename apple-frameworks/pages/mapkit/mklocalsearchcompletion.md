> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompletion](https://developer.apple.com/documentation/mapkit/mklocalsearchcompletion)

# MKLocalSearchCompletion (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

A fully formed string that completes a partial string.

## Declaration

```swift
class MKLocalSearchCompletion
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you use an [MKLocalSearchCompleter](mklocalsearchcompleter.md) to initiate a search based on a set of partial search strings. That object stores any matches in its results property. Retrieve any `MKLocalSearchCompletion` objects from that property and display the search terms in your interface, or use one to initiate a search for content based on that search term.

When displaying text completions for a partial search term in your user interface, you might want to use a bold version of a font or add some other highlighting to the portion of the completion string that causes it to match the partial search term. To help you add this styling, the completion object includes highlight ranges for the title and subtitle strings.

## Topics

### Getting the search completions

- [title](mklocalsearchcompletion/title.md): The title string associated with the point of interest.
- [subtitle](mklocalsearchcompletion/subtitle.md): The subtitle (if any) associated with the point of interest.
- [titleHighlightRanges](mklocalsearchcompletion/titlehighlightranges.md): The ranges of characters to highlight in the title string.
- [subtitleHighlightRanges](mklocalsearchcompletion/subtitlehighlightranges.md): The ranges of characters to highlight in the subtitle string.

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

## See Also

### Local search

- [Interacting with nearby points of interest](interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearch.ResultType](mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKLocalSearch](mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilter.Options](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleter.ResultType](mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalPointsOfInterestRequest](mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.

# MKLocalSearchCompletion (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

A fully formed string that completes a partial string.

## Declaration

```objectivec
@interface MKLocalSearchCompletion : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you use an [MKLocalSearchCompleter](mklocalsearchcompleter.md) to initiate a search based on a set of partial search strings. That object stores any matches in its results property. Retrieve any `MKLocalSearchCompletion` objects from that property and display the search terms in your interface, or use one to initiate a search for content based on that search term.

When displaying text completions for a partial search term in your user interface, you might want to use a bold version of a font or add some other highlighting to the portion of the completion string that causes it to match the partial search term. To help you add this styling, the completion object includes highlight ranges for the title and subtitle strings.

## Topics

### Getting the search completions

- [title](mklocalsearchcompletion/title.md): The title string associated with the point of interest.
- [subtitle](mklocalsearchcompletion/subtitle.md): The subtitle (if any) associated with the point of interest.
- [titleHighlightRanges](mklocalsearchcompletion/titlehighlightranges.md): The ranges of characters to highlight in the title string.
- [subtitleHighlightRanges](mklocalsearchcompletion/subtitlehighlightranges.md): The ranges of characters to highlight in the subtitle string.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Local search

- [Interacting with nearby points of interest](interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearchResultType](mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKLocalSearch](mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilterOption](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleterResultType](mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalPointsOfInterestRequest](mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.
