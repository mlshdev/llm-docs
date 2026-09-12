> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatecommandencoder/updatetexturemappings(_:mode:regions:miplevels:slices:numregions:)](https://developer.apple.com/documentation/metal/mtlresourcestatecommandencoder/updatetexturemappings(_:mode:regions:miplevels:slices:numregions:))

# updateTextureMappings(\_:mode:regions:mipLevels:slices:numRegions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to update memory mappings for multiple regions inside a texture.

## Declaration

```swift
func updateTextureMappings(_ texture: any MTLTexture, mode: MTLSparseTextureMappingMode, regions: UnsafePointer<MTLRegion>, mipLevels: UnsafePointer<Int>, slices: UnsafePointer<Int>, numRegions: Int)
```

```swift
optional func updateTextureMappings(_ texture: any MTLTexture, mode: MTLSparseTextureMappingMode, regions: UnsafePointer<MTLRegion>, mipLevels: UnsafePointer<Int>, slices: UnsafePointer<Int>, numRegions: Int)
```

## Parameters

- `texture`: The sparse texture to update.
- `mode`: The change to make to the texture mapping.
- `regions`: A pointer to an array of regions to change. You need to provide as many regions as you specify in the `numRegions` parameter.
- `mipLevels`: A pointer to an array of mipmap levels to change. You need to provide as many entries as you specify in the `numRegions` parameter.
- `slices`: A pointer to an array of slices to change. You need to provide as many entries as you specify in the `numRegions` parameter.
- `numRegions`: The number of regions to update.

## See Also

### Updating texture memory assignments

- [updateTextureMapping(\_:mode:region:mipLevel:slice:)](updatetexturemapping%28__mode_region_miplevel_slice_%29.md): Encodes a command to update the texture mappings for a region in a single texture mipmap.
- [MTLSparseTextureMappingMode](../mtlsparsetexturemappingmode.md): Options for sparse texture mapping.

# updateTextureMappings:mode:regions:mipLevels:slices:numRegions: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to update memory mappings for multiple regions inside a texture.

## Declaration

```objectivec
- (void) updateTextureMappings:(id<MTLTexture>) texture mode:(const MTLSparseTextureMappingMode) mode regions:(const MTLRegion[]) regions mipLevels:(const NSUInteger[]) mipLevels slices:(const NSUInteger[]) slices numRegions:(NSUInteger) numRegions;
```

## Parameters

- `texture`: The sparse texture to update.
- `mode`: The change to make to the texture mapping.
- `regions`: A pointer to an array of regions to change. You need to provide as many regions as you specify in the `numRegions` parameter.
- `mipLevels`: A pointer to an array of mipmap levels to change. You need to provide as many entries as you specify in the `numRegions` parameter.
- `slices`: A pointer to an array of slices to change. You need to provide as many entries as you specify in the `numRegions` parameter.
- `numRegions`: The number of regions to update.

## See Also

### Updating texture memory assignments

- [updateTextureMapping:mode:region:mipLevel:slice:](updatetexturemapping%28__mode_region_miplevel_slice_%29.md): Encodes a command to update the texture mappings for a region in a single texture mipmap.
- [MTLSparseTextureMappingMode](../mtlsparsetexturemappingmode.md): Options for sparse texture mapping.
