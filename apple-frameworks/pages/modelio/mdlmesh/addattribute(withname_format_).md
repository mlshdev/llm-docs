> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/addattribute(withname:format:)](https://developer.apple.com/documentation/modelio/mdlmesh/addattribute(withname:format:))

# addAttribute(withName:format:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a vertex attribute to the mesh and creates a new, empty corresponding vertex buffer.

## Declaration

```swift
func addAttribute(withName name: String, format: MDLVertexFormat)
```

## Parameters

- `name`: A name for the new attribute. See Vertex Attributes for standard attribute names.
- `format`: The data format for the new attribute.

<a id="Discussion"></a>

## Discussion

Calling this method updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object to reflect the new attribute, and then uses the same [MDLMeshBufferAllocator](../mdlmeshbufferallocator.md) object shared by the mesh’s existing vertex buffers to allocate new, empty storage for the new attribute’s vertex data. This method has no effect if the mesh already contains an attribute with the specified name; to overwrite or rearrange existing attribute data, use the [vertexDescriptor](vertexdescriptor.md) property.

## See Also

### Working with Vertex Data

- [boundingBox](boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](submeshes.md): The array of submeshes to be used in rendering the mesh.
- [vertexBuffers](vertexbuffers.md): The array of buffers that provide vertex data for the mesh.
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [vertexDescriptor](vertexdescriptor.md): A description of the format and layout of the mesh’s vertex buffers.
- [allocator](allocator.md)
- [addAttribute(withName:format:type:data:stride:)](addattribute%28withname_format_type_data_stride_%29.md)
- [addAttribute(withName:format:type:data:stride:time:)](addattribute%28withname_format_type_data_stride_time_%29.md)
- [removeAttributeNamed(\_:)](removeattributenamed%28__%29.md)
- [replaceAttributeNamed(\_:with:)](replaceattributenamed%28__with_%29.md)
- [updateAttributeNamed(\_:with:)](updateattributenamed%28__with_%29.md)
- [addUnwrappedTextureCoordinates(forAttributeNamed:)](addunwrappedtexturecoordinates%28forattributenamed_%29.md)
- [vertexAttributeData(forAttributeNamed:)](vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeData(forAttributeNamed:as:)](vertexattributedata%28forattributenamed_as_%29.md)

# addAttributeWithName:format: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a vertex attribute to the mesh and creates a new, empty corresponding vertex buffer.

## Declaration

```objectivec
- (void) addAttributeWithName:(NSString *) name format:(MDLVertexFormat) format;
```

## Parameters

- `name`: A name for the new attribute. See Vertex Attributes for standard attribute names.
- `format`: The data format for the new attribute.

<a id="Discussion"></a>

## Discussion

Calling this method updates the mesh’s [vertexDescriptor](vertexdescriptor.md) object to reflect the new attribute, and then uses the same [MDLMeshBufferAllocator](../mdlmeshbufferallocator.md) object shared by the mesh’s existing vertex buffers to allocate new, empty storage for the new attribute’s vertex data. This method has no effect if the mesh already contains an attribute with the specified name; to overwrite or rearrange existing attribute data, use the [vertexDescriptor](vertexdescriptor.md) property.

## See Also

### Working with Vertex Data

- [boundingBox](boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](submeshes.md): The array of submeshes to be used in rendering the mesh.
- [vertexBuffers](vertexbuffers.md): The array of buffers that provide vertex data for the mesh.
- [vertexCount](vertexcount.md): The number of vertices in the mesh.
- [vertexDescriptor](vertexdescriptor.md): A description of the format and layout of the mesh’s vertex buffers.
- [allocator](allocator.md)
- [addAttributeWithName:format:type:data:stride:](addattribute%28withname_format_type_data_stride_%29.md)
- [addAttributeWithName:format:type:data:stride:time:](addattribute%28withname_format_type_data_stride_time_%29.md)
- [removeAttributeNamed:](removeattributenamed%28__%29.md)
- [replaceAttributeNamed:withData:](replaceattributenamed%28__with_%29.md)
- [updateAttributeNamed:withData:](updateattributenamed%28__with_%29.md)
- [addUnwrappedTextureCoordinatesForAttributeNamed:](addunwrappedtexturecoordinates%28forattributenamed_%29.md)
- [vertexAttributeDataForAttributeNamed:](vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeDataForAttributeNamed:asFormat:](vertexattributedata%28forattributenamed_as_%29.md)
