> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4updatesparsebuffermappingoperation](https://developer.apple.com/documentation/metal/mtl4updatesparsebuffermappingoperation)

# MTL4UpdateSparseBufferMappingOperation (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together arguments for an operation to update a sparse buffer mapping.

## Declaration

```swift
struct MTL4UpdateSparseBufferMappingOperation
```

## Topics

### Initializers

- [init()](mtl4updatesparsebuffermappingoperation/init%28%29.md)
- [init(mode:bufferRange:heapOffset:)](mtl4updatesparsebuffermappingoperation/init%28mode_bufferrange_heapoffset_%29.md)

### Instance Properties

- [bufferRange](mtl4updatesparsebuffermappingoperation/bufferrange.md): The range in the buffer, in tiles.
- [heapOffset](mtl4updatesparsebuffermappingoperation/heapoffset.md): The starting offset in the heap, in tiles.
- [mode](mtl4updatesparsebuffermappingoperation/mode.md): The mode of the mapping operation to perform.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.

# MTL4UpdateSparseBufferMappingOperation (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Groups together arguments for an operation to update a sparse buffer mapping.

## Declaration

```objectivec
typedef struct { ... } MTL4UpdateSparseBufferMappingOperation;
```

## Topics

### Instance Properties

- [bufferRange](mtl4updatesparsebuffermappingoperation/bufferrange.md): The range in the buffer, in tiles.
- [heapOffset](mtl4updatesparsebuffermappingoperation/heapoffset.md): The starting offset in the heap, in tiles.
- [mode](mtl4updatesparsebuffermappingoperation/mode.md): The mode of the mapping operation to perform.

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.
