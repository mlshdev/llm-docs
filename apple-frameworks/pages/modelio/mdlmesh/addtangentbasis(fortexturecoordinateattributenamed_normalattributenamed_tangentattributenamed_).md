> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/addtangentbasis(fortexturecoordinateattributenamed:normalattributenamed:tangentattributenamed:)](https://developer.apple.com/documentation/modelio/mdlmesh/addtangentbasis(fortexturecoordinateattributenamed:normalattributenamed:tangentattributenamed:))

# addTangentBasis(forTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.

## Declaration

```swift
func addTangentBasis(forTextureCoordinateAttributeNamed textureCoordinateAttributeName: String, normalAttributeNamed normalAttributeName: String, tangentAttributeNamed tangentAttributeName: String)
```

## Parameters

- `textureCoordinateAttributeName`: The name of the vertex attribute from which to read texture coordinate data.
- `normalAttributeName`: The name of the vertex attribute from which to read surface normal data.
- `tangentAttributeName`: The name of the vertex attribute for storing surface tangent vector data.

<a id="Discussion"></a>

## Discussion

Surface-space tangent and bitangent vectors can be used to produce shading effects that follow the “flow” of a surface or to generate normal map textures. Model I/O calculates tangent vectors based on vertex positions, texture coordinates, and surface normal vectors using a common definition: The tangent vector at a point is tangent to the surface, perpendicular to the surface normal vector, and parallel to the texture coordinate s-axis.

> **Note**

>  This method does not generate bitangent vectors, which are needed to form a complete 3-vector basis for surface-space shading calculations. However, you can derive the bitangent vector at any point, because the bitangent vector is canonically defined as the cross product of the normal and tangent vectors, multiplied by the w-coordinate of the tangent vector. (That is, the w-coordinate of the tangent vector encodes the handedness of the local coordinate frame.)

For this method to calculate surface tangent vectors, the mesh must contain vertex data for both the [MDLVertexAttributePosition](../mdlvertexattributeposition.md) attribute and the texture coordinate attribute specified in the `textureCoordinateAttributeName` parameter. Calling this method on a mesh that does not contain the specified vertex attributes raises an exception.

This method saves calculated normal data in the vertex attribute named in the `tangentAttributeName` parameter. If the mesh already contains that attribute, this method overwrites the contents of the corresponding vertex buffer. If the mesh does not contain that attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

## See Also

### Generating Geometry Data

- [addNormals(withAttributeNamed:creaseThreshold:)](addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasis(forTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed:)](addtangentbasis%28fortexturecoordinateattributenamed_tangentattributenamed_bitangentattributenamed_%29.md): Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.
- [makeVerticesUnique()](makeverticesunique%28%29.md): Deprecated. Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.

# addTangentBasisForTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.

## Declaration

```objectivec
- (void) addTangentBasisForTextureCoordinateAttributeNamed:(NSString *) textureCoordinateAttributeName normalAttributeNamed:(NSString *) normalAttributeName tangentAttributeNamed:(NSString *) tangentAttributeName;
```

## Parameters

- `textureCoordinateAttributeName`: The name of the vertex attribute from which to read texture coordinate data.
- `normalAttributeName`: The name of the vertex attribute from which to read surface normal data.
- `tangentAttributeName`: The name of the vertex attribute for storing surface tangent vector data.

<a id="Discussion"></a>

## Discussion

Surface-space tangent and bitangent vectors can be used to produce shading effects that follow the “flow” of a surface or to generate normal map textures. Model I/O calculates tangent vectors based on vertex positions, texture coordinates, and surface normal vectors using a common definition: The tangent vector at a point is tangent to the surface, perpendicular to the surface normal vector, and parallel to the texture coordinate s-axis.

> **Note**

>  This method does not generate bitangent vectors, which are needed to form a complete 3-vector basis for surface-space shading calculations. However, you can derive the bitangent vector at any point, because the bitangent vector is canonically defined as the cross product of the normal and tangent vectors, multiplied by the w-coordinate of the tangent vector. (That is, the w-coordinate of the tangent vector encodes the handedness of the local coordinate frame.)

For this method to calculate surface tangent vectors, the mesh must contain vertex data for both the [MDLVertexAttributePosition](../mdlvertexattributeposition.md) attribute and the texture coordinate attribute specified in the `textureCoordinateAttributeName` parameter. Calling this method on a mesh that does not contain the specified vertex attributes raises an exception.

This method saves calculated normal data in the vertex attribute named in the `tangentAttributeName` parameter. If the mesh already contains that attribute, this method overwrites the contents of the corresponding vertex buffer. If the mesh does not contain that attribute, this method creates a new attribute and updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object accordingly.

## See Also

### Generating Geometry Data

- [addNormalsWithAttributeNamed:creaseThreshold:](addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasisForTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed:](addtangentbasis%28fortexturecoordinateattributenamed_tangentattributenamed_bitangentattributenamed_%29.md): Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.
- [makeVerticesUnique](makeverticesunique%28%29.md): Deprecated. Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.
