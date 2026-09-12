> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/deformationdata](https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata)

# USDPlayer.DeformationData

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Deformation data for a single deformable mesh.

## Declaration

```swift
struct DeformationData
```

## Topics

### Structures

- [USDPlayer.DeformationData.BlendShapeData](deformationdata/blendshapedata.md): Blend shape targets and weights for morph-target deformation.
- [USDPlayer.DeformationData.RenormalizationData](deformationdata/renormalizationdata.md): Triangle adjacency data for post-deformation normal renormalization.
- [USDPlayer.DeformationData.SkinningData](deformationdata/skinningdata.md): Joint deformation data for a skinned mesh.
- [USDPlayer.DeformationData.Update](deformationdata/update.md): Delta update carrying only the deformation fields that changed since the last frame.

### Instance Properties

- [blendShapes](deformationdata/blendshapes.md): Blend shape deformation data.
- [id](deformationdata/id.md): Unique identifier for this deformation resource.
- [renormalization](deformationdata/renormalization.md): Renormalization data.
- [skinning](deformationdata/skinning.md): Skinning deformation data.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
