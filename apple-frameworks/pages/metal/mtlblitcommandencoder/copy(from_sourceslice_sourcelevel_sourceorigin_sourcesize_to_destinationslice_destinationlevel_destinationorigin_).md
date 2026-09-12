> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/copy(from:sourceslice:sourcelevel:sourceorigin:sourcesize:to:destinationslice:destinationlevel:destinationorigin:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/copy(from:sourceslice:sourcelevel:sourceorigin:sourcesize:to:destinationslice:destinationlevel:destinationorigin:))

# copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command that copies image data from a texture’s slice into another slice.

## Declaration

```swift
func copy(from sourceTexture: any MTLTexture, sourceSlice: Int, sourceLevel: Int, sourceOrigin: MTLOrigin, sourceSize: MTLSize, to destinationTexture: any MTLTexture, destinationSlice: Int, destinationLevel: Int, destinationOrigin: MTLOrigin)
```

## Parameters

- `sourceTexture`: A texture with an [isFramebufferOnly](../mtltexture/isframebufferonly.md) property value of [false](https://developer.apple.com/documentation/swift/false) that the command copies data from.

  For a texture that uses a compressed pixel format, align the copy region (`sourceOrigin` and `sourceSize`) to the pixel format’s block size.
- `sourceSlice`: A slice within `sourceTexture`.
- `sourceLevel`: A mipmap level within `sourceTexture`.
- `sourceOrigin`: A location within `sourceTexture` that the command begins copying data from.

  Assign `0` to each dimension that’s not relevant to `sourceTexture`. For example:

  - If the source texture is a 2D texture, set the origin’s [z](../mtlorigin/z.md) property to `0`.
  - If the source texture is a 1D texture, set the origin’s [y](../mtlorigin/y.md) and [z](../mtlorigin/z.md) properties to `0`.
- `sourceSize`: An [MTLSize](../mtlsize.md) instance, which can represent a 3D region, that instructs the command how many pixels to copy from `sourceTexture`, starting at `sourceOrigin`.

  Assign `1` to each dimension that’s not relevant to `sourceTexture`. For example:

  - If the source texture is a 2D texture, set the size’s [depth](../mtlsize/depth.md) property to `1`.
  - If the source texture is a 1D texture, set the size’s [height](../mtlsize/height.md) and [depth](../mtlsize/depth.md) properties to `1`.

  If `sourceTexture` uses a compressed pixel format, set `sourceSize` to a multiple of the pixel format’s block size. If the block extends outside the bounds of the texture, clamp `sourceSize` to the edge of the texture.
- `destinationTexture`: A texture the command copies data to that has the following configuration:

  - The [isFramebufferOnly](../mtltexture/isframebufferonly.md) property value is [false](https://developer.apple.com/documentation/swift/false).
  - The pixel format is the same as `sourceTexture`.
  - The sample count is the same as `sourceTexture`.

  For a texture that uses a compressed pixel format, align the copy region (`destinationOrigin`) to the pixel format’s block size.
- `destinationSlice`: A slice within `destinationTexture`.
- `destinationLevel`: A mipmap level within `destinationTexture`.
- `destinationOrigin`: A location within `destinationTexture` that the command begins copying data to.

  Assign `0` to each dimension that’s not relevant to `destinationTexture`. For example:

  - If the destination texture is a 2D texture, set the origin’s [z](../mtlorigin/z.md) property to `0`.
  - If the destination texture is a 1D texture, set the origin’s [y](../mtlorigin/y.md) and [z](../mtlorigin/z.md) properties to `0`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

<a id="discussion"></a>

## Discussion

For textures that use a PVRTC pixel format, you can use this method to copy the entire texture, but not a subregion of the texture.

> **Important**

>  Copying data to overlapping regions within the same texture may result in unexpected behavior.

## See Also

### Copying texture data to another texture

- [copy(from:to:)](copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copy(from:sourceSlice:sourceLevel:to:destinationSlice:destinationLevel:sliceCount:levelCount:)](copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copy(from:sourceOrigin:sourceDimensions:to:destinationOrigin:destinationDimensions:)](copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.

# copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command that copies image data from a texture’s slice into another slice.

## Declaration

```objectivec
- (void) copyFromTexture:(id<MTLTexture>) sourceTexture sourceSlice:(NSUInteger) sourceSlice sourceLevel:(NSUInteger) sourceLevel sourceOrigin:(MTLOrigin) sourceOrigin sourceSize:(MTLSize) sourceSize toTexture:(id<MTLTexture>) destinationTexture destinationSlice:(NSUInteger) destinationSlice destinationLevel:(NSUInteger) destinationLevel destinationOrigin:(MTLOrigin) destinationOrigin;
```

## Parameters

- `sourceTexture`: A texture with an [framebufferOnly](../mtltexture/isframebufferonly.md) property value of [false](https://developer.apple.com/documentation/swift/false) that the command copies data from.

  For a texture that uses a compressed pixel format, align the copy region (`sourceOrigin` and `sourceSize`) to the pixel format’s block size.
- `sourceSlice`: A slice within `sourceTexture`.
- `sourceLevel`: A mipmap level within `sourceTexture`.
- `sourceOrigin`: A location within `sourceTexture` that the command begins copying data from.

  Assign `0` to each dimension that’s not relevant to `sourceTexture`. For example:

  - If the source texture is a 2D texture, set the origin’s [z](../mtlorigin/z.md) property to `0`.
  - If the source texture is a 1D texture, set the origin’s [y](../mtlorigin/y.md) and [z](../mtlorigin/z.md) properties to `0`.
- `sourceSize`: An [MTLSize](../mtlsize.md) instance, which can represent a 3D region, that instructs the command how many pixels to copy from `sourceTexture`, starting at `sourceOrigin`.

  Assign `1` to each dimension that’s not relevant to `sourceTexture`. For example:

  - If the source texture is a 2D texture, set the size’s [depth](../mtlsize/depth.md) property to `1`.
  - If the source texture is a 1D texture, set the size’s [height](../mtlsize/height.md) and [depth](../mtlsize/depth.md) properties to `1`.

  If `sourceTexture` uses a compressed pixel format, set `sourceSize` to a multiple of the pixel format’s block size. If the block extends outside the bounds of the texture, clamp `sourceSize` to the edge of the texture.
- `destinationTexture`: A texture the command copies data to that has the following configuration:

  - The [framebufferOnly](../mtltexture/isframebufferonly.md) property value is [false](https://developer.apple.com/documentation/swift/false).
  - The pixel format is the same as `sourceTexture`.
  - The sample count is the same as `sourceTexture`.

  For a texture that uses a compressed pixel format, align the copy region (`destinationOrigin`) to the pixel format’s block size.
- `destinationSlice`: A slice within `destinationTexture`.
- `destinationLevel`: A mipmap level within `destinationTexture`.
- `destinationOrigin`: A location within `destinationTexture` that the command begins copying data to.

  Assign `0` to each dimension that’s not relevant to `destinationTexture`. For example:

  - If the destination texture is a 2D texture, set the origin’s [z](../mtlorigin/z.md) property to `0`.
  - If the destination texture is a 1D texture, set the origin’s [y](../mtlorigin/y.md) and [z](../mtlorigin/z.md) properties to `0`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

<a id="discussion"></a>

## Discussion

For textures that use a PVRTC pixel format, you can use this method to copy the entire texture, but not a subregion of the texture.

> **Important**

>  Copying data to overlapping regions within the same texture may result in unexpected behavior.

## See Also

### Copying texture data to another texture

- [copyFromTexture:toTexture:](copy%28from_to_%29.md): Encodes a command that copies data from one texture to another.
- [copyFromTexture:sourceSlice:sourceLevel:toTexture:destinationSlice:destinationLevel:sliceCount:levelCount:](copy%28from_sourceslice_sourcelevel_to_destinationslice_destinationlevel_slicecount_levelcount_%29.md): Encodes a command that copies slices of a texture to another texture’s slices.
- [copyFromTensor:sourceOrigin:sourceDimensions:toTensor:destinationOrigin:destinationDimensions:](copy%28from_sourceorigin_sourcedimensions_to_destinationorigin_destinationdimensions_%29.md): Encodes a command to copy data from a slice of the data plane of a tensor into a slice of the data plane of another tensor.
