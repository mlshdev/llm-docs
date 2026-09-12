> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/copy(from:sourceoffset:sourcebytesperrow:sourcebytesperimage:sourcesize:to:destinationslice:destinationlevel:destinationorigin:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/copy(from:sourceoffset:sourcebytesperrow:sourcebytesperimage:sourcesize:to:destinationslice:destinationlevel:destinationorigin:))

# copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command to copy image data from a source buffer into a destination texture.

## Declaration

```swift
func copy(from sourceBuffer: any MTLBuffer, sourceOffset: Int, sourceBytesPerRow: Int, sourceBytesPerImage: Int, sourceSize: MTLSize, to destinationTexture: any MTLTexture, destinationSlice: Int, destinationLevel: Int, destinationOrigin: MTLOrigin)
```

## Parameters

- `sourceBuffer`: A buffer the command copies data from.
- `sourceOffset`: A byte offset within `sourceBuffer` that the command copies from, which needs to be a multiple of the destination texture’s pixel size, in bytes.
- `sourceBytesPerRow`: The number of bytes between adjacent rows of pixels in the source buffer’s memory, which needs to be:

  - A multiple of the source texture’s pixel size, in bytes
  - Less than or equal to the product of the destination texture’s pixel size, in bytes, and the largest pixel width the destination texture’s type allows

  If `destinationTexture` uses a compressed pixel format, set `sourceBytesPerRow` to the number of bytes between the starts of two row blocks.
- `sourceBytesPerImage`: The number of bytes between each 2D image of a 3D texture. This value needs to be a multiple of the source texture’s pixel size, in bytes.

  Set this value to `0` for 2D textures, which means `sourceSize.`[depth](../mtlsize/depth.md) is equal to `1`.
- `sourceSize`: An [MTLSize](../mtlsize.md) instance, which can represent a 3D region, that instructs the command how many pixels to copy to `destinationTexture`, starting at `destinationOrigin`.

  Assign `1` to each dimension that’s not relevant to `destinationTexture`. For example:

  - If the destination texture is a 2D texture, set the size’s [depth](../mtlsize/depth.md) property to `1`.
  - If the destination texture is a 1D texture, set the size’s [height](../mtlsize/height.md) and [depth](../mtlsize/depth.md) properties to `1`.

  If `destinationTexture` uses a compressed pixel format, set `sourceSize` to a multiple of the pixel format’s block size. If the block extends outside the bounds of the texture, clamp `sourceSize` to the edge of the texture.
- `destinationTexture`: A texture with an [isFramebufferOnly](../mtltexture/isframebufferonly.md) property value of [false](https://developer.apple.com/documentation/swift/false) that the command copies data to.
- `destinationSlice`: A slice within `destinationTexture`.

  For textures that use a combined depth/stencil pixel format, call the [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:options:)](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md) method instead. Configure that method’s `options` parameter appropriately.
- `destinationLevel`: A mipmap level within `destinationTexture`.
- `destinationOrigin`: A location within `destinationTexture` that the command begins copying data to.

  Assign `0` to each dimension that’s not relevant to `destinationTexture`. For example:

  - If the destination texture is a 2D texture, set the origin’s [z](../mtlorigin/z.md) property to `0`.
  - If the destination texture is a 1D texture, set the origin’s [y](../mtlorigin/y.md) and [z](../mtlorigin/z.md) properties to `0`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

<a id="discussion"></a>

## Discussion

This method is the equivalent of passing an empty [OptionSet](https://developer.apple.com/documentation/swift/optionset) to the `options` parameter of [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:options:)](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md). In Swift, pass `[]` to represent an empty option set, and in Objective-C, pass [MTLBlitOptionNone](../mtlblitoption/mtlblitoptionnone.md).

> **Important**

>  If the pixel format of `sourceTexture` is a PVRTC format, use [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:options:)](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md) instead.

## See Also

### Copying buffer data to a texture

