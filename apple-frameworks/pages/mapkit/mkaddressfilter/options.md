> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressfilter/options](https://developer.apple.com/documentation/mapkit/mkaddressfilter/options)

# MKAddressFilter.Options (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that contains options for filtering results in a search.

## Declaration

```swift
struct Options
```

## Topics

### Creating a filter result

- [init(rawValue:)](options/init%28rawvalue_%29.md): Creates a filter options object.

### Getting search filter options

- [administrativeArea](options/administrativearea.md): The primary administrative divisions of countries or regions.
- [country](options/country.md): Countries and regions.
- [locality](options/locality.md): Local administrative divisions, postal cities, and populated places.
- [postalCode](options/postalcode.md): An address code for mail sorting and delivery.
- [subAdministrativeArea](options/subadministrativearea.md): The secondary administrative divisions of countries or regions.
- [subLocality](options/sublocality.md): Local administrative subdivisions, postal city subdistricts, and neighborhoods.
- [administrativeArea](options/administrativearea.md): The primary administrative divisions of countries or regions.
- [country](options/country.md): Countries and regions.
- [locality](options/locality.md): Local administrative divisions, postal cities, and populated places.
- [postalCode](options/postalcode.md): An address code for mail sorting and delivery.
- [subAdministrativeArea](options/subadministrativearea.md): The secondary administrative divisions of countries or regions.
- [subLocality](options/sublocality.md): Local administrative subdivisions, postal city subdistricts, and neighborhoods.

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
- [MKAddressFilter](../mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleter.ResultType](../mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](../mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](../mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](../mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.

# MKAddressFilterOption (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A structure that contains options for filtering results in a search.

## Declaration

```objectivec
enum MKAddressFilterOption : NSUInteger;
```

## Topics

### Getting search filter options

- [MKAddressFilterOptionAdministrativeArea](options/administrativearea.md): The primary administrative divisions of countries or regions.
- [MKAddressFilterOptionCountry](options/country.md): Countries and regions.
- [MKAddressFilterOptionLocality](options/locality.md): Local administrative divisions, postal cities, and populated places.
- [MKAddressFilterOptionPostalCode](options/postalcode.md): An address code for mail sorting and delivery.
- [MKAddressFilterOptionSubAdministrativeArea](options/subadministrativearea.md): The secondary administrative divisions of countries or regions.
- [MKAddressFilterOptionSubLocality](options/sublocality.md): Local administrative subdivisions, postal city subdistricts, and neighborhoods.
- [MKAddressFilterOptionAdministrativeArea](options/administrativearea.md): The primary administrative divisions of countries or regions.
- [MKAddressFilterOptionCountry](options/country.md): Countries and regions.
- [MKAddressFilterOptionLocality](options/locality.md): Local administrative divisions, postal cities, and populated places.
- [MKAddressFilterOptionPostalCode](options/postalcode.md): An address code for mail sorting and delivery.
- [MKAddressFilterOptionSubAdministrativeArea](options/subadministrativearea.md): The secondary administrative divisions of countries or regions.
- [MKAddressFilterOptionSubLocality](options/sublocality.md): Local administrative subdivisions, postal city subdistricts, and neighborhoods.

## See Also

### Local search

- [Interacting with nearby points of interest](../interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](../mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearchResultType](../mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKLocalSearch](../mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilter](../mkaddressfilter.md): An object that filters which address options to include or exclude in search results.
- [MKLocalSearchCompleterResultType](../mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](../mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](../mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](../mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.
