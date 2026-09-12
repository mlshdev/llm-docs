> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullmeshinstances(_:indices:outindices:configuration:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullmeshinstances(_:indices:outindices:configuration:))

# cullMeshInstances(\_:indices:outIndices:configuration:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Culls mesh instances against a frustum, writing surviving indices to an output span.

## Declaration

```swift
static func cullMeshInstances(_ meshInstances: LowLevelMeshInstanceArray, indices: Span<Int>, outIndices: inout OutputSpan<Int>, configuration: LowLevelRenderer.CullConfiguration)
```

## Parameters

- `meshInstances`: The mesh instance array to test.
- `indices`: The candidate indices to test.
- `outIndices`: The span that receives surviving indices. Must have free capacity of at least `indices.count`.
- `configuration`: The cull configuration supplying the frustum planes.

<a id="discussion"></a>

## Discussion

Tests each instance’s bounds against the planes in `configuration.frustum`, using `meshInstance.bounds` when set and falling back to the mesh part’s bounds otherwise. Instances whose bounds lie entirely outside any single plane are discarded; the rest are appended to `outIndices` in the same order as `indices`. `nil` slots in `meshInstances` are skipped.

## See Also

### Culling and sorting instances

- [cullMeshInstances(\_:indices:configuration:)](cullmeshinstances%28__indices_configuration_%29.md): Culls mesh instances against a frustum and returns the surviving indices.
- [LowLevelRenderer.CullConfiguration](cullconfiguration.md): The configuration for a frustum culling operation.
- [sortMeshInstances(\_:indices:configuration:)](sortmeshinstances%28__indices_configuration_%29.md): Sorts the given mesh instances by sort category and, for transparent instances, by back-to-front distance from the camera.
- [LowLevelRenderer.SortConfiguration](sortconfiguration.md): The configuration for a mesh instance sort pass.
