> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/writeoptions/prefersmalltexturefiles(quality:)](https://developer.apple.com/documentation/realitykit/entity/writeoptions/prefersmalltexturefiles(quality:))

# preferSmallTextureFiles(quality:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Reduce textures’ file size while preserving its dimensions.

## Declaration

```swift
static func preferSmallTextureFiles(quality: Entity.WriteOptions.TextureQuality) -> Entity.WriteOptions
```

<a id="discussion"></a>

## Discussion

The returned option instructs RealityKit to encode textures using smaller file representations. RealityKit selects the best strategy for each texture based on context, which may include lossy image encoding, preserving the original source image, or regenerating mipmaps.

> **Warning**

> While writing smaller texture files reduces the size of reality files on disk, loading those textures can increase memory usage and load times compared to the default compressed format. Larger memory region can also consume more power during rendering due to increased cache pressure.

> **Note**

> RealityKit ignores this option for textures created with [none](../../textureresource/compression/none.md).

## See Also

### Configuring export options

- [preferFastExport](preferfastexport.md): Expedite the reality file export when possible.
- [Entity.WriteOptions.TextureQuality](texturequality.md): A texture quality level.
