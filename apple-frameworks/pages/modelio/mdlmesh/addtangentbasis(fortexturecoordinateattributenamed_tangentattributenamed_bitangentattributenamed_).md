> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/addtangentbasis(fortexturecoordinateattributenamed:tangentattributenamed:bitangentattributenamed:)](https://developer.apple.com/documentation/modelio/mdlmesh/addtangentbasis(fortexturecoordinateattributenamed:tangentattributenamed:bitangentattributenamed:))

# addTangentBasis(forTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.

## Declaration

```swift
func addTangentBasis(forTextureCoordinateAttributeNamed textureCoordinateAttributeName: String, tangentAttributeNamed tangentAttributeName: String, bitangentAttributeNamed bitangentAttributeName: String?)
```

## Parameters

- `textureCoordinateAttributeName`: The name of the vertex attribute from which to read texture coordinate data for use in generating tangent and bitangent vectors.
- `tangentAttributeName`: The name of the vertex attribute for storing surface tangent vector data.
- `bitangentAttributeName`: The name of the vertex attribute for storing surface bitangent vector data.

<a id="Discussion"></a>

## Discussion

Surface-space tangent and bitangent vectors can be used to produce shading effects that follow the “flow” of a surface or to generate normal map textures. Model I/O  calculates tangent and bitangent vectors based on vertex positions and texture coordinates using a common definition: The tangent vector at a point is tangent to the surface and parallel to the texture coordinate s-axis, and the bitangent vector is tangent to the surface and parallel to the texture coordinate t-axis.

For this method to calculate surface tangent vectors, the mesh must contain vertex data for both the [MDLVertexAttributePosition](../mdlvertexattributeposition.md) attribute and the texture coordinate attribute specified in the `textureCoordinateAttributeName` parameter. Calling this method on a mesh that does not contain the specified vertex attributes raises an exception.

This method saves calculated normal data in the vertex attributes named in the `tangentAttributeName` and `bitangentAttributeName` parameters. If the mesh already contains either attribute, this method overwrites the contents of the corresponding vertex buffers. If the mesh does not contain an attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

## See Also

### Generating Geometry Data

- [addNormals(withAttributeNamed:creaseThreshold:)](addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasis(forTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:)](addtangentbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md): Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.
- [makeVerticesUnique()](makeverticesunique%28%29.md): Deprecated. Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.

# addTangentBasisForTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.

## Declaration

```objectivec
- (void) addTangentBasisForTextureCoordinateAttributeNamed:(NSString *) textureCoordinateAttributeName tangentAttributeNamed:(NSString *) tangentAttributeName bitangentAttributeNamed:(NSString *) bitangentAttributeName;
```

## Parameters

- `textureCoordinateAttributeName`: The name of the vertex attribute from which to read texture coordinate data for use in generating tangent and bitangent vectors.
- `tangentAttributeName`: The name of the vertex attribute for storing surface tangent vector data.
- `bitangentAttributeName`: The name of the vertex attribute for storing surface bitangent vector data.

<a id="Discussion"></a>

## Discussion

Surface-space tangent and bitangent vectors can be used to produce shading effects that follow the “flow” of a surface or to generate normal map textures. Model I/O  calculates tangent and bitangent vectors based on vertex positions and texture coordinates using a common definition: The tangent vector at a point is tangent to the surface and parallel to the texture coordinate s-axis, and the bitangent vector is tangent to the surface and parallel to the texture coordinate t-axis.

For this method to calculate surface tangent vectors, the mesh must contain vertex data for both the [MDLVertexAttributePosition](../mdlvertexattributeposition.md) attribute and the texture coordinate attribute specified in the `textureCoordinateAttributeName` parameter. Calling this method on a mesh that does not contain the specified vertex attributes raises an exception.

This method saves calculated normal data in the vertex attributes named in the `tangentAttributeName` and `bitangentAttributeName` parameters. If the mesh already contains either attribute, this method overwrites the contents of the corresponding vertex buffers. If the mesh does not contain an attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

## See Also

### Generating Geometry Data

- [addNormalsWithAttributeNamed:creaseThreshold:](addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasisForTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:](addtangentbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md): Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.
- [makeVerticesUnique](makeverticesunique%28%29.md): Deprecated. Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.
