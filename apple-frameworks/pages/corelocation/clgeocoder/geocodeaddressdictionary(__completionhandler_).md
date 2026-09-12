> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/geocodeaddressdictionary(_:completionhandler:)](https://developer.apple.com/documentation/corelocation/clgeocoder/geocodeaddressdictionary(_:completionhandler:))

# geocodeAddressDictionary(\_:completionHandler:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 11.0) · iPadOS 5.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · watchOS 1.0+ (deprecated in 4.0)

Submits a forward-geocoding request using the specified address dictionary.

> Use [geocodePostalAddress(\_:preferredLocale:completionHandler:)](geocodepostaladdress%28__preferredlocale_completionhandler_%29.md) or [geocodePostalAddress(\_:completionHandler:)](geocodepostaladdress%28__completionhandler_%29.md) instead.

## Declaration

```swift
func geocodeAddressDictionary(_ addressDictionary: [AnyHashable : Any], completionHandler: @escaping @Sendable ([CLPlacemark]?, (any Error)?) -> Void)
```

```swift
func geocodeAddressDictionary(_ addressDictionary: [AnyHashable : Any]) async throws -> [CLPlacemark]
```

## Parameters

- `addressDictionary`: An Address Book dictionary containing information about the address to look up.
- `completionHandler`: A block object containing the code to execute at the end of the request. This code is called whether the request is successful or unsuccessful.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func geocodeAddressDictionary(_ addressDictionary: [AnyHashable : Any]) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. Your completion handler block will be executed on the main thread.

After initiating a forward-geocoding request, do not attempt to initiate another forward- or reverse-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [CLError.Code.network](../clerror-swift.struct/code/network.md) to your completion handler.

## See Also

### Geocoding an address

- [geocodeAddressString(\_:in:preferredLocale:completionHandler:)](geocodeaddressstring%28__in_preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified address string and locale information.
- [geocodeAddressString(\_:completionHandler:)](geocodeaddressstring%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string.
- [geocodeAddressString(\_:in:completionHandler:)](geocodeaddressstring%28__in_completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string and region information.
- [geocodePostalAddress(\_:completionHandler:)](geocodepostaladdress%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified Contacts framework information.
- [geocodePostalAddress(\_:preferredLocale:completionHandler:)](geocodepostaladdress%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified locale and Contacts framework information.

# geocodeAddressDictionary:completionHandler: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 11.0) · iPadOS 5.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · watchOS 2.0+ (deprecated in 4.0)

Submits a forward-geocoding request using the specified address dictionary.

> Use [geocodePostalAddress:preferredLocale:completionHandler:](geocodepostaladdress%28__preferredlocale_completionhandler_%29.md) or [geocodePostalAddress:completionHandler:](geocodepostaladdress%28__completionhandler_%29.md) instead.

## Declaration

```objectivec
- (void) geocodeAddressDictionary:(NSDictionary *) addressDictionary completionHandler:(CLGeocodeCompletionHandler) completionHandler;
```

## Parameters

- `addressDictionary`: An Address Book dictionary containing information about the address to look up.
- `completionHandler`: A block object containing the code to execute at the end of the request. This code is called whether the request is successful or unsuccessful.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func geocodeAddressDictionary(_ addressDictionary: [AnyHashable : Any]) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. Your completion handler block will be executed on the main thread.

After initiating a forward-geocoding request, do not attempt to initiate another forward- or reverse-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [kCLErrorNetwork](../clerror-swift.struct/code/network.md) to your completion handler.

## See Also

### Geocoding an address

- [geocodeAddressString:inRegion:preferredLocale:completionHandler:](geocodeaddressstring%28__in_preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified address string and locale information.
- [geocodeAddressString:completionHandler:](geocodeaddressstring%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string.
- [geocodeAddressString:inRegion:completionHandler:](geocodeaddressstring%28__in_completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string and region information.
- [geocodePostalAddress:completionHandler:](geocodepostaladdress%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified Contacts framework information.
- [geocodePostalAddress:preferredLocale:completionHandler:](geocodepostaladdress%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified locale and Contacts framework information.
