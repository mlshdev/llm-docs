> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsparsetexturemappingmode](https://developer.apple.com/documentation/metal/mtlsparsetexturemappingmode)

# MTLSparseTextureMappingMode (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Options for sparse texture mapping.

## Declaration

```swift
enum MTLSparseTextureMappingMode
```

## Topics

### Specifying the mapping mode

- [MTLSparseTextureMappingMode.map](mtlsparsetexturemappingmode/map.md): A request to map sparse tiles from the heap to a region in the texture.
- [MTLSparseTextureMappingMode.unmap](mtlsparsetexturemappingmode/unmap.md): A request to remove any mappings for a region in the texture.

### Initializers

- [init(rawValue:)](mtlsparsetexturemappingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating texture memory assignments

- [updateTextureMapping(\_:mode:region:mipLevel:slice:)](mtlresourcestatecommandencoder/updatetexturemapping%28__mode_region_miplevel_slice_%29.md): Encodes a command to update the texture mappings for a region in a single texture mipmap.
- [updateTextureMappings(\_:mode:regions:mipLevels:slices:numRegions:)](mtlresourcestatecommandencoder/updatetexturemappings%28__mode_regions_miplevels_slices_numregions_%29.md): Encodes a command to update memory mappings for multiple regions inside a texture.

# MTLSparseTextureMappingMode (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Options for sparse texture mapping.

## Declaration

```objectivec
enum MTLSparseTextureMappingMode : NSUInteger;
```

## Topics

### Specifying the mapping mode

- [MTLSparseTextureMappingModeMap](mtlsparsetexturemappingmode/map.md): A request to map sparse tiles from the heap to a region in the texture.
- [MTLSparseTextureMappingModeUnmap](mtlsparsetexturemappingmode/unmap.md): A request to remove any mappings for a region in the texture.

## See Also

### Updating texture memory assignments

- [updateTextureMapping:mode:region:mipLevel:slice:](mtlresourcestatecommandencoder/updatetexturemapping%28__mode_region_miplevel_slice_%29.md): Encodes a command to update the texture mappings for a region in a single texture mipmap.
- [updateTextureMappings:mode:regions:mipLevels:slices:numRegions:](mtlresourcestatecommandencoder/updatetexturemappings%28__mode_regions_miplevels_slices_numregions_%29.md): Encodes a command to update memory mappings for multiple regions inside a texture.
