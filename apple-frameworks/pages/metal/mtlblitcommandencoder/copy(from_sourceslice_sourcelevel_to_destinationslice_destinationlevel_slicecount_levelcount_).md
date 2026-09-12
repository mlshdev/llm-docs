> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/copy(from:sourceslice:sourcelevel:to:destinationslice:destinationlevel:slicecount:levelcount:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/copy(from:sourceslice:sourcelevel:to:destinationslice:destinationlevel:slicecount:levelcount:))

# copy(from:sourceSlice:sourceLevel:to:destinationSlice:destinationLevel:sliceCount:levelCount:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Encodes a command that copies slices of a texture to another texture’s slices.

## Declaration

```swift
func copy(from sourceTexture: any MTLTexture, sourceSlice: Int, sourceLevel: Int, to destinationTexture: any MTLTexture, destinationSlice: Int, destinationLevel: Int, sliceCount: Int, levelCount: Int)
```

## Parameters

- `sourceTexture`: A texture the command copies data from.
- `sourceSlice`: A slice within `sourceTexture` the command uses as a starting point to copy data from.

  Set this to `0` if `sourceTexture` isn’t a texture array or a cube texture.
- `sourceLevel`: A mipmap level within `sourceTexture`.
- `destinationTexture`: Another texture the command copies the data to that has the same pixel format and sample count as `sourceTexture`.
- `destinationSlice`: A slice within `destinationTexture` the command uses as its starting point for coping data.

  Set this to `0` if `destinationTexture` isn’t a texture array or a cube texture.
- `destinationLevel`: A mipmap level within `destinationTexture` that has the same size as the source texture’s `sourceLevel` mipmap.
- `sliceCount`: The number of slices the command copies so that it satisfies these conditions:

  - The sum of `sourceLevel` and `sourceSlice` doesn’t exceed the number of slices in `sourceTexture`.
  - The sum of `destinationLevel` and `destinationSlice` doesn’t exceed the number of slices in `destinationTexture`.
- `levelCount`: The number of mipmap levels the command copies so that it satisfies these conditions:

  - The sum of `levelCount` and `sourceLevel` doesn’t exceed the number of mipmap levels in `sourceTexture`.
  - The sum of `levelCount` and `destinationLevel` doesn’t exceed the number of mipmap levels in `destinationTexture`.

## Mentioned In

- [Copying data into or out of mipmaps](../copying-data-into-or-out-of-mipmaps.md)

## See Also

### Copying texture data to another texture

- [copy(from:to:)](copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:)](copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.
- [copy(from:sourceOrigin:sourceDimensions:to:destinationOrigin:destinationDimensions:)](copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.

# copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

Encodes a command that copies slices of a texture to another texture’s slices.

## Declaration

```objectivec
- (void) copyFromTexture:(id<MTLTexture>) sourceTexture sourceSlice:(NSUInteger) sourceSlice sourceLevel:(NSUInteger) sourceLevel toTexture:(id<MTLTexture>) destinationTexture destinationSlice:(NSUInteger) destinationSlice destinationLevel:(NSUInteger) destinationLevel sliceCount:(NSUInteger) sliceCount levelCount:(NSUInteger) levelCount;
```

## Parameters

- `sourceTexture`: A texture the command copies data from.
- `sourceSlice`: A slice within `sourceTexture` the command uses as a starting point to copy data from.

  Set this to `0` if `sourceTexture` isn’t a texture array or a cube texture.
- `sourceLevel`: A mipmap level within `sourceTexture`.
- `destinationTexture`: Another texture the command copies the data to that has the same pixel format and sample count as `sourceTexture`.
- `destinationSlice`: A slice within `destinationTexture` the command uses as its starting point for coping data.

  Set this to `0` if `destinationTexture` isn’t a texture array or a cube texture.
- `destinationLevel`: A mipmap level within `destinationTexture` that has the same size as the source texture’s `sourceLevel` mipmap.
- `sliceCount`: The number of slices the command copies so that it satisfies these conditions:

  - The sum of `sourceLevel` and `sourceSlice` doesn’t exceed the number of slices in `sourceTexture`.
  - The sum of `destinationLevel` and `destinationSlice` doesn’t exceed the number of slices in `destinationTexture`.
- `levelCount`: The number of mipmap levels the command copies so that it satisfies these conditions:

  - The sum of `levelCount` and `sourceLevel` doesn’t exceed the number of mipmap levels in `sourceTexture`.
  - The sum of `levelCount` and `destinationLevel` doesn’t exceed the number of mipmap levels in `destinationTexture`.

## Mentioned In

- [Copying data into or out of mipmaps](../copying-data-into-or-out-of-mipmaps.md)

## See Also

### Copying texture data to another texture

- [copyFromTexture:toTexture:](copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:](copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationslice_destinationlevel_destinationorigin_%29.md): Encodes a command that copies image data from a texture’s slice into another slice.
- [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
