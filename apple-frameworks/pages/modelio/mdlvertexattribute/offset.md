> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattribute/offset](https://developer.apple.com/documentation/modelio/mdlvertexattribute/offset)

# offset (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.

## Declaration

```swift
var offset: Int { get set }
```

<a id="Discussion"></a>

## Discussion

For example, if a vertex buffer contains interleaved data for two attributes, the first attribute’s offset is typically zero, and the second attribute’s offset is at least the data size of the first attribute.

## See Also

### Inspecting a Vertex Attribute

- [name](name.md): An identifier for the semantic use of the vertex attribute.
- [format](format.md): The format of per-vertex data for the attribute.
- [bufferIndex](bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.

# offset (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger offset;
```

<a id="Discussion"></a>

## Discussion

For example, if a vertex buffer contains interleaved data for two attributes, the first attribute’s offset is typically zero, and the second attribute’s offset is at least the data size of the first attribute.

## See Also

### Inspecting a Vertex Attribute

- [name](name.md): An identifier for the semantic use of the vertex attribute.
- [format](format.md): The format of per-vertex data for the attribute.
- [bufferIndex](bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.
