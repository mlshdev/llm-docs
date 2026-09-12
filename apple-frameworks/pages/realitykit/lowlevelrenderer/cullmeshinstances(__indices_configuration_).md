> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/cullmeshinstances(_:indices:configuration:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/cullmeshinstances(_:indices:configuration:))

# cullMeshInstances(\_:indices:configuration:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Culls mesh instances against a frustum and returns the surviving indices.

## Declaration

```swift
static func cullMeshInstances(_ meshInstances: LowLevelMeshInstanceArray, indices: Span<Int>, configuration: LowLevelRenderer.CullConfiguration) -> [Int]
```

## Parameters

- `meshInstances`: The mesh instance array to test.
- `indices`: The candidate indices to test.
- `configuration`: The cull configuration supplying the frustum planes.

<a id="return-value"></a>

## Return Value

The indices of instances that are not culled, in input order.

<a id="discussion"></a>

## Discussion

A convenience overload that allocates and returns the surviving indices as an array.

## See Also

### Culling and sorting instances

- [cullMeshInstances(\_:indices:outIndices:configuration:)](cullmeshinstances%28__indices_outindices_configuration_%29.md): Culls mesh instances against a frustum, writing surviving indices to an output span.
- [LowLevelRenderer.CullConfiguration](cullconfiguration.md): The configuration for a frustum culling operation.
- [sortMeshInstances(\_:indices:configuration:)](sortmeshinstances%28__indices_configuration_%29.md): Sorts the given mesh instances by sort category and, for transparent instances, by back-to-front distance from the camera.
- [LowLevelRenderer.SortConfiguration](sortconfiguration.md): The configuration for a mesh instance sort pass.
