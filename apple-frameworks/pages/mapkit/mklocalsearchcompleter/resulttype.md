> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/resulttype](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/resulttype)

# MKLocalSearchCompleter.ResultType (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Options that indicate types of search completions.

## Declaration

```swift
struct ResultType
```

## Topics

### Type properties

- [address](resulttype/address.md): A value that indicates that the search completer includes address completions in the result.
- [pointOfInterest](resulttype/pointofinterest.md): A value that indicates that the search completer includes point-of-interest completions in the result.
- [physicalFeature](resulttype/physicalfeature.md): A value that indicates that the search completer includes physical feature completions in the result.
- [query](resulttype/query.md): A value that indicates that the search completer includes query completions in the result.

### Initializers

- [init(rawValue:)](resulttype/init%28rawvalue_%29.md): Creates a direction transport type using a raw unsigned integer value.
- [address](resulttype/address.md): A value that indicates that the search completer includes address completions in the result.
- [pointOfInterest](resulttype/pointofinterest.md): A value that indicates that the search completer includes point-of-interest completions in the result.
- [physicalFeature](resulttype/physicalfeature.md): A value that indicates that the search completer includes physical feature completions in the result.
- [query](resulttype/query.md): A value that indicates that the search completer includes query completions in the result.

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
- [MKLocalSearch.ResultType](../mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKLocalSearch](../mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilter.Options](../mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](../mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleter](../mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](../mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](../mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.

# MKLocalSearchCompleterResultType (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Options that indicate types of search completions.

## Declaration

```objectivec
enum MKLocalSearchCompleterResultType : NSUInteger;
```

## Topics

### Type properties

- [MKLocalSearchCompleterResultTypeAddress](resulttype/address.md): A value that indicates that the search completer includes address completions in the result.
- [MKLocalSearchCompleterResultTypePointOfInterest](resulttype/pointofinterest.md): A value that indicates that the search completer includes point-of-interest completions in the result.
- [MKLocalSearchCompleterResultTypePhysicalFeature](resulttype/physicalfeature.md): A value that indicates that the search completer includes physical feature completions in the result.
- [MKLocalSearchCompleterResultTypeQuery](resulttype/query.md): A value that indicates that the search completer includes query completions in the result.

### Initializers

- [MKLocalSearchCompleterResultTypeAddress](resulttype/address.md): A value that indicates that the search completer includes address completions in the result.
- [MKLocalSearchCompleterResultTypePointOfInterest](resulttype/pointofinterest.md): A value that indicates that the search completer includes point-of-interest completions in the result.
- [MKLocalSearchCompleterResultTypePhysicalFeature](resulttype/physicalfeature.md): A value that indicates that the search completer includes physical feature completions in the result.
- [MKLocalSearchCompleterResultTypeQuery](resulttype/query.md): A value that indicates that the search completer includes query completions in the result.

## See Also

### Local search

- [Interacting with nearby points of interest](../interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](../mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearchResultType](../mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKLocalSearch](../mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilterOption](../mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKAddressFilter](../mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleter](../mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](../mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](../mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.
