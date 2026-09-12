> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageedgemode](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageedgemode)

# MPSImageEdgeMode (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

## Declaration

```swift
enum MPSImageEdgeMode
```

## Topics

### Constants

- [MPSImageEdgeMode.zero](mpsimageedgemode/zero.md): Out-of-bound pixels are set to `(0.0, 0.0, 0.0, 1.0)` for images without an alpha channel or `(0.0, 0.0, 0.0, 0.0)` for images with an alpha channel, as defined by their pixel format.
- [MPSImageEdgeMode.clamp](mpsimageedgemode/clamp.md): Out-of-bound pixels are clamped to the nearest edge pixel.

### Enumeration Cases

- [MPSImageEdgeMode.constant](mpsimageedgemode/constant.md)
- [MPSImageEdgeMode.mirror](mpsimageedgemode/mirror.md)
- [MPSImageEdgeMode.mirrorWithEdge](mpsimageedgemode/mirrorwithedge.md)

### Initializers

- [init(rawValue:)](mpsimageedgemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Instance Properties

- [offset](mpscnnkernel/offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](mpscnnkernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](mpscnnkernel/destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
- [edgeMode](mpscnnkernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [kernelHeight](mpscnnkernel/kernelheight.md)
- [kernelWidth](mpscnnkernel/kernelwidth.md)
- [strideInPixelsX](mpscnnkernel/strideinpixelsx.md)
- [strideInPixelsY](mpscnnkernel/strideinpixelsy.md)
- [isBackwards](mpscnnkernel/isbackwards.md)
- [padding](mpscnnkernel/padding.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)

# MPSImageEdgeMode (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.

## Declaration

```objectivec
enum MPSImageEdgeMode : NSUInteger;
```

## Topics

### Constants

- [MPSImageEdgeModeZero](mpsimageedgemode/zero.md): Out-of-bound pixels are set to `(0.0, 0.0, 0.0, 1.0)` for images without an alpha channel or `(0.0, 0.0, 0.0, 0.0)` for images with an alpha channel, as defined by their pixel format.
- [MPSImageEdgeModeClamp](mpsimageedgemode/clamp.md): Out-of-bound pixels are clamped to the nearest edge pixel.

### Enumeration Cases

- [MPSImageEdgeModeConstant](mpsimageedgemode/constant.md)
- [MPSImageEdgeModeMirror](mpsimageedgemode/mirror.md)
- [MPSImageEdgeModeMirrorWithEdge](mpsimageedgemode/mirrorwithedge.md)

## See Also

### Instance Properties

- [offset](mpscnnkernel/offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
- [clipRect](mpscnnkernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](mpscnnkernel/destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
- [edgeMode](mpscnnkernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [kernelHeight](mpscnnkernel/kernelheight.md)
- [kernelWidth](mpscnnkernel/kernelwidth.md)
- [strideInPixelsX](mpscnnkernel/strideinpixelsx.md)
- [strideInPixelsY](mpscnnkernel/strideinpixelsy.md)
- [isBackwards](mpscnnkernel/isbackwards.md)
- [padding](mpscnnkernel/padding.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)
