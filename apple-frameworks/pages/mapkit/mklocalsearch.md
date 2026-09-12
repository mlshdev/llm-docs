> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch](https://developer.apple.com/documentation/mapkit/mklocalsearch)

# MKLocalSearch (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A utility object for initiating map-based searches and processing the results.

## Declaration

```swift
class MKLocalSearch
```

<a id="overview"></a>

## Overview

Use an [MKLocalSearch](mklocalsearch.md) object to execute a single search request. You might use this class to search for addresses or points of interest on the map. Upon completion of the request, the object delivers the results to the completion handler that you provide.

## Topics

### Creating a search request

- [init(request:)](mklocalsearch/init%28request_%29-12tf0.md): Creates and returns a search object with the specified parameters.
- [init(request:)](mklocalsearch/init%28request_%29-9x8kn.md): Creates and returns a search object for fetching points of interest.
- [MKLocalSearch.Request](mklocalsearch/request.md): The parameters to use when searching for points of interest on the map.
- [MKLocalSearch.ResultType](mklocalsearch/resulttype.md): Options that indicate types of search results.

### Performing the search

- [start(completionHandler:)](mklocalsearch/start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [MKLocalSearch.CompletionHandler](mklocalsearch/completionhandler.md): A completion handler block for a search operation.
- [isSearching](mklocalsearch/issearching.md): A Boolean value that indicates whether the search is in progress.
- [cancel()](mklocalsearch/cancel%28%29.md): Cancels an in-progress search operation.

### Getting search results

- [MKLocalSearch.Response](mklocalsearch/response.md): The results from a map-based search.

### Initializers

- [init(pointsOfInterestRequest:)](mklocalsearch/init%28pointsofinterestrequest_%29.md)

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
- [MKAddressFilter.Options](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleter.ResultType](mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.

# MKLocalSearch (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A utility object for initiating map-based searches and processing the results.

## Declaration

```objectivec
@interface MKLocalSearch : NSObject
```

<a id="overview"></a>

## Overview

Use an [MKLocalSearch](mklocalsearch.md) object to execute a single search request. You might use this class to search for addresses or points of interest on the map. Upon completion of the request, the object delivers the results to the completion handler that you provide.

## Topics

### Creating a search request

- [initWithRequest:](mklocalsearch/init%28request_%29-12tf0.md): Creates and returns a search object with the specified parameters.
- [initWithPointsOfInterestRequest:](mklocalsearch/init%28request_%29-9x8kn.md): Creates and returns a search object for fetching points of interest.
- [MKLocalSearchRequest](mklocalsearch/request.md): The parameters to use when searching for points of interest on the map.
- [MKLocalSearchResultType](mklocalsearch/resulttype.md): Options that indicate types of search results.

### Performing the search

- [startWithCompletionHandler:](mklocalsearch/start%28completionhandler_%29.md): Starts the search and delivers the results to the specified completion handler.
- [MKLocalSearchCompletionHandler](mklocalsearch/completionhandler.md): A completion handler block for a search operation.
- [searching](mklocalsearch/issearching.md): A Boolean value that indicates whether the search is in progress.
- [cancel](mklocalsearch/cancel%28%29.md): Cancels an in-progress search operation.

### Getting search results

- [MKLocalSearchResponse](mklocalsearch/response.md): The results from a map-based search.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Local search

- [Interacting with nearby points of interest](interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearchResultType](mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKAddressFilterOption](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleterResultType](mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.
