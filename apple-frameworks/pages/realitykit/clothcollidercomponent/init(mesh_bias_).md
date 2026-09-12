> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcollidercomponent/init(mesh:bias:)](https://developer.apple.com/documentation/realitykit/clothcollidercomponent/init(mesh:bias:))

# init(mesh:bias:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a cloth collider component with a mesh shape built from the given mesh resource.

## Declaration

```swift
init(mesh: ClothMeshResource, bias: Float)
```

## Parameters

- `mesh`: Defines the mesh resource to use for the shape of the collider.
- `bias`: The distance by which the mesh vertices are extended outwards along the direction of their normals.

## See Also

### Creating a cloth collider

- [init(shape:)](init%28shape_%29.md): Creates a cloth collider component with the given shape.
- [init(meshShape:)](init%28meshshape_%29.md): Creates a cloth collider component with the given mesh shape.
