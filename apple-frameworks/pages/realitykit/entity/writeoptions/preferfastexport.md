> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/writeoptions/preferfastexport](https://developer.apple.com/documentation/realitykit/entity/writeoptions/preferfastexport)

# preferFastExport

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Expedite the reality file export when possible.

## Declaration

```swift
static var preferFastExport: Entity.WriteOptions { get }
```

<a id="discussion"></a>

## Discussion

This option may disable archival compression during the export process. This reduces the time required to write a reality file but produces a larger file on disk. Use this option when rapid iteration is more important than file size, such as during development in a content authoring tool.

## See Also

### Configuring export options

- [preferSmallTextureFiles(quality:)](prefersmalltexturefiles%28quality_%29.md): Reduce textures’ file size while preserving its dimensions.
- [Entity.WriteOptions.TextureQuality](texturequality.md): A texture quality level.
