> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutiondescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutiondescriptor)

# MPSGraphExecutionDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that consists of all the levers  to synchronize and schedule graph execution.

## Declaration

```swift
class MPSGraphExecutionDescriptor
```

## Topics

### Instance Properties

- [compilationDescriptor](mpsgraphexecutiondescriptor/compilationdescriptor.md): The compilation descriptor for the graph.
- [completionHandler](mpsgraphexecutiondescriptor/completionhandler.md): The handler that graph calls at the completion of the execution.
- [scheduledHandler](mpsgraphexecutiondescriptor/scheduledhandler.md): The handler that graph calls when it schedules the execution.
- [waitUntilCompleted](mpsgraphexecutiondescriptor/waituntilcompleted.md): The flag that blocks the execution call until the entire execution is complete.

### Instance Methods

- [signal(\_:atExecutionEvent:value:)](mpsgraphexecutiondescriptor/signal%28__atexecutionevent_value_%29.md): Executable signals these shared events at execution stage and immediately proceeds.
- [wait(for:value:)](mpsgraphexecutiondescriptor/wait%28for_value_%29.md): Executable waits on these shared events before scheduling execution on the HW, this does not include encoding which can still continue.

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
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphExecutionDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that consists of all the levers  to synchronize and schedule graph execution.

## Declaration

```objectivec
@interface MPSGraphExecutionDescriptor : MPSGraphObject
```

## Topics

### Instance Properties

- [compilationDescriptor](mpsgraphexecutiondescriptor/compilationdescriptor.md): The compilation descriptor for the graph.
- [completionHandler](mpsgraphexecutiondescriptor/completionhandler.md): The handler that graph calls at the completion of the execution.
- [scheduledHandler](mpsgraphexecutiondescriptor/scheduledhandler.md): The handler that graph calls when it schedules the execution.
- [waitUntilCompleted](mpsgraphexecutiondescriptor/waituntilcompleted.md): The flag that blocks the execution call until the entire execution is complete.

### Instance Methods

- [signalEvent:atExecutionEvent:value:](mpsgraphexecutiondescriptor/signal%28__atexecutionevent_value_%29.md): Executable signals these shared events at execution stage and immediately proceeds.
- [waitForEvent:value:](mpsgraphexecutiondescriptor/wait%28for_value_%29.md): Executable waits on these shared events before scheduling execution on the HW, this does not include encoding which can still continue.

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
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
