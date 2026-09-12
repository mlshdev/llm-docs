> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/deformationdata/skinningdata/update](https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/skinningdata/update)

# USDPlayer.DeformationData.SkinningData.Update

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Delta update carrying only the skinning fields that changed since the last frame.

## Declaration

```swift
struct Update
```

## Topics

### Instance Properties

- [geometryBindTransform](update/geometrybindtransform.md): Changed geometry bind transform.
- [influenceJointIndices](update/influencejointindices.md): Changed joint influence indices.
- [influenceWeights](update/influenceweights.md): Changed joint influence weights.
- [inverseBindPoses](update/inversebindposes.md): Changed inverse bind poses.
- [jointTransforms](update/jointtransforms.md): Changed joint transforms.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
