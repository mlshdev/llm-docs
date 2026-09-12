> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometrysource](https://developer.apple.com/documentation/scenekit/scngeometrysource)

# SCNGeometrySource (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A container for vertex data forming part of the definition for a three-dimensional object, or geometry.

## Declaration

```swift
class SCNGeometrySource
```

<a id="overview"></a>

## Overview

You use geometry sources together with [SCNGeometryElement](scngeometryelement.md) objects to define custom [SCNGeometry](scngeometry.md) objects or to inspect the data that composes an existing geometry.

You create a custom geometry using a three-step process:

1. Create one or more [SCNGeometrySource](scngeometrysource.md) objects containing vertex data. Each geometry source defines an attribute, or semantic, of the vertices it describes. You must provide at least one geometry source, using the [vertex](scngeometrysource/semantic-swift.struct/vertex.md) semantic, to create a custom geometry; typically you also provide geometry sources for surface normals and texture coordinates.
2. Create at least one [SCNGeometryElement](scngeometryelement.md) object, containing an array of indices identifying vertices in the geometry sources and describing the drawing primitive that SceneKit uses to connect the vertices when rendering the geometry.
3. Create an [SCNGeometry](scngeometry.md) instance from the geometry sources and geometry elements.

<a id="Interleaving-Vertex-Data"></a>

### Interleaving Vertex Data

Because most geometries use more than one geometry source and the GPU typically uses data from multiple sources together, you can achieve better rendering performance for custom geometries by interleaving the vertex data for multiple semantics in the same array.

To do this, first create an array where each element contains values for multiple semantics for the same vertex. Next, create an [NSData](../foundation/nsdata.md) object from that array, and create each geometry source from that data using the `offset` and `stride` parameters to specify where the values for each semantic can be found in the array. To make specifying the sizes and locations of vectors more convenient, you can define your own data structure for vertices and use the `sizeof` (and, in Objective-C, `offsetof`) functions, as shown in Listing 1.

Listing 1. Creating multiple geometry sources from interleaved data

```objc
typedef struct {
    float x, y, z;    // position
    float nx, ny, nz; // normal
    float s, t;       // texture coordinates
} MyVertex;
 
MyVertex vertices[VERTEX_COUNT] = { /* ... vertex data ... */ };
NSData *data = [NSData dataWithBytes:vertices length:sizeof(vertices)];
SCNGeometrySource *vertexSource, *normalSource, *tcoordSource;
 
vertexSource = [SCNGeometrySource geometrySourceWithData:data
                                                semantic:SCNGeometrySourceSemanticVertex
                                             vectorCount:VERTEX_COUNT
                                         floatComponents:YES
                                     componentsPerVector:3 // x, y, z
                                       bytesPerComponent:sizeof(float)
                                              dataOffset:offsetof(MyVertex, x)
                                              dataStride:sizeof(MyVertex)];
 
normalSource = [SCNGeometrySource geometrySourceWithData:data
                                                semantic:SCNGeometrySourceSemanticNormal
                                             vectorCount:VERTEX_COUNT
                                         floatComponents:YES
                                     componentsPerVector:3 // nx, ny, nz
                                       bytesPerComponent:sizeof(float)
                                              dataOffset:offsetof(MyVertex, nx)
                                              dataStride:sizeof(MyVertex)];
 
tcoordSource = [SCNGeometrySource geometrySourceWithData:data
                                                semantic:SCNGeometrySourceSemanticTexcoord
                                             vectorCount:VERTEX_COUNT
                                         floatComponents:YES
                                     componentsPerVector:2 // s, t
                                       bytesPerComponent:sizeof(float)
                                              dataOffset:offsetof(MyVertex, s)
                                              dataStride:sizeof(MyVertex)];
```

## Topics

### Creating Geometry Sources

- [init(data:semantic:vectorCount:usesFloatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride:)](scngeometrysource/init%28data_semantic_vectorcount_usesfloatcomponents_componentspervector_bytespercomponent_dataoffset_datastride_%29.md): Creates a geometry source from the specified data and options.
- [init(vertices:)](scngeometrysource/init%28vertices_%29.md): Deprecated. Creates a geometry source from an array of vertex positions.
- [init(normals:)](scngeometrysource/init%28normals_%29.md): Deprecated. Creates a geometry source from an array of normal vectors.
- [init(textureCoordinates:)](scngeometrysource/init%28texturecoordinates_%29.md): Deprecated. Creates a geometry source from an array of texture coordinate points.

### Inspecting a Geometry Source

- [data](scngeometrysource/data.md): The data for the geometry source.
- [semantic](scngeometrysource/semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](scngeometrysource/vectorcount.md): The number of vectors in the data.
- [usesFloatComponents](scngeometrysource/usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [componentsPerVector](scngeometrysource/componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](scngeometrysource/bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](scngeometrysource/dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](scngeometrysource/datastride.md): The number of bytes from a vector to the next one in the data.

### Creating GPU-Mutable Geometry Sources

- [init(buffer:vertexFormat:semantic:vertexCount:dataOffset:dataStride:)](scngeometrysource/init%28buffer_vertexformat_semantic_vertexcount_dataoffset_datastride_%29.md): Creates a geometry source whose vertex data resides in the specified Metal buffer, allowing modification through a Metal compute shader.

### Geometry Source Semantics

- [SCNGeometrySource.Semantic](scngeometrysource/semantic-swift.struct.md)

### Initializers

- [init(coder:)](scngeometrysource/init%28coder_%29.md)
- [init(data:semantic:vectorCount:floatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride:)](scngeometrysource/init%28data_semantic_vectorcount_floatcomponents_componentspervector_bytespercomponent_dataoffset_datastride_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Geometry

- [SCNGeometry](scngeometry.md): A three-dimensional shape (also called a model or mesh) that can be displayed in a scene, with attached materials that define its appearance.
- [SCNGeometryElement](scngeometryelement.md): A container for index data describing how vertices connect to define a three-dimensional object, or geometry.
- [Built-in Geometry Types](built-in-geometry-types.md): Basic shapes—such as spheres, boxes, and planes—and features for generating 3D objects from 2D text and Bézier curves.

# SCNGeometrySource (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A container for vertex data forming part of the definition for a three-dimensional object, or geometry.

## Declaration

```objectivec
@interface SCNGeometrySource : NSObject
```

<a id="overview"></a>

## Overview

You use geometry sources together with [SCNGeometryElement](scngeometryelement.md) objects to define custom [SCNGeometry](scngeometry.md) objects or to inspect the data that composes an existing geometry.

You create a custom geometry using a three-step process:

1. Create one or more [SCNGeometrySource](scngeometrysource.md) objects containing vertex data. Each geometry source defines an attribute, or semantic, of the vertices it describes. You must provide at least one geometry source, using the [SCNGeometrySourceSemanticVertex](scngeometrysource/semantic-swift.struct/vertex.md) semantic, to create a custom geometry; typically you also provide geometry sources for surface normals and texture coordinates.
2. Create at least one [SCNGeometryElement](scngeometryelement.md) object, containing an array of indices identifying vertices in the geometry sources and describing the drawing primitive that SceneKit uses to connect the vertices when rendering the geometry.
3. Create an [SCNGeometry](scngeometry.md) instance from the geometry sources and geometry elements.

<a id="Interleaving-Vertex-Data"></a>

### Interleaving Vertex Data

Because most geometries use more than one geometry source and the GPU typically uses data from multiple sources together, you can achieve better rendering performance for custom geometries by interleaving the vertex data for multiple semantics in the same array.

To do this, first create an array where each element contains values for multiple semantics for the same vertex. Next, create an [NSData](../foundation/nsdata.md) object from that array, and create each geometry source from that data using the `offset` and `stride` parameters to specify where the values for each semantic can be found in the array. To make specifying the sizes and locations of vectors more convenient, you can define your own data structure for vertices and use the `sizeof` (and, in Objective-C, `offsetof`) functions, as shown in Listing 1.

Listing 1. Creating multiple geometry sources from interleaved data

```objc
typedef struct {
    float x, y, z;    // position
    float nx, ny, nz; // normal
    float s, t;       // texture coordinates
} MyVertex;
 
MyVertex vertices[VERTEX_COUNT] = { /* ... vertex data ... */ };
NSData *data = [NSData dataWithBytes:vertices length:sizeof(vertices)];
SCNGeometrySource *vertexSource, *normalSource, *tcoordSource;
 
vertexSource = [SCNGeometrySource geometrySourceWithData:data
                                                semantic:SCNGeometrySourceSemanticVertex
                                             vectorCount:VERTEX_COUNT
                                         floatComponents:YES
                                     componentsPerVector:3 // x, y, z
                                       bytesPerComponent:sizeof(float)
                                              dataOffset:offsetof(MyVertex, x)
                                              dataStride:sizeof(MyVertex)];
 
normalSource = [SCNGeometrySource geometrySourceWithData:data
                                                semantic:SCNGeometrySourceSemanticNormal
                                             vectorCount:VERTEX_COUNT
                                         floatComponents:YES
                                     componentsPerVector:3 // nx, ny, nz
                                       bytesPerComponent:sizeof(float)
                                              dataOffset:offsetof(MyVertex, nx)
                                              dataStride:sizeof(MyVertex)];
 
tcoordSource = [SCNGeometrySource geometrySourceWithData:data
                                                semantic:SCNGeometrySourceSemanticTexcoord
                                             vectorCount:VERTEX_COUNT
                                         floatComponents:YES
                                     componentsPerVector:2 // s, t
                                       bytesPerComponent:sizeof(float)
                                              dataOffset:offsetof(MyVertex, s)
                                              dataStride:sizeof(MyVertex)];
```

## Topics

### Creating Geometry Sources

- [geometrySourceWithData:semantic:vectorCount:floatComponents:componentsPerVector:bytesPerComponent:dataOffset:dataStride:](scngeometrysource/init%28data_semantic_vectorcount_usesfloatcomponents_componentspervector_bytespercomponent_dataoffset_datastride_%29.md): Creates a geometry source from the specified data and options.
- [geometrySourceWithVertices:count:](scngeometrysource/geometrysourcewithvertices_count_.md): Deprecated. Creates a geometry source from an array of vertex positions.
- [geometrySourceWithNormals:count:](scngeometrysource/geometrysourcewithnormals_count_.md): Deprecated. Creates a geometry source from an array of normal vectors.
- [geometrySourceWithTextureCoordinates:count:](scngeometrysource/geometrysourcewithtexturecoordinates_count_.md): Deprecated. Creates a geometry source from an array of texture coordinate points.

### Inspecting a Geometry Source

- [data](scngeometrysource/data.md): The data for the geometry source.
- [semantic](scngeometrysource/semantic-swift.property.md): The semantic value (or attribute) the geometry source describes for each vertex.
- [vectorCount](scngeometrysource/vectorcount.md): The number of vectors in the data.
- [floatComponents](scngeometrysource/usesfloatcomponents.md): A Boolean value that indicates whether vector components are floating-point values.
- [componentsPerVector](scngeometrysource/componentspervector.md): The number of scalar components in each vector.
- [bytesPerComponent](scngeometrysource/bytespercomponent.md): The size, in bytes, of each vector component.
- [dataOffset](scngeometrysource/dataoffset.md): The offset, in bytes, from the beginning of the data to the first vector component to be used in the geometry source.
- [dataStride](scngeometrysource/datastride.md): The number of bytes from a vector to the next one in the data.

### Creating GPU-Mutable Geometry Sources

- [geometrySourceWithBuffer:vertexFormat:semantic:vertexCount:dataOffset:dataStride:](scngeometrysource/init%28buffer_vertexformat_semantic_vertexcount_dataoffset_datastride_%29.md): Creates a geometry source whose vertex data resides in the specified Metal buffer, allowing modification through a Metal compute shader.

### Geometry Source Semantics

- [SCNGeometrySourceSemantic](scngeometrysource/semantic-swift.struct.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Geometry

- [SCNGeometry](scngeometry.md): A three-dimensional shape (also called a model or mesh) that can be displayed in a scene, with attached materials that define its appearance.
- [SCNGeometryElement](scngeometryelement.md): A container for index data describing how vertices connect to define a three-dimensional object, or geometry.
- [Built-in Geometry Types](built-in-geometry-types.md): Basic shapes—such as spheres, boxes, and planes—and features for generating 3D objects from 2D text and Bézier curves.
