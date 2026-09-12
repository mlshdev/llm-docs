> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphrandomopdescriptor)

# MPSGraphRandomOpDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that describes the random operation.

## Declaration

```swift
class MPSGraphRandomOpDescriptor
```

## Topics

### Initializers

- [init(distribution:dataType:)](mpsgraphrandomopdescriptor/init%28distribution_datatype_%29.md): Class method to initialize a distribution descriptor.

### Instance Properties

- [dataType](mpsgraphrandomopdescriptor/datatype.md): The data type of the generated result values.
- [distribution](mpsgraphrandomopdescriptor/distribution.md): The type of distribution to draw samples from. See MPSGraphRandomDistribution.
- [max](mpsgraphrandomopdescriptor/max.md): The upper range of the distribution.
- [maxInteger](mpsgraphrandomopdescriptor/maxinteger.md): The upper range of the distribution.
- [mean](mpsgraphrandomopdescriptor/mean.md): The mean of the distribution.
- [min](mpsgraphrandomopdescriptor/min.md): The lower range of the distribution.
- [minInteger](mpsgraphrandomopdescriptor/mininteger.md): The lower range of the distribution.
- [samplingMethod](mpsgraphrandomopdescriptor/samplingmethod.md): The sampling method of the distribution.
- [standardDeviation](mpsgraphrandomopdescriptor/standarddeviation.md): The standard deviation of the distribution.

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
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.

# MPSGraphRandomOpDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A class that describes the random operation.

## Declaration

```objectivec
@interface MPSGraphRandomOpDescriptor : MPSGraphObject
```

## Topics

### Instance Properties

- [dataType](mpsgraphrandomopdescriptor/datatype.md): The data type of the generated result values.
- [distribution](mpsgraphrandomopdescriptor/distribution.md): The type of distribution to draw samples from. See MPSGraphRandomDistribution.
- [max](mpsgraphrandomopdescriptor/max.md): The upper range of the distribution.
- [maxInteger](mpsgraphrandomopdescriptor/maxinteger.md): The upper range of the distribution.
- [mean](mpsgraphrandomopdescriptor/mean.md): The mean of the distribution.
- [min](mpsgraphrandomopdescriptor/min.md): The lower range of the distribution.
- [minInteger](mpsgraphrandomopdescriptor/mininteger.md): The lower range of the distribution.
- [samplingMethod](mpsgraphrandomopdescriptor/samplingmethod.md): The sampling method of the distribution.
- [standardDeviation](mpsgraphrandomopdescriptor/standarddeviation.md): The standard deviation of the distribution.

### Type Methods

- [descriptorWithDistribution:dataType:](mpsgraphrandomopdescriptor/init%28distribution_datatype_%29.md): Class method to initialize a distribution descriptor.

## Relationships

### Inherits From

- [MPSGraphObject](mpsgraphobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

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
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
