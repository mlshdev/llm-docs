> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/geometrymodifier](https://developer.apple.com/documentation/realitykit/custommaterial/geometrymodifier)

# CustomMaterial.GeometryModifier

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The custom material’s optional shader function that can manipulate an entity’s vertex data.

## Declaration

```swift
struct GeometryModifier
```

<a id="overview"></a>

## Overview

A geometry modifier is an optional Metal function that you can use with custom materials. Use a geometry modifier to change vertex data, such as vertex position, color, or texture coordinates. For example, offsetting a vertex’s position changes the size and shape of the entity for rendering only. If your custom material has a geometry modifier, RealityKit’s custom material vertex shader calls it once for each vertex in the entity. Changes that your geometry modifier makes are transient and don’t affect the vertex positions of the original [ModelEntity](../modelentity.md).

Here’s a simple example of a geometry modifier that offsets the vertex positions along the z-axis based on the elapsed time:

```cpp
#include <metal_stdlib>
#include <RealityKit/RealityKit.h>
using namespace metal;

[[visible]] void myGeometryModifier(realitykit::geometry_parameters
params) {
    float3 zOffset = float3(0.0, 0.0, params.uniforms().time() / 50.0);
    params.geometry().set_world_position_offset(zOffset);
}
```

For more information on creating custom materials and writing shader functions, see [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md).

## Topics

### Creating geometry modifier objects

- [init(named:in:)](geometrymodifier/init%28named_in_%29.md): Creates a geometry modifier object from a named function in a Metal library.

### Accessing geometry modifier properties

- [name](geometrymodifier/name.md): The name of the geometry modifier function.
- [library](geometrymodifier/library.md): The Metal library that contains this surface shader function.

### Initializers

- [init(named:in:constantValues:)](geometrymodifier/init%28named_in_constantvalues_%29.md): Creates a geometry modifier with the specified function constant values.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MaterialFunction](../materialfunction.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shaders

- [Implementing adjustable material](../../visionos/implementing-adjustable-material-in-visionos.md): Update the adjustable parameters of a 3D model in visionOS.
- [Displaying a stereoscopic image](../../visionos/displaying-a-stereoscopic-image-in-visionos.md): Build a stereoscopic image by applying textures to the left and right eye in a shader graph material.
- [ShaderGraphMaterial](../shadergraphmaterial.md): A material that comes from a shader graph in a Reality Composer Pro project, or a MaterialX shader.
- [ShaderGraphMaterial.FaceCulling](../shadergraphmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [ShaderGraphMaterial.TriangleFillMode](../shadergraphmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.
- [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md): Write Metal shader functions to implement custom rendering effects.
- [CustomMaterial](../custommaterial.md): A material that works with custom Metal shader functions.
- [CustomMaterial.SurfaceShader](surfaceshader.md): The custom material’s surface shader function.
- [MaterialFunction](../materialfunction.md): The abstract superclass for objects representing compute functions for RealityKit custom materials .
- [CustomMaterial.Program](program-swift.class.md): An object that represents the backing shader compilation required for custom materials.
- [CustomMaterial.Program.Descriptor](program-swift.class/descriptor-swift.struct.md): An object that specifies all parameters necessary to initialize `CustomMaterial` programs
- [CustomShaderStage](../customshaderstage.md)
