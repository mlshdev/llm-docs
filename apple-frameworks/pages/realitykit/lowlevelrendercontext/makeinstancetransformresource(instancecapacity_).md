> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makeinstancetransformresource(instancecapacity:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makeinstancetransformresource(instancecapacity:))

# makeInstanceTransformResource(instanceCapacity:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a transform buffer resource for GPU instancing.

## Declaration

```swift
func makeInstanceTransformResource(instanceCapacity: Int) throws -> LowLevelInstanceTransformResource
```

## Parameters

- `instanceCapacity`: The maximum number of instances the buffer holds.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelInstanceTransformResource](../lowlevelinstancetransformresource.md).

<a id="discussion"></a>

## Discussion

The buffer stores up to `instanceCapacity` model-to-local transforms as `float4x4` values. Assign the result to a [LowLevelMeshInstance](../lowlevelmeshinstance.md) via [setInstanceTransforms(\_:)](../lowlevelmeshinstance/setinstancetransforms%28__%29.md) to enable GPU instancing.

> **Throws**

> An error if the allocation fails.

## See Also

### Creating meshes

- [makeMeshResource(descriptor:)](makemeshresource%28descriptor_%29.md): Creates a mesh resource from the given descriptor.
- [makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)](makemeshpart%28resource_indexoffset_indexcount_primitive_windingorder_bounds_%29.md): Creates a mesh part that selects a contiguous range of indices from a mesh resource.
- [makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)](makemeshinstance%28meshpart_pipeline_geometryarguments_surfacearguments_lightingarguments_transform_sortcategory_%29.md): Creates a drawable mesh instance pairing a mesh part with a compiled pipeline state and optional per-draw argument tables.
- [makeMeshInstanceArray(renderTargets:count:)](makemeshinstancearray%28rendertargets_count_%29.md): Creates a fixed-capacity ordered collection of mesh instances for the given render targets.
