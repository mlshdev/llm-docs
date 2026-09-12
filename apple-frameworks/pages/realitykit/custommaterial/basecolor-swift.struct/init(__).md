> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/basecolor-swift.struct/init(_:)](https://developer.apple.com/documentation/realitykit/custommaterial/basecolor-swift.struct/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates a custom base color object from an existing physically based material’s base color object.

## Declaration

```swift
init(_ value: PhysicallyBasedMaterial.BaseColor)
```

## Parameters

- `value`: The base color object from a physically based material.

<a id="discussion"></a>

## Discussion

Use this initializer to create a [CustomMaterial.BaseColor](../basecolor-swift.struct.md) that contains the same tint and texture values as an existing [PhysicallyBasedMaterial.BaseColor](../../physicallybasedmaterial/basecolor-swift.struct.md) object.

Both `tint` and `texture` from the [PhysicallyBasedMaterial.BaseColor](../../physicallybasedmaterial/basecolor-swift.struct.md) object are available in your surface shader, but RealityKit doesn’t automatically use those values to render the entity. Your surface shader needs to calculate the final base color value for each pixel and assign it by calling `params.surface().set_base_color()`.

For more information on creating custom materials and writing shader functions, see [Modifying RealityKit rendering using custom materials](../../modifying-realitykit-rendering-using-custom-materials.md).

## See Also

### Creating a base color object

- [init(tint:texture:)](init%28tint_texture_%29-5c2fr.md): Creates a base color object from a color or texture on macOS.
- [init(tint:texture:)](init%28tint_texture_%29-71h0i.md): Creates a base color object from a color or texture on macOS.
