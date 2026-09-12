> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4copysparsetexturemappingoperation](https://developer.apple.com/documentation/metal/mtl4copysparsetexturemappingoperation)

# MTL4CopySparseTextureMappingOperation (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together arguments for an operation to copy a sparse texture mapping.

## Declaration

```swift
struct MTL4CopySparseTextureMappingOperation
```

## Topics

### Initializers

- [init()](mtl4copysparsetexturemappingoperation/init%28%29.md)
- [init(sourceRegion:sourceLevel:sourceSlice:destinationOrigin:destinationLevel:destinationSlice:)](mtl4copysparsetexturemappingoperation/init%28sourceregion_sourcelevel_sourceslice_destinationorigin_destinationlevel_destinationslice_%29.md)

### Instance Properties

- [destinationLevel](mtl4copysparsetexturemappingoperation/destinationlevel.md): The index of the mipmap level in the destination texture.
- [destinationOrigin](mtl4copysparsetexturemappingoperation/destinationorigin.md): The origin in the destination texture to copy into, in tiles.
- [destinationSlice](mtl4copysparsetexturemappingoperation/destinationslice.md): The index of the array slice in the destination texture to copy into.
- [sourceLevel](mtl4copysparsetexturemappingoperation/sourcelevel.md): The index of the mipmap level in the source texture.
- [sourceRegion](mtl4copysparsetexturemappingoperation/sourceregion.md): The region in the source texture, in tiles.
- [sourceSlice](mtl4copysparsetexturemappingoperation/sourceslice.md): The index of the array slice in the texture source of the copy operation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.

# MTL4CopySparseTextureMappingOperation (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Groups together arguments for an operation to copy a sparse texture mapping.

## Declaration

```objectivec
typedef struct { ... } MTL4CopySparseTextureMappingOperation;
```

## Topics

### Instance Properties

- [destinationLevel](mtl4copysparsetexturemappingoperation/destinationlevel.md): The index of the mipmap level in the destination texture.
- [destinationOrigin](mtl4copysparsetexturemappingoperation/destinationorigin.md): The origin in the destination texture to copy into, in tiles.
- [destinationSlice](mtl4copysparsetexturemappingoperation/destinationslice.md): The index of the array slice in the destination texture to copy into.
- [sourceLevel](mtl4copysparsetexturemappingoperation/sourcelevel.md): The index of the mipmap level in the source texture.
- [sourceRegion](mtl4copysparsetexturemappingoperation/sourceregion.md): The region in the source texture, in tiles.
- [sourceSlice](mtl4copysparsetexturemappingoperation/sourceslice.md): The index of the array slice in the texture source of the copy operation.

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.
