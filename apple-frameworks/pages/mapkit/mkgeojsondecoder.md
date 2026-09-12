> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeojsondecoder](https://developer.apple.com/documentation/mapkit/mkgeojsondecoder)

# MKGeoJSONDecoder (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that decodes GeoJSON objects into MapKit types.

## Declaration

```swift
class MKGeoJSONDecoder
```

<a id="overview"></a>

## Overview

The GeoJSON decoder returns objects that conform to the [MKGeoJSONObject](mkgeojsonobject.md) protocol.

## Topics

### Decoding GeoJSON objects

- [decode(\_:)](mkgeojsondecoder/decode%28__%29.md): Decodes the provided data into native MapKit types that a map can display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Geographical features

- [Displaying an Indoor Map](displaying-an-indoor-map.md): Use the Indoor Mapping Data Format (IMDF) to show an indoor map with custom overlays and points of interest.
- [MKGeoJSONFeature](mkgeojsonfeature.md): The decoded representation of a GeoJSON feature.
- [MKGeoJSONObject](mkgeojsonobject.md): Objects that the GeoJSON decoder can return.

# MKGeoJSONDecoder (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An object that decodes GeoJSON objects into MapKit types.

## Declaration

```objectivec
@interface MKGeoJSONDecoder : NSObject
```

<a id="overview"></a>

## Overview

The GeoJSON decoder returns objects that conform to the [MKGeoJSONObject](mkgeojsonobject.md) protocol.

## Topics

### Decoding GeoJSON objects

- [geoJSONObjectsWithData:error:](mkgeojsondecoder/decode%28__%29.md): Decodes the provided data into native MapKit types that a map can display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Geographical features

- [Displaying an Indoor Map](displaying-an-indoor-map.md): Use the Indoor Mapping Data Format (IMDF) to show an indoor map with custom overlays and points of interest.
- [MKGeoJSONFeature](mkgeojsonfeature.md): The decoded representation of a GeoJSON feature.
- [MKGeoJSONObject](mkgeojsonobject.md): Objects that the GeoJSON decoder can return.
