> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/request/pointofinterestfilter](https://developer.apple.com/documentation/mapkit/mklocalsearch/request/pointofinterestfilter)

# pointOfInterestFilter (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that lists point-of-interest categories to include or exclude in search results.

## Declaration

```swift
@NSCopying var pointOfInterestFilter: MKPointOfInterestFilter? { get set }
```

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [naturalLanguageQuery](naturallanguagequery.md): A string containing the desired search item.
- [region](region.md): A map region that provides a hint as to where to search.
- [physicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
- [MKLocalSearch.Request.ResultType](resulttype.md): Options that indicate types of search results.

# pointOfInterestFilter (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that lists point-of-interest categories to include or exclude in search results.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MKPointOfInterestFilter * pointOfInterestFilter;
```

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [naturalLanguageQuery](naturallanguagequery.md): A string containing the desired search item.
- [region](region.md): A map region that provides a hint as to where to search.
- [MKLocalSearchResultTypePhysicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
