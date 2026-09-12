> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/request/region](https://developer.apple.com/documentation/mapkit/mklocalsearch/request/region)

# region (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A map region that provides a hint as to where to search.

## Declaration

```swift
var region: MKCoordinateRegion { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this parameter to narrow the list of search results to those inside or close to the specified region. Specifying a region doesn’t ensure that the results are all inside the region. It’s merely a hint to the search engine.

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [naturalLanguageQuery](naturallanguagequery.md): A string containing the desired search item.
- [physicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point-of-interest categories to include or exclude in search results.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
- [MKLocalSearch.Request.ResultType](resulttype.md): Options that indicate types of search results.

# region (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A map region that provides a hint as to where to search.

## Declaration

```objectivec
@property (nonatomic, assign) MKCoordinateRegion region;
```

<a id="Discussion"></a>

## Discussion

You can use this parameter to narrow the list of search results to those inside or close to the specified region. Specifying a region doesn’t ensure that the results are all inside the region. It’s merely a hint to the search engine.

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [naturalLanguageQuery](naturallanguagequery.md): A string containing the desired search item.
- [MKLocalSearchResultTypePhysicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point-of-interest categories to include or exclude in search results.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
