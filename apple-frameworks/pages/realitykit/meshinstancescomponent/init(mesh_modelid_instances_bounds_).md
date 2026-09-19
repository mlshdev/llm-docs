> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshinstancescomponent/init(mesh:modelid:instances:bounds:)

# init(mesh:modelID:instances:bounds:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a mesh instances component with a mesh resource, optional model ID, instance data, and optional bounding box.

## Declaration

```swift
init(mesh: MeshResource, modelID: String? = nil, instances: LowLevelInstanceData, bounds: BoundingBox? = nil) throws
```

## Parameters

- `mesh`: The mesh resource to instance.
- `modelID`: The name of the model to use. Set to `nil` if there is only one model in the mesh resource.
- `instances`: The instance data containing the number of instances, and the transforms for each instance.
- `bounds`: The bounding box to use for the instance group this part draws.
