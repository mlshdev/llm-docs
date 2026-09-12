> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh](https://developer.apple.com/documentation/modelio/mdlsubmesh)

# MDLSubmesh (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for index buffer data and material information to be used in rendering all or part of a 3D object.

## Declaration

```swift
class MDLSubmesh
```

<a id="overview"></a>

## Overview

Submeshes are contained in [MDLMesh](mdlmesh.md) objects, which provide vertex buffer data that a submesh’s index data refers to. Together, the vertex and index data describe the geometric form of a portion of the mesh, and the submesh’s [material](mdlsubmesh/material.md) property determines its intended surface appearance for rendering.

## Topics

### Creating a Submesh

- [init(indexBuffer:indexCount:indexType:geometryType:material:)](mdlsubmesh/init%28indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a submesh with an index buffer and the specified properties.
- [init(name:indexBuffer:indexCount:indexType:geometryType:material:)](mdlsubmesh/init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [init(name:indexBuffer:indexCount:indexType:geometryType:material:topology:)](mdlsubmesh/init%28name_indexbuffer_indexcount_indextype_geometrytype_material_topology_%29.md): Initializes a named submesh with a specific topology.
- [init(mdlSubmesh:indexType:geometryType:)](mdlsubmesh/init%28mdlsubmesh_indextype_geometrytype_%29-4czyc.md): Initializes a submesh by copying or converting another submesh.

### Working with a Submesh’s Index Buffer

- [indexBuffer](mdlsubmesh/indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](mdlsubmesh/indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](mdlsubmesh/indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](mdlsubmesh/geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](mdlsubmesh/topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBuffer(asIndexType:)](mdlsubmesh/indexbuffer%28asindextype_%29.md)

### Associating Materials with a Submesh

- [material](mdlsubmesh/material.md): An object that describes the intended surface appearance of the submesh for rendering.

### Identifying a Submesh

- [name](mdlsubmesh/name.md): A descriptive name for the submesh.

### Constants

- [MDLIndexBitDepth](mdlindexbitdepth.md): Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.
- [MDLGeometryType](mdlgeometrytype.md): Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.

### Initializers

- [init(MDLSubmesh:indexType:geometryType:)](mdlsubmesh/init%28mdlsubmesh_indextype_geometrytype_%29-6b9cm.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MDLNamed](mdlnamed.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.

# MDLSubmesh (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for index buffer data and material information to be used in rendering all or part of a 3D object.

## Declaration

```objectivec
@interface MDLSubmesh : NSObject
```

<a id="overview"></a>

## Overview

Submeshes are contained in [MDLMesh](mdlmesh.md) objects, which provide vertex buffer data that a submesh’s index data refers to. Together, the vertex and index data describe the geometric form of a portion of the mesh, and the submesh’s [material](mdlsubmesh/material.md) property determines its intended surface appearance for rendering.

## Topics

### Creating a Submesh

- [initWithIndexBuffer:indexCount:indexType:geometryType:material:](mdlsubmesh/init%28indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a submesh with an index buffer and the specified properties.
- [initWithName:indexBuffer:indexCount:indexType:geometryType:material:](mdlsubmesh/init%28name_indexbuffer_indexcount_indextype_geometrytype_material_%29.md): Initializes a named submesh with an index buffer and the specified properties.
- [initWithName:indexBuffer:indexCount:indexType:geometryType:material:topology:](mdlsubmesh/init%28name_indexbuffer_indexcount_indextype_geometrytype_material_topology_%29.md): Initializes a named submesh with a specific topology.
- [initWithMDLSubmesh:indexType:geometryType:](mdlsubmesh/init%28mdlsubmesh_indextype_geometrytype_%29-4czyc.md): Initializes a submesh by copying or converting another submesh.

### Working with a Submesh’s Index Buffer

- [indexBuffer](mdlsubmesh/indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](mdlsubmesh/indexcount.md): The number of indices in the submesh’s index buffer.
- [indexType](mdlsubmesh/indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](mdlsubmesh/geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](mdlsubmesh/topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBufferAsIndexType:](mdlsubmesh/indexbuffer%28asindextype_%29.md)

### Associating Materials with a Submesh

- [material](mdlsubmesh/material.md): An object that describes the intended surface appearance of the submesh for rendering.

### Identifying a Submesh

- [name](mdlsubmesh/name.md): A descriptive name for the submesh.

### Constants

- [MDLIndexBitDepth](mdlindexbitdepth.md): Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.
- [MDLGeometryType](mdlgeometrytype.md): Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.

### Type Methods

- [submeshWithSCNGeometryElement:](mdlsubmesh/submeshwithscngeometryelement_.md)
- [submeshWithSCNGeometryElement:bufferAllocator:](mdlsubmesh/submeshwithscngeometryelement_bufferallocator_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MDLNamed](mdlnamed.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLMesh](mdlmesh.md): A container for vertex buffer data to be used in rendering a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.
