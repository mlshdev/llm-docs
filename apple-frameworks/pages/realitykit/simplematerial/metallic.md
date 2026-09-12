> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/simplematerial/metallic](https://developer.apple.com/documentation/realitykit/simplematerial/metallic)

# metallic

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A value that you set to control whether the material has a metallic look.

## Declaration

```swift
var metallic: MaterialScalarParameter { get set }
```

<a id="discussion"></a>

## Discussion

This property defines whether a material is dielectric (`0.0`) or a metallic (`1.0`). Although this property can be set to any value between `0` and `1`, to create a realistic material, set it to either `0` or `1`.).

- **Dielectric materials**: These are materials that simulate real-world materials that are poor conductors. In these materials, light travels into the surface of the material and the color is mostly controlled by the color of the sub-surface. Typical examples of dielectric materaisl include organic materials, plastics, and industrial minerals such as sand, limestone,  marble, clay and salt.
- **Metallic**: A metallic (or *conductive*) material reflects light differently than dielectric ones. The overall color is caused by an immediate re-emission of the light from the entity’s surface. Typical examples of metallic materials include aluminum, chassis metal, chromium, copper, gold, silver, and titanium

## See Also

### Characterizing a material

- [color](color.md): The material’s color.
- [baseColor](basecolor-swift.property.md): Deprecated. The base color of the material.
- [SimpleMaterial.BaseColor](basecolor-swift.typealias.md): The type used to represent base color.
- [tintColor](tintcolor-6v03h.md): Deprecated. A tint color applied to the base color in macOS.
- [SimpleMaterial.Texture](texture.md): The type used to represent textures.
- [roughness](roughness.md): The roughness of the material.
