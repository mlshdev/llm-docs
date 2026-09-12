> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnkernel/edgemode](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnkernel/edgemode)

# edgeMode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The edge mode to use when texture reads stray off the edge of an image.

## Declaration

```swift
var edgeMode: MPSImageEdgeMode { get set }
```

<a id="Discussion"></a>

## Discussion

Most [MPSKernel](../mpskernel.md) objects can read off the edge of the source image. This can happen because of a negative offset property, because the  value of `offset + clipRect.size` is larger than the source image or because the filter looks at neighboring pixels, such as a convolution filter.

The default value is [MPSImageEdgeMode.zero](../mpsimageedgemode/zero.md).

> **Note**

>  For an [MPSCNNPoolingAverage](../mpscnnpoolingaverage.md) object, specifying a [MPSImageEdgeMode.clamp](../mpsimageedgemode/clamp.md) edge mode is interpreted as a “shrink-to-edge” operation, which shrinks the effective filtering window to remain within the source image borders.

## See Also

### Instance Properties

- [offset](offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
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

# edgeMode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The edge mode to use when texture reads stray off the edge of an image.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSImageEdgeMode edgeMode;
```

<a id="Discussion"></a>

## Discussion

Most [MPSKernel](../mpskernel.md) objects can read off the edge of the source image. This can happen because of a negative offset property, because the  value of `offset + clipRect.size` is larger than the source image or because the filter looks at neighboring pixels, such as a convolution filter.

The default value is [MPSImageEdgeModeZero](../mpsimageedgemode/zero.md).

> **Note**

>  For an [MPSCNNPoolingAverage](../mpscnnpoolingaverage.md) object, specifying a [MPSImageEdgeModeClamp](../mpsimageedgemode/clamp.md) edge mode is interpreted as a “shrink-to-edge” operation, which shrinks the effective filtering window to remain within the source image borders.

## See Also

### Instance Properties

- [offset](offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](../mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
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
