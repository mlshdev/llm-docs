> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkerror/serverfailure](https://developer.apple.com/documentation/mapkit/mkerror/serverfailure)

# serverFailure

**Framework:** MapKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

The map server was unable to return the desired information.

## Declaration

```swift
static var serverFailure: MKError.Code { get }
```

## See Also

### Error codes

- [decodingFailed](decodingfailed.md): GeoJSON decoding failed.
- [directionsNotFound](directionsnotfound.md): Directions to the specified location aren’t available.
- [loadingThrottled](loadingthrottled.md): The data didn’t load because data throttling is in effect.
- [placemarkNotFound](placemarknotfound.md): The framework couldn’t find the specified placemark.
- [unknown](unknown.md): An unknown error occurred.
- [MKError.Code](code.md): Error constants for the MapKit framework.
