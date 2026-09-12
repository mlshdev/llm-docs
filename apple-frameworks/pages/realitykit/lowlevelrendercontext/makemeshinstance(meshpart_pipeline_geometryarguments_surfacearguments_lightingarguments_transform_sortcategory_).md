> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontext/makemeshinstance(meshpart:pipeline:geometryarguments:surfacearguments:lightingarguments:transform:sortcategory:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontext/makemeshinstance(meshpart:pipeline:geometryarguments:surfacearguments:lightingarguments:transform:sortcategory:))

# makeMeshInstance(meshPart:pipeline:geometryArguments:surfaceArguments:lightingArguments:transform:sortCategory:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a drawable mesh instance pairing a mesh part with a compiled pipeline state and optional per-draw argument tables.

## Declaration

```swift
func makeMeshInstance(meshPart: LowLevelMeshPart, pipeline: LowLevelRenderPipelineState, geometryArguments: LowLevelArgumentTable?, surfaceArguments: LowLevelArgumentTable?, lightingArguments: LowLevelArgumentTable?, transform: simd_float4x4, sortCategory: LowLevelMeshInstance.SortCategory) throws -> LowLevelMeshInstance
```

## Parameters

- `meshPart`: The mesh part this instance draws.
- `pipeline`: The compiled pipeline state used to render this instance.
- `geometryArguments`: The argument table bound to the geometry modifier stage, or `nil` if none.
- `surfaceArguments`: The argument table bound to the surface shader stage, or `nil` if none.
- `lightingArguments`: The argument table bound to the lighting function stage, or `nil` if none.
- `transform`: The initial local-to-world transform of this instance.
- `sortCategory`: The category (opaque or transparent) for sorting.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelMeshInstance](../lowlevelmeshinstance.md).

<a id="discussion"></a>

## Discussion

Pass `nil` for any argument table stage not required by the material.

> **Throws**

> An error if the pipeline or argument tables are incompatible with the render context.

## See Also

### Creating meshes

- [makeMeshResource(descriptor:)](makemeshresource%28descriptor_%29.md): Creates a mesh resource from the given descriptor.
- [makeMeshPart(resource:indexOffset:indexCount:primitive:windingOrder:bounds:)](makemeshpart%28resource_indexoffset_indexcount_primitive_windingorder_bounds_%29.md): Creates a mesh part that selects a contiguous range of indices from a mesh resource.
- [makeMeshInstanceArray(renderTargets:count:)](makemeshinstancearray%28rendertargets_count_%29.md): Creates a fixed-capacity ordered collection of mesh instances for the given render targets.
- [makeInstanceTransformResource(instanceCapacity:)](makeinstancetransformresource%28instancecapacity_%29.md): Creates a transform buffer resource for GPU instancing.
