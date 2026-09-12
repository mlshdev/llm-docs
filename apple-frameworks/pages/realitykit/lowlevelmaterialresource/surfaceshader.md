> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/surfaceshader](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/surfaceshader)

# LowLevelMaterialResource.SurfaceShader

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled Metal function that implements the surface shader function.

## Declaration

```swift
final class SurfaceShader
```

<a id="overview"></a>

## Overview

Create a `SurfaceShader` by compiling a [LowLevelMaterialResource.SurfaceShader.Descriptor](surfaceshader/descriptor.md) with [makeSurfaceShader(descriptor:)](../lowlevelrendercontext/makesurfaceshader%28descriptor_%29-66tq8.md), or use [makeSimpleSurfaceShader(descriptor:)](../lowlevelrendercontext/makesimplesurfaceshader%28descriptor_%29-74vhb.md) for the built-in simple surface shader function.

## Topics

### Describing the shader

- [LowLevelMaterialResource.SurfaceShader.Descriptor](surfaceshader/descriptor.md): The name and library for a user-authored Metal surface shader function.

### Configuring shader parameters

- [parameterMapping](surfaceshader/parametermapping.md): The parameter name-to-slot mapping for this surface shader function, or `nil` if it takes no custom parameters.
- [argumentTableDescriptor](surfaceshader/argumenttabledescriptor.md): The argument table descriptor for this surface shader, or `nil` if it takes no per-draw arguments.

## Relationships

### Conforms To

- [LowLevelMaterialResource.Function](function.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the shaders

- [surface](surface.md): The compiled fragment-stage surface shader.
- [geometry](geometry.md): The compiled vertex-stage geometry modifier.
- [LowLevelMaterialResource.GeometryModifier](geometrymodifier.md): A compiled Metal function that implements the geometry modifier function.
- [LowLevelMaterialResource.LightingFunction](lightingfunction.md): A compiled Metal function that evaluates lighting.
- [LowLevelMaterialResource.Function](function.md): A compiled shader function that can receive per-draw parameters via an argument table.
