> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/skinning-swift.struct/replaceinfluencejointindices(_:)](https://developer.apple.com/documentation/realitykit/lowleveldeformation/skinning-swift.struct/replaceinfluencejointindices(_:))

# replaceInfluenceJointIndices(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Fills the influence joint index buffer using the given closure.    /// After the closure returns, the framework validates every index. An out-of-range index causes a throw.

## Declaration

```swift
func replaceInfluenceJointIndices<R>(_ body: @_lifetime(0: copy 0) (inout MutableRawSpan) -> R) throws -> R where R : ~Copyable
```

## Parameters

- `body`: A closure that receives a mutable span over the buffer.

<a id="return-value"></a>

## Return Value

The value returned by `body`.

<a id="discussion"></a>

## Discussion

> **Throws**

> If any index is outside `[0, skinning.jointTransformCount)`.

## See Also

### Configuring skinning data

- [setJointTransforms(\_:offset:)](setjointtransforms%28__offset_%29.md): Sets the buffer containing joint transform matrices.
- [setInfluenceWeights(\_:offset:)](setinfluenceweights%28__offset_%29.md): Sets the buffer containing per-vertex influence weights.
- [setInverseBindPoses(\_:offset:)](setinversebindposes%28__offset_%29.md): Sets the buffer containing inverse bind-pose matrices.
