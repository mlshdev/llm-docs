> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable)

# MPSGraphExecutable (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The compiled representation of a compute graph executable.

## Declaration

```swift
class MPSGraphExecutable
```

<a id="overview"></a>

## Overview

An `MPSGraphExecutable` is a compiled graph for specific feeds for specific target tensors and target operations.

## Topics

### Initializers

- [init(MPSGraphPackageAtURL:compilationDescriptor:)](mpsgraphexecutable/init%28mpsgraphpackageaturl_compilationdescriptor_%29.md)
- [init(coreMLPackageAtURL:compilationDescriptor:)](mpsgraphexecutable/init%28coremlpackageaturl_compilationdescriptor_%29.md)
- [init(coreMLPackageAtURL:descriptor:)](mpsgraphexecutable/init%28coremlpackageaturl_descriptor_%29.md): Initialize the executable with the Core ML model package at the provided URL.
- [init(package:descriptor:)](mpsgraphexecutable/init%28package_descriptor_%29.md): Initialize the executable with the Metal Performance Shaders Graph package at the provided URL.

### Instance Properties

- [feedTensors](mpsgraphexecutable/feedtensors.md): Tensors fed to the graph, can be used to order the inputs when executable is created with a graph.
- [options](mpsgraphexecutable/options.md): Options for the graph executable.
- [targetTensors](mpsgraphexecutable/targettensors.md): Tensors targeted by the graph, can be used to order the outputs when executable was created with a graph.

### Instance Methods

- [encode(to:inputs:results:executionDescriptor:)](mpsgraphexecutable/encode%28to_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately after finishing encoding.
- [getOutputTypes(with:inputTypes:compilationDescriptor:)](mpsgraphexecutable/getoutputtypes%28with_inputtypes_compilationdescriptor_%29.md): Get output shapes for a specialized executable.
- [run(on:inputs:results:executionDescriptor:)](mpsgraphexecutable/run%28on_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.
- [run(with:inputs:results:executionDescriptor:)](mpsgraphexecutable/run%28with_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.
- [runAsync(on:inputs:results:executionDescriptor:)](mpsgraphexecutable/runasync%28on_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.
- [runAsync(with:inputs:results:executionDescriptor:)](mpsgraphexecutable/runasync%28with_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.
- [serialize(package:descriptor:)](mpsgraphexecutable/serialize%28package_descriptor_%29.md): Serialize the MPSGraph executable at the provided url.
- [specialize(with:inputTypes:compilationDescriptor:)](mpsgraphexecutable/specialize%28with_inputtypes_compilationdescriptor_%29.md): Specialize the executable and optimize it.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [MPSGraph](mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphCompilationDescriptor](mpsgraphcompilationdescriptor.md): A class that consists of all the levers for compiling graphs.
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphExecutable (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The compiled representation of a compute graph executable.

## Declaration

```objectivec
@interface MPSGraphExecutable : MPSGraphObject
```

<a id="overview"></a>

## Overview

An `MPSGraphExecutable` is a compiled graph for specific feeds for specific target tensors and target operations.

## Topics

### Instance Properties

- [feedTensors](mpsgraphexecutable/feedtensors.md): Tensors fed to the graph, can be used to order the inputs when executable is created with a graph.
- [options](mpsgraphexecutable/options.md): Options for the graph executable.
- [targetTensors](mpsgraphexecutable/targettensors.md): Tensors targeted by the graph, can be used to order the outputs when executable was created with a graph.

### Instance Methods

- [encodeToCommandBuffer:inputsArray:resultsArray:executionDescriptor:](mpsgraphexecutable/encode%28to_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately after finishing encoding.
- [getOutputTypesWithDevice:inputTypes:compilationDescriptor:](mpsgraphexecutable/getoutputtypes%28with_inputtypes_compilationdescriptor_%29.md): Get output shapes for a specialized executable.
- [initWithCoreMLPackageAtURL:compilationDescriptor:](mpsgraphexecutable/init%28coremlpackageaturl_descriptor_%29.md): Initialize the executable with the Core ML model package at the provided URL.
- [initWithMPSGraphPackageAtURL:compilationDescriptor:](mpsgraphexecutable/init%28package_descriptor_%29.md): Initialize the executable with the Metal Performance Shaders Graph package at the provided URL.
- [runWithMTL4CommandQueue:inputsArray:resultsArray:executionDescriptor:](mpsgraphexecutable/run%28on_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.
- [runWithMTLCommandQueue:inputsArray:resultsArray:executionDescriptor:](mpsgraphexecutable/run%28with_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed.
- [runAsyncWithMTL4CommandQueue:inputsArray:resultsArray:executionDescriptor:](mpsgraphexecutable/runasync%28on_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.
- [runAsyncWithMTLCommandQueue:inputsArray:resultsArray:executionDescriptor:](mpsgraphexecutable/runasync%28with_inputs_results_executiondescriptor_%29.md): Runs the graph for the given feeds and returns the target tensor values, ensuring all target operations also executed. This call is asynchronous and will return immediately.
- [serializeToMPSGraphPackageAtURL:descriptor:](mpsgraphexecutable/serialize%28package_descriptor_%29.md): Serialize the MPSGraph executable at the provided url.
- [specializeWithDevice:inputTypes:compilationDescriptor:](mpsgraphexecutable/specialize%28with_inputtypes_compilationdescriptor_%29.md): Specialize the executable and optimize it.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

## See Also

### Classes

- [MPSGraph](mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphCompilationDescriptor](mpsgraphcompilationdescriptor.md): A class that consists of all the levers for compiling graphs.
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
