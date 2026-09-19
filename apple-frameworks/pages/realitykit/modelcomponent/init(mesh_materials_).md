> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/modelcomponent/init(mesh:materials:)

# init(mesh:materials:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a model component from a mesh and a collection of materials.

## Declaration

```swift
init(mesh: MeshResource, materials: [any Material])
```

## Parameters

- `mesh`: The mesh that describes the shape of the model.
- `materials`: Materials used to give the mesh a certain visual appearance.
