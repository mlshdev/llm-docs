> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbuffer/type](https://developer.apple.com/documentation/modelio/mdlmeshbuffer/type)

# type (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of data contained in a buffer.

## Declaration

```swift
var type: MDLMeshBufferType { get }
```

<a id="Discussion"></a>

## Discussion

A buffer can contain per-vertex data for one or more vertex attributes of a [MDLMesh](../mdlmesh.md) object ([MDLMeshBufferType.vertex](../mdlmeshbuffertype/vertex.md)), or index data for a [MDLSubmesh](../mdlsubmesh.md) object ([MDLMeshBufferType.index](../mdlmeshbuffertype/index.md)).

## See Also

### Inspecting a Buffer

- [allocator](allocator.md): The allocator object that created the buffer.
- [zone](zone.md): The memory pool from which the buffer was created.

# type (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The type of data contained in a buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLMeshBufferType type;
```

<a id="Discussion"></a>

## Discussion

A buffer can contain per-vertex data for one or more vertex attributes of a [MDLMesh](../mdlmesh.md) object ([MDLMeshBufferTypeVertex](../mdlmeshbuffertype/vertex.md)), or index data for a [MDLSubmesh](../mdlsubmesh.md) object ([MDLMeshBufferTypeIndex](../mdlmeshbuffertype/index.md)).

## See Also

### Inspecting a Buffer

- [allocator](allocator.md): The allocator object that created the buffer.
- [zone](zone.md): The memory pool from which the buffer was created.
