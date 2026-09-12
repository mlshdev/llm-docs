> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/geocodepostaladdress(_:preferredlocale:completionhandler:)](https://developer.apple.com/documentation/corelocation/clgeocoder/geocodepostaladdress(_:preferredlocale:completionhandler:))

# geocodePostalAddress(\_:preferredLocale:completionHandler:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 26.0) · iPadOS 11.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.13+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 4.0+ (deprecated in 26.0)

Submits a forward-geocoding requesting using the specified locale and Contacts framework information.

> Use MKReverseGeocodingRequest

## Declaration

```swift
func geocodePostalAddress(_ postalAddress: CNPostalAddress, preferredLocale locale: Locale?, completionHandler: @escaping @Sendable ([CLPlacemark]?, (any Error)?) -> Void)
```

```swift
func geocodePostalAddress(_ postalAddress: CNPostalAddress, preferredLocale locale: Locale?) async throws -> [CLPlacemark]
```

## Parameters

- `postalAddress`: A postal address from the Contacts framework.
- `locale`: The locale of the postal address. Specify `nil` to use the current locale of the user.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func geocodePostalAddress(_ postalAddress: CNPostalAddress, preferredLocale locale: Locale?) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. When the request completes, the geocoder executes the provided completion handler on the main thread.

After initiating a forward-geocoding request, do not attempt to initiate another reverse- or forward-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [network](../clerror-swift.struct/network.md) to your completion handler.

## See Also

### Geocoding an address

- [geocodeAddressString(\_:in:preferredLocale:completionHandler:)](geocodeaddressstring%28__in_preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified address string and locale information.
- [geocodeAddressString(\_:completionHandler:)](geocodeaddressstring%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string.
- [geocodeAddressString(\_:in:completionHandler:)](geocodeaddressstring%28__in_completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string and region information.
- [geocodePostalAddress(\_:completionHandler:)](geocodepostaladdress%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified Contacts framework information.
- [geocodeAddressDictionary(\_:completionHandler:)](geocodeaddressdictionary%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified address dictionary.

# geocodePostalAddress:preferredLocale:completionHandler: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 26.0) · iPadOS 11.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.13+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 4.0+ (deprecated in 26.0)

Submits a forward-geocoding requesting using the specified locale and Contacts framework information.

> Use MKReverseGeocodingRequest

## Declaration

```objectivec
- (void) geocodePostalAddress:(CNPostalAddress *) postalAddress preferredLocale:(NSLocale *) locale completionHandler:(CLGeocodeCompletionHandler) completionHandler;
```

## Parameters

- `postalAddress`: A postal address from the Contacts framework.
- `locale`: The locale of the postal address. Specify `nil` to use the current locale of the user.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func geocodePostalAddress(_ postalAddress: CNPostalAddress, preferredLocale locale: Locale?) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. When the request completes, the geocoder executes the provided completion handler on the main thread.

After initiating a forward-geocoding request, do not attempt to initiate another reverse- or forward-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [network](../clerror-swift.struct/network.md) to your completion handler.

## See Also

### Geocoding an address

- [geocodeAddressString:inRegion:preferredLocale:completionHandler:](geocodeaddressstring%28__in_preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified address string and locale information.
- [geocodeAddressString:completionHandler:](geocodeaddressstring%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string.
- [geocodeAddressString:inRegion:completionHandler:](geocodeaddressstring%28__in_completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string and region information.
- [geocodePostalAddress:completionHandler:](geocodepostaladdress%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified Contacts framework information.
- [geocodeAddressDictionary:completionHandler:](geocodeaddressdictionary%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified address dictionary.
