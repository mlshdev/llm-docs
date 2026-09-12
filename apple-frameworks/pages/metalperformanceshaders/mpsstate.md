> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsstate](https://developer.apple.com/documentation/metalperformanceshaders/mpsstate)

# MPSState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An opaque data container for large storage in MPS CNN filters.

## Declaration

```swift
class MPSState
```

<a id="overview"></a>

## Overview

Some MPS CNN kernels produce additional information beyond an [MPSImage](mpsimage.md). These may be pooling indices where the result came from, convolution weights, or other information not contained in the usual [MPSImage](mpsimage.md) result from a [MPSCNNKernel](mpscnnkernel.md). An [MPSState](mpsstate.md) object typically contains one or more expensive [MTLResource](../metal/mtlresource.md) objects such as textures or buffers to store this information. It provides a base class with interfaces for managing this storage. Child classes may add additional functionality specific to their contents.

Some [MPSState](mpsstate.md) objects are temporary. Temporary state objects, for example, [MPSTemporaryImage](mpstemporaryimage.md) and [MPSTemporaryMatrix](mpstemporarymatrix.md), are for very short lived storage, perhaps just a few lines of code within the scope of a single [MTLCommandBuffer](../metal/mtlcommandbuffer.md). They are very efficient for storage, as several temporary objects can share the same memory over the course of a command buffer. This can improve both memory usage and time spent in the kernel wiring down memory and such. You may find that some large CNN tasks can not be computed without them, as nontemporary storage would simply take up too much memory.

In exchange, the lifetime of the underlying storage in temporary [MPSState](mpsstate.md) objects needs to be carefully managed. ARC often waits until the end of scope to release objects. Temporary storage often needs to be released sooner than that. Consequently the lifetime of the data in the underlying Metal resources is managed by a [readCount](mpsstate/readcount.md) property. Each time a [MPSCNNKernel](mpscnnkernel.md) reads a temporary [MPSState](mpsstate.md) object the [readCount](mpsstate/readcount.md) is automatically decremented. When it reaches 0, the underlying storage is recycled for use by other MPS temporary objects, and the data is becomes undefined. If you need to consume the data multiple times, you should set the [readCount](mpsstate/readcount.md) to a larger number to prevent the data from becoming undefined. You may set the [readCount](mpsstate/readcount.md) to 0 yourself to return the storage to MPS, if for any reason, you realize that the [MPSState](mpsstate.md) object will no longer be used.

The contents of a temporary [MPSState](mpsstate.md) object are only valid from creation to the time the [readCount](mpsstate/readcount.md) reaches 0. The data is only valid for the [MTLCommandBuffer](../metal/mtlcommandbuffer.md) on which it was created. Nontemporary [MPSState](mpsstate.md) objects are valid on any [MTLCommandBuffer](../metal/mtlcommandbuffer.md) on the same device until they are released.

## Topics

### Instance Properties

- [isTemporary](mpsstate/istemporary.md)
- [label](mpsstate/label.md)
- [readCount](mpsstate/readcount.md)
- [resource](mpsstate/resource.md): Deprecated.
- [resourceCount](mpsstate/resourcecount.md)

### Initializers

- [init(device:bufferSize:)](mpsstate/init%28device_buffersize_%29.md)
- [init(device:resourceList:)](mpsstate/init%28device_resourcelist_%29.md)
- [init(device:textureDescriptor:)](mpsstate/init%28device_texturedescriptor_%29.md)
- [init(resource:)](mpsstate/init%28resource_%29.md)
- [init(resources:)](mpsstate/init%28resources_%29.md)

### Instance Methods

- [bufferSize(at:)](mpsstate/buffersize%28at_%29.md)
- [destinationImageDescriptor(forSourceImages:sourceStates:for:suggestedDescriptor:)](mpsstate/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md)
- [resource(at:allocateMemory:)](mpsstate/resource%28at_allocatememory_%29.md)
- [resourceSize()](mpsstate/resourcesize%28%29.md)
- [resourceType(at:)](mpsstate/resourcetype%28at_%29.md)
- [synchronize(on:)](mpsstate/synchronize%28on_%29.md)
- [textureInfo(at:)](mpsstate/textureinfo%28at_%29.md)

### Type Methods

- [temporaryState(with:)](mpsstate/temporarystate%28with_%29.md)
- [temporaryState(with:bufferSize:)](mpsstate/temporarystate%28with_buffersize_%29.md)
- [temporaryState(with:resourceList:)](mpsstate/temporarystate%28with_resourcelist_%29.md)
- [temporaryState(with:textureDescriptor:)](mpsstate/temporarystate%28with_texturedescriptor_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md)
- [MPSCNNLossLabels](mpscnnlosslabels.md)
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md)
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md)
- [MPSNDArrayGradientState](mpsndarraygradientstate.md)
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md)
- [MPSNNGradientState](mpsnngradientstate.md)
- [MPSNNMultiaryGradientState](mpsnnmultiarygradientstate.md)
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md)
- [MPSRNNRecurrentImageState](mpsrnnrecurrentimagestate.md)
- [MPSRNNRecurrentMatrixState](mpsrnnrecurrentmatrixstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Instance Methods

- [encode(to:sourceImages:)](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encode(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsync(withSourceImages:completionHandler:)](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatch(to:sourceImages:sourceStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatch(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImage(at:)](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceState(at:)](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources()](mpsnngraph/reloadfromdatasources%28%29.md)

# MPSState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An opaque data container for large storage in MPS CNN filters.

## Declaration

```objectivec
@interface MPSState : NSObject
```

<a id="overview"></a>

## Overview

Some MPS CNN kernels produce additional information beyond an [MPSImage](mpsimage.md). These may be pooling indices where the result came from, convolution weights, or other information not contained in the usual [MPSImage](mpsimage.md) result from a [MPSCNNKernel](mpscnnkernel.md). An [MPSState](mpsstate.md) object typically contains one or more expensive [MTLResource](../metal/mtlresource.md) objects such as textures or buffers to store this information. It provides a base class with interfaces for managing this storage. Child classes may add additional functionality specific to their contents.

Some [MPSState](mpsstate.md) objects are temporary. Temporary state objects, for example, [MPSTemporaryImage](mpstemporaryimage.md) and [MPSTemporaryMatrix](mpstemporarymatrix.md), are for very short lived storage, perhaps just a few lines of code within the scope of a single [MTLCommandBuffer](../metal/mtlcommandbuffer.md). They are very efficient for storage, as several temporary objects can share the same memory over the course of a command buffer. This can improve both memory usage and time spent in the kernel wiring down memory and such. You may find that some large CNN tasks can not be computed without them, as nontemporary storage would simply take up too much memory.

In exchange, the lifetime of the underlying storage in temporary [MPSState](mpsstate.md) objects needs to be carefully managed. ARC often waits until the end of scope to release objects. Temporary storage often needs to be released sooner than that. Consequently the lifetime of the data in the underlying Metal resources is managed by a [readCount](mpsstate/readcount.md) property. Each time a [MPSCNNKernel](mpscnnkernel.md) reads a temporary [MPSState](mpsstate.md) object the [readCount](mpsstate/readcount.md) is automatically decremented. When it reaches 0, the underlying storage is recycled for use by other MPS temporary objects, and the data is becomes undefined. If you need to consume the data multiple times, you should set the [readCount](mpsstate/readcount.md) to a larger number to prevent the data from becoming undefined. You may set the [readCount](mpsstate/readcount.md) to 0 yourself to return the storage to MPS, if for any reason, you realize that the [MPSState](mpsstate.md) object will no longer be used.

The contents of a temporary [MPSState](mpsstate.md) object are only valid from creation to the time the [readCount](mpsstate/readcount.md) reaches 0. The data is only valid for the [MTLCommandBuffer](../metal/mtlcommandbuffer.md) on which it was created. Nontemporary [MPSState](mpsstate.md) objects are valid on any [MTLCommandBuffer](../metal/mtlcommandbuffer.md) on the same device until they are released.

## Topics

### Instance Properties

- [isTemporary](mpsstate/istemporary.md)
- [label](mpsstate/label.md)
- [readCount](mpsstate/readcount.md)
- [resource](mpsstate/resource.md): Deprecated.
- [resourceCount](mpsstate/resourcecount.md)

### Instance Methods

- [bufferSizeAtIndex:](mpsstate/buffersize%28at_%29.md)
- [destinationImageDescriptorForSourceImages:sourceStates:forKernel:suggestedDescriptor:](mpsstate/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md)
- [initWithDevice:bufferSize:](mpsstate/init%28device_buffersize_%29.md)
- [initWithDevice:resourceList:](mpsstate/init%28device_resourcelist_%29.md)
- [initWithDevice:textureDescriptor:](mpsstate/init%28device_texturedescriptor_%29.md)
- [initWithResource:](mpsstate/init%28resource_%29.md)
- [initWithResources:](mpsstate/init%28resources_%29.md)
- [resourceAtIndex:allocateMemory:](mpsstate/resource%28at_allocatememory_%29.md)
- [resourceSize](mpsstate/resourcesize%28%29.md)
- [resourceTypeAtIndex:](mpsstate/resourcetype%28at_%29.md)
- [synchronizeOnCommandBuffer:](mpsstate/synchronize%28on_%29.md)
- [textureInfoAtIndex:](mpsstate/textureinfo%28at_%29.md)

### Type Methods

- [temporaryStateWithCommandBuffer:](mpsstate/temporarystate%28with_%29.md)
- [temporaryStateWithCommandBuffer:bufferSize:](mpsstate/temporarystate%28with_buffersize_%29.md)
- [temporaryStateWithCommandBuffer:resourceList:](mpsstate/temporarystate%28with_resourcelist_%29.md)
- [temporaryStateWithCommandBuffer:textureDescriptor:](mpsstate/temporarystate%28with_texturedescriptor_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSCNNConvolutionWeightsAndBiasesState](mpscnnconvolutionweightsandbiasesstate.md)
- [MPSCNNLossLabels](mpscnnlosslabels.md)
- [MPSCNNNormalizationGammaAndBetaState](mpscnnnormalizationgammaandbetastate.md)
- [MPSCNNNormalizationMeanAndVarianceState](mpscnnnormalizationmeanandvariancestate.md)
- [MPSNDArrayGradientState](mpsndarraygradientstate.md)
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md)
- [MPSNNGradientState](mpsnngradientstate.md)
- [MPSNNMultiaryGradientState](mpsnnmultiarygradientstate.md)
- [MPSRNNMatrixTrainingState](mpsrnnmatrixtrainingstate.md)
- [MPSRNNRecurrentImageState](mpsrnnrecurrentimagestate.md)
- [MPSRNNRecurrentMatrixState](mpsrnnrecurrentmatrixstate.md)

## See Also

### Instance Methods

- [encodeToCommandBuffer:sourceImages:](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encodeToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsyncWithSourceImages:completionHandler:](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImageAtIndex:](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceStateAtIndex:](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources](mpsnngraph/reloadfromdatasources%28%29.md)
