> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makemeshinstancearray(rendertargets:count:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makemeshinstancearray(rendertargets:count:))

# makeMeshInstanceArray(renderTargets:count:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a fixed-capacity ordered collection of mesh instances for the given render targets.

## Declaration

```swift
func makeMeshInstanceArray(renderTargets: LowLevelRenderTarget.DescriptorSet, count: Int) throws -> LowLevelMeshInstanceArray
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

## See Also

### Creating meshes

- [makeMeshResource(descriptor:)](makemeshresource%28descriptor_%29.md): Creates a mesh resource from the given descriptor.
- [makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)](makemeshpart%28resource_indexoffset_indexcount_primitive_windingorder_bounds_%29.md): Creates a mesh part that selects a contiguous range of indices from a mesh resource.
- [makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)](makemeshinstance%28meshpart_pipeline_geometryarguments_surfacearguments_lightingarguments_transform_sortcategory_%29.md): Creates a drawable mesh instance pairing a mesh part with a compiled pipeline state and optional per-draw argument tables.
- [makeInstanceTransformResource(instanceCapacity:)](makeinstancetransformresource%28instancecapacity_%29.md): Creates a transform buffer resource for GPU instancing.
