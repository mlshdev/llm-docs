> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/copy(sourcetexture:destinationtexture:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/copy(sourcetexture:destinationtexture:))

# copy(sourceTexture:destinationTexture:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that copies data from a texture to another.

## Declaration

```swift
func copy(sourceTexture: any MTLTexture, destinationTexture: any MTLTexture)
```

## Parameters

- `sourceTexture`: An [MTLTexture](../mtltexture.md) instance the command copies data from.
- `destinationTexture`: Another [MTLTexture](../mtltexture.md) instance the command copies the data into that has the same [pixelFormat](../mtltexture/pixelformat.md) and [sampleCount](../mtltexture/samplecount.md) as `sourceTexture`.

## See Also

### Encoding texture copy commands

- [copy(sourceTensor:sourceOrigin:sourceDimensions:destinationTensor:destinationOrigin:destinationDimensions:)](copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
- [copy(sourceTexture:sourceSlice:sourceLevel:destinationTexture:destinationSlice:destinationLevel:sliceCount:levelCount:)](copy%28sourcetexture_sourceslice_sourcelevel_destinationtexture_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to slices of another texture.
- [copy(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:)](copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a slice of a texture into a slice of another texture.

# copyFromTexture:toTexture: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that copies data from a texture to another.

## Declaration

```objectivec
- (void) copyFromTexture:(id<MTLTexture>) sourceTexture toTexture:(id<MTLTexture>) destinationTexture;
```

## Parameters

- `sourceTexture`: An [MTLTexture](../mtltexture.md) instance the command copies data from.
- `destinationTexture`: Another [MTLTexture](../mtltexture.md) instance the command copies the data into that has the same [pixelFormat](../mtltexture/pixelformat.md) and [sampleCount](../mtltexture/samplecount.md) as `sourceTexture`.

## See Also

### Encoding texture copy commands

- [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
- [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](copy%28sourcetexture_sourceslice_sourcelevel_destinationtexture_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to slices of another texture.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a slice of a texture into a slice of another texture.
