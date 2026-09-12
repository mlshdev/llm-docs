> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/sheencolor/init(tint:texture:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/sheencolor/init(tint:texture:))

# init(tint:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Creates a sheen color in macOS.

## Declaration

```swift
init(tint: NSColor = .white, texture: MaterialParameters.Texture? = nil)
```

## Parameters

- `tint`: The tint color.
- `texture`: The optional image texture.

<a id="discussion"></a>

## Discussion

This initializer creates an object from a color, an image texture, or from both. If you don’t provide a `tint` color, `tint` defaults to white.

If you specify `texture`, RealityKit calculates the final sheen color for the entity by UV-mapping `texture` onto the entity and then multiplying the color at any given pixel by `tint`. If `tint` is white, RealityKit uses the texture untinted.

If you don’t specify `texture`, then RealityKit uses `tint` as the entity’s sheen color.
