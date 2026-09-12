> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/frameupdate](https://developer.apple.com/documentation/usdkit/usdplayer/frameupdate)

# USDPlayer.FrameUpdate

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A snapshot of all mesh, material, texture, and deformation changes from the last update.

## Declaration

```swift
struct FrameUpdate
```

## Topics

### Instance Properties

- [deformationAdditions](frameupdate/deformationadditions.md): IDs of newly added deformation resources.
- [deformationRemovals](frameupdate/deformationremovals.md): IDs of deformation resources removed this frame.
- [deformationUpdates](frameupdate/deformationupdates.md): IDs of deformation resources with delta changes this frame.
- [errors](frameupdate/errors.md): Errors encountered during this update.
- [materialAdditions](frameupdate/materialadditions.md): IDs of newly added materials.
- [materialRemovals](frameupdate/materialremovals.md): IDs of materials removed this frame.
- [materialUpdates](frameupdate/materialupdates.md): IDs of materials with delta changes this frame.
- [meshAdditions](frameupdate/meshadditions.md): IDs of newly added meshes.
- [meshRemovals](frameupdate/meshremovals.md): IDs of meshes removed this frame.
- [meshUpdates](frameupdate/meshupdates.md): IDs of meshes with delta changes this frame.
- [textureAdditions](frameupdate/textureadditions.md): IDs of newly added texture assets.
- [textureRemovals](frameupdate/textureremovals.md): IDs of texture assets removed this frame.
- [timeCode](frameupdate/timecode.md): The USD time code this update corresponds to.

### Instance Methods

- [takeDeformationAddition(id:)](frameupdate/takedeformationaddition%28id_%29.md): Consumes and returns the [USDPlayer.DeformationData](deformationdata.md) for the given deformation addition.
- [takeDeformationUpdate(id:)](frameupdate/takedeformationupdate%28id_%29.md): Consumes and returns the [USDPlayer.DeformationData.Update](deformationdata/update.md) for the given deformation delta update.
- [takeMaterialAddition(id:)](frameupdate/takematerialaddition%28id_%29.md): Consumes and returns the [USDPlayer.MaterialData](materialdata.md) for the given material addition.
- [takeMaterialUpdate(id:)](frameupdate/takematerialupdate%28id_%29.md): Consumes and returns the [USDPlayer.MaterialData.Update](materialdata/update.md) for the given material delta update.
- [takeMeshAddition(id:)](frameupdate/takemeshaddition%28id_%29.md): Consumes and returns the [USDPlayer.MeshData](meshdata.md) for the given mesh addition.
- [takeMeshUpdate(id:)](frameupdate/takemeshupdate%28id_%29.md): Consumes and returns the [USDPlayer.MeshData.Update](meshdata/update.md) for the given mesh delta update.
- [takeTextureAddition(id:)](frameupdate/taketextureaddition%28id_%29.md): Consumes and returns the [USDPlayer.TextureData](texturedata.md) for the given texture addition.

## See Also

### Driving playback

- [update(timeCode:)](update%28timecode_%29.md): Updates the stage to `timeCode` and returns a [USDPlayer.FrameUpdate](frameupdate.md) describing all scene changes.
