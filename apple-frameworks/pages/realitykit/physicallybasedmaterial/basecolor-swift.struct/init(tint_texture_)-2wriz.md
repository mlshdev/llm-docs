> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/basecolor-swift.struct/init(tint:texture:)-2wriz](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/basecolor-swift.struct/init(tint:texture:)-2wriz)

# init(tint:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 26.0+ · visionOS

Creates a base color object from a color or texture on macOS.

## Declaration

```swift
init(tint: UIColor = .white, texture: MaterialParameters.Texture? = nil)
```

## Parameters

- `tint`: The tint color. Defaults to white.
- `texture`: An optional image texture.

<a id="discussion"></a>

## Discussion

This initializer creates a new instance from a color or image texture, or from both. If you don’t provide a `tint` color, `tint` defaults to white.

If you specify `texture`, RealityKit calculates the final base color for the entity by UV-mapping `texture` onto the entity and then multiplying the color at any given pixel by `tint`. If `tint` is white, RealityKit renders the textured untinted.

If you don’t specify a texture, RealityKit uses `tint` as the entity’s base color.

## See Also

### Creating a base color object

- [init(tint:texture:)](init%28tint_texture_%29-5jeqr.md): Creates a base color object from a color or texture on macOS.
- [init(\_:)](init%28__%29.md): Creates a base color object from a custom material’s base color property.
