> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/init(request:)-9x8kn](https://developer.apple.com/documentation/mapkit/mklocalsearch/init(request:)-9x8kn)

# init(request:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates and returns a search object for fetching points of interest.

## Declaration

```swift
init(request: MKLocalPointsOfInterestRequest)
```

## Parameters

- `request`: The search parameters to fetch points of interest.

## See Also

### Creating a search request

- [init(request:)](init%28request_%29-12tf0.md): Creates and returns a search object with the specified parameters.
- [MKLocalSearch.Request](request.md): The parameters to use when searching for points of interest on the map.
- [MKLocalSearch.ResultType](resulttype.md): Options that indicate types of search results.

# initWithPointsOfInterestRequest: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates and returns a search object for fetching points of interest.

## Declaration

```objectivec
- (instancetype) initWithPointsOfInterestRequest:(MKLocalPointsOfInterestRequest *) request;
```

## Parameters

- `request`: The search parameters to fetch points of interest.

## See Also

### Creating a search request

- [initWithRequest:](init%28request_%29-12tf0.md): Creates and returns a search object with the specified parameters.
- [MKLocalSearchRequest](request.md): The parameters to use when searching for points of interest on the map.
- [MKLocalSearchResultType](resulttype.md): Options that indicate types of search results.
