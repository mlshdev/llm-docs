> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlsubmesh/indextype](https://developer.apple.com/documentation/modelio/mdlsubmesh/indextype)

# indexType (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data type for each element in the submesh’s index buffer.

## Declaration

```swift
var indexType: MDLIndexBitDepth { get }
```

<a id="Discussion"></a>

## Discussion

For optimum performance, an index buffer should generally use the smallest possible data type to fit its number of indices.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBuffer(asIndexType:)](indexbuffer%28asindextype_%29.md)

# indexType (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The data type for each element in the submesh’s index buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) MDLIndexBitDepth indexType;
```

<a id="Discussion"></a>

## Discussion

For optimum performance, an index buffer should generally use the smallest possible data type to fit its number of indices.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexCount](indexcount.md): The number of indices in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBufferAsIndexType:](indexbuffer%28asindextype_%29.md)
