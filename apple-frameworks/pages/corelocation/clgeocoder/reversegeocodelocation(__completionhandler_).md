> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/reversegeocodelocation(_:completionhandler:)](https://developer.apple.com/documentation/corelocation/clgeocoder/reversegeocodelocation(_:completionhandler:))

# reverseGeocodeLocation(\_:completionHandler:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Submits a reverse-geocoding request for the specified location.

> Use MKReverseGeocodingRequest

## Declaration

```swift
func reverseGeocodeLocation(_ location: CLLocation, completionHandler: @escaping @Sendable ([CLPlacemark]?, (any Error)?) -> Void)
```

```swift
func reverseGeocodeLocation(_ location: CLLocation) async throws -> [CLPlacemark]
```

## Parameters

- `location`: The location object containing the coordinate data to look up.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

## Mentioned In

- [Converting between coordinates and user-friendly place names](../converting-between-coordinates-and-user-friendly-place-names.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reverseGeocodeLocation(_ location: CLLocation) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. When the request completes, the geocoder executes the provided completion handler on the main thread.

After initiating a reverse-geocoding request, do not attempt to initiate another reverse- or forward-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [CLError.Code.network](../clerror-swift.struct/code/network.md) to your completion handler.

## See Also

### Reverse geocoding a location

- [reverseGeocodeLocation(\_:preferredLocale:completionHandler:)](reversegeocodelocation%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location and locale.
- [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md): A block to be called when a geocoding request is complete.

# reverseGeocodeLocation:completionHandler: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Submits a reverse-geocoding request for the specified location.

> Use MKReverseGeocodingRequest

## Declaration

```objectivec
- (void) reverseGeocodeLocation:(CLLocation *) location completionHandler:(CLGeocodeCompletionHandler) completionHandler;
```

## Parameters

- `location`: The location object containing the coordinate data to look up.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

## Mentioned In

- [Converting between coordinates and user-friendly place names](../converting-between-coordinates-and-user-friendly-place-names.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reverseGeocodeLocation(_ location: CLLocation) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. When the request completes, the geocoder executes the provided completion handler on the main thread.

After initiating a reverse-geocoding request, do not attempt to initiate another reverse- or forward-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [kCLErrorNetwork](../clerror-swift.struct/code/network.md) to your completion handler.

## See Also

### Reverse geocoding a location

- [reverseGeocodeLocation:preferredLocale:completionHandler:](reversegeocodelocation%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location and locale.
- [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md): A block to be called when a geocoding request is complete.
