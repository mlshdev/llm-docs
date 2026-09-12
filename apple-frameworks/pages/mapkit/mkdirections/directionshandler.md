> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/directionshandler](https://developer.apple.com/documentation/mapkit/mkdirections/directionshandler)

# MKDirections.DirectionsHandler (Swift)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The block to use for processing the requested route information.

## Declaration

```swift
typealias DirectionsHandler = (MKDirections.Response?, (any Error)?) -> Void
```

## Parameters

- `response`: The `response` parameter contains the route information for the request. If an error occurs or the framework can’t determine a route, this parameter is `nil`.
- `error`: The `error` parameter contains information about any errors that occur. If no errors occur, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The implementation of your block needs to check for a value in the `error` parameter and, if that parameter is `nil`, incorporate the route information from the `response` parameter.

## See Also

### Getting the directions

- [calculate(completionHandler:)](calculate%28completionhandler_%29.md): Begins calculating the requested route information asynchronously.
- [MKDirections.Response](response.md): The route information that Apple servers return in response to your request for directions.

# MKDirectionsHandler (Objective-C)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The block to use for processing the requested route information.

## Declaration

```objectivec
typedef void (^)(MKDirectionsResponse *, NSError *) MKDirectionsHandler;
```

## Parameters

- `response`: The `response` parameter contains the route information for the request. If an error occurs or the framework can’t determine a route, this parameter is `nil`.
- `error`: The `error` parameter contains information about any errors that occur. If no errors occur, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The implementation of your block needs to check for a value in the `error` parameter and, if that parameter is `nil`, incorporate the route information from the `response` parameter.

## See Also

### Getting the directions

- [calculateDirectionsWithCompletionHandler:](calculate%28completionhandler_%29.md): Begins calculating the requested route information asynchronously.
- [MKDirectionsResponse](response.md): The route information that Apple servers return in response to your request for directions.
