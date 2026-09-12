> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/makeverticesunique()](https://developer.apple.com/documentation/modelio/mdlmesh/makeverticesunique())

# makeVerticesUnique() (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.

## Declaration

```swift
func makeVerticesUnique()
```

<a id="Discussion"></a>

## Discussion

If the same entry in the mesh’s vertex buffer is used in multiple faces (according to the index buffers of the mesh’s submeshes), this method duplicates that vertex data and modifies the vertex and index buffers accordingly. If such operations require a larger vertex or index buffer, this method uses the [allocator](../mdlmeshbuffer/allocator.md) property of the buffer in question to allocate new storage.

## See Also

### Generating Geometry Data

- [addNormals(withAttributeNamed:creaseThreshold:)](addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasis(forTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed:)](addtangentbasis%28fortexturecoordinateattributenamed_tangentattributenamed_bitangentattributenamed_%29.md): Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.
- [addTangentBasis(forTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:)](addtangentbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md): Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.

# makeVerticesUnique (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 11.0) · iPadOS 9.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.13) · tvOS 9.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0)

Modifies the mesh’s vertex buffers so that no vertices are shared by multiple faces.

## Declaration

```objectivec
- (void) makeVerticesUnique;
```

<a id="Discussion"></a>

## Discussion

If the same entry in the mesh’s vertex buffer is used in multiple faces (according to the index buffers of the mesh’s submeshes), this method duplicates that vertex data and modifies the vertex and index buffers accordingly. If such operations require a larger vertex or index buffer, this method uses the [allocator](../mdlmeshbuffer/allocator.md) property of the buffer in question to allocate new storage.

## See Also

### Generating Geometry Data

- [addNormalsWithAttributeNamed:creaseThreshold:](addnormals%28withattributenamed_creasethreshold_%29.md): Generates surface normal data for the mesh based on its vertex position data.
- [addTangentBasisForTextureCoordinateAttributeNamed:tangentAttributeNamed:bitangentAttributeNamed:](addtangentbasis%28fortexturecoordinateattributenamed_tangentattributenamed_bitangentattributenamed_%29.md): Generates surface tangent and bitangent data for the mesh based on its vertex position and texture coordinate data.
- [addTangentBasisForTextureCoordinateAttributeNamed:normalAttributeNamed:tangentAttributeNamed:](addtangentbasis%28fortexturecoordinateattributenamed_normalattributenamed_tangentattributenamed_%29.md): Generates surface tangent data for the mesh based on its vertex position, surface normal, and texture coordinate data.
