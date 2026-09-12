> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocoder/geocodeaddressstring(_:in:completionhandler:)](https://developer.apple.com/documentation/corelocation/clgeocoder/geocodeaddressstring(_:in:completionhandler:))

# geocodeAddressString(\_:in:completionHandler:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Submits a forward-geocoding request using the specified string and region information.

> Use MapKit

## Declaration

```swift
func geocodeAddressString(_ addressString: String, in region: CLRegion?, completionHandler: @escaping @Sendable ([CLPlacemark]?, (any Error)?) -> Void)
```

```swift
func geocodeAddressString(_ addressString: String, in region: CLRegion?) async throws -> [CLPlacemark]
```

## Parameters

- `addressString`: A string describing the location you want to look up. For example, you could specify the string “1 Infinite Loop, Cupertino, CA” to locate Apple headquarters.
- `region`: A geographical region to use as a hint when looking up the specified address. Specifying a region lets you prioritize the returned set of results to locations that are close to some specific geographical area, which is typically the user’s current location. If the application is authorized for location services and you specify `nil` for this parameter, the set of results is prioritized based on the user’s approximate location. Calling this method does not trigger a location services authorization request.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func geocodeAddressString(_ addressString: String, in region: CLRegion?) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. Your completion handler block will be executed on the main thread.

After initiating a forward-geocoding request, do not attempt to initiate another forward- or reverse-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [CLError.Code.network](../clerror-swift.struct/code/network.md) to your completion handler.

## See Also

### Geocoding an address

- [geocodeAddressString(\_:in:preferredLocale:completionHandler:)](geocodeaddressstring%28__in_preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified address string and locale information.
- [geocodeAddressString(\_:completionHandler:)](geocodeaddressstring%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string.
- [geocodePostalAddress(\_:completionHandler:)](geocodepostaladdress%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified Contacts framework information.
- [geocodePostalAddress(\_:preferredLocale:completionHandler:)](geocodepostaladdress%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified locale and Contacts framework information.
- [geocodeAddressDictionary(\_:completionHandler:)](geocodeaddressdictionary%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified address dictionary.

# geocodeAddressString:inRegion:completionHandler: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 26.0) · iPadOS 5.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · watchOS 2.0+ (deprecated in 26.0)

Submits a forward-geocoding request using the specified string and region information.

> Use MapKit

## Declaration

```objectivec
- (void) geocodeAddressString:(NSString *) addressString inRegion:(CLRegion *) region completionHandler:(CLGeocodeCompletionHandler) completionHandler;
```

## Parameters

- `addressString`: A string describing the location you want to look up. For example, you could specify the string “1 Infinite Loop, Cupertino, CA” to locate Apple headquarters.
- `region`: A geographical region to use as a hint when looking up the specified address. Specifying a region lets you prioritize the returned set of results to locations that are close to some specific geographical area, which is typically the user’s current location. If the application is authorized for location services and you specify `nil` for this parameter, the set of results is prioritized based on the user’s approximate location. Calling this method does not trigger a location services authorization request.
- `completionHandler`: The handler block to execute with the results. The geocoder executes this handler regardless of whether the request was successful or unsuccessful. For more information on the format of this block, see [CLGeocodeCompletionHandler](../clgeocodecompletionhandler.md).

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func geocodeAddressString(_ addressString: String, in region: CLRegion?) async throws -> [CLPlacemark]
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

This method submits the specified location data to the geocoding server asynchronously and returns. Your completion handler block will be executed on the main thread.

After initiating a forward-geocoding request, do not attempt to initiate another forward- or reverse-geocoding request. Geocoding requests are rate-limited for each app, so making too many requests in a short period of time may cause some of the requests to fail. When the maximum rate is exceeded, the geocoder passes an error object with the value [kCLErrorNetwork](../clerror-swift.struct/code/network.md) to your completion handler.

## See Also

### Geocoding an address

- [geocodeAddressString:inRegion:preferredLocale:completionHandler:](geocodeaddressstring%28__in_preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified address string and locale information.
- [geocodeAddressString:completionHandler:](geocodeaddressstring%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified string.
- [geocodePostalAddress:completionHandler:](geocodepostaladdress%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified Contacts framework information.
- [geocodePostalAddress:preferredLocale:completionHandler:](geocodepostaladdress%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a forward-geocoding requesting using the specified locale and Contacts framework information.
- [geocodeAddressDictionary:completionHandler:](geocodeaddressdictionary%28__completionhandler_%29.md): Deprecated. Submits a forward-geocoding request using the specified address dictionary.
