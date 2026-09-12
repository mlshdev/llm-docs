> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makemeshinstancearray(rendertargets:count:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makemeshinstancearray(rendertargets:count:))

# makeMeshInstanceArray(renderTargets:count:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a fixed-capacity ordered collection of mesh instances for the given render targets.

## Declaration

```swift
final func makeMeshInstanceArray(renderTargets: LowLevelRenderTarget.DescriptorSet, count: Int) throws -> LowLevelMeshInstanceArray
```

## Parameters

- `renderTargets`: The set of render target descriptors this array must be compatible with.
- `count`: The maximum number of mesh instance slots to allocate.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelMeshInstanceArray](../lowlevelmeshinstancearray.md).

<a id="discussion"></a>

## Discussion

Pass the resulting array to [setMeshInstances(\_:at:)](../lowlevelrenderer/setmeshinstances%28__at_%29.md) to submit it for rendering.

> **Throws**

> An error if allocation fails.
