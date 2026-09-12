> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdescriptor](https://developer.apple.com/documentation/realitykit/meshdescriptor)

# MeshDescriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Defines a 3D mesh’s structure and data.

## Declaration

```swift
struct MeshDescriptor
```

<a id="overview"></a>

## Overview

Create or modify 3D shapes in a RealityKit scene using `MeshDescriptor`, which provides properties and methods to define the vertices, normals, texture coordinates, and other attributes of the mesh.

Apply the mesh to an [Entity](entity.md) by creating a [MeshResource](meshresource.md) with `MeshResource/generate(from:)-6l1q2`, and create a [ModelComponent](modelcomponent.md) with [init(mesh:materials:)](modelcomponent/init%28mesh_materials_%29.md).

Start by creating a basic triangle with a `MeshDescriptor` instance.

```swift
var descriptor = MeshDescriptor(name: "triangle")
descriptor.positions = MeshBuffers.Positions([
    [-1, -1, 0], [1, -1, 0], [0, 1, 0]
])
descriptor.primitives = .triangles([0, 1, 2])
```

## Topics

### Initializers

- [init(name:)](meshdescriptor/init%28name_%29.md): Creates an empty mesh descriptor.

### Instance Properties

- [materials](meshdescriptor/materials-swift.property.md): Material assignments.
- [name](meshdescriptor/name.md): The name of the mesh.
- [primitives](meshdescriptor/primitives-swift.property.md): The primitives that make up the mesh.

### Enumerations

- [MeshDescriptor.Materials](meshdescriptor/materials-swift.enum.md)
- [MeshDescriptor.Primitives](meshdescriptor/primitives-swift.enum.md): Indicates which primitive shape type a mesh applies to its vertex indices.

## Relationships

### Conforms To

- [MeshBufferContainer](meshbuffercontainer.md)

## See Also

### Static meshes

- [MeshDescriptor.Primitives](meshdescriptor/primitives-swift.enum.md): Indicates which primitive shape type a mesh applies to its vertex indices.
- [MeshDescriptor.Materials](meshdescriptor/materials-swift.enum.md)
