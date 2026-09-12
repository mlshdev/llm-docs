> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmesh/boundingbox](https://developer.apple.com/documentation/modelio/mdlmesh/boundingbox)

# boundingBox (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.

## Declaration

```swift
var boundingBox: MDLAxisAlignedBoundingBox { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is valid only if the mesh contains vertex data for the [MDLVertexAttributePosition](../mdlvertexattributeposition.md) attribute. If the mesh does not contain position information, this property’s value is a bounding box whose `maxBounds` coordinate is greater than its `minBounds` coordinate.

Reading this property for the first time processes the mesh’s vertex data to calculate and cache a bounding box. Reading this property thereafter returns the cached value.

## See Also

### Working with Vertex Data

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
- [vertexAttributeData(forAttributeNamed:)](vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeData(forAttributeNamed:as:)](vertexattributedata%28forattributenamed_as_%29.md)

# boundingBox (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The minimum region entirely enclosing the mesh’s vertex positions, expressed in the model coordinate system of the mesh.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLAxisAlignedBoundingBox boundingBox;
```

<a id="Discussion"></a>

## Discussion

This property’s value is valid only if the mesh contains vertex data for the [MDLVertexAttributePosition](../mdlvertexattributeposition.md) attribute. If the mesh does not contain position information, this property’s value is a bounding box whose `maxBounds` coordinate is greater than its `minBounds` coordinate.

Reading this property for the first time processes the mesh’s vertex data to calculate and cache a bounding box. Reading this property thereafter returns the cached value.

## See Also

### Working with Vertex Data

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
- [vertexAttributeDataForAttributeNamed:](vertexattributedata%28forattributenamed_%29.md): Returns the vertex data for the specified attribute.
- [vertexAttributeDataForAttributeNamed:asFormat:](vertexattributedata%28forattributenamed_as_%29.md)
