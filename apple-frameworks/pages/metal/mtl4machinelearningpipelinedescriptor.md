> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4machinelearningpipelinedescriptor](https://developer.apple.com/documentation/metal/mtl4machinelearningpipelinedescriptor)

# MTL4MachineLearningPipelineDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Description for a machine learning pipeline state.

## Declaration

```swift
class MTL4MachineLearningPipelineDescriptor
```

## Topics

### Instance Properties

- [label](mtl4machinelearningpipelinedescriptor/label.md): Assigns an optional string that helps identify pipeline states you create from this descriptor.
- [machineLearningFunctionDescriptor](mtl4machinelearningpipelinedescriptor/machinelearningfunctiondescriptor.md): Assigns the function that the machine learning pipeline you create from this descriptor executes.

### Instance Methods

- [inputDimensions(bufferIndex:)](mtl4machinelearningpipelinedescriptor/inputdimensions%28bufferindex_%29.md): Obtains the dimensions of the input tensor at `bufferIndex` if set, `nil` otherwise.
- [reset()](mtl4machinelearningpipelinedescriptor/reset%28%29.md): Resets the descriptor to its default values.
- [setInputDimensions(\_:bufferIndex:)](mtl4machinelearningpipelinedescriptor/setinputdimensions%28__bufferindex_%29-34gir.md): Sets the dimension of an input tensor at a buffer index.
- [setInputDimensions(\_:bufferIndex:)](mtl4machinelearningpipelinedescriptor/setinputdimensions%28__bufferindex_%29-8fnq7.md): Sets the dimensions of multiple input tensors on a range of buffer bindings.

## Relationships

### Inherits From

- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring a machine learning pipeline

- [MTL4MachineLearningPipelineReflection](mtl4machinelearningpipelinereflection.md): Represents reflection information for a machine learning pipeline state.

# MTL4MachineLearningPipelineDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Description for a machine learning pipeline state.

## Declaration

```objectivec
@interface MTL4MachineLearningPipelineDescriptor : MTL4PipelineDescriptor
```

## Topics

### Instance Properties

- [label](mtl4machinelearningpipelinedescriptor/label.md): Assigns an optional string that helps identify pipeline states you create from this descriptor.
- [machineLearningFunctionDescriptor](mtl4machinelearningpipelinedescriptor/machinelearningfunctiondescriptor.md): Assigns the function that the machine learning pipeline you create from this descriptor executes.

### Instance Methods

- [inputDimensionsAtBufferIndex:](mtl4machinelearningpipelinedescriptor/inputdimensions%28bufferindex_%29.md): Obtains the dimensions of the input tensor at `bufferIndex` if set, `nil` otherwise.
- [reset](mtl4machinelearningpipelinedescriptor/reset%28%29.md): Resets the descriptor to its default values.
- [setInputDimensions:atBufferIndex:](mtl4machinelearningpipelinedescriptor/setinputdimensions%28__bufferindex_%29-34gir.md): Sets the dimension of an input tensor at a buffer index.
- [setInputDimensions:withRange:](mtl4machinelearningpipelinedescriptor/setinputdimensions_withrange_.md): Sets the dimensions of multiple input tensors on a range of buffer bindings.

## Relationships

### Inherits From

- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md)

## See Also

### Configuring a machine learning pipeline

- [MTL4MachineLearningPipelineReflection](mtl4machinelearningpipelinereflection.md): Represents reflection information for a machine learning pipeline state.
