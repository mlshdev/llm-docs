> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitoption/stencilfromdepthstencil](https://developer.apple.com/documentation/metal/mtlblitoption/stencilfromdepthstencil)

# stencilFromDepthStencil (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A blit option that copies the stencil portion of a combined depth and stencil texture to or from a buffer.

## Declaration

```swift
static var stencilFromDepthStencil: MTLBlitOption { get }
```

<a id="discussion"></a>

## Discussion

You can pass this option to some methods that copy data between a buffer and a texture, including the following:

- [copy(from:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:to:destinationSlice:destinationLevel:destinationOrigin:options:)](../mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md)
- [copy(from:sourceSlice:sourceLevel:sourceOrigin:sourceSize:to:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:)](../mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md)

## See Also

### Depth and stencil buffer options

- [depthFromDepthStencil](depthfromdepthstencil.md): A blit option that copies the depth portion of a combined depth and stencil texture to or from a buffer.

# MTLBlitOptionStencilFromDepthStencil (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A blit option that copies the stencil portion of a combined depth and stencil texture to or from a buffer.

## Declaration

```objectivec
MTLBlitOptionStencilFromDepthStencil
```

<a id="discussion"></a>

## Discussion

You can pass this option to some methods that copy data between a buffer and a texture, including the following:

- [copyFromBuffer:sourceOffset:sourceBytesPerRow:sourceBytesPerImage:sourceSize:toTexture:destinationSlice:destinationLevel:destinationOrigin:options:](../mtlblitcommandencoder/copy%28from_sourceoffset_sourcebytesperrow_sourcebytesperimage_sourcesize_to_destinationslice_destinationlevel_destinationorigin_options_%29.md)
- [copyFromTexture:sourceSlice:sourceLevel:sourceOrigin:sourceSize:toBuffer:destinationOffset:destinationBytesPerRow:destinationBytesPerImage:options:](../mtlblitcommandencoder/copy%28from_sourceslice_sourcelevel_sourceorigin_sourcesize_to_destinationoffset_destinationbytesperrow_destinationbytesperimage_options_%29.md)

## See Also

### Depth and stencil buffer options

- [MTLBlitOptionDepthFromDepthStencil](depthfromdepthstencil.md): A blit option that copies the depth portion of a combined depth and stencil texture to or from a buffer.
