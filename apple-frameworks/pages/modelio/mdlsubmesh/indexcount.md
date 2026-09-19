> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdlsubmesh/indexcount

# indexCount (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of indices in the submesh’s index buffer.

## Declaration

```swift
var indexCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Use this index count when rendering the submesh.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBuffer(asIndexType:)](indexbuffer%28asindextype_%29.md)

# indexCount (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of indices in the submesh’s index buffer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger indexCount;
```

<a id="Discussion"></a>

## Discussion

Use this index count when rendering the submesh.

## See Also

### Working with a Submesh’s Index Buffer

- [indexBuffer](indexbuffer.md): An object that provides index data for the submesh.
- [indexType](indextype.md): The data type for each element in the submesh’s index buffer.
- [geometryType](geometrytype.md): The type of geometric primitives described by the submesh’s index buffer.
- [topology](topology.md): A description of how the non-uniform layout of the submesh’s index buffer defines the shape of the mesh.
- [indexBufferAsIndexType:](indexbuffer%28asindextype_%29.md)
