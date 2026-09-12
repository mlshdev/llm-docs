> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningpipelinestate](https://developer.apple.com/documentation/metal/mtl4machinelearningpipelinestate)

# MTL4MachineLearningPipelineState (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A pipeline state that you can use with machine-learning encoder instances.

## Declaration

```swift
protocol MTL4MachineLearningPipelineState : MTLAllocation, Sendable
```

<a id="overview"></a>

## Overview

See [MTL4MachineLearningCommandEncoder](mtl4machinelearningcommandencoder.md) for more information.

## Topics

### Instance Properties

- [device](mtl4machinelearningpipelinestate/device.md): Returns the device the pipeline state belongs to.
- [intermediatesHeapSize](mtl4machinelearningpipelinestate/intermediatesheapsize.md): Obtain the size of the heap, in bytes, this pipeline requires during the execution.
- [label](mtl4machinelearningpipelinestate/label.md): Queries the string that helps identify this object.
- [reflection](mtl4machinelearningpipelinestate/reflection.md): Returns reflection information for this machine learning pipeline state.

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Encoding a machine learning pass

- [Running a machine learning model on the GPU timeline](running-a-machine-learning-model-on-the-gpu-timeline.md): Dispatch model inference commands with a machine learning pass in a Metal 4 command buffer.
- [MTL4MachineLearningCommandEncoder](mtl4machinelearningcommandencoder.md): Encodes machine learning model inference commands for a single pass.

# MTL4MachineLearningPipelineState (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A pipeline state that you can use with machine-learning encoder instances.

## Declaration

```objectivec
@protocol MTL4MachineLearningPipelineState <MTLAllocation, NSObject>
```

<a id="overview"></a>

## Overview

See [MTL4MachineLearningCommandEncoder](mtl4machinelearningcommandencoder.md) for more information.

## Topics

### Instance Properties

- [device](mtl4machinelearningpipelinestate/device.md): Returns the device the pipeline state belongs to.
- [intermediatesHeapSize](mtl4machinelearningpipelinestate/intermediatesheapsize.md): Obtain the size of the heap, in bytes, this pipeline requires during the execution.
- [label](mtl4machinelearningpipelinestate/label.md): Queries the string that helps identify this object.
- [reflection](mtl4machinelearningpipelinestate/reflection.md): Returns reflection information for this machine learning pipeline state.

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Encoding a machine learning pass

- [Running a machine learning model on the GPU timeline](running-a-machine-learning-model-on-the-gpu-timeline.md): Dispatch model inference commands with a machine learning pass in a Metal 4 command buffer.
- [MTL4MachineLearningCommandEncoder](mtl4machinelearningcommandencoder.md): Encodes machine learning model inference commands for a single pass.
