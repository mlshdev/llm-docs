> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkerror/loadingthrottled](https://developer.apple.com/documentation/mapkit/mkerror/loadingthrottled)

# loadingThrottled

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The data didn’t load because data throttling is in effect.

## Declaration

```swift
static var loadingThrottled: MKError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error can occur if an app makes frequent requests for data over a short period of time.

## See Also

### Error codes

- [decodingFailed](decodingfailed.md): GeoJSON decoding failed.
- [directionsNotFound](directionsnotfound.md): Directions to the specified location aren’t available.
- [placemarkNotFound](placemarknotfound.md): The framework couldn’t find the specified placemark.
- [serverFailure](serverfailure.md): The map server was unable to return the desired information.
- [unknown](unknown.md): An unknown error occurred.
- [MKError.Code](code.md): Error constants for the MapKit framework.
