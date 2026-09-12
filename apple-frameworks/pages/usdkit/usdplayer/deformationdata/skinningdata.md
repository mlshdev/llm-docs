> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/deformationdata/skinningdata](https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/skinningdata)

# USDPlayer.DeformationData.SkinningData

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Joint deformation data for a skinned mesh.

## Declaration

```swift
struct SkinningData
```

## Topics

### Structures

- [USDPlayer.DeformationData.SkinningData.Update](skinningdata/update.md): Delta update carrying only the skinning fields that changed since the last frame.

### Instance Properties

- [geometryBindTransform](skinningdata/geometrybindtransform.md): Transform from world space into bind space of the skinned mesh.
- [influenceJointIndices](skinningdata/influencejointindices.md): Joint indices for each vertex-influence slot, with `influencePerVertexCount` consecutive entries per vertex.
- [influencePerVertexCount](skinningdata/influencepervertexcount.md): Number of joint influences per vertex.
- [influenceWeights](skinningdata/influenceweights.md): Influence weights (0.0–1.0) corresponding 1:1 with `influenceJointIndices`.
- [inverseBindPoses](skinningdata/inversebindposes.md): Inverse bind-pose transformation matrix for each joint.
- [jointTransforms](skinningdata/jointtransforms.md): Current transformation matrices for each joint in the skeleton hierarchy, in joint order.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
