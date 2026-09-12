> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnkernel/isstatemodified](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnkernel/isstatemodified)

# isStateModified (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
var isStateModified: Bool { get }
```

## See Also

### Instance Properties

- [offset](offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
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

# isStateModified (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isStateModified;
```

## See Also

### Instance Properties

- [offset](offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
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
