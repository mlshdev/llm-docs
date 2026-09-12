> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer](https://developer.apple.com/documentation/usdkit/usdplayer)

# USDPlayer

**Framework:** USDKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Drives timeline playback of a USD stage and produces per-frame render data.

## Declaration

```swift
final class USDPlayer
```

<a id="overview"></a>

## Overview

An object that drives timeline playback of a USD stage in RealityKit.

## Topics

### Creating a player

- [init(stage:)](usdplayer/init%28stage_%29.md): Creates a Metal-enabled player for the given USD stage.
- [init(stage:gpuFamily:)](usdplayer/init%28stage_gpufamily_%29.md): Creates a Metal-less player for the given USD stage.

### Driving playback

- [update(timeCode:)](usdplayer/update%28timecode_%29.md): Updates the stage to `timeCode` and returns a [USDPlayer.FrameUpdate](usdplayer/frameupdate.md) describing all scene changes.
- [USDPlayer.FrameUpdate](usdplayer/frameupdate.md): A snapshot of all mesh, material, texture, and deformation changes from the last update.

### Supplying lighting

- [importCustomIBLTexture(data:)](usdplayer/importcustomibltexture%28data_%29.md): Imports a custom IBL texture.

### Structures

- [USDPlayer.DeformationData](usdplayer/deformationdata.md): Deformation data for a single deformable mesh.
- [USDPlayer.DeformationID](usdplayer/deformationid.md): Deformation resource identifier.
- [USDPlayer.MaterialData](usdplayer/materialdata.md): Material data from a USD material prim.
- [USDPlayer.MaterialID](usdplayer/materialid.md): Material resource identifier.
- [USDPlayer.MeshData](usdplayer/meshdata.md): Mesh geometry data from a USD mesh prim.
- [USDPlayer.MeshID](usdplayer/meshid.md): Mesh resource identifier.
- [USDPlayer.TextureData](usdplayer/texturedata.md): Texture data from a texture asset referenced by a material prim.
- [USDPlayer.TextureID](usdplayer/textureid.md): Texture resource identifier.
- [USDPlayer.TextureLevelInfo](usdplayer/texturelevelinfo.md): Byte-layout descriptor for a single mip level within a [USDPlayer.TextureData](usdplayer/texturedata.md).

## See Also

### RealityKit rendering and playback

- [USDStageComponent](usdstagecomponent.md): A component that renders a USD stage as RealityKit entities.
