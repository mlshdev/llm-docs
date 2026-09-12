> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbuffer/allocator](https://developer.apple.com/documentation/modelio/mdlmeshbuffer/allocator)

# allocator (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The allocator object that created the buffer.

## Declaration

```swift
var allocator: any MDLMeshBufferAllocator { get }
```

<a id="Discussion"></a>

## Discussion

Certain operations on the MDLMesh object that owns this buffer—for example, generating new vertex attributes with methods such as [addNormals(withAttributeNamed:creaseThreshold:)](../mdlmesh/addnormals%28withattributenamed_creasethreshold_%29.md), or changing the format and layout of vertex data by assigning a new value to the [vertexDescriptor](../mdlmesh/vertexdescriptor.md) property—may require reallocation of buffer memory. When you perform such operations, Model I/O  uses the same allocator that was used to create the buffer.

## See Also

### Inspecting a Buffer

- [zone](zone.md): The memory pool from which the buffer was created.
- [type](type.md): The type of data contained in a buffer.

# allocator (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The allocator object that created the buffer.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) id<MDLMeshBufferAllocator> allocator;
```

<a id="Discussion"></a>

## Discussion

Certain operations on the MDLMesh object that owns this buffer—for example, generating new vertex attributes with methods such as [addNormalsWithAttributeNamed:creaseThreshold:](../mdlmesh/addnormals%28withattributenamed_creasethreshold_%29.md), or changing the format and layout of vertex data by assigning a new value to the [vertexDescriptor](../mdlmesh/vertexdescriptor.md) property—may require reallocation of buffer memory. When you perform such operations, Model I/O  uses the same allocator that was used to create the buffer.

## See Also

### Inspecting a Buffer

- [zone](zone.md): The memory pool from which the buffer was created.
- [type](type.md): The type of data contained in a buffer.
