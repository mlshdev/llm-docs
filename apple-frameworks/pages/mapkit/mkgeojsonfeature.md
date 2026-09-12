> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeojsonfeature](https://developer.apple.com/documentation/mapkit/mkgeojsonfeature)

# MKGeoJSONFeature (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The decoded representation of a GeoJSON feature.

## Declaration

```swift
class MKGeoJSONFeature
```

<a id="overview"></a>

## Overview

A feature is an object with associated geometry and optional properties in JSON that you define. MapKit exposes these optional properties, but treats them as opaque. [MKGeoJSONFeature](mkgeojsonfeature.md) is one of the classes that the GeoJSON decoder ([MKGeoJSONDecoder](mkgeojsondecoder.md)) can return.

See the GeoJSON standards specification [RFC 7946](https://tools.ietf.org/html/rfc7946#section-3.2) for more information about `Feature` objects.

## Topics

### Feature properties

- [geometry](mkgeojsonfeature/geometry.md): The shape or shapes associated with the GeoJSON feature.
- [identifier](mkgeojsonfeature/identifier.md): An optional identifier the class returns as a string.
- [properties](mkgeojsonfeature/properties.md): Optional serialized JSON data that corresponds to the properties key.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKGeoJSONObject](mkgeojsonobject.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Geographical features

- [Displaying an Indoor Map](displaying-an-indoor-map.md): Use the Indoor Mapping Data Format (IMDF) to show an indoor map with custom overlays and points of interest.
- [MKGeoJSONDecoder](mkgeojsondecoder.md): An object that decodes GeoJSON objects into MapKit types.
- [MKGeoJSONObject](mkgeojsonobject.md): Objects that the GeoJSON decoder can return.

# MKGeoJSONFeature (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The decoded representation of a GeoJSON feature.

## Declaration

```objectivec
@interface MKGeoJSONFeature : NSObject
```

<a id="overview"></a>

## Overview

A feature is an object with associated geometry and optional properties in JSON that you define. MapKit exposes these optional properties, but treats them as opaque. [MKGeoJSONFeature](mkgeojsonfeature.md) is one of the classes that the GeoJSON decoder ([MKGeoJSONDecoder](mkgeojsondecoder.md)) can return.

See the GeoJSON standards specification [RFC 7946](https://tools.ietf.org/html/rfc7946#section-3.2) for more information about `Feature` objects.

## Topics

### Feature properties

- [geometry](mkgeojsonfeature/geometry.md): The shape or shapes associated with the GeoJSON feature.
- [identifier](mkgeojsonfeature/identifier.md): An optional identifier the class returns as a string.
- [properties](mkgeojsonfeature/properties.md): Optional serialized JSON data that corresponds to the properties key.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MKGeoJSONObject](mkgeojsonobject.md)

## See Also

### Geographical features

- [Displaying an Indoor Map](displaying-an-indoor-map.md): Use the Indoor Mapping Data Format (IMDF) to show an indoor map with custom overlays and points of interest.
- [MKGeoJSONDecoder](mkgeojsondecoder.md): An object that decodes GeoJSON objects into MapKit types.
- [MKGeoJSONObject](mkgeojsonobject.md): Objects that the GeoJSON decoder can return.
