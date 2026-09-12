> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/normal-swift.property](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/normal-swift.property)

# normal

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The normal map for the entity.

## Declaration

```swift
var normal: PhysicallyBasedMaterial.Normal { get set }
```

## Mentioned In

- [Applying realistic material and lighting effects to entities](../applying-realistic-material-and-lighting-effects-to-entities.md)

<a id="discussion"></a>

## Discussion

*Normal mapping* is a real-time rendering technique that captures fine surface details for a model using a texture instead of increasing the number of polygons in the model. It works by storing *surface normals*, which are vectors perpendicular to the surface of the model, from a much higher resolution version of the same 3D object. A normal map stores each vector in the image by storing the vectors’ `X`, `Y`, and `Z` values as the `R`, `G`, and `B` components of the corresponding pixel in the UV-mapped image.

If you provide a normal map, RealityKit uses the normals stored in the image to do lighting calculations. This results in much more realistic highlights, shadows, and reflections without incurring the computational cost of using a much higher resolution 3D model. RealityKit uses tangent-space normal maps.

The following code loads a normal map texture and uses it to set this property:

```swift
if let normalResource = try? TextureResource.load(named:
"entity_normals") {
    let normalMap = MaterialParameters.Texture(normalResource)
    material.normal = PhysicallyBasedMaterial.Normal(texture:normalMap)
}
```

## See Also

### Setting the core properties

- [baseColor](basecolor-swift.property.md): The color of an entity unmodified by lighting.
- [roughness](roughness-swift.property.md): The amount the surface of the 3D object scatters reflected light.
- [metallic](metallic-swift.property.md): The reflectiveness of an entity.
- [ambientOcclusion](ambientocclusion-swift.property.md): The ambient occlusion values for a material.
- [specular](specular-swift.property.md): The specular highlight applied to the entity.
- [clearcoat](clearcoat-swift.property.md): The transparent highlights that simulate a clear, shiny coating on an entity.
- [clearcoatRoughness](clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.
