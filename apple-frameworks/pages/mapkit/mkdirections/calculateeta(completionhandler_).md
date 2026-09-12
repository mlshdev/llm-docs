> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/calculateeta(completionhandler:)](https://developer.apple.com/documentation/mapkit/mkdirections/calculateeta(completionhandler:))

# calculateETA(completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Begins calculating the requested travel-time information asynchronously.

## Declaration

```swift
func calculateETA(completionHandler: @escaping @Sendable (MKDirections.ETAResponse?, (any Error)?) -> Void)
```

```swift
func calculateETA() async throws -> MKDirections.ETAResponse
```

## Parameters

- `completionHandler`: The block to execute when the travel-time estimate is ready or when an error occurs. This parameter can’t be `nil`.

<a id="Discussion"></a>

## Discussion

This method initiates a request for a travel-time estimate and calls your completion handler block with the results. Travel-time estimates take much less time to generate than directions, so use this method in situations where you want a time estimate only. The method executes your completion handler on your app’s main thread. The implementation of your handler needs to check for errors and then incorporate the response data as appropriate.

If you call this method while a previous request is in process, this method calls your completion handler with an error. You can determine whether a request is in process by checking the value of the [isCalculating](iscalculating.md) property. You can also cancel a request as necessary.

## See Also

### Getting the ETA

- [MKDirections.ETAHandler](etahandler.md): The block to use for processing travel-time information.
- [MKDirections.ETAResponse](etaresponse.md): The travel-time information that Apple servers return.

# calculateETAWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Begins calculating the requested travel-time information asynchronously.

## Declaration

```objectivec
- (void) calculateETAWithCompletionHandler:(MKETAHandler) completionHandler;
```

## Parameters

- `completionHandler`: The block to execute when the travel-time estimate is ready or when an error occurs. This parameter can’t be `nil`.

<a id="Discussion"></a>

## Discussion

This method initiates a request for a travel-time estimate and calls your completion handler block with the results. Travel-time estimates take much less time to generate than directions, so use this method in situations where you want a time estimate only. The method executes your completion handler on your app’s main thread. The implementation of your handler needs to check for errors and then incorporate the response data as appropriate.

If you call this method while a previous request is in process, this method calls your completion handler with an error. You can determine whether a request is in process by checking the value of the [calculating](iscalculating.md) property. You can also cancel a request as necessary.

## See Also

### Getting the ETA

- [MKETAHandler](etahandler.md): The block to use for processing travel-time information.
- [MKETAResponse](etaresponse.md): The travel-time information that Apple servers return.
