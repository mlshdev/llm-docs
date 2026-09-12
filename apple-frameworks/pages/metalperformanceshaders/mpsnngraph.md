> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngraph](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngraph)

# MPSNNGraph (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An optimized representation of a graph of neural network image and filter nodes.

## Declaration

```swift
class MPSNNGraph
```

<a id="overview"></a>

## Overview

Once you have prepared a graph of [MPSNNImageNode](mpsnnimagenode.md), [MPSNNFilterNode](mpsnnfilternode.md), and, if needed, [MPSNNStateNode](mpsnnstatenode.md) objects, you may initialize a [MPSNNGraph](mpsnngraph.md) using the image node that you wish to appear as the result. The graph object will introspect the graph representation and determine which nodes are needed for inputs, and which nodes are produced as output state (if any). Nodes which are not needed to calculate the result image node are ignored. Some nodes may be internally concatenated with other nodes for better performance.

> **Note**

>  The [MPSNNImageNode](mpsnnimagenode.md) that you choose as the result node may be interior to a graph. This feature is provided as a means to examine intermediate computations in the full graph for debugging purposes.

During [MPSNNGraph](mpsnngraph.md) construction, the graph attached to the result node will be parsed and reduced to an optimized representation. This representation may be saved using the [NSSecureCoding](../foundation/nssecurecoding.md) protocol for later recall.

When decoding a [MPSNNGraph](mpsnngraph.md) using a [NSCoder](../foundation/nscoder.md), it will be created against the system default [MTLDevice](../metal/mtldevice.md). If you would like to set the device, your [NSCoder](../foundation/nscoder.md) should conform to the [MPSDeviceProvider](mpsdeviceprovider.md) protocol.

<a id="Debugging-Tips"></a>

### Debugging Tips

In typical usage, some refinement, especially of padding policies, may be required to get the expected answer from Metal Performance Shaders. If the result image is the wrong size, padding is typically the problem. When the answers are incorrect, the [offset](mpscnnkernel/offset.md) or other property may be incorrectly configured at some stage. As the graph is generated starting from an output image node, you may create other graphs starting at any image node within the graph. This will give you a view into the result produced from each intermediate layer with a minimum of fuss. In addition, the usual [debugDescription()](../objectivec/nsobject-swift.class/debugdescription%28%29.md) method is available to inspect objects to make sure they conform to expectation.

Note that certain operations such as neuron filters that follow convolution filters and image concatenation may be optimized away by the [MPSNNGraph](mpsnngraph.md) when it is constructed. The convolution can do neuron operations as part of its operation. Concatenation is best done by writing the result of earlier filter passes in the right place using [destinationFeatureChannelOffset](mpscnnkernel/destinationfeaturechanneloffset.md) rather than by adding an extra copy. Other optimizations may be added as framework capabilities improve.

## Topics

### Initializers

- [init(coder:device:)](mpsnngraph/init%28coder_device_%29.md)
- [init(device:resultImage:)](mpsnngraph/init%28device_resultimage_%29.md): Deprecated.
- [init(device:resultImage:resultImageIsNeeded:)](mpsnngraph/init%28device_resultimage_resultimageisneeded_%29.md)
- [init(device:resultImages:resultsAreNeeded:)](mpsnngraph/init%28device_resultimages_resultsareneeded_%29.md)

### Instance Properties

- [destinationImageAllocator](mpsnngraph/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)
- [intermediateImageHandles](mpsnngraph/intermediateimagehandles.md)
- [outputStateIsTemporary](mpsnngraph/outputstateistemporary.md)
- [resultHandle](mpsnngraph/resulthandle.md)
- [resultStateHandles](mpsnngraph/resultstatehandles.md)
- [sourceImageHandles](mpsnngraph/sourceimagehandles.md)
- [sourceStateHandles](mpsnngraph/sourcestatehandles.md)
- [format](mpsnngraph/format.md)
- [resultImageIsNeeded](mpsnngraph/resultimageisneeded.md)

### Instance Methods

