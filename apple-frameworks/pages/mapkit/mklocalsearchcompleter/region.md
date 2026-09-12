> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/region](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/region)

# region (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The region that defines the geographic scope of the search.

## Declaration

```swift
var region: MKCoordinateRegion { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit search results to the specified geographic area. The default value of this property is a region that spans the entire world.

## See Also

### Specifying the query attributes

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [queryFragment](queryfragment.md): The search string that you want completions for.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point of interest categories to include or exclude in the search.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKLocalSearchCompleter.FilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleter.ResultType](resulttype.md): Options that indicate types of search completions.

# region (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.11.4+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 3.0+

The region that defines the geographic scope of the search.

## Declaration

```objectivec
@property (nonatomic, assign) MKCoordinateRegion region;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit search results to the specified geographic area. The default value of this property is a region that spans the entire world.

## See Also

### Specifying the query attributes

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [queryFragment](queryfragment.md): The search string that you want completions for.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point of interest categories to include or exclude in the search.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKSearchCompletionFilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleterResultType](resulttype.md): Options that indicate types of search completions.
