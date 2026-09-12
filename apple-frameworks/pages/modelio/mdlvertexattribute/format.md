> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattribute/format](https://developer.apple.com/documentation/modelio/mdlvertexattribute/format)

# format (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The format of per-vertex data for the attribute.

## Declaration

```swift
var format: MDLVertexFormat { get set }
```

<a id="Discussion"></a>

## Discussion

A [MDLVertexFormat](../mdlvertexformat.md) value describes the number of vector components for an attribute, as well as the data type of each component, and, for special packed formats, the layout of components.

## See Also

### Inspecting a Vertex Attribute

- [name](name.md): An identifier for the semantic use of the vertex attribute.
- [offset](offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [bufferIndex](bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.

# format (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The format of per-vertex data for the attribute.

## Declaration

```objectivec
@property (nonatomic, readwrite) MDLVertexFormat format;
```

<a id="Discussion"></a>

## Discussion

A [MDLVertexFormat](../mdlvertexformat.md) value describes the number of vector components for an attribute, as well as the data type of each component, and, for special packed formats, the layout of components.

## See Also

### Inspecting a Vertex Attribute

- [name](name.md): An identifier for the semantic use of the vertex attribute.
- [offset](offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [bufferIndex](bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.
