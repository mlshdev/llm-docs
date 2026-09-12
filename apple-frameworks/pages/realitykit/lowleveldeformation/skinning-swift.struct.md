> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/skinning-swift.struct](https://developer.apple.com/documentation/realitykit/lowleveldeformation/skinning-swift.struct)

# LowLevelDeformation.Skinning

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An accessor for the skinning buffers of a [LowLevelDeformation](../lowleveldeformation.md).

## Declaration

```swift
struct Skinning
```

## Topics

### Configuring skinning data

- [setJointTransforms(\_:offset:)](skinning-swift.struct/setjointtransforms%28__offset_%29.md): Sets the buffer containing joint transform matrices.
- [setInfluenceWeights(\_:offset:)](skinning-swift.struct/setinfluenceweights%28__offset_%29.md): Sets the buffer containing per-vertex influence weights.
- [setInverseBindPoses(\_:offset:)](skinning-swift.struct/setinversebindposes%28__offset_%29.md): Sets the buffer containing inverse bind-pose matrices.
- [replaceInfluenceJointIndices(\_:)](skinning-swift.struct/replaceinfluencejointindices%28__%29.md): Fills the influence joint index buffer using the given closure. /// After the closure returns, the framework validates every index. An out-of-range index causes a throw.

### Instance Properties

- [geometryBindTransform](skinning-swift.struct/geometrybindtransform.md): The geometry bind transform applied to vertex positions before the joint skinning math.

## See Also

### Configuring deformation stages

- [skinning](skinning-swift.property.md): The skinning data accessors for this deformation.
