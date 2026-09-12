> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningcommandencoder](https://developer.apple.com/documentation/metal/mtl4machinelearningcommandencoder)

# MTL4MachineLearningCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes machine learning model inference commands for a single pass.

## Declaration

```swift
protocol MTL4MachineLearningCommandEncoder : MTL4CommandEncoder
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Create a machine learning encoder by calling a factory method of an [MTL4CommandBuffer](mtl4commandbuffer.md) instance, such as [makeMachineLearningCommandEncoder()](mtl4commandbuffer/makemachinelearningcommandencoder%28%29.md).

The [dispatchNetwork(intermediatesHeap:)](mtl4machinelearningcommandencoder/dispatchnetwork%28intermediatesheap_%29.md) method applies to the [machineLearning](mtlstages/machinelearning.md) stage of a machine learning pass. For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuring the pass

- [setPipelineState(\_:)](mtl4machinelearningcommandencoder/setpipelinestate%28__%29.md): Configures the encoder with a machine learning pipeline state instance.
- [setArgumentTable(\_:)](mtl4machinelearningcommandencoder/setargumenttable%28__%29.md): Sets an argument table for the command encoder’s machine learning shader stage.

### Running machine learning networks

- [dispatchNetwork(intermediatesHeap:)](mtl4machinelearningcommandencoder/dispatchnetwork%28intermediatesheap_%29.md): Dispatches a machine learning network using the current pipeline state and argument table.

## Relationships

### Inherits From

- [MTL4CommandEncoder](mtl4commandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Encoding a machine learning pass

- [Running a machine learning model on the GPU timeline](running-a-machine-learning-model-on-the-gpu-timeline.md): Dispatch model inference commands with a machine learning pass in a Metal 4 command buffer.
- [MTL4MachineLearningPipelineState](mtl4machinelearningpipelinestate.md): A pipeline state that you can use with machine-learning encoder instances.

# MTL4MachineLearningCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes machine learning model inference commands for a single pass.

## Declaration

```objectivec
@protocol MTL4MachineLearningCommandEncoder <MTL4CommandEncoder>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Create a machine learning encoder by calling a factory method of an [MTL4CommandBuffer](mtl4commandbuffer.md) instance, such as [machineLearningCommandEncoder](mtl4commandbuffer/makemachinelearningcommandencoder%28%29.md).

The [dispatchNetworkWithIntermediatesHeap:](mtl4machinelearningcommandencoder/dispatchnetwork%28intermediatesheap_%29.md) method applies to the [MTLStageMachineLearning](mtlstages/machinelearning.md) stage of a machine learning pass. For more information about stages and synchronization, see [MTLStages](mtlstages.md) and [Resource synchronization](resource-synchronization.md).

## Topics

### Configuring the pass

- [setPipelineState:](mtl4machinelearningcommandencoder/setpipelinestate%28__%29.md): Configures the encoder with a machine learning pipeline state instance.
- [setArgumentTable:](mtl4machinelearningcommandencoder/setargumenttable%28__%29.md): Sets an argument table for the command encoder’s machine learning shader stage.

### Running machine learning networks

- [dispatchNetworkWithIntermediatesHeap:](mtl4machinelearningcommandencoder/dispatchnetwork%28intermediatesheap_%29.md): Dispatches a machine learning network using the current pipeline state and argument table.

## Relationships

### Inherits From

- [MTL4CommandEncoder](mtl4commandencoder.md)

## See Also

### Encoding a machine learning pass

- [Running a machine learning model on the GPU timeline](running-a-machine-learning-model-on-the-gpu-timeline.md): Dispatch model inference commands with a machine learning pass in a Metal 4 command buffer.
- [MTL4MachineLearningPipelineState](mtl4machinelearningpipelinestate.md): A pipeline state that you can use with machine-learning encoder instances.
