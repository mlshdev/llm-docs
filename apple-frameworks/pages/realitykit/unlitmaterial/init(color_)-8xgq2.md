> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unlitmaterial/init(color:)-8xgq2](https://developer.apple.com/documentation/realitykit/unlitmaterial/init(color:)-8xgq2)

# init(color:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates an unlit material with the given base color.

## Declaration

```swift
init(color: NSColor)
```

## Parameters

- `color`: The base color for the new material.

<a id="discussion"></a>

## Discussion

> **Note**

> The blending mode of `UnlitMaterial` materials should be configured explicitly with the [blending](blending-swift.property.md) property for transparent or translucent surfaces.  The `opaque` mode is used when unset.

## See Also

### Creating an unlit material

- [init()](init%28%29.md): Creates an unlit material.
- [init(applyPostProcessToneMap:)](init%28applypostprocesstonemap_%29.md): Creates an UnlitMaterial with the given tone mapping setting
- [init(color:applyPostProcessToneMap:)](init%28color_applypostprocesstonemap_%29-899er.md): Creates an UnlitMaterial with the given color and tone mapping setting
- [init(program:)](init%28program_%29.md)
- [init(texture:)](init%28texture_%29.md): Creates a new unlit material with the provided color texture.
