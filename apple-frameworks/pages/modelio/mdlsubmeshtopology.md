> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmeshtopology](https://developer.apple.com/documentation/modelio/mdlsubmeshtopology)

# MDLSubmeshTopology (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.

## Declaration

```swift
class MDLSubmeshTopology
```

<a id="overview"></a>

## Overview

Model I/O creates topology objects when importing assets containing non-uniform index buffers (that is, index buffers not composed of a single primitive type such as triangles or quads). You can also use topology objects (or load assets from file formats supporting topology information) to describe models for surface subdivision, identifying which edges or vertices remain sharp or become smooth when you use the [newSubdividedMesh(\_:submeshIndex:subdivisionLevels:)](mdlmesh/newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md) method.

## Topics

### Identifying Faces

- [faceTopology](mdlsubmeshtopology/facetopology.md): A buffer identifying the faces in the submesh and the number of vertices in each.
- [faceCount](mdlsubmeshtopology/facecount.md): The number of faces in the submesh’s face topology buffer.

### Identifying Creases

- [edgeCreaseIndices](mdlsubmeshtopology/edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreases](mdlsubmeshtopology/edgecreases.md): A buffer containing sharpness values to be applied to edges during surface subdivision.
- [edgeCreaseCount](mdlsubmeshtopology/edgecreasecount.md): The number of entries in the edge creases buffers.
- [vertexCreaseIndices](mdlsubmeshtopology/vertexcreaseindices.md): A buffer containing vertex indices to be treated as creases during surface subdivision.
- [vertexCreases](mdlsubmeshtopology/vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](mdlsubmeshtopology/vertexcreasecount.md): The number of entries in the vertex creases buffers.

### Identifying Holes

- [holes](mdlsubmeshtopology/holes.md): An index buffer identifying faces to be treated as holes in the mesh during surface subdivision.
- [holeCount](mdlsubmeshtopology/holecount.md): The number of entries in the holes buffer.

### Initializers

- [init(submesh:)](mdlsubmeshtopology/init%28submesh_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.

# MDLSubmeshTopology (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.

## Declaration

```objectivec
@interface MDLSubmeshTopology : NSObject
```

<a id="overview"></a>

## Overview

Model I/O creates topology objects when importing assets containing non-uniform index buffers (that is, index buffers not composed of a single primitive type such as triangles or quads). You can also use topology objects (or load assets from file formats supporting topology information) to describe models for surface subdivision, identifying which edges or vertices remain sharp or become smooth when you use the [newSubdividedMesh:submeshIndex:subdivisionLevels:](mdlmesh/newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md) method.

## Topics

### Identifying Faces

- [faceTopology](mdlsubmeshtopology/facetopology.md): A buffer identifying the faces in the submesh and the number of vertices in each.
- [faceCount](mdlsubmeshtopology/facecount.md): The number of faces in the submesh’s face topology buffer.

### Identifying Creases

- [edgeCreaseIndices](mdlsubmeshtopology/edgecreaseindices.md): A buffer containing vertex indices that describe edges to be treated as creases during surface subdivision.
- [edgeCreases](mdlsubmeshtopology/edgecreases.md): A buffer containing sharpness values to be applied to edges during surface subdivision.
- [edgeCreaseCount](mdlsubmeshtopology/edgecreasecount.md): The number of entries in the edge creases buffers.
- [vertexCreaseIndices](mdlsubmeshtopology/vertexcreaseindices.md): A buffer containing vertex indices to be treated as creases during surface subdivision.
- [vertexCreases](mdlsubmeshtopology/vertexcreases.md): A buffer containing sharpness values to be applied to points during surface subdivision.
- [vertexCreaseCount](mdlsubmeshtopology/vertexcreasecount.md): The number of entries in the vertex creases buffers.

### Identifying Holes

- [holes](mdlsubmeshtopology/holes.md): An index buffer identifying faces to be treated as holes in the mesh during surface subdivision.
- [holeCount](mdlsubmeshtopology/holecount.md): The number of entries in the holes buffer.

### Instance Methods

- [initWithSubmesh:](mdlsubmeshtopology/init%28submesh_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.
