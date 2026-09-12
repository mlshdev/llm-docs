> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinarykernel](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinarykernel)

# MPSCNNBinaryKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A convolution neural network kernel.

## Declaration

```swift
class MPSCNNBinaryKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnbinarykernel/init%28coder_device_%29.md)
- [init(device:)](mpscnnbinarykernel/init%28device_%29.md)

### Instance Properties

- [clipRect](mpscnnbinarykernel/cliprect.md)
- [destinationFeatureChannelOffset](mpscnnbinarykernel/destinationfeaturechanneloffset.md)
- [destinationImageAllocator](mpscnnbinarykernel/destinationimageallocator.md)
- [isBackwards](mpscnnbinarykernel/isbackwards.md)
- [padding](mpscnnbinarykernel/padding.md)
- [primaryEdgeMode](mpscnnbinarykernel/primaryedgemode.md)
- [primaryOffset](mpscnnbinarykernel/primaryoffset.md)
- [primaryStrideInPixelsX](mpscnnbinarykernel/primarystrideinpixelsx.md)
- [primaryStrideInPixelsY](mpscnnbinarykernel/primarystrideinpixelsy.md)
- [secondaryEdgeMode](mpscnnbinarykernel/secondaryedgemode.md)
- [secondaryOffset](mpscnnbinarykernel/secondaryoffset.md)
- [secondaryStrideInPixelsX](mpscnnbinarykernel/secondarystrideinpixelsx.md)
- [secondaryStrideInPixelsY](mpscnnbinarykernel/secondarystrideinpixelsy.md)
- [isStateModified](mpscnnbinarykernel/isstatemodified.md)
- [primaryDilationRateX](mpscnnbinarykernel/primarydilationratex.md)
- [primaryDilationRateY](mpscnnbinarykernel/primarydilationratey.md)
- [primaryKernelHeight](mpscnnbinarykernel/primarykernelheight.md)
- [primaryKernelWidth](mpscnnbinarykernel/primarykernelwidth.md)
- [primarySourceFeatureChannelMaxCount](mpscnnbinarykernel/primarysourcefeaturechannelmaxcount.md)
- [primarySourceFeatureChannelOffset](mpscnnbinarykernel/primarysourcefeaturechanneloffset.md)
- [secondaryDilationRateX](mpscnnbinarykernel/secondarydilationratex.md)
- [secondaryDilationRateY](mpscnnbinarykernel/secondarydilationratey.md)
- [secondaryKernelHeight](mpscnnbinarykernel/secondarykernelheight.md)
- [secondaryKernelWidth](mpscnnbinarykernel/secondarykernelwidth.md)
- [secondarySourceFeatureChannelMaxCount](mpscnnbinarykernel/secondarysourcefeaturechannelmaxcount.md)
- [secondarySourceFeatureChannelOffset](mpscnnbinarykernel/secondarysourcefeaturechanneloffset.md)

### Instance Methods

- [encode(commandBuffer:primaryImage:secondaryImage:)](mpscnnbinarykernel/encode%28commandbuffer_primaryimage_secondaryimage_%29.md)
- [encode(commandBuffer:primaryImage:secondaryImage:destinationImage:)](mpscnnbinarykernel/encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [appendBatchBarrier()](mpscnnbinarykernel/appendbatchbarrier%28%29.md)
- [batchEncodingStorageSize(primaryImage:secondaryImage:sourceStates:destinationImage:)](mpscnnbinarykernel/batchencodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [destinationImageDescriptor(forSourceImages:sourceStates:)](mpscnnbinarykernel/destinationimagedescriptor%28forsourceimages_sourcestates_%29.md)
- [encode(commandBuffer:primaryImage:secondaryImage:destinationState:destinationStateIsTemporary:)](mpscnnbinarykernel/encode%28commandbuffer_primaryimage_secondaryimage_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatch(commandBuffer:primaryImages:secondaryImages:)](mpscnnbinarykernel/encodebatch%28commandbuffer_primaryimages_secondaryimages_%29.md)
- [encodeBatch(commandBuffer:primaryImages:secondaryImages:destinationImages:)](mpscnnbinarykernel/encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationimages_%29.md)
- [encodeBatch(commandBuffer:primaryImages:secondaryImages:destinationStates:destinationStateIsTemporary:)](mpscnnbinarykernel/encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationstates_destinationstateistemporary_%29.md)
- [encodingStorageSize(primaryImage:secondaryImage:sourceStates:destinationImage:)](mpscnnbinarykernel/encodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [isResultStateReusedAcrossBatch()](mpscnnbinarykernel/isresultstatereusedacrossbatch%28%29.md)
- [resultState(primaryImage:secondaryImage:sourceStates:destinationImage:)](mpscnnbinarykernel/resultstate%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [resultStateBatch(primaryImage:secondaryImage:sourceStates:destinationImage:)](mpscnnbinarykernel/resultstatebatch%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:)](mpscnnbinarykernel/temporaryresultstate%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatch(commandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:)](mpscnnbinarykernel/temporaryresultstatebatch%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSCNNArithmetic](mpscnnarithmetic.md)
- [MPSCNNGradientKernel](mpscnngradientkernel.md)
- [MPSNNGridSample](mpsnngridsample.md)
- [MPSNNLossGradient](mpsnnlossgradient.md)
- [MPSNNReduceBinary](mpsnnreducebinary.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Layer Base Classes

- [MPSCNNKernel](mpscnnkernel.md): Base class for neural network layers.
- [MPSCNNGradientKernel](mpscnngradientkernel.md): The base class for gradient layers.

# MPSCNNBinaryKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A convolution neural network kernel.

## Declaration

```objectivec
@interface MPSCNNBinaryKernel : MPSKernel
```

## Topics

### Initializers

- [initWithCoder:device:](mpscnnbinarykernel/init%28coder_device_%29.md)
- [initWithDevice:](mpscnnbinarykernel/init%28device_%29.md)

### Instance Properties

- [clipRect](mpscnnbinarykernel/cliprect.md)
- [destinationFeatureChannelOffset](mpscnnbinarykernel/destinationfeaturechanneloffset.md)
- [destinationImageAllocator](mpscnnbinarykernel/destinationimageallocator.md)
- [isBackwards](mpscnnbinarykernel/isbackwards.md)
- [padding](mpscnnbinarykernel/padding.md)
- [primaryEdgeMode](mpscnnbinarykernel/primaryedgemode.md)
- [primaryOffset](mpscnnbinarykernel/primaryoffset.md)
- [primaryStrideInPixelsX](mpscnnbinarykernel/primarystrideinpixelsx.md)
- [primaryStrideInPixelsY](mpscnnbinarykernel/primarystrideinpixelsy.md)
- [secondaryEdgeMode](mpscnnbinarykernel/secondaryedgemode.md)
- [secondaryOffset](mpscnnbinarykernel/secondaryoffset.md)
- [secondaryStrideInPixelsX](mpscnnbinarykernel/secondarystrideinpixelsx.md)
- [secondaryStrideInPixelsY](mpscnnbinarykernel/secondarystrideinpixelsy.md)
- [isStateModified](mpscnnbinarykernel/isstatemodified.md)
- [primaryDilationRateX](mpscnnbinarykernel/primarydilationratex.md)
- [primaryDilationRateY](mpscnnbinarykernel/primarydilationratey.md)
- [primaryKernelHeight](mpscnnbinarykernel/primarykernelheight.md)
- [primaryKernelWidth](mpscnnbinarykernel/primarykernelwidth.md)
- [primarySourceFeatureChannelMaxCount](mpscnnbinarykernel/primarysourcefeaturechannelmaxcount.md)
- [primarySourceFeatureChannelOffset](mpscnnbinarykernel/primarysourcefeaturechanneloffset.md)
- [secondaryDilationRateX](mpscnnbinarykernel/secondarydilationratex.md)
- [secondaryDilationRateY](mpscnnbinarykernel/secondarydilationratey.md)
- [secondaryKernelHeight](mpscnnbinarykernel/secondarykernelheight.md)
- [secondaryKernelWidth](mpscnnbinarykernel/secondarykernelwidth.md)
- [secondarySourceFeatureChannelMaxCount](mpscnnbinarykernel/secondarysourcefeaturechannelmaxcount.md)
- [secondarySourceFeatureChannelOffset](mpscnnbinarykernel/secondarysourcefeaturechanneloffset.md)

### Instance Methods

- [encodeToCommandBuffer:primaryImage:secondaryImage:](mpscnnbinarykernel/encode%28commandbuffer_primaryimage_secondaryimage_%29.md)
- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationImage:](mpscnnbinarykernel/encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [appendBatchBarrier](mpscnnbinarykernel/appendbatchbarrier%28%29.md)
- [batchEncodingStorageSizeForPrimaryImage:secondaryImage:sourceStates:destinationImage:](mpscnnbinarykernel/batchencodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [destinationImageDescriptorForSourceImages:sourceStates:](mpscnnbinarykernel/destinationimagedescriptor%28forsourceimages_sourcestates_%29.md)
- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationState:destinationStateIsTemporary:](mpscnnbinarykernel/encode%28commandbuffer_primaryimage_secondaryimage_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatchToCommandBuffer:primaryImages:secondaryImages:](mpscnnbinarykernel/encodebatch%28commandbuffer_primaryimages_secondaryimages_%29.md)
- [encodeBatchToCommandBuffer:primaryImages:secondaryImages:destinationImages:](mpscnnbinarykernel/encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationimages_%29.md)
- [encodeBatchToCommandBuffer:primaryImages:secondaryImages:destinationStates:destinationStateIsTemporary:](mpscnnbinarykernel/encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationstates_destinationstateistemporary_%29.md)
- [encodingStorageSizeForPrimaryImage:secondaryImage:sourceStates:destinationImage:](mpscnnbinarykernel/encodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [isResultStateReusedAcrossBatch](mpscnnbinarykernel/isresultstatereusedacrossbatch%28%29.md)
- [resultStateForPrimaryImage:secondaryImage:sourceStates:destinationImage:](mpscnnbinarykernel/resultstate%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [resultStateBatchForPrimaryImage:secondaryImage:sourceStates:destinationImage:](mpscnnbinarykernel/resultstatebatch%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:](mpscnnbinarykernel/temporaryresultstate%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatchForCommandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:](mpscnnbinarykernel/temporaryresultstatebatch%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Inherited By

- [MPSCNNArithmetic](mpscnnarithmetic.md)
- [MPSCNNGradientKernel](mpscnngradientkernel.md)
- [MPSNNGridSample](mpsnngridsample.md)
- [MPSNNLossGradient](mpsnnlossgradient.md)
- [MPSNNReduceBinary](mpsnnreducebinary.md)

## See Also

### Layer Base Classes

- [MPSCNNKernel](mpscnnkernel.md): Base class for neural network layers.
- [MPSCNNGradientKernel](mpscnngradientkernel.md): The base class for gradient layers.
