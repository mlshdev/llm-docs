> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/writeoptions/texturequality](https://developer.apple.com/documentation/realitykit/entity/writeoptions/texturequality)

# Entity.WriteOptions.TextureQuality

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A texture quality level.

## Declaration

```swift
struct TextureQuality
```

## Topics

### Choosing a quality level

- [medium](texturequality/medium.md): Reduces more the texture file size. RealityKit might not preserve fine details to reach a small file size.
- [low](texturequality/low.md): Aggressively reduces the texture file size. RealityKit can suppress some visual details to reach the smallest file size.

### Type Properties

- [standard](texturequality/standard.md): Reduces the texture file size while preserving most details.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring export options

- [preferFastExport](preferfastexport.md): Expedite the reality file export when possible.
- [preferSmallTextureFiles(quality:)](prefersmalltexturefiles%28quality_%29.md): Reduce textures’ file size while preserving its dimensions.
