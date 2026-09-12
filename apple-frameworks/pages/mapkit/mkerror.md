> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkerror](https://developer.apple.com/documentation/mapkit/mkerror)

# MKError

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Error constants for the MapKit framework.

## Declaration

```swift
struct MKError
```

## Topics

### Error codes

- [decodingFailed](mkerror/decodingfailed.md): GeoJSON decoding failed.
- [directionsNotFound](mkerror/directionsnotfound.md): Directions to the specified location aren’t available.
- [loadingThrottled](mkerror/loadingthrottled.md): The data didn’t load because data throttling is in effect.
- [placemarkNotFound](mkerror/placemarknotfound.md): The framework couldn’t find the specified placemark.
- [serverFailure](mkerror/serverfailure.md): The map server was unable to return the desired information.
- [unknown](mkerror/unknown.md): An unknown error occurred.
- [MKError.Code](mkerror/code.md): Error constants for the MapKit framework.

### Accessing error properties

- [localizedDescription](https://developer.apple.com/documentation/swift/error/localizeddescription): Retrieve the localized description for this error.
- [errorDomain](mkerror/errordomain.md): The error domain.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [MKErrorDomain](mkerrordomain.md): The error domain for MapKit.
- [MKError.Code](mkerror/code.md): Error constants for the MapKit framework.
