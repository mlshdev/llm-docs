> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexattribute/name](https://developer.apple.com/documentation/modelio/mdlvertexattribute/name)

# name (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An identifier for the semantic use of the vertex attribute.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

Depending on the source of data for a mesh—that is, which file format it was loaded from in a [MDLAsset](../mdlasset.md) object, or whether it was programmatically created—a vertex attribute’s name can be either one of the constants listed in [Vertex Attributes](../vertex-attributes.md) or an identifier specific to the file format.

## See Also

### Inspecting a Vertex Attribute

- [format](format.md): The format of per-vertex data for the attribute.
- [offset](offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [bufferIndex](bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.

# name (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An identifier for the semantic use of the vertex attribute.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Depending on the source of data for a mesh—that is, which file format it was loaded from in a [MDLAsset](../mdlasset.md) object, or whether it was programmatically created—a vertex attribute’s name can be either one of the constants listed in [Vertex Attributes](../vertex-attributes.md) or an identifier specific to the file format.

## See Also

### Inspecting a Vertex Attribute

- [format](format.md): The format of per-vertex data for the attribute.
- [offset](offset.md): The offset, in bytes, of vertex data for the attribute in a vertex buffer, relative to the start of data for each vertex.
- [bufferIndex](bufferindex.md): The index of the vertex buffer containing data for this attribute in a mesh’s [vertexBuffers](../mdlmesh/vertexbuffers.md) array.
- [initializationValue](initializationvalue.md): The default value for vertex data for this attribute.
