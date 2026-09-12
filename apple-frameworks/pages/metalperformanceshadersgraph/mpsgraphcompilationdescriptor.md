> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphcompilationdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphcompilationdescriptor)

# MPSGraphCompilationDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A class that consists of all the levers for compiling graphs.

## Declaration

```swift
class MPSGraphCompilationDescriptor
```

## Topics

### Instance Properties

- [callables](mpsgraphcompilationdescriptor/callables.md): The dictionary used during runtime to lookup the [MPSGraphExecutable](mpsgraphexecutable.md) which correspond to the `symbolName`.
- [compilationCompletionHandler](mpsgraphcompilationdescriptor/compilationcompletionhandler.md): The handler that the graph calls when the compilation completes.
- [dispatchQueue](mpsgraphcompilationdescriptor/dispatchqueue.md): The dispatch queue used for the compilation.
- [optimizationLevel](mpsgraphcompilationdescriptor/optimizationlevel.md): The optimization level for the graph execution, default is MPSGraphOptimizationLevel1.
- [optimizationProfile](mpsgraphcompilationdescriptor/optimizationprofile.md): Deprecated. The optimization profile for the graph optimization.
- [reducedPrecisionFastMath](mpsgraphcompilationdescriptor/reducedprecisionfastmath.md): Across the executable allow reduced precision fast math optimizations.
- [waitForCompilationCompletion](mpsgraphcompilationdescriptor/waitforcompilationcompletion.md): Flag that makes the compile or specialize call blocking till the entire compilation is complete, defaults to NO.

### Instance Methods

- [convertLayoutToNHWC()](mpsgraphcompilationdescriptor/convertlayouttonhwc%28%29.md): Deprecated. Turns on Automatic Layout Conversion (for conv like operations) for GPU.
- [disableAutoLayoutConversion()](mpsgraphcompilationdescriptor/disableautolayoutconversion%28%29.md): Turns off Automatic Layout Conversion (for conv like operations) for GPU.
- [disableTypeInference()](mpsgraphcompilationdescriptor/disabletypeinference%28%29.md): Turns off type inference and relies on type inference during runtime.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Classes

- [MPSGraph](mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphCompilationDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A class that consists of all the levers for compiling graphs.

## Declaration

```objectivec
@interface MPSGraphCompilationDescriptor : MPSGraphObject
```

## Topics

### Instance Properties

- [callables](mpsgraphcompilationdescriptor/callables.md): The dictionary used during runtime to lookup the [MPSGraphExecutable](mpsgraphexecutable.md) which correspond to the `symbolName`.
- [compilationCompletionHandler](mpsgraphcompilationdescriptor/compilationcompletionhandler.md): The handler that the graph calls when the compilation completes.
- [dispatchQueue](mpsgraphcompilationdescriptor/dispatchqueue.md): The dispatch queue used for the compilation.
- [optimizationLevel](mpsgraphcompilationdescriptor/optimizationlevel.md): The optimization level for the graph execution, default is MPSGraphOptimizationLevel1.
- [optimizationProfile](mpsgraphcompilationdescriptor/optimizationprofile.md): Deprecated. The optimization profile for the graph optimization.
- [reducedPrecisionFastMath](mpsgraphcompilationdescriptor/reducedprecisionfastmath.md): Across the executable allow reduced precision fast math optimizations.
- [waitForCompilationCompletion](mpsgraphcompilationdescriptor/waitforcompilationcompletion.md): Flag that makes the compile or specialize call blocking till the entire compilation is complete, defaults to NO.

### Instance Methods

- [convertLayoutToNHWC](mpsgraphcompilationdescriptor/convertlayouttonhwc%28%29.md): Deprecated. Turns on Automatic Layout Conversion (for conv like operations) for GPU.
- [disableAutoLayoutConversion](mpsgraphcompilationdescriptor/disableautolayoutconversion%28%29.md): Turns off Automatic Layout Conversion (for conv like operations) for GPU.
- [disableTypeInference](mpsgraphcompilationdescriptor/disabletypeinference%28%29.md): Turns off type inference and relies on type inference during runtime.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Classes

- [MPSGraph](mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphConvolution2DOpDescriptor](mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
