> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/imagebasedlighttexturegenerator](https://developer.apple.com/documentation/realitykit/imagebasedlighttexturegenerator)

# ImageBasedLightTextureGenerator

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An object that generates image-based-lighting diffuse and specular cube textures from a skybox.

## Declaration

```swift
class ImageBasedLightTextureGenerator
```

<a id="overview"></a>

## Overview

Image-based lighting (IBL) approximates how an environment lights a surface by convolving the environment’s skybox into two cube textures: a diffuse irradiance map (low-frequency lighting that hits matte surfaces) and a specular pre-filtered map (per-roughness lighting that drives glossy reflections). RealityKit’s `EnvironmentResource` consumes textures of this shape, and this generator lets you produce them directly in Metal so you can control resolution, pixel format, sampling quality, and command-buffer scheduling.

## Topics

### Creating a generator

- [init(device:)](imagebasedlighttexturegenerator/init%28device_%29-22qce.md)
- [init(device:)](imagebasedlighttexturegenerator/init%28device_%29-5yjyb.md)

### Generating IBL textures

- [generateDiffuse(using:fromSkyboxCube:quality:into:)](imagebasedlighttexturegenerator/generatediffuse%28using_fromskyboxcube_quality_into_%29.md): Adds commands for generating an image based light diffuse texture from a skybox cube.
- [generateSpecular(using:fromSkyboxCube:quality:into:)](imagebasedlighttexturegenerator/generatespecular%28using_fromskyboxcube_quality_into_%29.md): Adds commands for generating an image based light specular texture from a skybox cube.

### Describing output textures

- [makeDiffuseDescriptor(fromCube:)](imagebasedlighttexturegenerator/makediffusedescriptor%28fromcube_%29.md): Returns a recommended image based light diffuse cube texture descriptor (for [generateDiffuse(using:fromSkyboxCube:quality:into:)](imagebasedlighttexturegenerator/generatediffuse%28using_fromskyboxcube_quality_into_%29.md)).
- [makeSpecularDescriptor(fromCube:)](imagebasedlighttexturegenerator/makespeculardescriptor%28fromcube_%29.md): Returns a recommended image based light specular cube texture descriptor (for [generateSpecular(using:fromSkyboxCube:quality:into:)](imagebasedlighttexturegenerator/generatespecular%28using_fromskyboxcube_quality_into_%29.md)).

### Initializers

- [init(device:)](imagebasedlighttexturegenerator/init%28device_%29.md)

## See Also

### Environment texture generation

- [SkyboxGenerator](skyboxgenerator.md): An object that generates a skybox cube texture from an equirectangular source.
- [TextureSamplingQuality](texturesamplingquality.md): A discrete trade-off between generation time and texture quality, used by [SkyboxGenerator](skyboxgenerator.md) and [ImageBasedLightTextureGenerator](imagebasedlighttexturegenerator.md).
