> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnmultiarykernel](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnmultiarykernel)

# MPSCNNMultiaryKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSCNNMultiaryKernel
```

## Topics

### Initializers

- [init(coder:device:)](mpscnnmultiarykernel/init%28coder_device_%29.md)
- [init(device:sourceCount:)](mpscnnmultiarykernel/init%28device_sourcecount_%29.md)

### Instance Properties

- [clipRect](mpscnnmultiarykernel/cliprect.md)
- [destinationFeatureChannelOffset](mpscnnmultiarykernel/destinationfeaturechanneloffset.md)
- [destinationImageAllocator](mpscnnmultiarykernel/destinationimageallocator.md)
- [isBackwards](mpscnnmultiarykernel/isbackwards.md)
- [isStateModified](mpscnnmultiarykernel/isstatemodified.md)
- [padding](mpscnnmultiarykernel/padding.md)
- [sourceCount](mpscnnmultiarykernel/sourcecount.md)

### Instance Methods

- [appendBatchBarrier()](mpscnnmultiarykernel/appendbatchbarrier%28%29.md)
- [destinationImageDescriptor(sourceImages:sourceStates:)](mpscnnmultiarykernel/destinationimagedescriptor%28sourceimages_sourcestates_%29.md)
- [dilationRateXatIndex(\_:)](mpscnnmultiarykernel/dilationratexatindex%28__%29.md)
- [dilationRateYatIndex(\_:)](mpscnnmultiarykernel/dilationrateyatindex%28__%29.md)
- [edgeMode(at:)](mpscnnmultiarykernel/edgemode%28at_%29.md)
- [encode(commandBuffer:sourceImages:)](mpscnnmultiarykernel/encode%28commandbuffer_sourceimages_%29.md)
- [encode(commandBuffer:sourceImages:destinationImage:)](mpscnnmultiarykernel/encode%28commandbuffer_sourceimages_destinationimage_%29.md)
- [encode(commandBuffer:sourceImages:destinationState:destinationStateIsTemporary:)](mpscnnmultiarykernel/encode%28commandbuffer_sourceimages_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatch(commandBuffer:sourceImages:)](mpscnnmultiarykernel/encodebatch%28commandbuffer_sourceimages_%29.md)
- [encodeBatch(commandBuffer:sourceImages:destinationImages:)](mpscnnmultiarykernel/encodebatch%28commandbuffer_sourceimages_destinationimages_%29.md)
- [encodeBatch(commandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:)](mpscnnmultiarykernel/encodebatch%28commandbuffer_sourceimages_destinationstates_destinationstateistemporary_%29.md)
- [isResultStateReusedAcrossBatch()](mpscnnmultiarykernel/isresultstatereusedacrossbatch%28%29.md)
- [kernelHeight(at:)](mpscnnmultiarykernel/kernelheight%28at_%29.md)
- [kernelWidth(at:)](mpscnnmultiarykernel/kernelwidth%28at_%29.md)
- [offset(at:)](mpscnnmultiarykernel/offset%28at_%29.md)
- [resultState(sourceImages:sourceStates:destinationImage:)](mpscnnmultiarykernel/resultstate%28sourceimages_sourcestates_destinationimage_%29.md)
- [resultStateBatch(sourceImages:sourceStates:destinationImage:)](mpscnnmultiarykernel/resultstatebatch%28sourceimages_sourcestates_destinationimage_%29.md)
- [setDilationRateX(\_:at:)](mpscnnmultiarykernel/setdilationratex%28__at_%29.md)
- [setDilationRateY(\_:at:)](mpscnnmultiarykernel/setdilationratey%28__at_%29.md)
- [setEdgeMode(\_:at:)](mpscnnmultiarykernel/setedgemode%28__at_%29.md)
- [setKernelHeight(\_:at:)](mpscnnmultiarykernel/setkernelheight%28__at_%29.md)
- [setKernelWidth(\_:at:)](mpscnnmultiarykernel/setkernelwidth%28__at_%29.md)
- [setOffset(\_:at:)](mpscnnmultiarykernel/setoffset%28__at_%29.md)
- [setSourceFeatureChannelMaxCount(\_:at:)](mpscnnmultiarykernel/setsourcefeaturechannelmaxcount%28__at_%29.md)
- [setSourceFeatureChannelOffset(\_:at:)](mpscnnmultiarykernel/setsourcefeaturechanneloffset%28__at_%29.md)
- [setStrideInPixelsX(\_:at:)](mpscnnmultiarykernel/setstrideinpixelsx%28__at_%29.md)
- [setStrideInPixelsY(\_:at:)](mpscnnmultiarykernel/setstrideinpixelsy%28__at_%29.md)
- [sourceFeatureChannelMaxCount(at:)](mpscnnmultiarykernel/sourcefeaturechannelmaxcount%28at_%29.md)
- [sourceFeatureChannelOffset(at:)](mpscnnmultiarykernel/sourcefeaturechanneloffset%28at_%29.md)
- [stride(inPixelsXatIndex:)](mpscnnmultiarykernel/stride%28inpixelsxatindex_%29.md)
- [stride(inPixelsYatIndex:)](mpscnnmultiarykernel/stride%28inpixelsyatindex_%29.md)
- [temporaryResultState(commandBuffer:sourceImages:sourceStates:destinationImage:)](mpscnnmultiarykernel/temporaryresultstate%28commandbuffer_sourceimages_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatch(commandBuffer:sourceImages:sourceStates:destinationImage:)](mpscnnmultiarykernel/temporaryresultstatebatch%28commandbuffer_sourceimages_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

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

# MPSCNNMultiaryKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSCNNMultiaryKernel : MPSKernel
```

