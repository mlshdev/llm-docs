> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnpadding](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnpadding)

# MPSNNPadding (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol that provides a description of how kernels should pad images.

## Declaration

```swift
protocol MPSNNPadding : NSSecureCoding, NSObjectProtocol
```

## Topics

### Instance Methods

- [destinationImageDescriptor(forSourceImages:sourceStates:for:suggestedDescriptor:)](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md)
- [MPSImage](mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSKernel](mpskernel.md): A standard interface for Metal Performance Shaders kernels.
- [MPSImageDescriptor](mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](mpsimage.md).
- [paddingMethod()](mpsnnpadding/paddingmethod%28%29.md)
- [label()](mpsnnpadding/label%28%29.md)
- [inverse()](mpsnnpadding/inverse%28%29.md)

## Relationships

### Inherits From

- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [MPSNNDefaultPadding](mpsnndefaultpadding.md)

## See Also

### Instance Properties

- [offset](mpscnnkernel/offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
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
- [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)

# MPSNNPadding (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The protocol that provides a description of how kernels should pad images.

## Declaration

```objectivec
@protocol MPSNNPadding <NSObject, NSSecureCoding>
```

## Topics

### Instance Methods

- [destinationImageDescriptorForSourceImages:sourceStates:forKernel:suggestedDescriptor:](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md)
- [MPSImage](mpsimage.md): A texture that may have more than four channels for use in convolutional neural networks.
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSKernel](mpskernel.md): A standard interface for Metal Performance Shaders kernels.
- [MPSImageDescriptor](mpsimagedescriptor.md): A description of the attributes used to create an [MPSImage](mpsimage.md).
- [paddingMethod](mpsnnpadding/paddingmethod%28%29.md)
- [label](mpsnnpadding/label%28%29.md)
- [inverse](mpsnnpadding/inverse%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

### Conforming Types

- [MPSNNDefaultPadding](mpsnndefaultpadding.md)

## See Also

### Instance Properties

- [offset](mpscnnkernel/offset.md): The position of the destination image’s clip rectangle origin, relative to the source image.
- [MPSOffset](mpsoffset.md): A signed coordinate with x, y, and z components.
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
- [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)
