> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/vertexattributedata(forattributenamed:)](https://developer.apple.com/documentation/modelio/mdlmesh/vertexattributedata(forattributenamed:))

# vertexAttributeData(forAttributeNamed:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the vertex data for the specified attribute.

## Declaration

```swift
func vertexAttributeData(forAttributeNamed name: String) -> MDLVertexAttributeData?
```

## Parameters

- `name`: The attribute name for which to retrieve data. See Vertex Attributes for standard attribute names.

<a id="return-value"></a>

## Return Value

The vertex data for the specified attribute, or `nil` if the mesh does not contain vertex data for the specified attribute.

<a id="Discussion"></a>

## Discussion

Calling this data is equivalent to using the mesh’s [vertexDescriptor](vertexdescriptor.md) object to find the index of the [MDLMeshBuffer](../mdlmeshbuffer.md) object corresponding to the specified vertex attribute in the mesh’s [vertexBuffers](vertexbuffers.md) array, then using the vertex buffer’s [map()](../mdlmeshbuffer/map%28%29.md) method to gain read-only access to the vertex buffer’s data.

> **Important**

>  The buffer’s storage remains mapped for as long as the returned [MDLVertexAttributeData](../mdlvertexattributedata.md) object exists, potentially restricting other uses of that storage. For example, if a buffer’s storage is shared with GPU memory, that buffer may be unavailable for use in rendering until the data object is deallocated.

## See Also

### Working with Vertex Data

- [boundingBox](boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](submeshes.md): The array of submeshes to be used in rendering the mesh.
- [vertexBuffers](vertexbuffers.md): The array of buffers that provide vertex data for the mesh.
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [vertexDescriptor](vertexdescriptor.md): A description of the format and layout of the mesh’s vertex buffers.
- [allocator](allocator.md)
- [addAttribute(withName:format:)](addattribute%28withname_format_%29.md): Adds a vertex attribute to the mesh and creates a new, empty corresponding vertex buffer.
- [addAttribute(withName:format:type:data:stride:)](addattribute%28withname_format_type_data_stride_%29.md)
- [addAttribute(withName:format:type:data:stride:time:)](addattribute%28withname_format_type_data_stride_time_%29.md)
- [removeAttributeNamed(\_:)](removeattributenamed%28__%29.md)
- [replaceAttributeNamed(\_:with:)](replaceattributenamed%28__with_%29.md)
- [updateAttributeNamed(\_:with:)](updateattributenamed%28__with_%29.md)
- [addUnwrappedTextureCoordinates(forAttributeNamed:)](addunwrappedtexturecoordinates%28forattributenamed_%29.md)
- [vertexAttributeData(forAttributeNamed:as:)](vertexattributedata%28forattributenamed_as_%29.md)

# vertexAttributeDataForAttributeNamed: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the vertex data for the specified attribute.

## Declaration

```objectivec
- (MDLVertexAttributeData *) vertexAttributeDataForAttributeNamed:(NSString *) name;
```

## Parameters

- `name`: The attribute name for which to retrieve data. See Vertex Attributes for standard attribute names.

<a id="return-value"></a>

## Return Value

The vertex data for the specified attribute, or `nil` if the mesh does not contain vertex data for the specified attribute.

<a id="Discussion"></a>

## Discussion

Calling this data is equivalent to using the mesh’s [vertexDescriptor](vertexdescriptor.md) object to find the index of the [MDLMeshBuffer](../mdlmeshbuffer.md) object corresponding to the specified vertex attribute in the mesh’s [vertexBuffers](vertexbuffers.md) array, then using the vertex buffer’s [map](../mdlmeshbuffer/map%28%29.md) method to gain read-only access to the vertex buffer’s data.

> **Important**

>  The buffer’s storage remains mapped for as long as the returned [MDLVertexAttributeData](../mdlvertexattributedata.md) object exists, potentially restricting other uses of that storage. For example, if a buffer’s storage is shared with GPU memory, that buffer may be unavailable for use in rendering until the data object is deallocated.

## See Also

### Working with Vertex Data

- [boundingBox](boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](submeshes.md): The array of submeshes to be used in rendering the mesh.
- [vertexBuffers](vertexbuffers.md): The array of buffers that provide vertex data for the mesh.
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [vertexDescriptor](vertexdescriptor.md): A description of the format and layout of the mesh’s vertex buffers.
- [allocator](allocator.md)
- [addAttributeWithName:format:](addattribute%28withname_format_%29.md): Adds a vertex attribute to the mesh and creates a new, empty corresponding vertex buffer.
- [addAttributeWithName:format:type:data:stride:](addattribute%28withname_format_type_data_stride_%29.md)
- [addAttributeWithName:format:type:data:stride:time:](addattribute%28withname_format_type_data_stride_time_%29.md)
- [removeAttributeNamed:](removeattributenamed%28__%29.md)
- [replaceAttributeNamed:withData:](replaceattributenamed%28__with_%29.md)
- [updateAttributeNamed:withData:](updateattributenamed%28__with_%29.md)
- [addUnwrappedTextureCoordinatesForAttributeNamed:](addunwrappedtexturecoordinates%28forattributenamed_%29.md)
- [vertexAttributeDataForAttributeNamed:asFormat:](vertexattributedata%28forattributenamed_as_%29.md)
