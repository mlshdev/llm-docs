> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkerror/code](https://developer.apple.com/documentation/mapkit/mkerror/code)

# MKError.Code (Swift)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Error constants for the MapKit framework.

## Declaration

```swift
enum Code
```

## Topics

### Constants

- [MKError.Code.decodingFailed](code/decodingfailed.md): GeoJSON decoding failed.
- [MKError.Code.directionsNotFound](code/directionsnotfound.md): The framework couldn’t find the specified directions.
- [MKError.Code.loadingThrottled](code/loadingthrottled.md): The data didn’t load because data throttling is in effect.
- [MKError.Code.placemarkNotFound](code/placemarknotfound.md): The specified placemark could not be found.
- [MKError.Code.serverFailure](code/serverfailure.md): The map server was unable to return the desired information.
- [MKError.Code.unknown](code/unknown.md): An unknown error occurred.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [MKErrorDomain](../mkerrordomain.md): The error domain for MapKit.
- [MKError](../mkerror.md): Error constants for the MapKit framework.

# MKErrorCode (Objective-C)

**Framework:** MapKit  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Error constants for the MapKit framework.

## Declaration

```objectivec
enum MKErrorCode : NSUInteger;
```

## Topics

### Constants

- [MKErrorDecodingFailed](code/decodingfailed.md): GeoJSON decoding failed.
- [MKErrorDirectionsNotFound](code/directionsnotfound.md): The framework couldn’t find the specified directions.
- [MKErrorLoadingThrottled](code/loadingthrottled.md): The data didn’t load because data throttling is in effect.
- [MKErrorPlacemarkNotFound](code/placemarknotfound.md): The specified placemark could not be found.
- [MKErrorServerFailure](code/serverfailure.md): The map server was unable to return the desired information.
- [MKErrorUnknown](code/unknown.md): An unknown error occurred.

## See Also

### Errors

- [MKErrorDomain](../mkerrordomain.md): The error domain for MapKit.
