> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4updatesparsetexturemappingoperation](https://developer.apple.com/documentation/metal/mtl4updatesparsetexturemappingoperation)

# MTL4UpdateSparseTextureMappingOperation (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Groups together arguments for an operation to update a sparse texture mapping.

## Declaration

```swift
struct MTL4UpdateSparseTextureMappingOperation
```

<a id="overview"></a>

## Overview

When performing a sparse mapping update, you are responsible for issuing a barrier against stage `MTLStageResourceState`.

You can determine the sparse texture tier by calling [sparseTextureTier](mtltexture/sparsetexturetier.md).

## Topics

### Initializers

- [init()](mtl4updatesparsetexturemappingoperation/init%28%29.md)
- [init(mode:textureRegion:textureLevel:textureSlice:heapOffset:)](mtl4updatesparsetexturemappingoperation/init%28mode_textureregion_texturelevel_textureslice_heapoffset_%29.md)

### Instance Properties

- [heapOffset](mtl4updatesparsetexturemappingoperation/heapoffset.md): The starting offset in the heap, in tiles.
- [mode](mtl4updatesparsetexturemappingoperation/mode.md): The mode of the mapping operation to perform.
- [textureLevel](mtl4updatesparsetexturemappingoperation/texturelevel.md): The index of the mipmap level in the texture to update.
- [textureRegion](mtl4updatesparsetexturemappingoperation/textureregion.md): The region in the texture to update, in tiles.
- [textureSlice](mtl4updatesparsetexturemappingoperation/textureslice.md): The index of the array slice in the texture to update.

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
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.

# MTL4UpdateSparseTextureMappingOperation (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Groups together arguments for an operation to update a sparse texture mapping.

## Declaration

```objectivec
typedef struct { ... } MTL4UpdateSparseTextureMappingOperation;
```

<a id="overview"></a>

## Overview

When performing a sparse mapping update, you are responsible for issuing a barrier against stage `MTLStageResourceState`.

You can determine the sparse texture tier by calling [sparseTextureTier](mtltexture/sparsetexturetier.md).

## Topics

### Instance Properties

- [heapOffset](mtl4updatesparsetexturemappingoperation/heapoffset.md): The starting offset in the heap, in tiles.
- [mode](mtl4updatesparsetexturemappingoperation/mode.md): The mode of the mapping operation to perform.
- [textureLevel](mtl4updatesparsetexturemappingoperation/texturelevel.md): The index of the mipmap level in the texture to update.
- [textureRegion](mtl4updatesparsetexturemappingoperation/textureregion.md): The region in the texture to update, in tiles.
- [textureSlice](mtl4updatesparsetexturemappingoperation/textureslice.md): The index of the array slice in the texture to update.

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
