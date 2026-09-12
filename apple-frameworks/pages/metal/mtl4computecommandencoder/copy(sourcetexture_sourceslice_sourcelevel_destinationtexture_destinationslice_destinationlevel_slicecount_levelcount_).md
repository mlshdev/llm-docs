> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/copy(sourcetexture:sourceslice:sourcelevel:destinationtexture:destinationslice:destinationlevel:slicecount:levelcount:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/copy(sourcetexture:sourceslice:sourcelevel:destinationtexture:destinationslice:destinationlevel:slicecount:levelcount:))

# copy(sourceTexture:sourceSlice:sourceLevel:destinationTexture:destinationSlice:destinationLevel:sliceCount:levelCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that copies slices of a texture to slices of another texture.

## Declaration

```swift
func copy(sourceTexture: any MTLTexture, sourceSlice: Int, sourceLevel: Int, destinationTexture: any MTLTexture, destinationSlice: Int, destinationLevel: Int, sliceCount: Int, levelCount: Int)
```

## Parameters

- `sourceTexture`: A [MTLTexture](../mtltexture.md) texture that the command copies data from. To read the source texture contents, you need to set its [isFramebufferOnly](../mtltexture/isframebufferonly.md) property to [false](https://developer.apple.com/documentation/swift/false) prior to drawing into it.
- `sourceSlice`: A slice within `sourceTexture` the command uses as a starting point to copy data from. Set this to `0` if `sourceTexture` isn’t a texture array or a cube texture.
- `sourceLevel`: A mipmap level within `sourceTexture`.
- `destinationTexture`: Another [MTLTexture](../mtltexture.md) the command copies the data to that has the same [pixelFormat](../mtltexture/pixelformat.md) and [sampleCount](../mtltexture/samplecount.md) as `sourceTexture`. To write the contents into this texture, you need to set its [isFramebufferOnly](../mtltexture/isframebufferonly.md) property to [false](https://developer.apple.com/documentation/swift/false).
- `destinationSlice`: A slice within `destinationTexture` the command uses as its starting point for copying data to. Set this to `0` if `destinationTexture` isn’t a texture array or a cube texture.
- `destinationLevel`: A mipmap level within `destinationTexture`. The mipmap level you reference needs to have the same size as the `sourceTexture` slice’s mipmap at `sourceLevel`.
- `sliceCount`: The number of slices the command copies so that it satisfies the conditions that the sum of `sourceSlice` and `sliceCount` doesn’t exceed the number of slices in `sourceTexture` and the sum of `destinationSlice` and `sliceCount` doesn’t exceed the number of slices in `destinationTexture`.
- `levelCount`: The number of mipmap levels the command copies so that it satisfies the conditions that the sum of `sourceLevel` and `levelCount` doesn’t exceed the number of mipmap levels in `sourceTexture` and the sum of `destinationLevel` and `levelCount` doesn’t exceed the number of mipmap levels in `destinationTexture`.

## See Also

### Encoding texture copy commands

- [copy(sourceTensor:sourceOrigin:sourceDimensions:destinationTensor:destinationOrigin:destinationDimensions:)](copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
- [copy(sourceTexture:destinationTexture:)](copy%28sourcetexture_destinationtexture_%29.md): Encodes a command that copies data from a texture to another.
- [copy(sourceTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:destinationTexture:destinationSlice:destinationLevel:destinationOrigin:)](copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a slice of a texture into a slice of another texture.

# copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command that copies slices of a texture to slices of another texture.

## Declaration

```objectivec
- (void) copyFromTexture:(id<MTLTexture>) sourceTexture sourceSlice:(NSUInteger) sourceSlice sourceLevel:(NSUInteger) sourceLevel toTexture:(id<MTLTexture>) destinationTexture destinationSlice:(NSUInteger) destinationSlice destinationLevel:(NSUInteger) destinationLevel sliceCount:(NSUInteger) sliceCount levelCount:(NSUInteger) levelCount;
```

## Parameters

- `sourceTexture`: A [MTLTexture](../mtltexture.md) texture that the command copies data from. To read the source texture contents, you need to set its [framebufferOnly](../mtltexture/isframebufferonly.md) property to [false](https://developer.apple.com/documentation/swift/false) prior to drawing into it.
- `sourceSlice`: A slice within `sourceTexture` the command uses as a starting point to copy data from. Set this to `0` if `sourceTexture` isn’t a texture array or a cube texture.
- `sourceLevel`: A mipmap level within `sourceTexture`.
- `destinationTexture`: Another [MTLTexture](../mtltexture.md) the command copies the data to that has the same [pixelFormat](../mtltexture/pixelformat.md) and [sampleCount](../mtltexture/samplecount.md) as `sourceTexture`. To write the contents into this texture, you need to set its [framebufferOnly](../mtltexture/isframebufferonly.md) property to [false](https://developer.apple.com/documentation/swift/false).
- `destinationSlice`: A slice within `destinationTexture` the command uses as its starting point for copying data to. Set this to `0` if `destinationTexture` isn’t a texture array or a cube texture.
- `destinationLevel`: A mipmap level within `destinationTexture`. The mipmap level you reference needs to have the same size as the `sourceTexture` slice’s mipmap at `sourceLevel`.
- `sliceCount`: The number of slices the command copies so that it satisfies the conditions that the sum of `sourceSlice` and `sliceCount` doesn’t exceed the number of slices in `sourceTexture` and the sum of `destinationSlice` and `sliceCount` doesn’t exceed the number of slices in `destinationTexture`.
- `levelCount`: The number of mipmap levels the command copies so that it satisfies the conditions that the sum of `sourceLevel` and `levelCount` doesn’t exceed the number of mipmap levels in `sourceTexture` and the sum of `destinationLevel` and `levelCount` doesn’t exceed the number of mipmap levels in `destinationTexture`.

## See Also

### Encoding texture copy commands

- [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](copy%28sourcetensor_sourceorigin_sourcedimensions_destinationtensor_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
- [copyFromTexture:toTexture:](copy%28sourcetexture_destinationtexture_%29.md): Encodes a command that copies data from a texture to another.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](copy%28sourcetexture_sourceslice_sourcelevel_sourceorigin_sourcesize_destinationtexture_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a slice of a texture into a slice of another texture.
