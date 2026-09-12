> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointeraccessory/position-swift.struct/offset](https://developer.apple.com/documentation/uikit/uipointeraccessory/position-swift.struct/offset)

# offset

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

The offset of the accessory from the primary pointer.

## Declaration

```swift
var offset: CGFloat
```

<a id="Discussion"></a>

## Discussion

This property only supports positive values.

## See Also

### Creating a custom accessory position

- [init(offset:angle:)](init%28offset_angle_%29.md): Creates a custom accessory position with the specified offset and angle.
- [angle](angle.md): The angle of the accessory’s position, measured in radians clockwise from the top of the primary pointer.
- [defaultOffset](defaultoffset.md): A constant that specifies the default offset of an accessory from the primary pointer shape.
