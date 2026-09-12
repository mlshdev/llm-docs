> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelentity/init(mesh:materials:)](https://developer.apple.com/documentation/realitykit/modelentity/init(mesh:materials:))

# init(mesh:materials:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a model entity with a particular mesh and set of materials.

## Declaration

```swift
@MainActor @preconcurrency init(mesh: MeshResource, materials: [any Material] = [])
```

## Parameters

- `mesh`: A mesh that defines the geometry of the model.
- `materials`: Material resources that define the appearance of the model.

## See Also

### Creating a model

- [init()](init%28%29.md): Creates a model entity.
- [init(mesh:materials:collisionShape:mass:)](init%28mesh_materials_collisionshape_mass_%29.md): Creates a model entity with a particular mesh, set of materials, collision shape, and mass.
- [init(mesh:materials:collisionShapes:mass:)](init%28mesh_materials_collisionshapes_mass_%29.md): Creates a model entity with a particular mesh, set of materials, a composite collision shape, and mass.
