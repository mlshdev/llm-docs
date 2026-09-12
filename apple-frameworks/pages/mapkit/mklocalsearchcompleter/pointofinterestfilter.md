> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/pointofinterestfilter](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/pointofinterestfilter)

# pointOfInterestFilter (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that lists point of interest categories to include or exclude in the search.

## Declaration

```swift
@NSCopying var pointOfInterestFilter: MKPointOfInterestFilter? { get set }
```

## See Also

### Specifying the query attributes

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [queryFragment](queryfragment.md): The search string that you want completions for.
- [region](region.md): The region that defines the geographic scope of the search.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKLocalSearchCompleter.FilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleter.ResultType](resulttype.md): Options that indicate types of search completions.

# pointOfInterestFilter (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A filter that lists point of interest categories to include or exclude in the search.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MKPointOfInterestFilter * pointOfInterestFilter;
```

## See Also

### Specifying the query attributes

- [addressFilter](addressfilter.md): A filter that lists which address options to include or exclude in search results.
- [queryFragment](queryfragment.md): The search string that you want completions for.
- [region](region.md): The region that defines the geographic scope of the search.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKSearchCompletionFilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleterResultType](resulttype.md): Options that indicate types of search completions.
