> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/request/regionpriority](https://developer.apple.com/documentation/mapkit/mklocalsearch/request/regionpriority)

# regionPriority (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A value that indicates the importance of the configured region.

## Declaration

```swift
var regionPriority: MKLocalSearchRegionPriority { get set }
```

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [naturalLanguageQuery](naturallanguagequery.md): A string containing the desired search item.
- [region](region.md): A map region that provides a hint as to where to search.
- [physicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point-of-interest categories to include or exclude in search results.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
- [MKLocalSearch.Request.ResultType](resulttype.md): Options that indicate types of search results.

# regionPriority (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A value that indicates the importance of the configured region.

## Declaration

```objectivec
@property (nonatomic, assign) MKLocalSearchRegionPriority regionPriority;
```

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [naturalLanguageQuery](naturallanguagequery.md): A string containing the desired search item.
- [region](region.md): A map region that provides a hint as to where to search.
- [MKLocalSearchResultTypePhysicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point-of-interest categories to include or exclude in search results.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
