> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeojsonfeature/identifier](https://developer.apple.com/documentation/mapkit/mkgeojsonfeature/identifier)

# identifier (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An optional identifier the class returns as a string.

## Declaration

```swift
var identifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

Note that the GeoJSON specification states that the identifier can be a number or a string. However, this [identifier](identifier.md) returns as a string.

## See Also

### Feature properties

- [geometry](geometry.md): The shape or shapes associated with the GeoJSON feature.
- [properties](properties.md): Optional serialized JSON data that corresponds to the properties key.

# identifier (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An optional identifier the class returns as a string.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Note that the GeoJSON specification states that the identifier can be a number or a string. However, this [identifier](identifier.md) returns as a string.

## See Also

### Feature properties

- [geometry](geometry.md): The shape or shapes associated with the GeoJSON feature.
- [properties](properties.md): Optional serialized JSON data that corresponds to the properties key.
