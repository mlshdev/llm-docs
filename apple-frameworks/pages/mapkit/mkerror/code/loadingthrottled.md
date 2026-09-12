> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkerror/code/loadingthrottled](https://developer.apple.com/documentation/mapkit/mkerror/code/loadingthrottled)

# MKError.Code.loadingThrottled (Swift)

**Framework:** MapKit  
**Kind:** Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The data didn’t load because data throttling is in effect.

## Declaration

```swift
case loadingThrottled
```

<a id="Discussion"></a>

## Discussion

This error can occur if an app makes frequent requests for data over a short period of time.

## See Also

### Constants

- [MKError.Code.decodingFailed](decodingfailed.md): GeoJSON decoding failed.
- [MKError.Code.directionsNotFound](directionsnotfound.md): The framework couldn’t find the specified directions.
- [MKError.Code.placemarkNotFound](placemarknotfound.md): The specified placemark could not be found.
- [MKError.Code.serverFailure](serverfailure.md): The map server was unable to return the desired information.
- [MKError.Code.unknown](unknown.md): An unknown error occurred.

# MKErrorLoadingThrottled (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration Case  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The data didn’t load because data throttling is in effect.

## Declaration

```objectivec
MKErrorLoadingThrottled
```

<a id="Discussion"></a>

## Discussion

This error can occur if an app makes frequent requests for data over a short period of time.

## See Also

### Constants

- [MKErrorDecodingFailed](decodingfailed.md): GeoJSON decoding failed.
- [MKErrorDirectionsNotFound](directionsnotfound.md): The framework couldn’t find the specified directions.
- [MKErrorPlacemarkNotFound](placemarknotfound.md): The specified placemark could not be found.
- [MKErrorServerFailure](serverfailure.md): The map server was unable to return the desired information.
- [MKErrorUnknown](unknown.md): An unknown error occurred.
