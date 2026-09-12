> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeojsonfeature/properties](https://developer.apple.com/documentation/mapkit/mkgeojsonfeature/properties)

# properties (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Optional serialized JSON data that corresponds to the properties key.

## Declaration

```swift
var properties: Data? { get }
```

<a id="Discussion"></a>

## Discussion

MapKit exposes these optional properties but treats them as opaque.

## See Also

### Feature properties

- [geometry](geometry.md): The shape or shapes associated with the GeoJSON feature.
- [identifier](identifier.md): An optional identifier the class returns as a string.

# properties (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Optional serialized JSON data that corresponds to the properties key.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSData * properties;
```

<a id="Discussion"></a>

## Discussion

MapKit exposes these optional properties but treats them as opaque.

## See Also

### Feature properties

- [geometry](geometry.md): The shape or shapes associated with the GeoJSON feature.
- [identifier](identifier.md): An optional identifier the class returns as a string.
