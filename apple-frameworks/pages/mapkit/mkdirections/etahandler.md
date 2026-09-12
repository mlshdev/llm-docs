> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/etahandler](https://developer.apple.com/documentation/mapkit/mkdirections/etahandler)

# MKDirections.ETAHandler (Swift)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The block to use for processing travel-time information.

## Declaration

```swift
typealias ETAHandler = (MKDirections.ETAResponse?, (any Error)?) -> Void
```

## Parameters

- `response`: The `response` parameter contains the travel-time response. If an error occurs or the framework can’t determine the travel time, this parameter is `nil`.
- `error`: The `error` parameter contains information about any errors that occur. If no errors occur, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The implementation of your block needs to check for a value in the `error` parameter and, if that parameter is `nil`, incorporate the travel-time information from the `response` parameter.

## See Also

### Getting the ETA

- [calculateETA(completionHandler:)](calculateeta%28completionhandler_%29.md): Begins calculating the requested travel-time information asynchronously.
- [MKDirections.ETAResponse](etaresponse.md): The travel-time information that Apple servers return.

# MKETAHandler (Objective-C)

**Framework:** MapKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The block to use for processing travel-time information.

## Declaration

```objectivec
typedef void (^)(MKETAResponse *, NSError *) MKETAHandler;
```

## Parameters

- `response`: The `response` parameter contains the travel-time response. If an error occurs or the framework can’t determine the travel time, this parameter is `nil`.
- `error`: The `error` parameter contains information about any errors that occur. If no errors occur, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The implementation of your block needs to check for a value in the `error` parameter and, if that parameter is `nil`, incorporate the travel-time information from the `response` parameter.

## See Also

### Getting the ETA

- [calculateETAWithCompletionHandler:](calculateeta%28completionhandler_%29.md): Begins calculating the requested travel-time information asynchronously.
- [MKETAResponse](etaresponse.md): The travel-time information that Apple servers return.
