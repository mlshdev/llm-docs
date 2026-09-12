> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkuserlocation](https://developer.apple.com/documentation/mapkit/mkuserlocation)

# MKUserLocation (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An annotation that reflects the user’s location on the map.

## Declaration

```swift
class MKUserLocation
```

## Mentioned In

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you retrieve an existing `MKUserLocation` object from the [userLocation](mkmapview/userlocation.md) property of the map view that displays in your app.

## Topics

### Determining the user’s location

- [location](mkuserlocation/location.md): The location of the device.
- [isUpdating](mkuserlocation/isupdating.md): A Boolean value that indicates whether the map view is updating the user’s location.
- [heading](mkuserlocation/heading.md): The heading of the user’s location.

### Accessing the user’s location annotation

- [title](mkuserlocation/title.md): The title to display for the user’s location annotation.
- [subtitle](mkuserlocation/subtitle.md): The subtitle to display for the user’s location annotation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### User location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [MKUserLocationView](mkuserlocationview.md): A configurable annotation that shows the user’s location using the default MapKit style.

# MKUserLocation (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An annotation that reflects the user’s location on the map.

## Declaration

```objectivec
@interface MKUserLocation : NSObject
```

## Mentioned In

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md)

<a id="overview"></a>

## Overview

You don’t create instances of this class directly. Instead, you retrieve an existing `MKUserLocation` object from the [userLocation](mkmapview/userlocation.md) property of the map view that displays in your app.

## Topics

### Determining the user’s location

- [location](mkuserlocation/location.md): The location of the device.
- [updating](mkuserlocation/isupdating.md): A Boolean value that indicates whether the map view is updating the user’s location.
- [heading](mkuserlocation/heading.md): The heading of the user’s location.

### Accessing the user’s location annotation

- [title](mkuserlocation/title.md): The title to display for the user’s location annotation.
- [subtitle](mkuserlocation/subtitle.md): The subtitle to display for the user’s location annotation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MKAnnotation](mkannotation.md)

## See Also

### User location

- [Converting a user’s location to a descriptive placemark](converting-a-user-s-location-to-a-descriptive-placemark.md): Transform the user’s location that displays on a map into an informative textual description by reverse geocoding.
- [MKUserLocationView](mkuserlocationview.md): A configurable annotation that shows the user’s location using the default MapKit style.
