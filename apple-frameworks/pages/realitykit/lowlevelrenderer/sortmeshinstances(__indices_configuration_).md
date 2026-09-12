> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/sortmeshinstances(_:indices:configuration:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/sortmeshinstances(_:indices:configuration:))

# sortMeshInstances(\_:indices:configuration:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Sorts the given mesh instances by sort category and, for transparent instances, by back-to-front distance from the camera.

## Declaration

```swift
static func sortMeshInstances(_ meshInstances: LowLevelMeshInstanceArray, indices: inout MutableSpan<Int>, configuration: LowLevelRenderer.SortConfiguration)
```

## Parameters

- `meshInstances`: The mesh instance array whose elements to sort.
- `indices`: The index span to sort in place.
- `configuration`: The sort configuration supplying the camera position.

<a id="discussion"></a>

## Discussion

Call this before `render(using:_:)` to produce a draw order for the callback. Opaque instances sort before transparent ones; within transparent instances, farther instances sort before nearer ones.

## See Also

### Culling and sorting instances

- [cullMeshInstances(\_:indices:outIndices:configuration:)](cullmeshinstances%28__indices_outindices_configuration_%29.md): Culls mesh instances against a frustum, writing surviving indices to an output span.
- [cullMeshInstances(\_:indices:configuration:)](cullmeshinstances%28__indices_configuration_%29.md): Culls mesh instances against a frustum and returns the surviving indices.
- [LowLevelRenderer.CullConfiguration](cullconfiguration.md): The configuration for a frustum culling operation.
- [LowLevelRenderer.SortConfiguration](sortconfiguration.md): The configuration for a mesh instance sort pass.
