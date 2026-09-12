> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdstage/exportoptions](https://developer.apple.com/documentation/usdkit/usdstage/exportoptions)

# USDStage.ExportOptions

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Options for packaging a stage into a USDZ file.

## Declaration

```swift
struct ExportOptions
```

## Topics

### Structures

- [USDStage.ExportOptions.TextureQuality](exportoptions/texturequality.md): A texture quality level.

### Type Properties

- [preferSmallMeshFiles](exportoptions/prefersmallmeshfiles.md): Reduce meshes’ file size via quantization and compression.
- [preferSmallTextureFiles](exportoptions/prefersmalltexturefiles.md): Reduce textures’ file size at the standard quality level.

### Type Methods

- [preferSmallTextureFiles(quality:)](exportoptions/prefersmalltexturefiles%28quality_%29.md): Reduce textures’ file size at the specified quality level.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Exporting the stage

- [exportPackage(to:options:)](exportpackage%28to_options_%29-6s2wk.md): Packages the stage into a USDZ archive.
- [exportPackage(to:options:)](exportpackage%28to_options_%29-2x7yr.md): Packages the stage into a USDZ archive.
- [exportFlattened(to:)](exportflattened%28to_%29-98kpc.md): Exports the stage as a flattened USD file.
- [exportFlattened(to:)](exportflattened%28to_%29-6717d.md): Exports the stage as a flattened USD file.
