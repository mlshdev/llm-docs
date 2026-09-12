> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/resulttype](https://developer.apple.com/documentation/mapkit/mklocalsearch/resulttype)

# MKLocalSearch.ResultType (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Options that indicate types of search results.

## Declaration

```swift
struct ResultType
```

<a id="overview"></a>

## Overview

These options configure the types of search results you want to receive from [MKLocalSearch.Request](request.md), including points of interest and addresses.

## Topics

### Creating the result type

- [init(rawValue:)](resulttype/init%28rawvalue_%29.md): Creates a search result type from the provided value.

### Specifying types of search results

- [address](resulttype/address.md): A value that indicates that search results include addresses.
- [pointOfInterest](resulttype/pointofinterest.md): A value that indicates that search results include points of interest.
- [physicalFeature](resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [address](resulttype/address.md): A value that indicates that search results include addresses.
- [pointOfInterest](resulttype/pointofinterest.md): A value that indicates that search results include points of interest.
- [physicalFeature](resulttype/physicalfeature.md): A value that indicates that search results include physical features.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Local search

- [Interacting with nearby points of interest](../interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](../mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearch](../mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilter.Options](../mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](../mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleter.ResultType](../mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](../mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](../mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](../mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.

# MKLocalSearchResultType (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Options that indicate types of search results.

## Declaration

```objectivec
enum MKLocalSearchResultType : NSUInteger;
```

<a id="overview"></a>

## Overview

These options configure the types of search results you want to receive from [MKLocalSearchRequest](request.md), including points of interest and addresses.

## Topics

### Specifying types of search results

- [MKLocalSearchResultTypeAddress](resulttype/address.md): A value that indicates that search results include addresses.
- [MKLocalSearchResultTypePointOfInterest](resulttype/pointofinterest.md): A value that indicates that search results include points of interest.
- [MKLocalSearchResultTypePhysicalFeature](resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [MKLocalSearchResultTypeAddress](resulttype/address.md): A value that indicates that search results include addresses.
- [MKLocalSearchResultTypePointOfInterest](resulttype/pointofinterest.md): A value that indicates that search results include points of interest.
- [MKLocalSearchResultTypePhysicalFeature](resulttype/physicalfeature.md): A value that indicates that search results include physical features.

## See Also

### Local search

- [Interacting with nearby points of interest](../interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](../mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearch](../mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilterOption](../mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](../mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleterResultType](../mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](../mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](../mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](../mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.
