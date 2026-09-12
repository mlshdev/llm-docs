> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsoffset](https://developer.apple.com/documentation/metalperformanceshaders/mpsoffset)

# MPSOffset (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A signed coordinate with x, y, and z components.

## Declaration

```swift
struct MPSOffset
```

## Topics

### Fields

- [x](mpsoffset/x.md): The horizontal component of the offset, in pixels.
- [y](mpsoffset/y.md): The vertical component of the offset, in pixels.
- [z](mpsoffset/z.md): The depth component of the offset, in pixels.

### Initializers

- [init()](mpsoffset/init%28%29.md)
- [init(x:y:z:)](mpsoffset/init%28x_y_z_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance Properties

- [offset](mpscnnkernel/offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [clipRect](mpscnnkernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](mpscnnkernel/destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
- [edgeMode](mpscnnkernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
- [kernelHeight](mpscnnkernel/kernelheight.md)
- [kernelWidth](mpscnnkernel/kernelwidth.md)
- [strideInPixelsX](mpscnnkernel/strideinpixelsx.md)
- [strideInPixelsY](mpscnnkernel/strideinpixelsy.md)
- [isBackwards](mpscnnkernel/isbackwards.md)
- [padding](mpscnnkernel/padding.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)

# MPSOffset (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A signed coordinate with x, y, and z components.

## Declaration

```objectivec
typedef struct { ... } MPSOffset;
```

## Topics

### Fields

- [x](mpsoffset/x.md): The horizontal component of the offset, in pixels.
- [y](mpsoffset/y.md): The vertical component of the offset, in pixels.
- [z](mpsoffset/z.md): The depth component of the offset, in pixels.

## See Also

### Instance Properties

- [offset](mpscnnkernel/offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [clipRect](mpscnnkernel/cliprect.md): An optional clip rectangle to use when writing data. Only the pixels in the clip rectangle will be overwritten.
- [MTLRegion](../metal/mtlregion.md): The bounds for a subset of an instance’s elements.
- [destinationFeatureChannelOffset](mpscnnkernel/destinationfeaturechanneloffset.md): The number of channels in the destination image to skip before writing output data.
- [edgeMode](mpscnnkernel/edgemode.md): The edge mode to use when texture reads stray off the edge of an image.
- [MPSImageEdgeMode](mpsimageedgemode.md): The options used to control the edge behavior of an image filter when it reads outside the bounds of a source texture.
- [kernelHeight](mpscnnkernel/kernelheight.md)
- [kernelWidth](mpscnnkernel/kernelwidth.md)
- [strideInPixelsX](mpscnnkernel/strideinpixelsx.md)
- [strideInPixelsY](mpscnnkernel/strideinpixelsy.md)
- [isBackwards](mpscnnkernel/isbackwards.md)
- [padding](mpscnnkernel/padding.md)
- [MPSNNPadding](mpsnnpadding.md): The protocol that provides a description of how kernels should pad images.
- [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)
