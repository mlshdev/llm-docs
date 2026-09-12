> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/unlitmaterial](https://developer.apple.com/documentation/realitykit/unlitmaterial)

# UnlitMaterial

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A material that doesn’t respond to lights in the scene.

## Declaration

```swift
struct UnlitMaterial
```

## Mentioned In

- [Modifying RealityKit rendering using custom materials](modifying-realitykit-rendering-using-custom-materials.md)

<a id="overview"></a>

## Overview

`UnlitMaterial` materials do not respond to virtual or real lighting.

Add an `UnlitMaterial` to a model by setting it as one of the [materials](modelcomponent/materials.md) in a [ModelComponent](modelcomponent.md).

```swift
let unlitMaterial = UnlitMaterial(color: .red)
let model = ModelComponent(
    mesh: .generateBox(size: 1),
    materials: [unlitMaterial]
)
redBoxEntity.components.set(model)
```

For example, a [SimpleMaterial](simplematerial.md) on the left, and an `UnlitMaterial` on the right:

| [SimpleMaterial](simplematerial.md) | `UnlitMaterial` |
| --- | --- |
| ![A screenshot of a red cube in a living room scene. The cube is rounded on the edges, and appears to be made of a reflective plastic material.](https://developer.apple.com/images/com.apple.RealityKit/simplematerial-not-metallic.jpg) | ![A screenshot of a red cube in a living room scene. The shape is of a cube observed from an angle above and to the right of it, and has no discernible edges as it has no response to lighting.](https://developer.apple.com/images/com.apple.RealityKit/unlitmaterial-red.jpg) |

> **Note**

> The blending mode of `UnlitMaterial` materials should be configured explicitly with the [blending](unlitmaterial/blending-swift.property.md) property for transparent or translucent surfaces.  The `opaque` mode is used when unset.

## Topics

### Creating an unlit material

- [init()](unlitmaterial/init%28%29.md): Creates an unlit material.
- [init(color:)](unlitmaterial/init%28color_%29-8xgq2.md): Creates an unlit material with the given base color.
- [init(applyPostProcessToneMap:)](unlitmaterial/init%28applypostprocesstonemap_%29.md): Creates an UnlitMaterial with the given tone mapping setting
- [init(color:applyPostProcessToneMap:)](unlitmaterial/init%28color_applypostprocesstonemap_%29-899er.md): Creates an UnlitMaterial with the given color and tone mapping setting
- [init(program:)](unlitmaterial/init%28program_%29.md)
- [init(texture:)](unlitmaterial/init%28texture_%29.md): Creates a new unlit material with the provided color texture.

### Configuring base color

- [color](unlitmaterial/color.md): The material’s base color.
- [baseColor](unlitmaterial/basecolor-swift.property.md): Deprecated. The base color of the material.

### Tinting an unlit material

- [tintColor](unlitmaterial/tintcolor-9v1sw.md): Deprecated. A tint color applied to the base color.

### Controlling opacity

- [opacityThreshold](unlitmaterial/opacitythreshold.md): A threshold below which RealityKit ignores opacity.
- [blending](unlitmaterial/blending-swift.property.md): The transparency options for the material.

### Classes

- [UnlitMaterial.Program](unlitmaterial/program-swift.class.md): An object that represents the backing shader compilation required for unlit materials.

### Initializers

- [init(color:)](unlitmaterial/init%28color_%29.md): Creates an unlit material with the given base color.
- [init(color:applyPostProcessToneMap:)](unlitmaterial/init%28color_applypostprocesstonemap_%29.md): Creates an UnlitMaterial with the given color and tone mapping setting

### Instance Properties

- [faceCulling](unlitmaterial/faceculling-swift.property.md)
- [program](unlitmaterial/program-swift.property.md)
- [readsDepth](unlitmaterial/readsdepth.md): A boolean value that determines whether this material performs the depth test by reading RealityKit’s depth buffer.
- [secondaryTextureCoordinateTransform](unlitmaterial/secondarytexturecoordinatetransform.md): A two-dimensional transformation to apply to the entity’s secondary texture coordinates.
- [textureCoordinateTransform](unlitmaterial/texturecoordinatetransform-swift.property.md): A two-dimensional transformation to apply to the entity’s primary texture coordinates.
- [tintColor](unlitmaterial/tintcolor-k1do.md): Deprecated. A tint color applied to the base color.
- [triangleFillMode](unlitmaterial/trianglefillmode-swift.property.md): The object that controls how RealityKit draws triangles.
- [writesDepth](unlitmaterial/writesdepth.md): A boolean value that determines whether this material writes its depth into RealityKit’s depth buffer.

### Type Aliases

- [UnlitMaterial.BaseColor](unlitmaterial/basecolor-swift.typealias.md): The type used to represent base color.
- [UnlitMaterial.Blending](unlitmaterial/blending-swift.typealias.md): The type used to represent opacity information.
- [UnlitMaterial.FaceCulling](unlitmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [UnlitMaterial.Texture](unlitmaterial/texture.md): The type used to represent textures.
- [UnlitMaterial.TextureCoordinateTransform](unlitmaterial/texturecoordinatetransform-swift.typealias.md): An alias for the texture coordinate transform that’s appropriate for this material class.
- [UnlitMaterial.TriangleFillMode](unlitmaterial/trianglefillmode-swift.typealias.md)

## Relationships

### Conforms To

- [Material](material.md)

## See Also

### Unlit materials

- [UnlitMaterial.BaseColor](unlitmaterial/basecolor-swift.typealias.md): The type used to represent base color.
- [UnlitMaterial.Blending](unlitmaterial/blending-swift.typealias.md): The type used to represent opacity information.
- [UnlitMaterial.Texture](unlitmaterial/texture.md): The type used to represent textures.
- [UnlitMaterial.FaceCulling](unlitmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [UnlitMaterial.TextureCoordinateTransform](unlitmaterial/texturecoordinatetransform-swift.typealias.md): An alias for the texture coordinate transform that’s appropriate for this material class.
- [UnlitMaterial.TriangleFillMode](unlitmaterial/trianglefillmode-swift.typealias.md)
