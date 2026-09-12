> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/basecolor-swift.struct/init(tint:texture:)](https://developer.apple.com/documentation/realitykit/custommaterial/basecolor-swift.struct/init(tint:texture:))

# init(tint:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a base color object from a color or texture on macOS.

## Declaration

```swift
init(tint: NSColor = .white, texture: CustomMaterial.Texture? = nil)
```

## Parameters

- `tint`: The tint color. Defaults to white.
- `texture`: An optional image texture.

<a id="discussion"></a>

## Discussion

This initializer creates a new object from a color or image texture, or from both. If you don’t provide a `tint` color, `tint` defaults to white.

Both tint and texture are available to use in your surface shader function, but RealityKit doesn’t automatically use them to render the entity. Your surface shader calculates the final base color value for each pixel and assigns it by calling `params.surface().set_base_color()`.

For more information on creating custom materials and writing shader functions, see [Modifying RealityKit rendering using custom materials](../../modifying-realitykit-rendering-using-custom-materials.md).
