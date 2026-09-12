> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/geometrymodifier](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/geometrymodifier)

# LowLevelMaterialResource.GeometryModifier

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled Metal function that implements the geometry modifier function.

## Declaration

```swift
final class GeometryModifier
```

<a id="overview"></a>

## Overview

Create a `GeometryModifier` by calling [makeGeometryModifier(descriptor:)](../lowlevelrendercontext/makegeometrymodifier%28descriptor_%29-307ec.md), or use [makeDefaultGeometryModifier()](../lowlevelrendercontext/makedefaultgeometrymodifier%28%29.md) for a pass-through modifier that performs no vertex transformation.

## Topics

### Creating a geometry modifier

- [LowLevelMaterialResource.GeometryModifier.Descriptor](geometrymodifier/descriptor.md): The name and library for a user-authored Metal geometry modifier function.

### Configuring arguments and parameters

- [argumentTableDescriptor](geometrymodifier/argumenttabledescriptor.md): The argument table descriptor for this geometry modifier, or `nil` if it takes no per-draw arguments.
- [parameterMapping](geometrymodifier/parametermapping.md): The parameter name-to-slot mapping for this geometry modifier, or `nil` if it takes no custom parameters.

## Relationships

### Conforms To

- [LowLevelMaterialResource.Function](function.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the shaders

- [surface](surface.md): The compiled fragment-stage surface shader.
- [LowLevelMaterialResource.SurfaceShader](surfaceshader.md): A compiled Metal function that implements the surface shader function.
- [geometry](geometry.md): The compiled vertex-stage geometry modifier.
- [LowLevelMaterialResource.LightingFunction](lightingfunction.md): A compiled Metal function that evaluates lighting.
- [LowLevelMaterialResource.Function](function.md): A compiled shader function that can receive per-draw parameters via an argument table.
