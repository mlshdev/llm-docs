> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffersparsetier](https://developer.apple.com/documentation/metal/mtlbuffersparsetier)

# MTLBufferSparseTier (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enumerates the different support levels for sparse buffers.

## Declaration

```swift
enum MTLBufferSparseTier
```

## Topics

### Enumeration Cases

- [MTLBufferSparseTier.tier1](mtlbuffersparsetier/tier1.md): Indicates support for sparse buffers tier 1.
- [MTLBufferSparseTier.tierNone](mtlbuffersparsetier/tiernone.md): Indicates that the buffer is not sparse.

### Initializers

- [init(rawValue:)](mtlbuffersparsetier/init%28rawvalue_%29.md)

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

- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.

# MTLBufferSparseTier (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Enumerates the different support levels for sparse buffers.

## Declaration

```objectivec
enum MTLBufferSparseTier : NSInteger;
```

## Topics

### Enumeration Cases

- [MTLBufferSparseTier1](mtlbuffersparsetier/tier1.md): Indicates support for sparse buffers tier 1.
- [MTLBufferSparseTierNone](mtlbuffersparsetier/tiernone.md): Indicates that the buffer is not sparse.

## See Also

### Sparse resources

- [MTL4CopySparseBufferMappingOperation](mtl4copysparsebuffermappingoperation.md): Groups together arguments for an operation to copy a sparse buffer mapping.
- [MTL4UpdateSparseBufferMappingOperation](mtl4updatesparsebuffermappingoperation.md): Groups together arguments for an operation to update a sparse buffer mapping.
- [MTLTextureSparseTier](mtltexturesparsetier.md): Enumerates the different support levels for sparse textures.
- [MTL4CopySparseTextureMappingOperation](mtl4copysparsetexturemappingoperation.md): Groups together arguments for an operation to copy a sparse texture mapping.
- [MTL4UpdateSparseTextureMappingOperation](mtl4updatesparsetexturemappingoperation.md): Groups together arguments for an operation to update a sparse texture mapping.
