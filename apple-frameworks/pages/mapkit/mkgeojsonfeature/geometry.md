> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeojsonfeature/geometry](https://developer.apple.com/documentation/mapkit/mkgeojsonfeature/geometry)

# geometry (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The shape or shapes associated with the GeoJSON feature.

## Declaration

```swift
var geometry: [any MKShape & MKGeoJSONObject] { get }
```

## See Also

### Feature properties

- [identifier](identifier.md): An optional identifier the class returns as a string.
- [properties](properties.md): Optional serialized JSON data that corresponds to the properties key.

# geometry (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The shape or shapes associated with the GeoJSON feature.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof MKShape<MKGeoJSONObject> *> * geometry;
```

## See Also

### Feature properties

- [identifier](identifier.md): An optional identifier the class returns as a string.
- [properties](properties.md): Optional serialized JSON data that corresponds to the properties key.
