> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattribute/bufferindex](https://developer.apple.com/documentation/modelio/mdlvertexattribute/bufferindex)

# bufferIndex (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.

## Declaration

```swift
var bufferIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A mesh may store vertex data in either a *structure of arrays* model, where data for each attribute lies in a separate vertex buffer, or in an *array of structures* model. In the latter, multiple vertex attributes share the same buffer (and thus have the same [bufferIndex](bufferindex.md) value), and the [format](format.md) and [offset](offset.md) values (together with the [stride](../mdlvertexbufferlayout/stride.md) value of a related [MDLVertexBufferLayout](../mdlvertexbufferlayout.md) object) identify which bytes in that buffer refer to which vertex attributes.

## See Also

### Inspecting a Vertex Attribute

- [name](name.md): An identifier for the semantic use of the vertex attribute.
- [format](format.md): The format of per-vertex data for the attribute.
- [offset](offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.

# bufferIndex (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger bufferIndex;
```

<a id="Discussion"></a>

## Discussion

A mesh may store vertex data in either a *structure of arrays* model, where data for each attribute lies in a separate vertex buffer, or in an *array of structures* model. In the latter, multiple vertex attributes share the same buffer (and thus have the same [bufferIndex](bufferindex.md) value), and the [format](format.md) and [offset](offset.md) values (together with the [stride](../mdlvertexbufferlayout/stride.md) value of a related [MDLVertexBufferLayout](../mdlvertexbufferlayout.md) object) identify which bytes in that buffer refer to which vertex attributes.

## See Also

### Inspecting a Vertex Attribute

- [name](name.md): An identifier for the semantic use of the vertex attribute.
- [format](format.md): The format of per-vertex data for the attribute.
- [offset](offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.
