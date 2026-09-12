> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/pointerstyle/shape(_:eofill:size:)](https://developer.apple.com/documentation/swiftui/pointerstyle/shape(_:eofill:size:))

# shape(\_:eoFill:size:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** visionOS 2.0+

Initializes a pointer style with a given shape.

## Declaration

```swift
static func shape(_ shape: some Shape, eoFill: Bool = false, size: CGSize) -> PointerStyle
```

## Parameters

- `shape`: The pointer shape.
- `eoFill`: A Boolean that indicates whether the shape is interpreted with the even-odd winding number rule.
- `size`: The size of the pointer shape.

<a id="discussion"></a>

## Discussion

For guidance on using a custom pointer, refer to [Pointing devices](https://developer.apple.com/design/human-interface-guidelines/pointing-devices) in the Human Interface Guidelines.

You may apply this pointer style to a single view or a view hierarchy using the [pointerStyle(\_:)](../view/pointerstyle%28__%29.md) modifier.

## See Also

### Creating custom pointer styles

- [image(\_:hotSpot:)](image%28__hotspot_%29.md): Initializes a pointer style with a given image and hot spot.
