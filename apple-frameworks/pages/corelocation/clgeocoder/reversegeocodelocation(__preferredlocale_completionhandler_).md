> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/reversegeocodelocation(_:preferredlocale:completionhandler:)](https://developer.apple.com/documentation/corelocation/clgeocoder/reversegeocodelocation(_:preferredlocale:completionhandler:))

# reverseGeocodeLocation(\_:preferredLocale:completionHandler:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 26.0) · iPadOS 11.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.13+ (deprecated in 26.0) · tvOS 11.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 4.0+ (deprecated in 26.0)

Submits a reverse-geocoding request for the specified location and locale.

> Use MKReverseGeocodingRequest

## Declaration

```swift
func reverseGeocodeLocation(_ location: CLLocation, preferredLocale locale: Locale?, completionHandler: @escaping @Sendable ([CLPlacemark]?, (any Error)?) -> Void)
```

```swift
func reverseGeocodeLocation(_ location: CLLocation, preferredLocale locale: Locale?) async throws -> [CLPlacemark]
```

## Parameters

- `location`: The location object containing the coordinate data to look up.
- `locale`: The locale to use when returning the address information. You might specify a value for this parameter when you want the address returned in a locale that differs from the user’s current language settings. Specify `nil` to use the user’s default locale information.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reverseGeocodeLocation(_ location: CLLocation, preferredLocale locale: Locale?) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. When the request completes, the geocoder executes the provided completion handler on the main thread.

After initiating a reverse-geocoding request, do not attempt to initiate another reverse- or forward-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [network](../clerror-swift.struct/network.md) to your completion handler.

## See Also

### Reverse geocoding a location

- [reverseGeocodeLocation(\_:completionHandler:)](reversegeocodelocation%28__completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location.
- [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md): A block to be called when a geocoding request is complete.

# reverseGeocodeLocation:preferredLocale:completionHandler: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 26.0) · iPadOS 11.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.13+ (deprecated in 26.0) · tvOS 11.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 4.0+ (deprecated in 26.0)

Submits a reverse-geocoding request for the specified location and locale.

> Use MKReverseGeocodingRequest

## Declaration

```objectivec
- (void) reverseGeocodeLocation:(CLLocation *) location preferredLocale:(NSLocale *) locale completionHandler:(CLGeocodeCompletionHandler) completionHandler;
```

## Parameters

- `location`: The location object containing the coordinate data to look up.
- `locale`: The locale to use when returning the address information. You might specify a value for this parameter when you want the address returned in a locale that differs from the user’s current language settings. Specify `nil` to use the user’s default locale information.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func reverseGeocodeLocation(_ location: CLLocation, preferredLocale locale: Locale?) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. When the request completes, the geocoder executes the provided completion handler on the main thread.

After initiating a reverse-geocoding request, do not attempt to initiate another reverse- or forward-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [network](../clerror-swift.struct/network.md) to your completion handler.

## See Also

### Reverse geocoding a location

- [reverseGeocodeLocation:completionHandler:](reversegeocodelocation%28__completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location.
- [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md): A block to be called when a geocoding request is complete.