- [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:options:)](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md): Encodes a command to copy image data from a source buffer into a destination texture.

# copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command to copy image data from a source buffer into a destination texture.

## Declaration

```objectivec
- (void) copyFromBuffer:(id<MTLBuffer>) sourceBuffer sourceOffset:(NSUInteger) sourceOffset sourceBytesPerRow:(NSUInteger) sourceBytesPerRow sourceBytesPerImage:(NSUInteger) sourceBytesPerImage sourceSize:(MTLSize) sourceSize toTexture:(id<MTLTexture>) destinationTexture destinationSlice:(NSUInteger) destinationSlice destinationLevel:(NSUInteger) destinationLevel destinationOrigin:(MTLOrigin) destinationOrigin;
```

## Parameters

- `sourceBuffer`: A buffer the command copies data from.
- `sourceOffset`: A byte offset within `sourceBuffer` that the command copies from, which needs to be a multiple of the destination texture’s pixel size, in bytes.
- `sourceBytesPerRow`: The number of bytes between adjacent rows of pixels in the source buffer’s memory, which needs to be:

  - A multiple of the source texture’s pixel size, in bytes
  - Less than or equal to the product of the destination texture’s pixel size, in bytes, and the largest pixel width the destination texture’s type allows

  If `destinationTexture` uses a compressed pixel format, set `sourceBytesPerRow` to the number of bytes between the starts of two row blocks.
- `sourceBytesPerImage`: The number of bytes between each 2D image of a 3D texture. This value needs to be a multiple of the source texture’s pixel size, in bytes.

  Set this value to `0` for 2D textures, which means `sourceSize.`[depth](../mtlsize/depth.md) is equal to `1`.
- `sourceSize`: An [MTLSize](../mtlsize.md) instance, which can represent a 3D region, that instructs the command how many pixels to copy to `destinationTexture`, starting at `destinationOrigin`.

  Assign `1` to each dimension that’s not relevant to `destinationTexture`. For example:

  - If the destination texture is a 2D texture, set the size’s [depth](../mtlsize/depth.md) property to `1`.
  - If the destination texture is a 1D texture, set the size’s [height](../mtlsize/height.md) and [depth](../mtlsize/depth.md) properties to `1`.

  If `destinationTexture` uses a compressed pixel format, set `sourceSize` to a multiple of the pixel format’s block size. If the block extends outside the bounds of the texture, clamp `sourceSize` to the edge of the texture.
- `destinationTexture`: A texture with an [framebufferOnly](../mtltexture/isframebufferonly.md) property value of [false](https://developer.apple.com/documentation/swift/false) that the command copies data to.
- `destinationSlice`: A slice within `destinationTexture`.

  For textures that use a combined depth/stencil pixel format, call the [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md) method instead. Configure that method’s `options` parameter appropriately.
- `destinationLevel`: A mipmap level within `destinationTexture`.
- `destinationOrigin`: A location within `destinationTexture` that the command begins copying data to.

  Assign `0` to each dimension that’s not relevant to `destinationTexture`. For example:

  - If the destination texture is a 2D texture, set the origin’s [z](../mtlorigin/z.md) property to `0`.
  - If the destination texture is a 1D texture, set the origin’s [y](../mtlorigin/y.md) and [z](../mtlorigin/z.md) properties to `0`.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

<a id="discussion"></a>

## Discussion

This method is the equivalent of passing an empty [OptionSet](https://developer.apple.com/documentation/swift/optionset) to the `options` parameter of [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md). In Swift, pass `[]` to represent an empty option set, and in Objective-C, pass [MTLBlitOptionNone](../mtlblitoption/mtlblitoptionnone.md).

> **Important**

>  If the pixel format of `sourceTexture` is a PVRTC format, use [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md) instead.

## See Also

### Copying buffer data to a texture

- [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md): Encodes a command to copy image data from a source buffer into a destination texture.
