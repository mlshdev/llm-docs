> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/materialfunction](https://developer.apple.com/documentation/realitykit/materialfunction)

# MaterialFunction

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The abstract superclass for objects representing compute functions for RealityKit custom materials .

## Declaration

```swift
protocol MaterialFunction
```

<a id="overview"></a>

## Overview

This class is the parent of, and contains common properties and methods for [CustomMaterial.GeometryModifier](custommaterial/geometrymodifier.md) and [CustomMaterial.SurfaceShader](custommaterial/surfaceshader.md). Don’t create an instance of this superclass yourself.

## Topics

### Instance Properties

- [constantValues](materialfunction/constantvalues.md): The constant values to use when RealityKit creates your function. These correspond to constants defined in your metal code.
- [library](materialfunction/library.md): Metal Library containing the given function.
- [name](materialfunction/name.md): Name of function found in library

## Relationships

### Conforming Types

- [CustomMaterial.GeometryModifier](custommaterial/geometrymodifier.md)
- [CustomMaterial.SurfaceShader](custommaterial/surfaceshader.md)

## See Also

### Shaders

- [Implementing adjustable material](../visionos/implementing-adjustable-material-in-visionos.md): Update the adjustable parameters of a 3D model in visionOS.
- [Displaying a stereoscopic image](../visionos/displaying-a-stereoscopic-image-in-visionos.md): Build a stereoscopic image by applying textures to the left and right eye in a shader graph material.
- [ShaderGraphMaterial](shadergraphmaterial.md): A material that comes from a shader graph in a Reality Composer Pro project, or a MaterialX shader.
- [ShaderGraphMaterial.FaceCulling](shadergraphmaterial/faceculling-swift.typealias.md): An alias for the cull mode object that’s appropriate for this material class.
- [ShaderGraphMaterial.TriangleFillMode](shadergraphmaterial/trianglefillmode-swift.typealias.md): An alias for the triangle fill mode object that’s appropriate for this material class.
- [Modifying RealityKit rendering using custom materials](modifying-realitykit-rendering-using-custom-materials.md): Write Metal shader functions to implement custom rendering effects.
- [CustomMaterial](custommaterial.md): A material that works with custom Metal shader functions.
- [CustomMaterial.SurfaceShader](custommaterial/surfaceshader.md): The custom material’s surface shader function.
- [CustomMaterial.GeometryModifier](custommaterial/geometrymodifier.md): The custom material’s optional shader function that can manipulate an entity’s vertex data.
- [CustomMaterial.Program](custommaterial/program-swift.class.md): An object that represents the backing shader compilation required for custom materials.
- [CustomMaterial.Program.Descriptor](custommaterial/program-swift.class/descriptor-swift.struct.md): An object that specifies all parameters necessary to initialize `CustomMaterial` programs
- [CustomShaderStage](customshaderstage.md)
