> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkaddressfilter](https://developer.apple.com/documentation/mapkit/mkaddressfilter)

# MKAddressFilter (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An object that filters which address options to include or exclude in search results.

## Declaration

```swift
class MKAddressFilter
```

<a id="overview"></a>

## Overview

Use this object to filter search results by criteria, such as country, region, and municipality. See [MKAddressFilter.Options](mkaddressfilter/options.md) for more information.

## Topics

### Creating a filter

- [init(excluding:)](mkaddressfilter/init%28excluding_%29.md): Creates an address filter with options for excluding results in a search.
- [init(including:)](mkaddressfilter/init%28including_%29.md): Creates an address filter with options for including results in a search.

### Filtering results

- [MKAddressFilter.Options](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [excludingAll](mkaddressfilter/excludingall.md): A list of categories to exclude from a search.
- [includingAll](mkaddressfilter/includingall.md): A list of categories to include in a search.
- [excludes(\_:)](mkaddressfilter/excludes%28__%29.md): Indicates whether options are excluded from filtering.
- [includes(\_:)](mkaddressfilter/includes%28__%29.md): Indicates whether options are included for filtering.

### Initializers

- [init(coder:)](mkaddressfilter/init%28coder_%29.md)
- [init(excludingOptions:)](mkaddressfilter/init%28excludingoptions_%29.md)
- [init(includingOptions:)](mkaddressfilter/init%28includingoptions_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Local search

- [Interacting with nearby points of interest](interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearch.ResultType](mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKLocalSearch](mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilter.Options](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKLocalSearchCompleter.ResultType](mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.

# MKAddressFilter (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An object that filters which address options to include or exclude in search results.

## Declaration

```objectivec
@interface MKAddressFilter : NSObject
```

<a id="overview"></a>

## Overview

Use this object to filter search results by criteria, such as country, region, and municipality. See [MKAddressFilterOption](mkaddressfilter/options.md) for more information.

## Topics

### Creating a filter

- [initExcludingOptions:](mkaddressfilter/init%28excluding_%29.md): Creates an address filter with options for excluding results in a search.
- [initIncludingOptions:](mkaddressfilter/init%28including_%29.md): Creates an address filter with options for including results in a search.

### Filtering results

- [MKAddressFilterOption](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [filterExcludingAll](mkaddressfilter/excludingall.md): A list of categories to exclude from a search.
- [filterIncludingAll](mkaddressfilter/includingall.md): A list of categories to include in a search.
- [excludesOptions:](mkaddressfilter/excludes%28__%29.md): Indicates whether options are excluded from filtering.
- [includesOptions:](mkaddressfilter/includes%28__%29.md): Indicates whether options are included for filtering.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Local search

- [Interacting with nearby points of interest](interacting-with-nearby-points-of-interest.md): Provide automatic search completions for a partial search query, search the map for relevant locations nearby, and retrieve details for selected points of interest.
- [MKLocalSearchRegionPriority](mklocalsearchregionpriority.md): A value that indicates the importance of the configured region.
- [MKLocalSearchResultType](mklocalsearch/resulttype.md): Options that indicate types of search results.
- [MKLocalSearch](mklocalsearch.md): A utility object for initiating map-based searches and processing the results.
- [MKAddressFilterOption](mkaddressfilter/options.md): A structure that contains options for filtering results in a search.
- [MKLocalSearchCompleterResultType](mklocalsearchcompleter/resulttype.md): Options that indicate types of search completions.
- [MKLocalSearchCompleter](mklocalsearchcompleter.md): A utility object for generating a list of completion strings based on a partial search string that you provide.
- [MKLocalSearchCompletion](mklocalsearchcompletion.md): A fully formed string that completes a partial string.
- [MKLocalPointsOfInterestRequest](mklocalpointsofinterestrequest.md): A structured request to use when searching for points of interest.
