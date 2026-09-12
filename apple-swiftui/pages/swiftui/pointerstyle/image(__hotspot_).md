> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pointerstyle/image(_:hotspot:)](https://developer.apple.com/documentation/swiftui/pointerstyle/image(_:hotspot:))

# image(\_:hotSpot:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 15.0+

Initializes a pointer style with a given image and hot spot.

## Declaration

```swift
static func image(_ image: Image, hotSpot: UnitPoint) -> PointerStyle
```

## Parameters

- `image`: The pointer image.
- `hotSpot`: The point on the image that represents the location from which the pointer interaction occurs. For example, the hot spot of an arrow-shaped pointer is the tip of the arrow.

<a id="discussion"></a>

## Discussion

The hot spot is the part of the pointer that must be positioned over an onscreen element for clicking to have an effect.

For guidance on using a custom pointer, refer to [Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices) in the Human Interface Guidelines.

You may apply this pointer style to a single view or a view hierarchy using the [pointerStyle(\_:)](../view/pointerstyle%28__%29.md) modifier.

## See Also

### Creating custom pointer styles

- [shape(\_:eoFill:size:)](shape%28__eofill_size_%29.md): Initializes a pointer style with a given shape.
