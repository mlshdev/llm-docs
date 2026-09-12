> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skyboxgenerator](https://developer.apple.com/documentation/realitykit/skyboxgenerator)

# SkyboxGenerator

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that generates a skybox cube texture from an equirectangular source.

## Declaration

```swift
class SkyboxGenerator
```

<a id="overview"></a>

## Overview

Use a skybox generator to convert a latitude/longitude (equirectangular) Metal texture into a cube texture that you can render as a scene background or feed into [ImageBasedLightTextureGenerator](imagebasedlighttexturegenerator.md) to derive image-based-lighting diffuse and specular textures. The generator dispatches its work onto a Metal command buffer that you provide, so it composes naturally with other GPU work and with RealityKit’s `LowLevelTexture`.

## Topics

### Creating a skybox generator

- [init(device:)](skyboxgenerator/init%28device_%29-1hp6p.md)
- [init(device:)](skyboxgenerator/init%28device_%29-5ot7g.md)

### Generating a skybox

- [generateSkybox(using:fromEquirectangular:quality:into:)](skyboxgenerator/generateskybox%28using_fromequirectangular_quality_into_%29.md): Adds commands for generating a cube from an equirectangular image, including generating mipmaps.
- [makeDescriptor(fromEquirectangular:)](skyboxgenerator/makedescriptor%28fromequirectangular_%29.md): Returns a recommended skybox cube texture descriptor (for [generateSkybox(using:fromEquirectangular:quality:into:)](skyboxgenerator/generateskybox%28using_fromequirectangular_quality_into_%29.md)).

### Initializers

- [init(device:)](skyboxgenerator/init%28device_%29.md)

## See Also

### Environment texture generation

- [ImageBasedLightTextureGenerator](imagebasedlighttexturegenerator.md): An object that generates image-based-lighting diffuse and specular cube textures from a skybox.
- [TextureSamplingQuality](texturesamplingquality.md): A discrete trade-off between generation time and texture quality, used by [SkyboxGenerator](skyboxgenerator.md) and [ImageBasedLightTextureGenerator](imagebasedlighttexturegenerator.md).
