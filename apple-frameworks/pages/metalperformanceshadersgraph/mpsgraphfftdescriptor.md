> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphfftdescriptor](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphfftdescriptor)

# MPSGraphFFTDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The class that defines the parameters for a fast Fourier transform (FFT) operation.

## Declaration

```swift
class MPSGraphFFTDescriptor
```

<a id="overview"></a>

## Overview

Use this descriptor with [fastFourierTransform(\_:axes:descriptor:name:)](mpsgraph/fastfouriertransform%28__axes_descriptor_name_%29.md), [realToHermiteanFFT(\_:axesTensor:descriptor:name:)](mpsgraph/realtohermiteanfft%28__axestensor_descriptor_name_%29.md), and [HermiteanToRealFFT(\_:axesTensor:descriptor:name:)](mpsgraph/hermiteantorealfft%28__axestensor_descriptor_name_%29.md) methods.

## Topics

### Instance Properties

- [inverse](mpsgraphfftdescriptor/inverse.md): A Boolean-valued parameter that defines the phase factor sign for Fourier transforms.
- [roundToOddHermitean](mpsgraphfftdescriptor/roundtooddhermitean.md): A parameter which controls how graph rounds the output tensor size for a Hermitean-to-real Fourier transform.
- [scalingMode](mpsgraphfftdescriptor/scalingmode.md): The scaling mode of the fast fourier transform (FFT) operation.

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
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.

# MPSGraphFFTDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The class that defines the parameters for a fast Fourier transform (FFT) operation.

## Declaration

```objectivec
@interface MPSGraphFFTDescriptor : MPSGraphObject
```

<a id="overview"></a>

## Overview

Use this descriptor with [fastFourierTransformWithTensor:axes:descriptor:name:](mpsgraph/fastfouriertransform%28__axes_descriptor_name_%29.md), [realToHermiteanFFTWithTensor:axesTensor:descriptor:name:](mpsgraph/realtohermiteanfft%28__axestensor_descriptor_name_%29.md), and [HermiteanToRealFFTWithTensor:axesTensor:descriptor:name:](mpsgraph/hermiteantorealfft%28__axestensor_descriptor_name_%29.md) methods.

## Topics

### Instance Properties

- [inverse](mpsgraphfftdescriptor/inverse.md): A Boolean-valued parameter that defines the phase factor sign for Fourier transforms.
- [roundToOddHermitean](mpsgraphfftdescriptor/roundtooddhermitean.md): A parameter which controls how graph rounds the output tensor size for a Hermitean-to-real Fourier transform.
- [scalingMode](mpsgraphfftdescriptor/scalingmode.md): The scaling mode of the fast fourier transform (FFT) operation.

### Type Methods

- [descriptor](mpsgraphfftdescriptor/descriptor.md): Creates a fast Fourier transform descriptor with default parameter values.

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
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
