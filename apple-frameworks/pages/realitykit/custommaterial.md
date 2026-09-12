> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial](https://developer.apple.com/documentation/realitykit/custommaterial)

# CustomMaterial

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

A material that works with custom Metal shader functions.

## Declaration

```swift
struct CustomMaterial
```

## Mentioned In

- [Modifying RealityKit rendering using custom materials](modifying-realitykit-rendering-using-custom-materials.md)

<a id="overview"></a>

## Overview

Custom, or programmable, materials allow you to leverage RealityKit’s existing shader pipeline to render physically based or unlit materials that support custom Metal shader functions. These functions modify how RealityKit renders an entity. Custom materials support two different types of custom Metal shader functions: geometry modifiers and surface shaders.

Use a \_surface shader \_to calculate or specify all the material attributes that RealityKit uses to render your entity, such as [baseColor](custommaterial/basecolor-swift.property.md), [normal](custommaterial/normal-swift.property.md), and [roughness](custommaterial/roughness-swift.property.md). A *geometry modifier* can offset the position of an entity’s vertices to change the size and shape of an entity. It can also change other per-vertex data, such as vertex color and UV texture coordinates, which define how RealityKit maps textures on to the model.

> **Important**

> For the Metal API documentation for custom material shader functions, see [the Metal RealityKit APIs PDF](https://developer.apple.com/metal/Metal-RealityKit-APIs.pdf).

For more information on creating custom materials and writing shader functions, see [Modifying RealityKit rendering using custom materials](modifying-realitykit-rendering-using-custom-materials.md).

## Topics

### Creating custom materials

- [init(from:geometryModifier:)](custommaterial/init%28from_geometrymodifier_%29.md): Creates a custom material from an existing material and a geometry modifier.
- [init(from:surfaceShader:geometryModifier:)](custommaterial/init%28from_surfaceshader_geometrymodifier_%29.md): Creates a custom material from an existing material, surface shader, and geometry modifier.
- [init(surfaceShader:geometryModifier:lightingModel:)](custommaterial/init%28surfaceshader_geometrymodifier_lightingmodel_%29.md): Creates a custom material from a lighting model, surface shader, and geometry modifier.
- [init(program:)](custommaterial/init%28program_%29.md)

### Setting the core properties

- [baseColor](custommaterial/basecolor-swift.property.md): The color of an entity unmodified by lighting.
- [roughness](custommaterial/roughness-swift.property.md): The amount the surface of the 3D object scatters reflected light.
- [metallic](custommaterial/metallic-swift.property.md): The reflectiveness of an entity.
- [normal](custommaterial/normal-swift.property.md): A texture map that stores fine surface details for the entity.
- [emissiveColor](custommaterial/emissivecolor-swift.property.md): The color of light this material emits.
- [ambientOcclusion](custommaterial/ambientocclusion-swift.property.md): The ambient light exposure for a material.
- [specular](custommaterial/specular-swift.property.md): The bright highlights to apply to the entity.
- [clearcoat](custommaterial/clearcoat-swift.property.md): The transparent highlights that simulate a clear, shiny coating on an entity.
- [clearcoatRoughness](custommaterial/clearcoatroughness-swift.property.md): The degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [clearcoatNormal](custommaterial/clearcoatnormal-swift.property.md): Waviness and imperfections for the top clearcoat.

### Controlling opacity

- [opacityThreshold](custommaterial/opacitythreshold.md): The minimum opacity value to treat as fully opaque.
- [blending](custommaterial/blending-swift.property.md): The transparency of an entity.

### Setting shader properties

- [program](custommaterial/program-swift.property.md)
- [custom](custommaterial/custom-swift.property.md): User-defined properties for the material’s shader functions.
- [lightingModel](custommaterial/lightingmodel-swift.property.md): The lighting model that the material uses.
- [withMutableUniforms(ofType:\_:)](custommaterial/withmutableuniforms%28oftype___%29.md): Calls the given closure with an inout reference to the underlying storage bound to the custom uniforms argument of a surface shader and geometry modifier.
- [withMutableUniforms(ofType:stage:\_:)](custommaterial/withmutableuniforms%28oftype_stage___%29.md): Calls the given closure with an inout reference to the underlying storage bound to the custom uniforms argument of a surface shader or geometry modifier.

### Modifying texture coordinates

- [textureCoordinateTransform](custommaterial/texturecoordinatetransform-swift.property.md): A two-dimensional transformation RealityKit applies to the entity’s primary texture coordinates.
- [secondaryTextureCoordinateTransform](custommaterial/secondarytexturecoordinatetransform.md): A two-dimensional transformation RealityKit applies to the entity’s secondary texture coordinates.

### Culling unnecessary polygons

- [faceCulling](custommaterial/faceculling-swift.property.md): A process in which the system specifies polygons to remove before rendering a mesh using this material.

### Setting depth testing properties

- [readsDepth](custommaterial/readsdepth.md): A boolean value that determines whether this material performs the depth test by reading RealityKit’s depth buffer.
- [writesDepth](custommaterial/writesdepth.md): A boolean value that determines whether this material writes its depth into RealityKit’s depth buffer.

### Classes

- [CustomMaterial.Program](custommaterial/program-swift.class.md): An object that represents the backing shader compilation required for custom materials.

### Structures

- [CustomMaterial.AmbientOcclusion](custommaterial/ambientocclusion-swift.struct.md): An object that defines an entity’s exposure to ambient light.
- [CustomMaterial.BaseColor](custommaterial/basecolor-swift.struct.md): An object that defines an entity’s base color.
- [CustomMaterial.Clearcoat](custommaterial/clearcoat-swift.struct.md): An object that defines the intensity of an entity’s clear, shiny coating.
- [CustomMaterial.ClearcoatNormal](custommaterial/clearcoatnormal-swift.struct.md): An object that defines the clearcoat normal map texture.
- [CustomMaterial.ClearcoatRoughness](custommaterial/clearcoatroughness-swift.struct.md): An object that defines the degree to which an entity’s clear, shiny coating scatters light to create soft highlights.
- [CustomMaterial.Custom](custommaterial/custom-swift.struct.md): An object that defines the custom properties for the material.
- [CustomMaterial.CustomMaterialTexture](custommaterial/custommaterialtexture.md): A texture object that you use to create custom materials.
- [CustomMaterial.EmissiveColor](custommaterial/emissivecolor-swift.struct.md): An object that defines the color of the light an entity emits.
- [CustomMaterial.GeometryModifier](custommaterial/geometrymodifier.md): The custom material’s optional shader function that can manipulate an entity’s vertex data.
- [CustomMaterial.Metallic](custommaterial/metallic-swift.struct.md): An object that defines an entity’s reflectiveness.
- [CustomMaterial.Normal](custommaterial/normal-swift.struct.md): An object that stores fine surface details for an entity in an image texture.
- [CustomMaterial.Opacity](custommaterial/opacity.md): An object that defines the transparency options for a custom material.
- [CustomMaterial.ResourceStorage](custommaterial/resourcestorage.md): A container for resources that will be encoded into a CustomMaterial’s custom uniforms argument buffer.
- [CustomMaterial.Roughness](custommaterial/roughness-swift.struct.md): An object that defines how the surface of an entity scatters the light it reflects.
- [CustomMaterial.Specular](custommaterial/specular-swift.struct.md): An object that defines the specular highlights of an entity.
- [CustomMaterial.SurfaceShader](custommaterial/surfaceshader.md): The custom material’s surface shader function.

### Instance Properties

- [triangleFillMode](custommaterial/trianglefillmode-swift.property.md): The object that controls how RealityKit draws triangles.

### Type Aliases

- [CustomMaterial.FaceCulling](custommaterial/faceculling-swift.typealias.md): The type of object used to control the removal of polygons that aren’t visible to the user.
- [CustomMaterial.Texture](custommaterial/texture.md): The object type that custom materials use to hold texture properties.
- [CustomMaterial.TextureCoordinateTransform](custommaterial/texturecoordinatetransform-swift.typealias.md): The object type that custom material use to hold UV texture coordinates.
- [CustomMaterial.TriangleFillMode](custommaterial/trianglefillmode-swift.typealias.md)

### Type Properties

- [supportsMutableUniformsResources](custommaterial/supportsmutableuniformsresources.md): Whether the current device supports resource storage within the WithMutableUniforms API.

### Enumerations

- [CustomMaterial.Blending](custommaterial/blending-swift.enum.md): An object that specifies the transparency of an entity.
- [CustomMaterial.LightingModel](custommaterial/lightingmodel-swift.enum.md): An object that defines how the framework renders a custom material.

## Relationships

### Conforms To

- [Material](material.md)

## See Also

### Shaders

- [Implementing adjustable material](../visionos/implementing-adjustable-material-in-visionos.md): Update the adjustable parameters of a 3D model in visionOS.
- [Displaying a stereoscopic image](../visionos/displaying-a-stereoscopic-image-in-visionos.md): Build a stereoscopic image by applying textures to the left and right eye in a shader graph material.
- [ShaderGraphMaterial](shadergraphmaterial.md): A material that comes from a shader graph in a Reality Composer Pro project, or a MaterialX shader.
- [ShaderGraphMaterial.FaceCulling](shadergraphmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [ShaderGraphMaterial.TriangleFillMode](shadergraphmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.
- [Modifying RealityKit rendering using custom materials](modifying-realitykit-rendering-using-custom-materials.md): Write Metal shader functions to implement custom rendering effects.
- [CustomMaterial.SurfaceShader](custommaterial/surfaceshader.md): The custom material’s surface shader function.
- [CustomMaterial.GeometryModifier](custommaterial/geometrymodifier.md): The custom material’s optional shader function that can manipulate an entity’s vertex data.
- [MaterialFunction](materialfunction.md): The abstract superclass for objects representing compute functions for RealityKit custom materials .
- [CustomMaterial.Program](custommaterial/program-swift.class.md): An object that represents the backing shader compilation required for custom materials.
- [CustomMaterial.Program.Descriptor](custommaterial/program-swift.class/descriptor-swift.struct.md): An object that specifies all parameters necessary to initialize `CustomMaterial` programs
- [CustomShaderStage](customshaderstage.md)
