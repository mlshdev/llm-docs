> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/skinning-swift.struct/setinversebindposes(_:offset:)](https://developer.apple.com/documentation/realitykit/lowleveldeformation/skinning-swift.struct/setinversebindposes(_:offset:))

# setInverseBindPoses(\_:offset:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sets the buffer containing inverse bind-pose matrices.

## Declaration

```swift
func setInverseBindPoses(_ buffer: any MTLBuffer, offset: Int) throws
```

## Parameters

- `buffer`: The Metal buffer containing the inverse bind-pose matrices.
- `offset`: The byte offset into `buffer` where the data begins.

<a id="discussion"></a>

## Discussion

The buffer must contain `jointTransformCount` float4x4 matrices.

> **Throws**

> If `offset` is out of bounds for `buffer`, or if the buffer is too small.

## See Also

### Configuring skinning data

- [setJointTransforms(\_:offset:)](setjointtransforms%28__offset_%29.md): Sets the buffer containing joint transform matrices.
- [setInfluenceWeights(\_:offset:)](setinfluenceweights%28__offset_%29.md): Sets the buffer containing per-vertex influence weights.
- [replaceInfluenceJointIndices(\_:)](replaceinfluencejointindices%28__%29.md): Fills the influence joint index buffer using the given closure. /// After the closure returns, the framework validates every index. An out-of-range index causes a throw.
