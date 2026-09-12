> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clgeocodecompletionhandler](https://developer.apple.com/documentation/corelocation/clgeocodecompletionhandler)

# CLGeocodeCompletionHandler (Swift)

**Framework:** Core Location  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block to be called when a geocoding request is complete.

## Declaration

```swift
typealias CLGeocodeCompletionHandler = ([CLPlacemark]?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

Upon completion of a geocoding request, a block of this form is called to give you a chance to process the results. The parameters of this block are as follows:

- **`placemark`**: Contains an array of [CLPlacemark](clplacemark.md) objects. For most geocoding requests, this array should contain only one entry. However, forward-geocoding requests may return multiple placemark objects in situations where the specified address could not be resolved to a single location.

If the request was canceled or there was an error in obtaining the placemark information, this parameter is `nil`.

- **`error`**: Contains `nil` or an error object indicating why the placemark data was not returned. For a list of possible error codes, see [CLError.Code](clerror-swift.struct/code.md).

## See Also

### Reverse geocoding a location

- [reverseGeocodeLocation(\_:preferredLocale:completionHandler:)](clgeocoder/reversegeocodelocation%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location and locale.
- [reverseGeocodeLocation(\_:completionHandler:)](clgeocoder/reversegeocodelocation%28__completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location.

# CLGeocodeCompletionHandler (Objective-C)

**Framework:** Core Location  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A block to be called when a geocoding request is complete.

## Declaration

```objectivec
typedef void (^)(NSArray<CLPlacemark *> *, NSError *) CLGeocodeCompletionHandler;
```

<a id="Discussion"></a>

## Discussion

Upon completion of a geocoding request, a block of this form is called to give you a chance to process the results. The parameters of this block are as follows:

- **`placemark`**: Contains an array of [CLPlacemark](clplacemark.md) objects. For most geocoding requests, this array should contain only one entry. However, forward-geocoding requests may return multiple placemark objects in situations where the specified address could not be resolved to a single location.

If the request was canceled or there was an error in obtaining the placemark information, this parameter is `nil`.

- **`error`**: Contains `nil` or an error object indicating why the placemark data was not returned. For a list of possible error codes, see [CLError](clerror-swift.struct/code.md).

## See Also

### Reverse geocoding a location

- [reverseGeocodeLocation:preferredLocale:completionHandler:](clgeocoder/reversegeocodelocation%28__preferredlocale_completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location and locale.
- [reverseGeocodeLocation:completionHandler:](clgeocoder/reversegeocodelocation%28__completionhandler_%29.md): Deprecated. Submits a reverse-geocoding request for the specified location.
