> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelentity/init(mesh:materials:collisionshape:mass:)](https://developer.apple.com/documentation/realitykit/modelentity/init(mesh:materials:collisionshape:mass:))

# init(mesh:materials:collisionShape:mass:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a model entity with a particular mesh, set of materials, collision shape, and mass.

## Declaration

```swift
@MainActor @preconcurrency init(mesh: MeshResource, materials: [any Material] = [], collisionShape: ShapeResource, mass: Float)
```

## Parameters

- `mesh`: A mesh that defines the geometry of the model.
- `materials`: Material resources that define the appearance of the model.
- `collisionShape`: A collection of shape resources that define a composite collision shape.
- `mass`: The mass of the model in kilograms.

## See Also

### Creating a model

- [init()](init%28%29.md): Creates a model entity.
- [init(mesh:materials:)](init%28mesh_materials_%29.md): Creates a model entity with a particular mesh and set of materials.
- [init(mesh:materials:collisionShapes:mass:)](init%28mesh_materials_collisionshapes_mass_%29.md): Creates a model entity with a particular mesh, set of materials, a composite collision shape, and mass.
