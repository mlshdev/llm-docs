> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/texturesamplingquality](https://developer.apple.com/documentation/realitykit/texturesamplingquality)

# TextureSamplingQuality

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A discrete trade-off between generation time and texture quality, used by [SkyboxGenerator](skyboxgenerator.md) and [ImageBasedLightTextureGenerator](imagebasedlighttexturegenerator.md).

## Declaration

```swift
enum TextureSamplingQuality
```

<a id="overview"></a>

## Overview

Higher quality reduces noise and banding at the cost of proportionally more GPU work.

## Topics

### Specifying the sampling quality

- [TextureSamplingQuality.low](texturesamplingquality/low.md): Low sampling rates can result in higher noise in high-frequency areas and banding in low-frequency gradients.
- [TextureSamplingQuality.normal](texturesamplingquality/normal.md): Computes with regular sampling rates.
- [TextureSamplingQuality.high](texturesamplingquality/high.md): Computes with high sampling rates, reducing texture noise in high-frequency areas.
- [TextureSamplingQuality.veryHigh](texturesamplingquality/veryhigh.md): Computes with very high sampling rates.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Environment texture generation

- [ImageBasedLightTextureGenerator](imagebasedlighttexturegenerator.md): An object that generates image-based-lighting diffuse and specular cube textures from a skybox.
- [SkyboxGenerator](skyboxgenerator.md): An object that generates a skybox cube texture from an equirectangular source.
