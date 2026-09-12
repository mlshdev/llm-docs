> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unlitmaterial/color](https://developer.apple.com/documentation/realitykit/unlitmaterial/color)

# color

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The material’s base color.

## Declaration

```swift
var color: UnlitMaterial.BaseColor { get set }
```

<a id="discussion"></a>

## Discussion

> **Note**

> The blending mode of `UnlitMaterial` materials should be configured explicitly with the [blending](blending-swift.property.md) property for transparent or translucent surfaces.  The `opaque` mode is used when unset.

## See Also

### Configuring base color

- [baseColor](basecolor-swift.property.md): Deprecated. The base color of the material.
