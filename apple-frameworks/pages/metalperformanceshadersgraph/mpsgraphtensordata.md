> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphtensordata](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata)

# MPSGraphTensorData (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The representation of a compute data type.

## Declaration

```swift
class MPSGraphTensorData
```

<a id="overview"></a>

## Overview

Pass data to a graph using a tensor data, a reference will be taken to your data and used just in time when the graph is run.

## Topics

### Initializers

- [init(MPSImageBatch:)](mpsgraphtensordata/init%28mpsimagebatch_%29.md)
- [init(MPSMatrix:)](mpsgraphtensordata/init%28mpsmatrix_%29.md)
- [init(MPSMatrix:rank:)](mpsgraphtensordata/init%28mpsmatrix_rank_%29.md)
- [init(MPSNDArray:)](mpsgraphtensordata/init%28mpsndarray_%29.md)
- [init(MPSVector:)](mpsgraphtensordata/init%28mpsvector_%29.md)
- [init(MPSVector:rank:)](mpsgraphtensordata/init%28mpsvector_rank_%29.md)
- [init(MTLBuffer:shape:dataType:)](mpsgraphtensordata/init%28mtlbuffer_shape_datatype_%29.md)
- [init(MTLBuffer:shape:dataType:rowBytes:)](mpsgraphtensordata/init%28mtlbuffer_shape_datatype_rowbytes_%29.md)
- [init(MTLTensor:)](mpsgraphtensordata/init%28mtltensor_%29.md)
- [init(\_:)](mpsgraphtensordata/init%28__%29-2go2.md): Initializes a tensor data with an MPS matrix.
- [init(\_:)](mpsgraphtensordata/init%28__%29-4bnfb.md): Initializes an MPSGraphTensorData with an MPS ndarray.
- [init(\_:)](mpsgraphtensordata/init%28__%29-511a.md): Initializes a tensor data with an MPS image batch.
- [init(\_:)](mpsgraphtensordata/init%28__%29-60j6x.md): Initializes an MPSGraphTensorData with an MTLTensor.
- [init(\_:)](mpsgraphtensordata/init%28__%29-9kgoe.md): Initializes a tensor data with an MPS vector.
- [init(\_:rank:)](mpsgraphtensordata/init%28__rank_%29-1e4ks.md): Initializes a tensor data with an MPS vector enforcing rank of the result.
- [init(\_:rank:)](mpsgraphtensordata/init%28__rank_%29-1lnxg.md): Initializes a tensor data with an MPS matrix enforcing rank of the result.
- [init(\_:shape:dataType:)](mpsgraphtensordata/init%28__shape_datatype_%29.md): Initializes an tensor data with a metal buffer.
- [init(\_:shape:dataType:rowBytes:)](mpsgraphtensordata/init%28__shape_datatype_rowbytes_%29.md): Initializes an tensor data with a metal buffer.
- [init(device:data:shape:dataType:)](mpsgraphtensordata/init%28device_data_shape_datatype_%29.md): Initializes the tensor data with an `NSData` on a device.

### Instance Properties

- [dataType](mpsgraphtensordata/datatype.md): The data type of the tensor data.
- [device](mpsgraphtensordata/device.md): The device of the tensor data.
- [shape](mpsgraphtensordata/shape.md): The shape of the tensor data.

### Instance Methods

- [mpsndarray()](mpsgraphtensordata/mpsndarray%28%29.md): Return an mpsndarray object will copy contents if the contents are not stored in an MPS ndarray.

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
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.

# MPSGraphTensorData (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The representation of a compute data type.

## Declaration

```objectivec
@interface MPSGraphTensorData : MPSGraphObject
```

<a id="overview"></a>

## Overview

Pass data to a graph using a tensor data, a reference will be taken to your data and used just in time when the graph is run.

## Topics

### Instance Properties

- [dataType](mpsgraphtensordata/datatype.md): The data type of the tensor data.
- [device](mpsgraphtensordata/device.md): The device of the tensor data.
- [shape](mpsgraphtensordata/shape.md): The shape of the tensor data.

### Instance Methods

- [initWithMPSMatrix:](mpsgraphtensordata/init%28__%29-2go2.md): Initializes a tensor data with an MPS matrix.
- [initWithMPSNDArray:](mpsgraphtensordata/init%28__%29-4bnfb.md): Initializes an MPSGraphTensorData with an MPS ndarray.
- [initWithMPSImageBatch:](mpsgraphtensordata/init%28__%29-511a.md): Initializes a tensor data with an MPS image batch.
- [initWithMTLTensor:](mpsgraphtensordata/init%28__%29-60j6x.md): Initializes an MPSGraphTensorData with an MTLTensor.
- [initWithMPSVector:](mpsgraphtensordata/init%28__%29-9kgoe.md): Initializes a tensor data with an MPS vector.
- [initWithMPSVector:rank:](mpsgraphtensordata/init%28__rank_%29-1e4ks.md): Initializes a tensor data with an MPS vector enforcing rank of the result.
- [initWithMPSMatrix:rank:](mpsgraphtensordata/init%28__rank_%29-1lnxg.md): Initializes a tensor data with an MPS matrix enforcing rank of the result.
- [initWithMTLBuffer:shape:dataType:](mpsgraphtensordata/init%28__shape_datatype_%29.md): Initializes an tensor data with a metal buffer.
- [initWithMTLBuffer:shape:dataType:rowBytes:](mpsgraphtensordata/init%28__shape_datatype_rowbytes_%29.md): Initializes an tensor data with a metal buffer.
- [initWithDevice:data:shape:dataType:](mpsgraphtensordata/init%28device_data_shape_datatype_%29.md): Initializes the tensor data with an `NSData` on a device.
- [mpsndarray](mpsgraphtensordata/mpsndarray%28%29.md): Return an mpsndarray object will copy contents if the contents are not stored in an MPS ndarray.

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
- [MPSGraphExecutionDescriptor](mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
