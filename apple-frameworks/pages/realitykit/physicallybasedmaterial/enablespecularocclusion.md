> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/enablespecularocclusion](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/enablespecularocclusion)

# enableSpecularOcclusion

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Enables specular occlusion computations.

## Declaration

```swift
var enableSpecularOcclusion: Bool { get set }
```

## Mentioned In

- [Rendering high-fidelity characters](../rendering-high-fidelity-characters.md)

<a id="discussion"></a>

## Discussion

When enabled, this property reduces specular highlights in areas that are occluded from ambient light, allowing for more realistic indirect lighting. This uses bent normal maps to modulate specular reflections based on ambient occlusion and roughness.

Specular occlusion is particularly useful for character rendering and complex surfaces where traditional ambient occlusion alone may not provide sufficient detail for realistic specular lighting.

> **Note**

> This feature requires bent normal maps. Enable bent normals using [bentNormal](bentnormal-swift.property.md).

```swift
material.enableSpecularOcclusion = boolean_value
```

## See Also

### Configuring occlusion shading

- [bentNormal](bentnormal-swift.property.md): The bent normal map for the entity.
- [PhysicallyBasedMaterial.BentNormal](bentnormal-swift.struct.md): The bent normal map for the entity.
