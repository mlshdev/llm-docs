> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makemeshpart(resource:indexoffset:indexcount:primitive:windingorder:bounds:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makemeshpart(resource:indexoffset:indexcount:primitive:windingorder:bounds:))

# makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a mesh part that selects a contiguous range of indices from a mesh resource.

## Declaration

```swift
func makeMeshPart(resource: LowLevelMeshResource, indexOffset: Int, indexCount: Int, primitive: MTLPrimitiveType, windingOrder: MTLWinding, bounds: BoundingSphereBox) throws -> LowLevelMeshPart
```

## Parameters

- `resource`: The mesh resource whose index and vertex buffers this part draws from.
- `indexOffset`: The byte offset of the first index within the index buffer.
- `indexCount`: The number of indices to use for this part.
- `primitive`: The geometric primitive type to use when rendering.
- `windingOrder`: The winding order that identifies front-facing polygons.
- `bounds`: The model-space bounding volume for this part.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelMeshPart](../lowlevelmeshpart.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the index range falls outside the resource’s index buffer.

## See Also

### Creating meshes

- [makeMeshResource(descriptor:)](makemeshresource%28descriptor_%29.md): Creates a mesh resource from the given descriptor.
- [makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)](makemeshinstance%28meshpart_pipeline_geometryarguments_surfacearguments_lightingarguments_transform_sortcategory_%29.md): Creates a drawable mesh instance pairing a mesh part with a compiled pipeline state and optional per-draw argument tables.
- [makeMeshInstanceArray(renderTargets:count:)](makemeshinstancearray%28rendertargets_count_%29.md): Creates a fixed-capacity ordered collection of mesh instances for the given render targets.
- [makeInstanceTransformResource(instanceCapacity:)](makeinstancetransformresource%28instancecapacity_%29.md): Creates a transform buffer resource for GPU instancing.
