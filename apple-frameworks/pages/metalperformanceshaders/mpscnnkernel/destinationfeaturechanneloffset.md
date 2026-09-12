> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnkernel/destinationfeaturechanneloffset](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnkernel/destinationfeaturechanneloffset)

# destinationFeatureChannelOffset (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The number of channels in the destination image to skip before writing output data.

## Declaration

```swift
var destinationFeatureChannelOffset: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This is the starting offset in the destination image in the feature channel dimension at which destination output data is written. This allows you to pass a subset of all the channels in an image as the output of a kernel.

For example, suppose a destination image has 24 channels and a kernel outputs 8 channels. If we want channels 8 to 15 of this destination image to be used for the output, we can set the value of the [destinationFeatureChannelOffset](destinationfeaturechanneloffset.md) property to 8.

Note that this offset applies independently to each image when the [MPSImage](../mpsimage.md) object is a container for multiple images and the [MPSCNNKernel](../mpscnnkernel.md) object is processing multiple images (i.e., `clipRect.size.depth > 1`).

The default value is `0`. Any other value specified must be a multiple of `4`. If the kernel outputs `N` channels, the destination image **must** have at least `destinationFeatureChannelOffset + N` channels. Using a destination image with an insufficient number of feature channels results in an error.

For example, if a convolution filter outputs 32 channels, and the destination image has 64 channels, then it is an error to set `destinationFeatureChannelOffset > 32`.

## See Also

### Instance Properties

- [offset](offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
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

# destinationFeatureChannelOffset (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The number of channels in the destination image to skip before writing output data.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger destinationFeatureChannelOffset;
```

<a id="Discussion"></a>

## Discussion

This is the starting offset in the destination image in the feature channel dimension at which destination output data is written. This allows you to pass a subset of all the channels in an image as the output of a kernel.

For example, suppose a destination image has 24 channels and a kernel outputs 8 channels. If we want channels 8 to 15 of this destination image to be used for the output, we can set the value of the [destinationFeatureChannelOffset](destinationfeaturechanneloffset.md) property to 8.

Note that this offset applies independently to each image when the [MPSImage](../mpsimage.md) object is a container for multiple images and the [MPSCNNKernel](../mpscnnkernel.md) object is processing multiple images (i.e., `clipRect.size.depth > 1`).

The default value is `0`. Any other value specified must be a multiple of `4`. If the kernel outputs `N` channels, the destination image **must** have at least `destinationFeatureChannelOffset + N` channels. Using a destination image with an insufficient number of feature channels results in an error.

For example, if a convolution filter outputs 32 channels, and the destination image has 64 channels, then it is an error to set `destinationFeatureChannelOffset > 32`.

## See Also

### Instance Properties

- [offset](offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
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
