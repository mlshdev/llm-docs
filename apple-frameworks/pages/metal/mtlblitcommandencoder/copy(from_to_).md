> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/copy(from:to:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/copy(from:to:))

# copy(from:to:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Encodes a command that copies data from one texture to another.

## Declaration

```swift
func copy(from sourceTexture: any MTLTexture, to destinationTexture: any MTLTexture)
```

## Parameters

- `sourceTexture`: A texture the command copies data from.
- `destinationTexture`: Another texture the command copies the data to that has the same pixel format and sample count as `sourceTexture`.

## Mentioned In

- [Copying data into or out of mipmaps](../copying-data-into-or-out-of-mipmaps.md)

<a id="discussion"></a>

## Discussion

The textures can be different sizes as long as the larger texture has a mipmap level that’s the same size as the smaller texture’s level `0` mipmap.

The command copies all identical mipmap sizes. If both textures are arrays, the command copies as many texture slices (array elements) as possible.

## See Also

### Copying texture data to another texture

- [copy(from:sourceSlice:sourceLevel:to:destinationSlice:destinationLevel:sliceCount:levelCount:)](copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:)](copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.
- [copy(from:sourceOrigin:sourceDimensions:to:destinationOrigin:destinationDimensions:)](copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.

# copyFromTexture:toTexture: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Encodes a command that copies data from one texture to another.

## Declaration

```objectivec
- (void) copyFromTexture:(id<MTLTexture>) sourceTexture toTexture:(id<MTLTexture>) destinationTexture;
```

## Parameters

- `sourceTexture`: A texture the command copies data from.
- `destinationTexture`: Another texture the command copies the data to that has the same pixel format and sample count as `sourceTexture`.

## Mentioned In

- [Copying data into or out of mipmaps](../copying-data-into-or-out-of-mipmaps.md)

<a id="discussion"></a>

## Discussion

The textures can be different sizes as long as the larger texture has a mipmap level that’s the same size as the smaller texture’s level `0` mipmap.

The command copies all identical mipmap sizes. If both textures are arrays, the command copies as many texture slices (array elements) as possible.

## See Also

### Copying texture data to another texture

- [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.
- [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
