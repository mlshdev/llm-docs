> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor)

# LowLevelMaterialResource.SimpleSurfaceDescriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The configuration for a built-in surface shader that applies a tint color, a texture, or both.

## Declaration

```swift
struct SimpleSurfaceDescriptor
```

<a id="overview"></a>

## Overview

Pass a `SimpleSurfaceDescriptor` to [makeSimpleSurfaceShader(descriptor:)](../lowlevelrendercontext/makesimplesurfaceshader%28descriptor_%29-74vhb.md) to compile the corresponding [LowLevelMaterialResource.SurfaceShader](surfaceshader.md) function.

The compiled function’s argument table contains the buffer and texture requirements for the function. Resolve the parameter mappings using the function’s [LowLevelMaterialParameterMapping](../lowlevelmaterialparametermapping.md).

## Topics

### Creating a surface descriptor

- [init(useTintColor:useTexture:outputChannel:outputOpacity:)](simplesurfacedescriptor/init%28usetintcolor_usetexture_outputchannel_outputopacity_%29.md): Creates a descriptor for the specified combination of inputs and outputs.

### Configuring color sources

- [useTintColor](simplesurfacedescriptor/usetintcolor.md): A Boolean value that indicates whether the shader reads a tint color from the argument table and multiplies it with the surface output.
- [useTexture](simplesurfacedescriptor/usetexture.md): A Boolean value that indicates whether the shader samples a texture from the argument table and multiplies it with the surface output.

### Configuring the output

- [outputChannel](simplesurfacedescriptor/outputchannel-swift.property.md): The surface output channel the shader writes to.
- [LowLevelMaterialResource.SimpleSurfaceDescriptor.OutputChannel](simplesurfacedescriptor/outputchannel-swift.enum.md): The output channel that the simple surface shader writes to.
- [outputOpacity](simplesurfacedescriptor/outputopacity.md): A Boolean value that indicates whether the shader also writes the computed alpha to the surface opacity output.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing the material

- [LowLevelMaterialResource.Descriptor](descriptor.md): The geometry modifier, surface shader, and lighting function for a material.
