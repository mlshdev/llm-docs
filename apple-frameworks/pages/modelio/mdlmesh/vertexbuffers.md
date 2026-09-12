> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/vertexbuffers](https://developer.apple.com/documentation/modelio/mdlmesh/vertexbuffers)

# vertexBuffers (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The array of buffers that provide vertex data for the mesh.

## Declaration

```swift
var vertexBuffers: [any MDLMeshBuffer] { get set }
```

<a id="Discussion"></a>

## Discussion

A mesh contains vertex data organized in one of two designs: as a *structure of arrays* or as an *array of structures*. In a structure of arrays, the mesh contains multiple vertex buffers, each of which provides data for a different vertex attribute, and a single vertex is the union of data from the same index in each of the separate buffers. In an array of structures, the mesh contains a single vertex buffer, and each index in the vertex buffer contains data for all vertex attributes. Use the [vertexDescriptor](vertexdescriptor.md) property to determine the structure of the mesh’s vertex data.

## See Also

### Working with Vertex Data

- [boundingBox](boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](submeshes.md): The array of submeshes to be used in rendering the mesh.
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
- [vertexAttributeData(forAttributeNamed:)](vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeData(forAttributeNamed:as:)](vertexattributedata%28forattributenamed_as_%29.md)

# vertexBuffers (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The array of buffers that provide vertex data for the mesh.

## Declaration

```objectivec
@property (nonatomic, retain, readwrite) NSArray<id<MDLMeshBuffer>> * vertexBuffers;
```

<a id="Discussion"></a>

## Discussion

A mesh contains vertex data organized in one of two designs: as a *structure of arrays* or as an *array of structures*. In a structure of arrays, the mesh contains multiple vertex buffers, each of which provides data for a different vertex attribute, and a single vertex is the union of data from the same index in each of the separate buffers. In an array of structures, the mesh contains a single vertex buffer, and each index in the vertex buffer contains data for all vertex attributes. Use the [vertexDescriptor](vertexdescriptor.md) property to determine the structure of the mesh’s vertex data.

## See Also

### Working with Vertex Data

- [boundingBox](boundingbox.md): The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.
- [submeshes](submeshes.md): The array of submeshes to be used in rendering the mesh.
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
- [vertexAttributeDataForAttributeNamed:](vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeDataForAttributeNamed:asFormat:](vertexattributedata%28forattributenamed_as_%29.md)
