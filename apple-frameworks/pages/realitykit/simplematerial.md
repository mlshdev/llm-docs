> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/simplematerial](https://developer.apple.com/documentation/realitykit/simplematerial)

# SimpleMaterial

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A basic material that responds to lights in the scene.

## Declaration

```swift
struct SimpleMaterial
```

<a id="overview"></a>

## Overview

`SimpleMaterial` responds to both real and virtual lighting to enhance realism.

Add a `SimpleMaterial` to a model by setting it as one of the [materials](modelcomponent/materials.md) in a [ModelComponent](modelcomponent.md).

```swift
let simpleMaterial = SimpleMaterial(
    color: .red, isMetallic: false
)
let model = ModelComponent(
    mesh: .generateBox(size: 1),
    materials: [simpleMaterial]
)
redBoxEntity.components.set(model)
```

For example, a red `SimpleMaterial` that is not metallic, and one that is metallic:

| Not metallic | Metallic |
| --- | --- |
| ![A screenshot of a red cube in a living room scene. The cube is rounded on the edges and appears to be made of a reflective plastic material.](https://developer.apple.com/images/com.apple.RealityKit/simplematerial-not-metallic.jpg) | ![A screenshot of a red cube in a living room scene. The cube is rounded on the edges and appears to be made of a reflective metal material.](https://developer.apple.com/images/com.apple.RealityKit/simplematerial-metallic.jpg) |

## Topics

### Creating a simple material

- [init()](simplematerial/init%28%29.md): Creates a simple material.
- [init(color:roughness:isMetallic:)](simplematerial/init%28color_roughness_ismetallic_%29-1ebae.md): Creates a simple material with specific characteristics in macOS.

### Characterizing a material

- [color](simplematerial/color.md): The material’s color.
- [baseColor](simplematerial/basecolor-swift.property.md): Deprecated. The base color of the material.
- [SimpleMaterial.BaseColor](simplematerial/basecolor-swift.typealias.md): The type used to represent base color.
- [tintColor](simplematerial/tintcolor-6v03h.md): Deprecated. A tint color applied to the base color in macOS.
- [SimpleMaterial.Texture](simplematerial/texture.md): The type used to represent textures.
- [metallic](simplematerial/metallic.md): A value that you set to control whether the material has a metallic look.
- [roughness](simplematerial/roughness.md): The roughness of the material.

### Initializers

- [init(color:roughness:isMetallic:)](simplematerial/init%28color_roughness_ismetallic_%29.md): Creates a simple material with specific characteristics in macOS.

### Instance Properties

- [faceCulling](simplematerial/faceculling-swift.property.md): A process in which the system specifies polygons to remove before rendering a mesh using this material.
- [readsDepth](simplematerial/readsdepth.md): A boolean value that determines whether this material performs the depth test by reading RealityKit’s depth buffer.
- [tintColor](simplematerial/tintcolor-74a0x.md): Deprecated. A tint color applied to the base color in macOS.
- [triangleFillMode](simplematerial/trianglefillmode-swift.property.md): The object that controls how RealityKit draws triangles.
- [writesDepth](simplematerial/writesdepth.md): A boolean value that determines whether this material writes its depth into RealityKit’s depth buffer.

### Type Aliases

- [SimpleMaterial.FaceCulling](simplematerial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [SimpleMaterial.TriangleFillMode](simplematerial/trianglefillmode-swift.typealias.md)

## Relationships

### Conforms To

- [Material](material.md)

## See Also

### Simple materials

- [Creating 3D entities with RealityKit](../visionos/creating-3d-entities-with-realitykit.md): Display a horizontal row of three-dimensional shapes in your visionOS app, using predefined mesh and white material.
- [SimpleMaterial.BaseColor](simplematerial/basecolor-swift.typealias.md): The type used to represent base color.
- [SimpleMaterial.Texture](simplematerial/texture.md): The type used to represent textures.
- [SimpleMaterial.FaceCulling](simplematerial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [SimpleMaterial.TriangleFillMode](simplematerial/trianglefillmode-swift.typealias.md)
