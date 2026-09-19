> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uipointeraccessory/position-swift.struct/init(offset:angle:)

# init(offset:angle:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

Creates a custom accessory position with the specified offset and angle.

## Declaration

```swift
init(offset: CGFloat = Position.defaultOffset, angle: CGFloat = 0)
```

## See Also

### Creating a custom accessory position

- [angle](angle.md): The angle of the accessory’s position, measured in radians clockwise from the top of the primary pointer.
- [offset](offset.md): The offset of the accessory from the primary pointer.
- [defaultOffset](defaultoffset.md): A constant that specifies the default offset of an accessory from the primary pointer shape.
