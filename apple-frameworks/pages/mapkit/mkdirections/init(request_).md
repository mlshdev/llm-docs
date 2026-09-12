> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/init(request:)](https://developer.apple.com/documentation/mapkit/mkdirections/init(request:))

# init(request:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a directions object using the specified request.

## Declaration

```swift
init(request: MKDirections.Request)
```

## Parameters

- `request`: The request object containing the start and end points of the route. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized directions object.

<a id="Discussion"></a>

## Discussion

After initializing your directions object, you must call the [calculate(completionHandler:)](calculate%28completionhandler_%29.md) or [calculateETA(completionHandler:)](calculateeta%28completionhandler_%29.md) method to perform the request.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a directions object

- [MKDirections.Request](request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirections.RoutePreference](routepreference.md): Options that modify how the framework selects routes when calculating directions.

# initWithRequest: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a directions object using the specified request.

## Declaration

```objectivec
- (instancetype) initWithRequest:(MKDirectionsRequest *) request;
```

## Parameters

- `request`: The request object containing the start and end points of the route. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized directions object.

<a id="Discussion"></a>

## Discussion

After initializing your directions object, you must call the [calculateDirectionsWithCompletionHandler:](calculate%28completionhandler_%29.md) or [calculateETAWithCompletionHandler:](calculateeta%28completionhandler_%29.md) method to perform the request.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Creating a directions object

- [MKDirectionsRequest](request.md): The start and end points of a route, along with the planned mode of transportation.
- [MKDirectionsRoutePreference](routepreference.md): Options that modify how the framework selects routes when calculating directions.