- [encode(to:sourceImages:)](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encode(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsync(withSourceImages:completionHandler:)](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatch(to:sourceImages:sourceStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatch(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImage(at:)](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceState(at:)](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources()](mpsnngraph/reloadfromdatasources%28%29.md)

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

## See Also

### Neural Network Graphs

- [MPSNNImageNode](mpsnnimagenode.md): A placeholder node denoting the position of a neural network image in a graph.
- [MPSHandle](mpshandle.md): The protocol that provides resource identification.

# MPSNNGraph (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

An optimized representation of a graph of neural network image and filter nodes.

## Declaration

```objectivec
@interface MPSNNGraph : MPSKernel
```

<a id="overview"></a>

## Overview

Once you have prepared a graph of [MPSNNImageNode](mpsnnimagenode.md), [MPSNNFilterNode](mpsnnfilternode.md), and, if needed, [MPSNNStateNode](mpsnnstatenode.md) objects, you may initialize a [MPSNNGraph](mpsnngraph.md) using the image node that you wish to appear as the result. The graph object will introspect the graph representation and determine which nodes are needed for inputs, and which nodes are produced as output state (if any). Nodes which are not needed to calculate the result image node are ignored. Some nodes may be internally concatenated with other nodes for better performance.

> **Note**

>  The [MPSNNImageNode](mpsnnimagenode.md) that you choose as the result node may be interior to a graph. This feature is provided as a means to examine intermediate computations in the full graph for debugging purposes.

During [MPSNNGraph](mpsnngraph.md) construction, the graph attached to the result node will be parsed and reduced to an optimized representation. This representation may be saved using the [NSSecureCoding](../foundation/nssecurecoding.md) protocol for later recall.

When decoding a [MPSNNGraph](mpsnngraph.md) using a [NSCoder](../foundation/nscoder.md), it will be created against the system default [MTLDevice](../metal/mtldevice.md). If you would like to set the device, your [NSCoder](../foundation/nscoder.md) should conform to the [MPSDeviceProvider](mpsdeviceprovider.md) protocol.

<a id="Debugging-Tips"></a>

### Debugging Tips

In typical usage, some refinement, especially of padding policies, may be required to get the expected answer from Metal Performance Shaders. If the result image is the wrong size, padding is typically the problem. When the answers are incorrect, the [offset](mpscnnkernel/offset.md) or other property may be incorrectly configured at some stage. As the graph is generated starting from an output image node, you may create other graphs starting at any image node within the graph. This will give you a view into the result produced from each intermediate layer with a minimum of fuss. In addition, the usual [debugDescription](../objectivec/nsobject-swift.class/debugdescription%28%29.md) method is available to inspect objects to make sure they conform to expectation.

Note that certain operations such as neuron filters that follow convolution filters and image concatenation may be optimized away by the [MPSNNGraph](mpsnngraph.md) when it is constructed. The convolution can do neuron operations as part of its operation. Concatenation is best done by writing the result of earlier filter passes in the right place using [destinationFeatureChannelOffset](mpscnnkernel/destinationfeaturechanneloffset.md) rather than by adding an extra copy. Other optimizations may be added as framework capabilities improve.

## Topics

### Initializers

- [initWithCoder:device:](mpsnngraph/init%28coder_device_%29.md)
- [initWithDevice:resultImage:](mpsnngraph/init%28device_resultimage_%29.md): Deprecated.
- [initWithDevice:resultImage:resultImageIsNeeded:](mpsnngraph/init%28device_resultimage_resultimageisneeded_%29.md)
- [initWithDevice:resultImages:resultsAreNeeded:](mpsnngraph/init%28device_resultimages_resultsareneeded_%29.md)

### Instance Properties

- [destinationImageAllocator](mpsnngraph/destinationimageallocator.md)
- [MPSImageAllocator](mpsimageallocator.md)
- [intermediateImageHandles](mpsnngraph/intermediateimagehandles.md)
- [outputStateIsTemporary](mpsnngraph/outputstateistemporary.md)
- [resultHandle](mpsnngraph/resulthandle.md)
- [resultStateHandles](mpsnngraph/resultstatehandles.md)
- [sourceImageHandles](mpsnngraph/sourceimagehandles.md)
- [sourceStateHandles](mpsnngraph/sourcestatehandles.md)
- [format](mpsnngraph/format.md)
- [resultImageIsNeeded](mpsnngraph/resultimageisneeded.md)

### Instance Methods

- [encodeToCommandBuffer:sourceImages:](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encodeToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsyncWithSourceImages:completionHandler:](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImageAtIndex:](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceStateAtIndex:](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources](mpsnngraph/reloadfromdatasources%28%29.md)

### Type Methods

- [graphWithDevice:resultImage:](mpsnngraph/graphwithdevice_resultimage_.md): Deprecated.
- [graphWithDevice:resultImage:resultImageIsNeeded:](mpsnngraph/graphwithdevice_resultimage_resultimageisneeded_.md)
- [graphWithDevice:resultImages:resultsAreNeeded:](mpsnngraph/graphwithdevice_resultimages_resultsareneeded_.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Neural Network Graphs

- [MPSNNImageNode](mpsnnimagenode.md): A placeholder node denoting the position of a neural network image in a graph.
- [MPSHandle](mpshandle.md): The protocol that provides resource identification.
