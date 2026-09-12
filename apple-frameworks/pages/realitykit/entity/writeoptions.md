> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/writeoptions](https://developer.apple.com/documentation/realitykit/entity/writeoptions)

# Entity.WriteOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A set of options that control how RealityKit writes entities to a reality file.

## Declaration

```swift
struct WriteOptions
```

<a id="Overview"></a>

## Overview

Use [Entity.WriteOptions](writeoptions.md) to tune the tradeoff between export speed, file size, and runtime cost when you save a scene to a `.reality` file.

Pass a value of this type to [write(to:options:)](write%28to_options_%29.md) or [write(to:options:)](configurationcatalog/write%28to_options_%29.md) as an array literal containing one or more option values.

```swift
let combinedOptions: Entity.WriteOptions = [
    .preferFastExport,
    .preferSmallTextureFiles(quality: .standard)
]
```

<a id="Expediting-Reality-File-Exports"></a>

## Expediting Reality File Exports

The [preferFastExport](writeoptions/preferfastexport.md) reduces the time required to write a reality file but produces a larger file on disk.

<a id="Reducing-Texture-File-Size"></a>

## Reducing Texture File Size

The [preferSmallTextureFiles(quality:)](writeoptions/prefersmalltexturefiles%28quality_%29.md) method returns options that instruct RealityKit to encode textures using smaller file representations,  at the cost of longer load times and higher memory usage. Specify a [Entity.WriteOptions.TextureQuality](writeoptions/texturequality.md) level to control the tradeoff between visual fidelity and file size.

## Topics

### Configuring export options

- [preferFastExport](writeoptions/preferfastexport.md): Expedite the reality file export when possible.
- [preferSmallTextureFiles(quality:)](writeoptions/prefersmalltexturefiles%28quality_%29.md): Reduce textures’ file size while preserving its dimensions.
- [Entity.WriteOptions.TextureQuality](writeoptions/texturequality.md): A texture quality level.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Writing an entity to a file

- [write(to:options:)](write%28to_options_%29.md)
- [write(\_:to:options:)](write%28__to_options_%29.md): Exports an array of entities as separate scenes within a single RealityKit file.
