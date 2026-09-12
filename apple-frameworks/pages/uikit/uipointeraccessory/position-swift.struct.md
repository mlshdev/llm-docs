> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointeraccessory/position-swift.struct](https://developer.apple.com/documentation/uikit/uipointeraccessory/position-swift.struct)

# UIPointerAccessory.Position

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

A structure that specifies the position of the accessory relative to the primary pointer.

## Declaration

```swift
struct Position
```

## Topics

### Getting an accessory position

- [top](position-swift.struct/top.md): An accessory position at the top of the primary pointer.
- [topRight](position-swift.struct/topright.md): An accessory position at the top-right of the primary pointer.
- [right](position-swift.struct/right.md): An accessory position at the right of the primary pointer.
- [bottomRight](position-swift.struct/bottomright.md): An accessory position at the bottom-right of the primary pointer.
- [bottom](position-swift.struct/bottom.md): An accessory position at the bottom of the primary pointer.
- [bottomLeft](position-swift.struct/bottomleft.md): An accessory position at the bottom-left of the primary pointer.
- [left](position-swift.struct/left.md): An accessory position at the left of the primary pointer.
- [topLeft](position-swift.struct/topleft.md): An accessory position at the top-left of the primary pointer.

### Creating a custom accessory position

- [init(offset:angle:)](position-swift.struct/init%28offset_angle_%29.md): Creates a custom accessory position with the specified offset and angle.
- [angle](position-swift.struct/angle.md): The angle of the accessory’s position, measured in radians clockwise from the top of the primary pointer.
- [offset](position-swift.struct/offset.md): The offset of the accessory from the primary pointer.
- [defaultOffset](position-swift.struct/defaultoffset.md): A constant that specifies the default offset of an accessory from the primary pointer shape.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the position

- [position](position-swift.property.md): The position of the accessory relative to the primary pointer.
