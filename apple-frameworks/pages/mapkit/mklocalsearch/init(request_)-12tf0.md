> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklocalsearch/init(request:)-12tf0](https://developer.apple.com/documentation/mapkit/mklocalsearch/init(request:)-12tf0)

# init(request:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a search object with the specified parameters.

## Declaration

```swift
init(request: MKLocalSearch.Request)
```

## Parameters

- `request`: The search request information. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized search object.

<a id="Discussion"></a>

## Discussion

This method stores a copy of the object in the `request` parameter. So, the object ignores any changes you make to your request object after calling this method.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a search request

- [init(request:)](init%28request_%29-9x8kn.md): Creates and returns a search object for fetching points of interest.
- [MKLocalSearch.Request](request.md): The parameters to use when searching for points of interest on the map.
- [MKLocalSearch.ResultType](resulttype.md): Options that indicate types of search results.

# initWithRequest: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 6.1+ · iPadOS 6.1+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a search object with the specified parameters.

## Declaration

```objectivec
- (instancetype) initWithRequest:(MKLocalSearchRequest *) request;
```

## Parameters

- `request`: The search request information. This parameter can’t be `nil`.

<a id="return-value"></a>

## Return Value

An initialized search object.

<a id="Discussion"></a>

## Discussion

This method stores a copy of the object in the `request` parameter. So, the object ignores any changes you make to your request object after calling this method.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a search request

- [initWithPointsOfInterestRequest:](init%28request_%29-9x8kn.md): Creates and returns a search object for fetching points of interest.
- [MKLocalSearchRequest](request.md): The parameters to use when searching for points of interest on the map.
- [MKLocalSearchResultType](resulttype.md): Options that indicate types of search results.
