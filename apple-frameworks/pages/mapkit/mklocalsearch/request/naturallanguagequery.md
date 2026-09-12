> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/request/naturallanguagequery](https://developer.apple.com/documentation/mapkit/mklocalsearch/request/naturallanguagequery)

# naturalLanguageQuery (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A string containing the desired search item.

## Declaration

```swift
var naturalLanguageQuery: String? { get set }
```

<a id="Discussion"></a>

## Discussion

You specify this parameter as a string describing the map-based item you want to look for. The text is equivalent to what the user would type in a search field in the Maps app. For example, the text might contain all or part of an address or it might contain the name of a point of interest.

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [region](region.md): A map region that provides a hint as to where to search.
- [physicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point-of-interest categories to include or exclude in search results.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
- [MKLocalSearch.Request.ResultType](resulttype.md): Options that indicate types of search results.

# naturalLanguageQuery (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

A string containing the desired search item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * naturalLanguageQuery;
```

<a id="Discussion"></a>

## Discussion

You specify this parameter as a string describing the map-based item you want to look for. The text is equivalent to what the user would type in a search field in the Maps app. For example, the text might contain all or part of an address or it might contain the name of a point of interest.

## See Also

### Configuring the search parameters

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [region](region.md): A map region that provides a hint as to where to search.
- [MKLocalSearchResultTypePhysicalFeature](../resulttype/physicalfeature.md): A value that indicates that search results include physical features.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point-of-interest categories to include or exclude in search results.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of items to include in the search results.
