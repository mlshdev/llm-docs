> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/vertex-attributes](https://developer.apple.com/documentation/modelio/vertex-attributes)

# Vertex Attributes (Swift)

**Framework:** Model I/O  
**Kind:** API Collection

Names that identify semantic uses for vertex attribute data, used by the [name](mdlvertexattribute/name.md) property.

<a id="overview"></a>

## Overview

Model I/O  automatically uses these names to identify vertex attribute data loaded from an asset when the asset does not already use its own custom names for vertex attributes.

Some mesh operations require that an attribute with a specific name be present in the mesh. For example, the [addNormals(withAttributeNamed:creaseThreshold:)](mdlmesh/addnormals%28withattributenamed_creasethreshold_%29.md) method requires an attribute with the name [MDLVertexAttributePosition](mdlvertexattributeposition.md).

## Topics

### Constants

- [MDLVertexAttributeAnisotropy](mdlvertexattributeanisotropy.md): The attribute data describes the degree to which a surface’s appearance changes in appearance when rotated about its normal vector.
- [MDLVertexAttributeBinormal](mdlvertexattributebinormal.md): The attribute data describes surface binormal vectors.
- [MDLVertexAttributeBitangent](mdlvertexattributebitangent.md): The attribute data describes surface bitangent vectors.
- [MDLVertexAttributeColor](mdlvertexattributecolor.md): The attribute data describes vertex colors.
- [MDLVertexAttributeEdgeCrease](mdlvertexattributeedgecrease.md): The attribute data describes edges that should be left unmodified by surface subdivision operations.
- [MDLVertexAttributeJointIndices](mdlvertexattributejointindices.md): The attribute data describes the indices of bones or joints in a skeletal animation rig.
- [MDLVertexAttributeJointWeights](mdlvertexattributejointweights.md): The attribute data describes the influence factors of bones or joints on a vertex’s position for use in skeletal animation.
- [MDLVertexAttributeNormal](mdlvertexattributenormal.md): The attribute data describes surface normal vectors.
- [MDLVertexAttributeOcclusionValue](mdlvertexattributeocclusionvalue.md): The attribute data describes per-vertex ambient occlusion values.
- [MDLVertexAttributePosition](mdlvertexattributeposition.md): The attribute data describes vertex positions.
- [MDLVertexAttributeShadingBasisU](mdlvertexattributeshadingbasisu.md): The attribute data describes the U component of a vector basis for use in shading.
- [MDLVertexAttributeShadingBasisV](mdlvertexattributeshadingbasisv.md): The attribute data describes the V component of a vector basis for use in shading.
- [MDLVertexAttributeSubdivisionStencil](mdlvertexattributesubdivisionstencil.md): The attribute data describes which neighboring vertices influence the effect of surface subdivision on the area around a vertex.
- [MDLVertexAttributeTangent](mdlvertexattributetangent.md): The attribute data describes surface tangent vectors.
- [MDLVertexAttributeTextureCoordinate](mdlvertexattributetexturecoordinate.md): The attribute data describes texture coordinates.

## See Also

### Constants

- [MDLVertexFormat](mdlvertexformat.md): Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.

# Vertex Attributes (Objective-C)

**Framework:** Model I/O  
**Kind:** API Collection

Names that identify semantic uses for vertex attribute data, used by the [name](mdlvertexattribute/name.md) property.

<a id="overview"></a>

## Overview

Model I/O  automatically uses these names to identify vertex attribute data loaded from an asset when the asset does not already use its own custom names for vertex attributes.

Some mesh operations require that an attribute with a specific name be present in the mesh. For example, the [addNormalsWithAttributeNamed:creaseThreshold:](mdlmesh/addnormals%28withattributenamed_creasethreshold_%29.md) method requires an attribute with the name [MDLVertexAttributePosition](mdlvertexattributeposition.md).

## Topics

### Constants

- [MDLVertexAttributeAnisotropy](mdlvertexattributeanisotropy.md): The attribute data describes the degree to which a surface’s appearance changes in appearance when rotated about its normal vector.
- [MDLVertexAttributeBinormal](mdlvertexattributebinormal.md): The attribute data describes surface binormal vectors.
- [MDLVertexAttributeBitangent](mdlvertexattributebitangent.md): The attribute data describes surface bitangent vectors.
- [MDLVertexAttributeColor](mdlvertexattributecolor.md): The attribute data describes vertex colors.
- [MDLVertexAttributeEdgeCrease](mdlvertexattributeedgecrease.md): The attribute data describes edges that should be left unmodified by surface subdivision operations.
- [MDLVertexAttributeJointIndices](mdlvertexattributejointindices.md): The attribute data describes the indices of bones or joints in a skeletal animation rig.
- [MDLVertexAttributeJointWeights](mdlvertexattributejointweights.md): The attribute data describes the influence factors of bones or joints on a vertex’s position for use in skeletal animation.
- [MDLVertexAttributeNormal](mdlvertexattributenormal.md): The attribute data describes surface normal vectors.
- [MDLVertexAttributeOcclusionValue](mdlvertexattributeocclusionvalue.md): The attribute data describes per-vertex ambient occlusion values.
- [MDLVertexAttributePosition](mdlvertexattributeposition.md): The attribute data describes vertex positions.
- [MDLVertexAttributeShadingBasisU](mdlvertexattributeshadingbasisu.md): The attribute data describes the U component of a vector basis for use in shading.
- [MDLVertexAttributeShadingBasisV](mdlvertexattributeshadingbasisv.md): The attribute data describes the V component of a vector basis for use in shading.
- [MDLVertexAttributeSubdivisionStencil](mdlvertexattributesubdivisionstencil.md): The attribute data describes which neighboring vertices influence the effect of surface subdivision on the area around a vertex.
- [MDLVertexAttributeTangent](mdlvertexattributetangent.md): The attribute data describes surface tangent vectors.
- [MDLVertexAttributeTextureCoordinate](mdlvertexattributetexturecoordinate.md): The attribute data describes texture coordinates.

## See Also

### Constants

- [MDLVertexFormat](mdlvertexformat.md): Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.
