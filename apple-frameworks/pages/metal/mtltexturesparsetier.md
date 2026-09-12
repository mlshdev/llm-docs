> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturesparsetier](https://developer.apple.com/documentation/metal/mtltexturesparsetier)

# MTLTextureSparseTier (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enumerates the different support levels for sparse textures.

## Declaration

```swift
enum MTLTextureSparseTier
```

## Topics

### Enumeration Cases

- [MTLTextureSparseTier.tier1](mtltexturesparsetier/tier1.md): Indicates support for sparse textures tier 1.
- [MTLTextureSparseTier.tier2](mtltexturesparsetier/tier2.md): Indicates support for sparse textures tier 2.
- [MTLTextureSparseTier.tierNone](mtltexturesparsetier/tiernone.md): Indicates that the texture is not sparse.

### Initializers

- [init(rawValue:)](mtltexturesparsetier/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.

# MTLTextureSparseTier (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enumerates the different support levels for sparse textures.

## Declaration

```objectivec
enum MTLTextureSparseTier : NSInteger;
```

## Topics

### Enumeration Cases

- [MTLTextureSparseTier1](mtltexturesparsetier/tier1.md): Indicates support for sparse textures tier 1.
- [MTLTextureSparseTier2](mtltexturesparsetier/tier2.md): Indicates support for sparse textures tier 2.
- [MTLTextureSparseTierNone](mtltexturesparsetier/tiernone.md): Indicates that the texture is not sparse.

## See Also

### Sparse resources

- [MTLBufferSparseTier](mtlbuffersparsetier.md): Enumerates the different support levels for sparse buffers.
- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.
