> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnkernel/offset](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnkernel/offset)

# offset (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The position of the destination image’s clip rectangle origin, relative to the source image.

## Declaration

```swift
var offset: MPSOffset { get set }
```

<a id="Discussion"></a>

## Discussion

The offset is defined as the position of `clipRect.origin` in source image coordinates. The default value is `{0,0,0}`, indicating that the top left corners of the clip rectangle and the source image align.

The value of `offset.z` is the index of the starting source image in batch processing mode.

## See Also

### Instance Properties

- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
- [edgeMode](edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
- [kernelHeight](kernelheight.md)
- [kernelWidth](kernelwidth.md)
- [strideInPixelsX](strideinpixelsx.md)
- [strideInPixelsY](strideinpixelsy.md)
- [isBackwards](isbackwards.md)
- [padding](padding.md)
- [MPSNNPadding](../mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [destinationImageAllocator](destinationimageallocator.md)
- [MPSImageAllocator](../mpsimageallocator.md)

# offset (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The position of the destination image’s clip rectangle origin, relative to the source image.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSOffset offset;
```

<a id="Discussion"></a>

## Discussion

The offset is defined as the position of `clipRect.origin` in source image coordinates. The default value is `{0,0,0}`, indicating that the top left corners of the clip rectangle and the source image align.

The value of `offset.z` is the index of the starting source image in batch processing mode.

## See Also

### Instance Properties

- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
- [edgeMode](edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](../mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
- [kernelHeight](kernelheight.md)
- [kernelWidth](kernelwidth.md)
- [strideInPixelsX](strideinpixelsx.md)
- [strideInPixelsY](strideinpixelsy.md)
- [isBackwards](isbackwards.md)
- [padding](padding.md)
- [MPSNNPadding](../mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [destinationImageAllocator](destinationimageallocator.md)
- [MPSImageAllocator](../mpsimageallocator.md)
