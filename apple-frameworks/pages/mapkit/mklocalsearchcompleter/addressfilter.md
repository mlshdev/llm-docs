> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearchcompleter/addressfilter](https://developer.apple.com/documentation/mapkit/mklocalsearchcompleter/addressfilter)

# addressFilter (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A filter that lists which address options to include or exclude in search results.

## Declaration

```swift
@NSCopying var addressFilter: MKAddressFilter? { get set }
```

## See Also

### Specifying the query attributes

- [queryFragment](queryfragment.md): The search string that you want completions for.
- [region](region.md): The region that defines the geographic scope of the search.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point of interest categories to include or exclude in the search.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKLocalSearchCompleter.FilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleter.ResultType](resulttype.md): Options that indicate types of search completions.

# addressFilter (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A filter that lists which address options to include or exclude in search results.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MKAddressFilter * addressFilter;
```

## See Also

### Specifying the query attributes

- [queryFragment](queryfragment.md): The search string that you want completions for.
- [region](region.md): The region that defines the geographic scope of the search.
- [regionPriority](regionpriority.md): A value that indicates the importance of the configured region.
- [resultTypes](resulttypes.md): The types of search completions to include.
- [pointOfInterestFilter](pointofinterestfilter.md): A filter that lists point of interest categories to include or exclude in the search.
- [filterType](filtertype-swift.property.md): Deprecated. The filter options for the search results.
- [MKSearchCompletionFilterType](filtertype-swift.enum.md): Deprecated. Constants indicating the types of search completions to return.
- [MKLocalSearchCompleterResultType](resulttype.md): Options that indicate types of search completions.
