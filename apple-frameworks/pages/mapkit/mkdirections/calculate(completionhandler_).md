> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/calculate(completionhandler:)](https://developer.apple.com/documentation/mapkit/mkdirections/calculate(completionhandler:))

# calculate(completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Begins calculating the requested route information asynchronously.

## Declaration

```swift
func calculate(completionHandler: @escaping @Sendable (MKDirections.Response?, (any Error)?) -> Void)
```

```swift
func calculate() async throws -> MKDirections.Response
```

## Parameters

- `completionHandler`: The block to execute when the directions are ready or when an error occurs. This parameter can’t be `nil`.

<a id="Discussion"></a>

## Discussion

This method initiates the request for directions and calls your completion handler block with the results. The method executes your completion handler on your app’s main thread. The implementation of your handler needs to check for errors and then incorporate the response data as appropriate.

If you call this method while a previous request is in process, this method calls your completion handler with an error. You can determine whether a request is in process by checking the value of the [isCalculating](iscalculating.md) property. You can also cancel a request as necessary.

## See Also

### Related Documentation

- [isCalculating](iscalculating.md): A Boolean value that indicates whether a request is in process.
- [cancel()](cancel%28%29.md): Cancels a pending request.

### Getting the directions

- [MKDirections.DirectionsHandler](directionshandler.md): The block to use for processing the requested route information.
- [MKDirections.Response](response.md): The route information that Apple servers return in response to your request for directions.

# calculateDirectionsWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Begins calculating the requested route information asynchronously.

## Declaration

```objectivec
- (void) calculateDirectionsWithCompletionHandler:(MKDirectionsHandler) completionHandler;
```

## Parameters

- `completionHandler`: The block to execute when the directions are ready or when an error occurs. This parameter can’t be `nil`.

<a id="Discussion"></a>

## Discussion

This method initiates the request for directions and calls your completion handler block with the results. The method executes your completion handler on your app’s main thread. The implementation of your handler needs to check for errors and then incorporate the response data as appropriate.

If you call this method while a previous request is in process, this method calls your completion handler with an error. You can determine whether a request is in process by checking the value of the [calculating](iscalculating.md) property. You can also cancel a request as necessary.

## See Also

### Related Documentation

- [calculating](iscalculating.md): A Boolean value that indicates whether a request is in process.
- [cancel](cancel%28%29.md): Cancels a pending request.

### Getting the directions

- [MKDirectionsHandler](directionshandler.md): The block to use for processing the requested route information.
- [MKDirectionsResponse](response.md): The route information that Apple servers return in response to your request for directions.
