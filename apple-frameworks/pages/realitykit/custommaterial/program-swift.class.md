> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/program-swift.class](https://developer.apple.com/documentation/realitykit/custommaterial/program-swift.class)

# CustomMaterial.Program

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

An object that represents the backing shader compilation required for custom materials.

## Declaration

```swift
final class Program
```

<a id="overview"></a>

## Overview

You can use this type to control when RealityKit compiles shaders, and to initialize `CustomMaterial` objects with more predicitable loading performance.

When initializing a `CustomMaterial` this way, a `Program` object is created first asynchronously, which is used to cache the material’s shader program so the `CustomMaterial` can be loaded immediately later.

For example:

```swift
// Initialize descriptor with desired properties
var descriptor = CustomMaterial.Descriptor()
descriptor.lightingModel = .unlit

// Create program object
let program = await CustomMaterial.Program(surfaceShader: surfaceShader,
                                           descriptor: descriptor)

// Create material (returns immediately)
let material = CustomMaterial(program: program)
```

## Topics

### Structures

- [CustomMaterial.Program.Descriptor](program-swift.class/descriptor-swift.struct.md): An object that specifies all parameters necessary to initialize `CustomMaterial` programs

### Initializers

- [init(surfaceShader:geometryModifier:descriptor:)](program-swift.class/init%28surfaceshader_geometrymodifier_descriptor_%29.md)

### Instance Properties

- [descriptor](program-swift.class/descriptor-swift.property.md)
- [geometryModifier](program-swift.class/geometrymodifier.md)
- [surfaceShader](program-swift.class/surfaceshader.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [CustomMaterial.GeometryModifier](geometrymodifier.md): The custom material’s optional shader function that can manipulate an entity’s vertex data.
- [MaterialFunction](../materialfunction.md): The abstract superclass for objects representing compute functions for RealityKit custom materials .
- [CustomMaterial.Program.Descriptor](program-swift.class/descriptor-swift.struct.md): An object that specifies all parameters necessary to initialize `CustomMaterial` programs
- [CustomShaderStage](../customshaderstage.md)
