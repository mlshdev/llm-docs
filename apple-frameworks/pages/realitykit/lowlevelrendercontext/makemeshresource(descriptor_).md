> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makemeshresource(descriptor:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makemeshresource(descriptor:))

# makeMeshResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a mesh resource from the given descriptor.

## Declaration

```swift
func makeMeshResource(descriptor: LowLevelMeshResource.Descriptor) throws -> LowLevelMeshResource
```

## Parameters

- `descriptor`: The vertex and index buffer layout to allocate.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelMeshResource](../lowlevelmeshresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the descriptor is invalid or if the underlying GPU allocation fails.

## See Also

### Creating meshes

- [makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)](makemeshpart%28resource_indexoffset_indexcount_primitive_windingorder_bounds_%29.md): Creates a mesh part that selects a contiguous range of indices from a mesh resource.
- [makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)](makemeshinstance%28meshpart_pipeline_geometryarguments_surfacearguments_lightingarguments_transform_sortcategory_%29.md): Creates a drawable mesh instance pairing a mesh part with a compiled pipeline state and optional per-draw argument tables.
- [makeMeshInstanceArray(renderTargets:count:)](makemeshinstancearray%28rendertargets_count_%29.md): Creates a fixed-capacity ordered collection of mesh instances for the given render targets.
- [makeInstanceTransformResource(instanceCapacity:)](makeinstancetransformresource%28instancecapacity_%29.md): Creates a transform buffer resource for GPU instancing.
