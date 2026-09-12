> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/lightingfunction](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/lightingfunction)

# LowLevelMaterialResource.LightingFunction

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled Metal function that evaluates lighting.

## Declaration

```swift
final class LightingFunction
```

<a id="overview"></a>

## Overview

Create a `LightingFunction` through a context’s [lighting](../lowlevelrendercontext/lighting.md) provider, using [makeImageBasedLightingFunction()](../lowlevelrendercontextlighting/makeimagebasedlightingfunction%28%29.md) for image-based lighting or [makeUnlitLightingFunction()](../lowlevelrendercontextlighting/makeunlitlightingfunction%28%29.md) for unlit shading.

## Topics

### Configuring shader arguments

- [parameterMapping](lightingfunction/parametermapping.md): The parameter name-to-slot mapping for this lighting function, or `nil` if it takes no custom parameters.
- [argumentTableDescriptor](lightingfunction/argumenttabledescriptor.md): The argument table descriptor for this lighting function, or `nil` if it takes no per-draw arguments.

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
- [LowLevelMaterialResource.GeometryModifier](geometrymodifier.md): A compiled Metal function that implements the geometry modifier function.
- [LowLevelMaterialResource.Function](function.md): A compiled shader function that can receive per-draw parameters via an argument table.
