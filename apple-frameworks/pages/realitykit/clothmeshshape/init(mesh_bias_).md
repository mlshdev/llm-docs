> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothmeshshape/init(mesh:bias:)](https://developer.apple.com/documentation/realitykit/clothmeshshape/init(mesh:bias:))

# init(mesh:bias:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Creates a mesh shape from the given mesh resource and inflation bias.

## Declaration

```swift
init(mesh: ClothMeshResource, bias: Float)
```

## Parameters

- `mesh`: The mesh resource that the shape is based on.
- `bias`: The distance by which the vertices are extended outwards along their normals.
