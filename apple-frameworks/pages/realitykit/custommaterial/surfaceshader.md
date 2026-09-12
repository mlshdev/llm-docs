> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/surfaceshader](https://developer.apple.com/documentation/realitykit/custommaterial/surfaceshader)

# CustomMaterial.SurfaceShader

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

The custom material’s surface shader function.

## Declaration

```swift
struct SurfaceShader
```

<a id="overview"></a>

## Overview

Custom materials work together with a surface shader function to render entities. The [CustomMaterial](../custommaterial.md) properties related to rendering, such as [baseColor](basecolor-swift.property.md) and [normal](normal-swift.property.md), are available in the surface shader function, but RealityKit doesn’t use them directly.

Instead, the material’s surface shader function allows you to calculate or specify all the material parameters that RealityKit uses to render your entity, such as [baseColor](basecolor-swift.property.md), [normal](normal-swift.property.md), and [roughness](roughness-swift.property.md). RealityKit’s fragment shader calls your surface shader function once for each pixel it renders.

Here’s a simple example of a surface shader that sets the entity’s base color:

```cpp
#include <metal_stdlib>
#include <RealityKit/RealityKit.h>

// Specify the current default namespace as metal so that it's not
// necessary to prefix Metal Standard Library symbols.
using namespace metal;

[[visible]] void mySurfaceShader(realitykit::surface_parameters params)
{
    // Set the base color
    params.surface().set_base_color(half3(1.0, 0.5, 0.5));
}
```

For more information on creating custom materials and writing shader functions, see [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md).

## Topics

### Creating surface shader objects

- [init(named:in:)](surfaceshader/init%28named_in_%29.md): Creates a surface shader object from a named function in a Metal library.

### Accessing surface shader properties

- [name](surfaceshader/name.md): The name of the surface shader function.
- [library](surfaceshader/library.md): The Metal library that contains this surface shader function.

### Initializers

- [init(named:in:constantValues:)](surfaceshader/init%28named_in_constantvalues_%29.md): Creates a surface shader with the specified function constant values.

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
- [CustomMaterial.GeometryModifier](geometrymodifier.md): The custom material’s optional shader function that can manipulate an entity’s vertex data.
- [MaterialFunction](../materialfunction.md): The abstract superclass for objects representing compute functions for RealityKit custom materials .
- [CustomMaterial.Program](program-swift.class.md): An object that represents the backing shader compilation required for custom materials.
- [CustomMaterial.Program.Descriptor](program-swift.class/descriptor-swift.struct.md): An object that specifies all parameters necessary to initialize `CustomMaterial` programs
- [CustomShaderStage](../customshaderstage.md)
