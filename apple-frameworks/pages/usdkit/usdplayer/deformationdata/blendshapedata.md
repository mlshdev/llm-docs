> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/blendshapedata

# USDPlayer.DeformationData.BlendShapeData

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Blend shape targets and weights for morph-target deformation.

## Declaration

```swift
struct BlendShapeData
```

## Topics

### Structures

- [USDPlayer.DeformationData.BlendShapeData.Update](blendshapedata/update.md): Delta update carrying only the blend shape fields that changed since the last frame.

### Instance Properties

- [positionOffsets](blendshapedata/positionoffsets.md): Per-vertex position delta vectors for each blend shape target.
- [weights](blendshapedata/weights.md): Weight values controlling each blend shape target’s influence.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
