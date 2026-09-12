> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessory/locationname](https://developer.apple.com/documentation/arkit/accessory/locationname)

# Accessory.LocationName

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Location names to fetch transforms defined on accessories. Some pre-defined location names that are common to accessories conforming to the OpenXR spec are provided as a convenience. These are not required to exist on all accessories.

## Declaration

```swift
struct LocationName
```

## Topics

### Initializers

- [init(\_:)](locationname/init%28__%29.md): Init without label provided as a convenience.
- [init(rawValue:)](locationname/init%28rawvalue_%29.md): Init with label (required by RawRepresentable).

### Instance Properties

- [description](locationname/description.md): Textual representation of this location name.
- [rawValue](locationname/rawvalue.md): The location name string.

### Type Properties

- [aim](locationname/aim.md): Aim point for spatial gamepads and styluses.
- [grip](locationname/grip.md): Grip for spatial gamepads.
- [gripSurface](locationname/gripsurface.md): Grip surface for spatial gamepads.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
