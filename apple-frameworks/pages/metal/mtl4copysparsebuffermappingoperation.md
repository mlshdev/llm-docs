> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4copysparsebuffermappingoperation](https://developer.apple.com/documentation/metal/mtl4copysparsebuffermappingoperation)

# MTL4CopySparseBufferMappingOperation (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together arguments for an operation to copy a sparse buffer mapping.

## Declaration

```swift
struct MTL4CopySparseBufferMappingOperation
```

## Topics

### Initializers

- [init()](mtl4copysparsebuffermappingoperation/init%28%29.md)
- [init(sourceRange:destinationOffset:)](mtl4copysparsebuffermappingoperation/init%28sourcerange_destinationoffset_%29.md)

### Instance Properties

- [destinationOffset](mtl4copysparsebuffermappingoperation/destinationoffset.md): The origin in the destination buffer, in tiles.
- [sourceRange](mtl4copysparsebuffermappingoperation/sourcerange.md): The range in the source buffer, in tiles.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.

# MTL4CopySparseBufferMappingOperation (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Groups together arguments for an operation to copy a sparse buffer mapping.

## Declaration

```objectivec
typedef struct { ... } MTL4CopySparseBufferMappingOperation;
```

## Topics

### Instance Properties

- [destinationOffset](mtl4copysparsebuffermappingoperation/destinationoffset.md): The origin in the destination buffer, in tiles.
- [sourceRange](mtl4copysparsebuffermappingoperation/sourcerange.md): The range in the source buffer, in tiles.

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.
