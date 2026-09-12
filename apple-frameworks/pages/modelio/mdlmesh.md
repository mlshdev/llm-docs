> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh](https://developer.apple.com/documentation/modelio/mdlmesh)

# MDLMesh (Swift)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for vertex buffer data to be used in rendering a 3D object.

## Declaration

```swift
class MDLMesh
```

<a id="overview"></a>

## Overview

A mesh contains one or more [MDLSubmesh](mdlsubmesh.md) objects. Each submesh contains index buffer data that describes how the mesh’s vertices should be combined for drawing and references material information describing an intended surface appearance for the submesh. Typically, you obtain meshes by traversing the object hierarchy of a [MDLAsset](mdlasset.md) object, but you can also create meshes from your own vertex data or create parametric meshes. The [MDLMesh](mdlmesh.md) class also supports processing meshes to generate vertex attributes or to bake lighting information.

## Topics

### Creating a Custom Mesh

- [init(vertexBuffer:vertexCount:descriptor:submeshes:)](mdlmesh/init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [init(vertexBuffers:vertexCount:descriptor:submeshes:)](mdlmesh/init%28vertexbuffers_vertexcount_descriptor_submeshes_%29.md): Creates a mesh by unifying vertex data from multiple sources with the specified parameters.
- [init(bufferAllocator:)](mdlmesh/init%28bufferallocator_%29.md)
- [newSubdividedMesh(\_:submeshIndex:subdivisionLevels:)](mdlmesh/newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md): Creates a new mesh by subdividing the specified mesh.
- [init(meshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:)](mdlmesh/init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)

### Working with Vertex Data

- [boundingBox](mdlmesh/boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](mdlmesh/submeshes.md): The array of submeshes to be used in rendering the mesh.
- [vertexBuffers](mdlmesh/vertexbuffers.md): The array of buffers that provide vertex data for the mesh.
- [vertexCount](mdlmesh/vertexcount.md): The number of vertices in the mesh.
- [vertexDescriptor](mdlmesh/vertexdescriptor.md): A description of the format and layout of the mesh’s vertex buffers.
- [allocator](mdlmesh/allocator.md)
- [addAttribute(withName:format:)](mdlmesh/addattribute%28withname_format_%29.md): Adds a vertex attribute to the mesh and creates a new, empty corresponding vertex buffer.
- [addAttribute(withName:format:type:data:stride:)](mdlmesh/addattribute%28withname_format_type_data_stride_%29.md)
- [addAttribute(withName:format:type:data:stride:time:)](mdlmesh/addattribute%28withname_format_type_data_stride_time_%29.md)
- [removeAttributeNamed(\_:)](mdlmesh/removeattributenamed%28__%29.md)
- [replaceAttributeNamed(\_:with:)](mdlmesh/replaceattributenamed%28__with_%29.md)
- [updateAttributeNamed(\_:with:)](mdlmesh/updateattributenamed%28__with_%29.md)
- [addUnwrappedTextureCoordinates(forAttributeNamed:)](mdlmesh/addunwrappedtexturecoordinates%28forattributenamed_%29.md)
- [vertexAttributeData(forAttributeNamed:)](mdlmesh/vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeData(forAttributeNamed:as:)](mdlmesh/vertexattributedata%28forattributenamed_as_%29.md)

### Generating Geometry Data

- [addNormals(withAttributeNamed:creaseThreshold:)](mdlmesh/addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasis(forTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed:)](mdlmesh/addtangentbasis%28fortexturecoordinateattributenamed_tangentattributenamed_bitangentattributenamed_%29.md): Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.
- [addTangentBasis(forTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:)](mdlmesh/addtangentbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md): Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.
- [makeVerticesUnique()](mdlmesh/makeverticesunique%28%29.md): Deprecated. Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.

### Generating Ambient Occlusion Data

- [generateAmbientOcclusionTexture(withQuality:attenuationFactor:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](mdlmesh/generateambientocclusiontexture%28withquality_attenuationfactor_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates ambient occlusion (AO) information for the mesh and saves it in the mesh as a material property texture.
- [generateAmbientOcclusionTexture(withSize:raysPerSample:attenuationFactor:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](mdlmesh/generateambientocclusiontexture%28withsize_rayspersample_attenuationfactor_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates ambient occlusion (AO) information for the mesh and saves it in the mesh as a material property texture of the specified size.
- [generateAmbientOcclusionVertexColors(withQuality:attenuationFactor:objectsToConsider:vertexAttributeNamed:)](mdlmesh/generateambientocclusionvertexcolors%28withquality_attenuationfactor_objectstoconsider_vertexattributenamed_%29.md): Calculates ambient occlusion (AO) information for the mesh and saves it in the mesh as a vertex color attribute.
- [generateAmbientOcclusionVertexColors(withRaysPerSample:attenuationFactor:objectsToConsider:vertexAttributeNamed:)](mdlmesh/generateambientocclusionvertexcolors%28withrayspersample_attenuationfactor_objectstoconsider_vertexattributenamed_%29.md): Calculates ambient occlusion (AO) information for the mesh, using the specified number of rays per sample, and saves it in the mesh as a vertex color attribute.

### Generating Light Map Data

- [generateLightMapTexture(withQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](mdlmesh/generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture.
- [generateLightMapTexture(withTextureSize:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:)](mdlmesh/generatelightmaptexture%28withtexturesize_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture of the specified size.
- [generateLightMapVertexColorsWithLights(toConsider:objectsToConsider:vertexAttributeNamed:)](mdlmesh/generatelightmapvertexcolorswithlights%28toconsider_objectstoconsider_vertexattributenamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a vertex color attribute.

### Creating Parametric Meshes

- [newBox(withDimensions:segments:geometryType:inwardNormals:allocator:)](mdlmesh/newbox%28withdimensions_segments_geometrytype_inwardnormals_allocator_%29.md): Creates a mesh in the shape of a rectangular box or cube.
- [newEllipsoid(withRadii:radialSegments:verticalSegments:geometryType:inwardNormals:hemisphere:allocator:)](mdlmesh/newellipsoid%28withradii_radialsegments_verticalsegments_geometrytype_inwardnormals_hemisphere_allocator_%29.md): Creates a mesh in the shape of an ellipsoid or sphere.
- [newCylinder(withHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:)](mdlmesh/newcylinder%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a right circular or elliptical cylinder.
- [newEllipticalCone(withHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:)](mdlmesh/newellipticalcone%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of an elliptical or circular cone.
- [newPlane(withDimensions:segments:geometryType:allocator:)](mdlmesh/newplane%28withdimensions_segments_geometrytype_allocator_%29.md): Generates a mesh in the shape of a rectangular plane.
- [newCapsule(withHeight:radii:radialSegments:verticalSegments:hemisphereSegments:geometryType:inwardNormals:allocator:)](mdlmesh/newcapsule%28withheight_radii_radialsegments_verticalsegments_hemispheresegments_geometrytype_inwardnormals_allocator_%29.md)
- [newIcosahedron(withRadius:inwardNormals:allocator:)](mdlmesh/newicosahedron%28withradius_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a regular 20-sided polyhedron with triangular faces.
- [newIcosahedron(withRadius:inwardNormals:geometryType:allocator:)](mdlmesh/newicosahedron%28withradius_inwardnormals_geometrytype_allocator_%29.md)
- [init(boxWithExtent:segments:inwardNormals:geometryType:allocator:)](mdlmesh/init%28boxwithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [init(sphereWithExtent:segments:inwardNormals:geometryType:allocator:)](mdlmesh/init%28spherewithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [init(cylinderWithExtent:segments:inwardNormals:topCap:bottomCap:geometryType:allocator:)](mdlmesh/init%28cylinderwithextent_segments_inwardnormals_topcap_bottomcap_geometrytype_allocator_%29.md)
- [init(coneWithExtent:segments:inwardNormals:cap:geometryType:allocator:)](mdlmesh/init%28conewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
- [init(planeWithExtent:segments:geometryType:allocator:)](mdlmesh/init%28planewithextent_segments_geometrytype_allocator_%29.md)
- [init(icosahedronWithExtent:inwardNormals:geometryType:allocator:)](mdlmesh/init%28icosahedronwithextent_inwardnormals_geometrytype_allocator_%29.md)
- [init(capsuleWithExtent:cylinderSegments:hemisphereSegments:inwardNormals:geometryType:allocator:)](mdlmesh/init%28capsulewithextent_cylindersegments_hemispheresegments_inwardnormals_geometrytype_allocator_%29.md)
- [init(hemisphereWithExtent:segments:inwardNormals:cap:geometryType:allocator:)](mdlmesh/init%28hemispherewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)

### Instance Methods

- [addOrthTanBasis(forTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:)](mdlmesh/addorthtanbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md)
- [flipTextureCoordinates(inAttributeNamed:)](mdlmesh/fliptexturecoordinates%28inattributenamed_%29.md)
- [makeVerticesUniqueAndReturnError()](mdlmesh/makeverticesuniqueandreturnerror%28%29.md)

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)

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
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.

# MDLMesh (Objective-C)

**Framework:** Model I/O  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A container for vertex buffer data to be used in rendering a 3D object.

## Declaration

```objectivec
@interface MDLMesh : MDLObject
```

<a id="overview"></a>

## Overview

A mesh contains one or more [MDLSubmesh](mdlsubmesh.md) objects. Each submesh contains index buffer data that describes how the mesh’s vertices should be combined for drawing and references material information describing an intended surface appearance for the submesh. Typically, you obtain meshes by traversing the object hierarchy of a [MDLAsset](mdlasset.md) object, but you can also create meshes from your own vertex data or create parametric meshes. The [MDLMesh](mdlmesh.md) class also supports processing meshes to generate vertex attributes or to bake lighting information.

## Topics

### Creating a Custom Mesh

- [initWithVertexBuffer:vertexCount:descriptor:submeshes:](mdlmesh/init%28vertexbuffer_vertexcount_descriptor_submeshes_%29.md): Creates a mesh from a single vertex buffer with the specified parameters.
- [initWithVertexBuffers:vertexCount:descriptor:submeshes:](mdlmesh/init%28vertexbuffers_vertexcount_descriptor_submeshes_%29.md): Creates a mesh by unifying vertex data from multiple sources with the specified parameters.
- [initWithBufferAllocator:](mdlmesh/init%28bufferallocator_%29.md)
- [newSubdividedMesh:submeshIndex:subdivisionLevels:](mdlmesh/newsubdividedmesh%28__submeshindex_subdivisionlevels_%29.md): Creates a new mesh by subdividing the specified mesh.
- [initMeshBySubdividingMesh:submeshIndex:subdivisionLevels:allocator:](mdlmesh/init%28meshbysubdividingmesh_submeshindex_subdivisionlevels_allocator_%29.md)

### Working with Vertex Data

- [boundingBox](mdlmesh/boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](mdlmesh/submeshes.md): The array of submeshes to be used in rendering the mesh.
- [vertexBuffers](mdlmesh/vertexbuffers.md): The array of buffers that provide vertex data for the mesh.
- [vertexCount](mdlmesh/vertexcount.md): The number of vertices in the mesh.
- [vertexDescriptor](mdlmesh/vertexdescriptor.md): A description of the format and layout of the mesh’s vertex buffers.
- [allocator](mdlmesh/allocator.md)
- [addAttributeWithName:format:](mdlmesh/addattribute%28withname_format_%29.md): Adds a vertex attribute to the mesh and creates a new, empty corresponding vertex buffer.
- [addAttributeWithName:format:type:data:stride:](mdlmesh/addattribute%28withname_format_type_data_stride_%29.md)
- [addAttributeWithName:format:type:data:stride:time:](mdlmesh/addattribute%28withname_format_type_data_stride_time_%29.md)
- [removeAttributeNamed:](mdlmesh/removeattributenamed%28__%29.md)
- [replaceAttributeNamed:withData:](mdlmesh/replaceattributenamed%28__with_%29.md)
- [updateAttributeNamed:withData:](mdlmesh/updateattributenamed%28__with_%29.md)
- [addUnwrappedTextureCoordinatesForAttributeNamed:](mdlmesh/addunwrappedtexturecoordinates%28forattributenamed_%29.md)
- [vertexAttributeDataForAttributeNamed:](mdlmesh/vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeDataForAttributeNamed:asFormat:](mdlmesh/vertexattributedata%28forattributenamed_as_%29.md)

### Generating Geometry Data

- [addNormalsWithAttributeNamed:creaseThreshold:](mdlmesh/addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasisForTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed:](mdlmesh/addtangentbasis%28fortexturecoordinateattributenamed_tangentattributenamed_bitangentattributenamed_%29.md): Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.
- [addTangentBasisForTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:](mdlmesh/addtangentbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md): Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.
- [makeVerticesUnique](mdlmesh/makeverticesunique%28%29.md): Deprecated. Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.

### Generating Ambient Occlusion Data

- [generateAmbientOcclusionTextureWithQuality:attenuationFactor:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](mdlmesh/generateambientocclusiontexture%28withquality_attenuationfactor_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates ambient occlusion (AO) information for the mesh and saves it in the mesh as a material property texture.
- [generateAmbientOcclusionTextureWithSize:raysPerSample:attenuationFactor:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](mdlmesh/generateambientocclusiontexture%28withsize_rayspersample_attenuationfactor_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates ambient occlusion (AO) information for the mesh and saves it in the mesh as a material property texture of the specified size.
- [generateAmbientOcclusionVertexColorsWithQuality:attenuationFactor:objectsToConsider:vertexAttributeNamed:](mdlmesh/generateambientocclusionvertexcolors%28withquality_attenuationfactor_objectstoconsider_vertexattributenamed_%29.md): Calculates ambient occlusion (AO) information for the mesh and saves it in the mesh as a vertex color attribute.
- [generateAmbientOcclusionVertexColorsWithRaysPerSample:attenuationFactor:objectsToConsider:vertexAttributeNamed:](mdlmesh/generateambientocclusionvertexcolors%28withrayspersample_attenuationfactor_objectstoconsider_vertexattributenamed_%29.md): Calculates ambient occlusion (AO) information for the mesh, using the specified number of rays per sample, and saves it in the mesh as a vertex color attribute.

### Generating Light Map Data

- [generateLightMapTextureWithQuality:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](mdlmesh/generatelightmaptexture%28withquality_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture.
- [generateLightMapTextureWithTextureSize:lightsToConsider:objectsToConsider:vertexAttributeNamed:materialPropertyNamed:](mdlmesh/generatelightmaptexture%28withtexturesize_lightstoconsider_objectstoconsider_vertexattributenamed_materialpropertynamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a material property texture of the specified size.
- [generateLightMapVertexColorsWithLightsToConsider:objectsToConsider:vertexAttributeNamed:](mdlmesh/generatelightmapvertexcolorswithlights%28toconsider_objectstoconsider_vertexattributenamed_%29.md): Calculates static lighting information for the mesh and saves it in the mesh as a vertex color attribute.

### Creating Parametric Meshes

- [newBoxWithDimensions:segments:geometryType:inwardNormals:allocator:](mdlmesh/newbox%28withdimensions_segments_geometrytype_inwardnormals_allocator_%29.md): Creates a mesh in the shape of a rectangular box or cube.
- [newEllipsoidWithRadii:radialSegments:verticalSegments:geometryType:inwardNormals:hemisphere:allocator:](mdlmesh/newellipsoid%28withradii_radialsegments_verticalsegments_geometrytype_inwardnormals_hemisphere_allocator_%29.md): Creates a mesh in the shape of an ellipsoid or sphere.
- [newCylinderWithHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:](mdlmesh/newcylinder%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a right circular or elliptical cylinder.
- [newEllipticalConeWithHeight:radii:radialSegments:verticalSegments:geometryType:inwardNormals:allocator:](mdlmesh/newellipticalcone%28withheight_radii_radialsegments_verticalsegments_geometrytype_inwardnormals_allocator_%29.md): Generates a mesh in the shape of an elliptical or circular cone.
- [newPlaneWithDimensions:segments:geometryType:allocator:](mdlmesh/newplane%28withdimensions_segments_geometrytype_allocator_%29.md): Generates a mesh in the shape of a rectangular plane.
- [newCapsuleWithHeight:radii:radialSegments:verticalSegments:hemisphereSegments:geometryType:inwardNormals:allocator:](mdlmesh/newcapsule%28withheight_radii_radialsegments_verticalsegments_hemispheresegments_geometrytype_inwardnormals_allocator_%29.md)
- [newIcosahedronWithRadius:inwardNormals:allocator:](mdlmesh/newicosahedron%28withradius_inwardnormals_allocator_%29.md): Generates a mesh in the shape of a regular 20-sided polyhedron with triangular faces.
- [newIcosahedronWithRadius:inwardNormals:geometryType:allocator:](mdlmesh/newicosahedron%28withradius_inwardnormals_geometrytype_allocator_%29.md)
- [initBoxWithExtent:segments:inwardNormals:geometryType:allocator:](mdlmesh/init%28boxwithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [initSphereWithExtent:segments:inwardNormals:geometryType:allocator:](mdlmesh/init%28spherewithextent_segments_inwardnormals_geometrytype_allocator_%29.md)
- [initCylinderWithExtent:segments:inwardNormals:topCap:bottomCap:geometryType:allocator:](mdlmesh/init%28cylinderwithextent_segments_inwardnormals_topcap_bottomcap_geometrytype_allocator_%29.md)
- [initConeWithExtent:segments:inwardNormals:cap:geometryType:allocator:](mdlmesh/init%28conewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)
- [initPlaneWithExtent:segments:geometryType:allocator:](mdlmesh/init%28planewithextent_segments_geometrytype_allocator_%29.md)
- [initIcosahedronWithExtent:inwardNormals:geometryType:allocator:](mdlmesh/init%28icosahedronwithextent_inwardnormals_geometrytype_allocator_%29.md)
- [initCapsuleWithExtent:cylinderSegments:hemisphereSegments:inwardNormals:geometryType:allocator:](mdlmesh/init%28capsulewithextent_cylindersegments_hemispheresegments_inwardnormals_geometrytype_allocator_%29.md)
- [initHemisphereWithExtent:segments:inwardNormals:cap:geometryType:allocator:](mdlmesh/init%28hemispherewithextent_segments_inwardnormals_cap_geometrytype_allocator_%29.md)

### Instance Methods

- [addOrthTanBasisForTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:](mdlmesh/addorthtanbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md)
- [flipTextureCoordinatesInAttributeNamed:](mdlmesh/fliptexturecoordinates%28inattributenamed_%29.md)
- [makeVerticesUniqueAndReturnError:](mdlmesh/makeverticesuniqueandreturnerror%28%29.md)

### Type Methods

- [meshWithSCNGeometry:](mdlmesh/meshwithscngeometry_.md)
- [meshWithSCNGeometry:bufferAllocator:](mdlmesh/meshwithscngeometry_bufferallocator_.md)

## Relationships

### Inherits From

- [MDLObject](mdlobject.md)

## See Also

### 3D Asset Basics

- [MDLAsset](mdlasset.md): An indexed container for 3D objects and associated information, such as transform hierarchies, meshes, cameras, and lights.
- [MDLObject](mdlobject.md): The base class for objects that are part of a 3D asset, including meshes, cameras, and lights.
- [MDLTransform](mdltransform.md): A description of the local coordinate space transformations for a 3D object.
- [MDLSubmesh](mdlsubmesh.md): A container for index buffer data and material information to be used in rendering all or part of a 3D object.
- [MDLSubmeshTopology](mdlsubmeshtopology.md): A description of how a submesh’s index buffer data is arranged and how that arrangement should be used to produce the submesh’s intended 3D shape.
- [MDLNamed](mdlnamed.md): The common interface for Model I/O objects that expose a human-readable name.
