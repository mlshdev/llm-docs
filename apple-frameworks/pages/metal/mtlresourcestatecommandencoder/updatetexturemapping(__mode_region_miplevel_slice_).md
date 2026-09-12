> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatecommandencoder/updatetexturemapping(_:mode:region:miplevel:slice:)](https://developer.apple.com/documentation/metal/mtlresourcestatecommandencoder/updatetexturemapping(_:mode:region:miplevel:slice:))

# updateTextureMapping(\_:mode:region:mipLevel:slice:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to update the texture mappings for a region in a single texture mipmap.

## Declaration

```swift
func updateTextureMapping(_ texture: any MTLTexture, mode: MTLSparseTextureMappingMode, region: MTLRegion, mipLevel: Int, slice: Int)
```

```swift
optional func updateTextureMapping(_ texture: any MTLTexture, mode: MTLSparseTextureMappingMode, region: MTLRegion, mipLevel: Int, slice: Int)
```

## Parameters

- `texture`: The sparse texture to update.
- `mode`: A mode that indicates whether the method allocates or frees a memory tile in the texture.
- `region`: A region, in tile coordinates, that describes the part of the mipmap to update.
- `mipLevel`: The mipmap to update.
- `slice`: The slice in the texture to update.

<a id="discussion"></a>

## Discussion

When the GPU executes the command that updates the texture’s memory mapping, the GPU gets details about the region from the `region` parameter.

To allocate tiles from the heap, pass [MTLSparseTextureMappingMode.map](../mtlsparsetexturemappingmode/map.md) as the `mode` parameter, and to free files back to the heap, pass [MTLSparseTextureMappingMode.unmap](../mtlsparsetexturemappingmode/unmap.md).

If you encode other commands that use the texture’s contents, such as rendering to the texture or sampling from a texture, synchronize the texture’s mapping updates with those commands to avoid race conditions. See [Resource synchronization](../resource-synchronization.md).

If you encode commands with multiple resource state passes, synchronize the resources to run the commands in the passes sequentially. See the [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) protocol.

## See Also

### Updating texture memory assignments

- [updateTextureMappings(\_:mode:regions:mipLevels:slices:numRegions:)](updatetexturemappings%28__mode_regions_miplevels_slices_numregions_%29.md): Encodes a command to update memory mappings for multiple regions inside a texture.
- [MTLSparseTextureMappingMode](../mtlsparsetexturemappingmode.md): Options for sparse texture mapping.

# updateTextureMapping:mode:region:mipLevel:slice: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to update the texture mappings for a region in a single texture mipmap.

## Declaration

```objectivec
- (void) updateTextureMapping:(id<MTLTexture>) texture mode:(const MTLSparseTextureMappingMode) mode region:(const MTLRegion) region mipLevel:(const NSUInteger) mipLevel slice:(const NSUInteger) slice;
```

## Parameters

- `texture`: The sparse texture to update.
- `mode`: A mode that indicates whether the method allocates or frees a memory tile in the texture.
- `region`: A region, in tile coordinates, that describes the part of the mipmap to update.
- `mipLevel`: The mipmap to update.
- `slice`: The slice in the texture to update.

<a id="discussion"></a>

## Discussion

When the GPU executes the command that updates the texture’s memory mapping, the GPU gets details about the region from the `region` parameter.

To allocate tiles from the heap, pass [MTLSparseTextureMappingModeMap](../mtlsparsetexturemappingmode/map.md) as the `mode` parameter, and to free files back to the heap, pass [MTLSparseTextureMappingModeUnmap](../mtlsparsetexturemappingmode/unmap.md).

If you encode other commands that use the texture’s contents, such as rendering to the texture or sampling from a texture, synchronize the texture’s mapping updates with those commands to avoid race conditions. See [Resource synchronization](../resource-synchronization.md).

If you encode commands with multiple resource state passes, synchronize the resources to run the commands in the passes sequentially. See the [MTLResourceStateCommandEncoder](../mtlresourcestatecommandencoder.md) protocol.

## See Also

### Updating texture memory assignments

- [updateTextureMappings:mode:regions:mipLevels:slices:numRegions:](updatetexturemappings%28__mode_regions_miplevels_slices_numregions_%29.md): Encodes a command to update memory mappings for multiple regions inside a texture.
- [MTLSparseTextureMappingMode](../mtlsparsetexturemappingmode.md): Options for sparse texture mapping.