## Topics

### Instance Properties

- [clipRect](mpscnnmultiarykernel/cliprect.md)
- [destinationFeatureChannelOffset](mpscnnmultiarykernel/destinationfeaturechanneloffset.md)
- [destinationImageAllocator](mpscnnmultiarykernel/destinationimageallocator.md)
- [isBackwards](mpscnnmultiarykernel/isbackwards.md)
- [isStateModified](mpscnnmultiarykernel/isstatemodified.md)
- [padding](mpscnnmultiarykernel/padding.md)
- [sourceCount](mpscnnmultiarykernel/sourcecount.md)

### Instance Methods

- [appendBatchBarrier](mpscnnmultiarykernel/appendbatchbarrier%28%29.md)
- [destinationImageDescriptorForSourceImages:sourceStates:](mpscnnmultiarykernel/destinationimagedescriptor%28sourceimages_sourcestates_%29.md)
- [dilationRateXatIndex:](mpscnnmultiarykernel/dilationratexatindex%28__%29.md)
- [dilationRateYatIndex:](mpscnnmultiarykernel/dilationrateyatindex%28__%29.md)
- [edgeModeAtIndex:](mpscnnmultiarykernel/edgemode%28at_%29.md)
- [encodeToCommandBuffer:sourceImages:](mpscnnmultiarykernel/encode%28commandbuffer_sourceimages_%29.md)
- [encodeToCommandBuffer:sourceImages:destinationImage:](mpscnnmultiarykernel/encode%28commandbuffer_sourceimages_destinationimage_%29.md)
- [encodeToCommandBuffer:sourceImages:destinationState:destinationStateIsTemporary:](mpscnnmultiarykernel/encode%28commandbuffer_sourceimages_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:](mpscnnmultiarykernel/encodebatch%28commandbuffer_sourceimages_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:destinationImages:](mpscnnmultiarykernel/encodebatch%28commandbuffer_sourceimages_destinationimages_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:](mpscnnmultiarykernel/encodebatch%28commandbuffer_sourceimages_destinationstates_destinationstateistemporary_%29.md)
- [initWithCoder:device:](mpscnnmultiarykernel/init%28coder_device_%29.md)
- [initWithDevice:sourceCount:](mpscnnmultiarykernel/init%28device_sourcecount_%29.md)
- [isResultStateReusedAcrossBatch](mpscnnmultiarykernel/isresultstatereusedacrossbatch%28%29.md)
- [kernelHeightAtIndex:](mpscnnmultiarykernel/kernelheight%28at_%29.md)
- [kernelWidthAtIndex:](mpscnnmultiarykernel/kernelwidth%28at_%29.md)
- [offsetAtIndex:](mpscnnmultiarykernel/offset%28at_%29.md)
- [resultStateForSourceImages:sourceStates:destinationImage:](mpscnnmultiarykernel/resultstate%28sourceimages_sourcestates_destinationimage_%29.md)
- [resultStateBatchForSourceImages:sourceStates:destinationImage:](mpscnnmultiarykernel/resultstatebatch%28sourceimages_sourcestates_destinationimage_%29.md)
- [setDilationRateX:atIndex:](mpscnnmultiarykernel/setdilationratex%28__at_%29.md)
- [setDilationRateY:atIndex:](mpscnnmultiarykernel/setdilationratey%28__at_%29.md)
- [setEdgeMode:atIndex:](mpscnnmultiarykernel/setedgemode%28__at_%29.md)
- [setKernelHeight:atIndex:](mpscnnmultiarykernel/setkernelheight%28__at_%29.md)
- [setKernelWidth:atIndex:](mpscnnmultiarykernel/setkernelwidth%28__at_%29.md)
- [setOffset:atIndex:](mpscnnmultiarykernel/setoffset%28__at_%29.md)
- [setSourceFeatureChannelMaxCount:atIndex:](mpscnnmultiarykernel/setsourcefeaturechannelmaxcount%28__at_%29.md)
- [setSourceFeatureChannelOffset:atIndex:](mpscnnmultiarykernel/setsourcefeaturechanneloffset%28__at_%29.md)
- [setStrideInPixelsX:atIndex:](mpscnnmultiarykernel/setstrideinpixelsx%28__at_%29.md)
- [setStrideInPixelsY:atIndex:](mpscnnmultiarykernel/setstrideinpixelsy%28__at_%29.md)
- [sourceFeatureChannelMaxCountAtIndex:](mpscnnmultiarykernel/sourcefeaturechannelmaxcount%28at_%29.md)
- [sourceFeatureChannelOffsetAtIndex:](mpscnnmultiarykernel/sourcefeaturechanneloffset%28at_%29.md)
- [strideInPixelsXatIndex:](mpscnnmultiarykernel/stride%28inpixelsxatindex_%29.md)
- [strideInPixelsYatIndex:](mpscnnmultiarykernel/stride%28inpixelsyatindex_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImages:sourceStates:destinationImage:](mpscnnmultiarykernel/temporaryresultstate%28commandbuffer_sourceimages_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatchForCommandBuffer:sourceImages:sourceStates:destinationImage:](mpscnnmultiarykernel/temporaryresultstatebatch%28commandbuffer_sourceimages_sourcestates_destinationimage_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)
