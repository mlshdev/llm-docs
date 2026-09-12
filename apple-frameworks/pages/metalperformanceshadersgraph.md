> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph](https://developer.apple.com/documentation/metalperformanceshadersgraph)

# Metal Performance Shaders Graph (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Build, compile, and execute compute graphs utilizing all the different compute devices on the platform, including GPU, CPU, and Neural Engine.

<a id="Overview"></a>

## Overview

Metal Performance Shaders Graph provides high-performance, energy-efficient computation on Apple platforms by leveraging different hardware compute blocks. You can use this framework to generate a symbolic compute graph of operations, where each operation can output a set of tensors used as edges of the graph. The tensors represent multidimensional data that objects like [MTLBuffer](metal/mtlbuffer.md) or [MTLTexture](metal/mtltexture.md) can back. After you construct the graph, you can compile it into an executable to optimize for performance and subsequently run the executable on your input data. This framework also provides the ability to serialize the executables and load executables from a serialized `.mpsgraphpackage`.

## Topics

### Essentials

- [Adding custom functions to a shader graph](metalperformanceshadersgraph/adding-custom-functions-to-a-shader-graph.md): Run your own graph functions on the GPU by building the function programmatically.
- [Training a neural network using MPSGraph](metalperformanceshadersgraph/training-a-neural-network-using-mps-graph.md): Train a simple neural network digit classifier.
- [Filtering images with MPSGraph FFT operations](metalperformanceshadersgraph/filtering-images-with-mpsgraph-fft-operations.md): Filter an image with MPSGraph fast Fourier transforms using the convolutional theorem.

### Classes

- [MPSGraph](metalperformanceshadersgraph/mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphCompilationDescriptor](metalperformanceshadersgraph/mpsgraphcompilationdescriptor.md): A class that consists of all the levers for compiling graphs.
- [MPSGraphConvolution2DOpDescriptor](metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](metalperformanceshadersgraph/mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](metalperformanceshadersgraph/mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](metalperformanceshadersgraph/mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](metalperformanceshadersgraph/mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](metalperformanceshadersgraph/mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](metalperformanceshadersgraph/mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](metalperformanceshadersgraph/mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](metalperformanceshadersgraph/mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](metalperformanceshadersgraph/mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](metalperformanceshadersgraph/mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](metalperformanceshadersgraph/mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
- [MPSGraphObject](metalperformanceshadersgraph/mpsgraphobject.md): The common base class for all Metal Performance Shaders Graph objects.
- [MPSGraphOperation](metalperformanceshadersgraph/mpsgraphoperation.md): A symbolic representation of a compute operation.
- [MPSGraphPooling2DOpDescriptor](metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor.md): The class that defines the parameters for a 2D pooling operation.
- [MPSGraphPooling4DOpDescriptor](metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor.md): The class that defines the parameters for a 4D pooling operation.
- [MPSGraphRandomOpDescriptor](metalperformanceshadersgraph/mpsgraphrandomopdescriptor.md): A class that describes the random operation.
- [MPSGraphShapedType](metalperformanceshadersgraph/mpsgraphshapedtype.md): The shaped type class for types on tensors with a shape and data type.
- [MPSGraphSingleGateRNNDescriptor](metalperformanceshadersgraph/mpsgraphsinglegaternndescriptor.md): The class that defines the parameters for a single gate RNN operation.
- [MPSGraphStencilOpDescriptor](metalperformanceshadersgraph/mpsgraphstencilopdescriptor.md): The class that defines the parameters for a stencil operation.
- [MPSGraphTensor](metalperformanceshadersgraph/mpsgraphtensor.md): The symbolic representation of a compute data type.
- [MPSGraphTensorData](metalperformanceshadersgraph/mpsgraphtensordata.md): The representation of a compute data type.
- [MPSGraphType](metalperformanceshadersgraph/mpsgraphtype.md): The base type class for types on tensors.
- [MPSGraphVariableOp](metalperformanceshadersgraph/mpsgraphvariableop.md): The class that defines the parameters for a variable.
- [MPSGraphSDPADescriptor](metalperformanceshadersgraph/mpsgraphsdpadescriptor.md): A descriptor that configures a scaled dot product attention (SDPA) operation.

### Structures

- [MPSGraphReducedPrecisionFastMath](metalperformanceshadersgraph/mpsgraphreducedprecisionfastmath.md): MPSGraph could use these reduced precision paths to deliver faster math, but it is not guaranteed.

### Type Aliases

- [MPSGraphCompilationCompletionHandler](metalperformanceshadersgraph/mpsgraphcompilationcompletionhandler.md): A notification that appears when compilation finishes.
- [MPSGraphCompletionHandler](metalperformanceshadersgraph/mpsgraphcompletionhandler.md): A notification that appears when graph execution finishes.
- [MPSGraphControlFlowDependencyBlock](metalperformanceshadersgraph/mpsgraphcontrolflowdependencyblock.md): The scope where all the operations defined in this block get control-dependency operations.
- [MPSGraphExecutableCompletionHandler](metalperformanceshadersgraph/mpsgraphexecutablecompletionhandler.md): A notification when graph executable execution finishes.
- [MPSGraphExecutableScheduledHandler](metalperformanceshadersgraph/mpsgraphexecutablescheduledhandler.md): A notification when graph executable execution schedules.
- [MPSGraphForLoopBodyBlock](metalperformanceshadersgraph/mpsgraphforloopbodyblock.md): A block for the body in the for loop.
- [MPSGraphIfThenElseBlock](metalperformanceshadersgraph/mpsgraphifthenelseblock.md): A block of operations executed under either the if or else condition.
- [MPSGraphScheduledHandler](metalperformanceshadersgraph/mpsgraphscheduledhandler.md): A notification that appears when graph execution schedules.
- [MPSGraphWhileAfterBlock](metalperformanceshadersgraph/mpsgraphwhileafterblock.md): The block that executes after the condition evaluates for each iteration.
- [MPSGraphWhileBeforeBlock](metalperformanceshadersgraph/mpsgraphwhilebeforeblock.md): The block that executes before the condition evaluates for each iteration.

### Enumerations

- [MPSGraphDeploymentPlatform](metalperformanceshadersgraph/mpsgraphdeploymentplatform.md): The options available to a graph.
- [MPSGraphDeviceType](metalperformanceshadersgraph/mpsgraphdevicetype.md): The device type.
- [MPSGraphExecutionStage](metalperformanceshadersgraph/mpsgraphexecutionstage.md): Execution events that can be used with shared events.
- [MPSGraphFFTScalingMode](metalperformanceshadersgraph/mpsgraphfftscalingmode.md): The scaling modes for Fourier transform operations.
- [MPSGraphLossReductionType](metalperformanceshadersgraph/mpsgraphlossreductiontype.md): The type of the reduction the graph applies in the loss operations.
- [MPSGraphNonMaximumSuppressionCoordinateMode](metalperformanceshadersgraph/mpsgraphnonmaximumsuppressioncoordinatemode.md): The non-maximum suppression coordinate mode.
- [MPSGraphOptimization](metalperformanceshadersgraph/mpsgraphoptimization.md): The optimization levels to trade compilation time for even more runtime performance by running more passes.
- [MPSGraphOptimizationProfile](metalperformanceshadersgraph/mpsgraphoptimizationprofile.md): The optimization profile used as a heuristic as the graph compiler optimizes the network.
- [MPSGraphOptions](metalperformanceshadersgraph/mpsgraphoptions.md): The options available to a graph.
- [MPSGraphPaddingMode](metalperformanceshadersgraph/mpsgraphpaddingmode.md): The tensor padding mode.
- [MPSGraphPaddingStyle](metalperformanceshadersgraph/mpsgraphpaddingstyle.md): The tensor padding style.
- [MPSGraphPoolingReturnIndicesMode](metalperformanceshadersgraph/mpsgraphpoolingreturnindicesmode.md): The flattening mode for returned indices with max-pooling.
- [MPSGraphRNNActivation](metalperformanceshadersgraph/mpsgraphrnnactivation.md): The activation modes for RNN operations.
- [MPSGraphRandomDistribution](metalperformanceshadersgraph/mpsgraphrandomdistribution.md): The distributions supported by random operations.
- [MPSGraphRandomNormalSamplingMethod](metalperformanceshadersgraph/mpsgraphrandomnormalsamplingmethod.md): The sampling method to use when generating values in the normal distribution.
- [MPSGraphReductionMode](metalperformanceshadersgraph/mpsgraphreductionmode.md): The reduction mode.
- [MPSGraphResizeMode](metalperformanceshadersgraph/mpsgraphresizemode.md): The resize mode to use for resizing.
- [MPSGraphResizeNearestRoundingMode](metalperformanceshadersgraph/mpsgraphresizenearestroundingmode.md): The rounding mode to use when using nearest resize mode.
- [MPSGraphScatterMode](metalperformanceshadersgraph/mpsgraphscattermode.md): The scatter mode.
- [MPSGraphSparseStorageType](metalperformanceshadersgraph/mpsgraphsparsestoragetype.md): The sparse storage options in the Metal Performance Shaders Graph framework.
- [MPSGraphTensorNamedDataLayout](metalperformanceshadersgraph/mpsgraphtensornameddatalayout.md): The tensor layout.

# Metal Performance Shaders Graph (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Framework  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Build, compile, and execute compute graphs utilizing all the different compute devices on the platform, including GPU, CPU, and Neural Engine.

<a id="Overview"></a>

## Overview

Metal Performance Shaders Graph provides high-performance, energy-efficient computation on Apple platforms by leveraging different hardware compute blocks. You can use this framework to generate a symbolic compute graph of operations, where each operation can output a set of tensors used as edges of the graph. The tensors represent multidimensional data that objects like [MTLBuffer](metal/mtlbuffer.md) or [MTLTexture](metal/mtltexture.md) can back. After you construct the graph, you can compile it into an executable to optimize for performance and subsequently run the executable on your input data. This framework also provides the ability to serialize the executables and load executables from a serialized `.mpsgraphpackage`.

## Topics

### Essentials

- [Adding custom functions to a shader graph](metalperformanceshadersgraph/adding-custom-functions-to-a-shader-graph.md): Run your own graph functions on the GPU by building the function programmatically.
- [Training a neural network using MPSGraph](metalperformanceshadersgraph/training-a-neural-network-using-mps-graph.md): Train a simple neural network digit classifier.
- [Filtering images with MPSGraph FFT operations](metalperformanceshadersgraph/filtering-images-with-mpsgraph-fft-operations.md): Filter an image with MPSGraph fast Fourier transforms using the convolutional theorem.

### Classes

- [MPSGraph](metalperformanceshadersgraph/mpsgraph.md): The optimized representation of a compute graph of operations and tensors.
- [MPSGraphCompilationDescriptor](metalperformanceshadersgraph/mpsgraphcompilationdescriptor.md): A class that consists of all the levers for compiling graphs.
- [MPSGraphConvolution2DOpDescriptor](metalperformanceshadersgraph/mpsgraphconvolution2dopdescriptor.md): A class that describes the properties of a 2D-convolution operator.
- [MPSGraphConvolution3DOpDescriptor](metalperformanceshadersgraph/mpsgraphconvolution3dopdescriptor.md): A class that describes the properties of a 3D-convolution operator.
- [MPSGraphCreateSparseOpDescriptor](metalperformanceshadersgraph/mpsgraphcreatesparseopdescriptor.md): A class that describes the properties of a create sparse operation.
- [MPSGraphDepthwiseConvolution2DOpDescriptor](metalperformanceshadersgraph/mpsgraphdepthwiseconvolution2dopdescriptor.md): A class that defines the parameters for a 2D-depthwise convolution operation.
- [MPSGraphDepthwiseConvolution3DOpDescriptor](metalperformanceshadersgraph/mpsgraphdepthwiseconvolution3dopdescriptor.md): The class that defines the parameters for a 3D-depthwise convolution operation.
- [MPSGraphDevice](metalperformanceshadersgraph/mpsgraphdevice.md): A class that describes the compute device.
- [MPSGraphExecutable](metalperformanceshadersgraph/mpsgraphexecutable.md): The compiled representation of a compute graph executable.
- [MPSGraphExecutableExecutionDescriptor](metalperformanceshadersgraph/mpsgraphexecutableexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule executable execution.
- [MPSGraphExecutableSerializationDescriptor](metalperformanceshadersgraph/mpsgraphexecutableserializationdescriptor.md): A class that consists of all the levers to serialize an executable.
- [MPSGraphExecutionDescriptor](metalperformanceshadersgraph/mpsgraphexecutiondescriptor.md): A class that consists of all the levers to synchronize and schedule graph execution.
- [MPSGraphFFTDescriptor](metalperformanceshadersgraph/mpsgraphfftdescriptor.md): The class that defines the parameters for a fast Fourier transform (FFT) operation.
- [MPSGraphGRUDescriptor](metalperformanceshadersgraph/mpsgraphgrudescriptor.md): The class that defines the parameters for a gated recurrent unit (GRU) operation.
- [MPSGraphImToColOpDescriptor](metalperformanceshadersgraph/mpsgraphimtocolopdescriptor.md): The class that defines the parameters for an image to column or column to image operation.
- [MPSGraphLSTMDescriptor](metalperformanceshadersgraph/mpsgraphlstmdescriptor.md): The class that defines the parameters for a long short-term memory (LSTM) operation.
- [MPSGraphObject](metalperformanceshadersgraph/mpsgraphobject.md): The common base class for all Metal Performance Shaders Graph objects.
- [MPSGraphOperation](metalperformanceshadersgraph/mpsgraphoperation.md): A symbolic representation of a compute operation.
- [MPSGraphPooling2DOpDescriptor](metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor.md): The class that defines the parameters for a 2D pooling operation.
- [MPSGraphPooling4DOpDescriptor](metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor.md): The class that defines the parameters for a 4D pooling operation.
- [MPSGraphRandomOpDescriptor](metalperformanceshadersgraph/mpsgraphrandomopdescriptor.md): A class that describes the random operation.
- [MPSGraphShapedType](metalperformanceshadersgraph/mpsgraphshapedtype.md): The shaped type class for types on tensors with a shape and data type.
- [MPSGraphSingleGateRNNDescriptor](metalperformanceshadersgraph/mpsgraphsinglegaternndescriptor.md): The class that defines the parameters for a single gate RNN operation.
- [MPSGraphStencilOpDescriptor](metalperformanceshadersgraph/mpsgraphstencilopdescriptor.md): The class that defines the parameters for a stencil operation.
- [MPSGraphTensor](metalperformanceshadersgraph/mpsgraphtensor.md): The symbolic representation of a compute data type.
- [MPSGraphTensorData](metalperformanceshadersgraph/mpsgraphtensordata.md): The representation of a compute data type.
- [MPSGraphType](metalperformanceshadersgraph/mpsgraphtype.md): The base type class for types on tensors.
- [MPSGraphVariableOp](metalperformanceshadersgraph/mpsgraphvariableop.md): The class that defines the parameters for a variable.
- [MPSGraphSDPADescriptor](metalperformanceshadersgraph/mpsgraphsdpadescriptor.md): A descriptor that configures a scaled dot product attention (SDPA) operation.

### Type Aliases

- [MPSGraphCallableMap](metalperformanceshadersgraph/mpsgraphcallablemap.md): A dictionary of symbol names and the corresponding executables for them.
- [MPSGraphCompilationCompletionHandler](metalperformanceshadersgraph/mpsgraphcompilationcompletionhandler.md): A notification that appears when compilation finishes.
- [MPSGraphCompletionHandler](metalperformanceshadersgraph/mpsgraphcompletionhandler.md): A notification that appears when graph execution finishes.
- [MPSGraphControlFlowDependencyBlock](metalperformanceshadersgraph/mpsgraphcontrolflowdependencyblock.md): The scope where all the operations defined in this block get control-dependency operations.
- [MPSGraphExecutableCompletionHandler](metalperformanceshadersgraph/mpsgraphexecutablecompletionhandler.md): A notification when graph executable execution finishes.
- [MPSGraphExecutableScheduledHandler](metalperformanceshadersgraph/mpsgraphexecutablescheduledhandler.md): A notification when graph executable execution schedules.
- [MPSGraphForLoopBodyBlock](metalperformanceshadersgraph/mpsgraphforloopbodyblock.md): A block for the body in the for loop.
- [MPSGraphIfThenElseBlock](metalperformanceshadersgraph/mpsgraphifthenelseblock.md): A block of operations executed under either the if or else condition.
- [MPSGraphScheduledHandler](metalperformanceshadersgraph/mpsgraphscheduledhandler.md): A notification that appears when graph execution schedules.
- [MPSGraphTensorDataDictionary](metalperformanceshadersgraph/mpsgraphtensordatadictionary.md): A dictionary of tensors and corresponding tensor data.
- [MPSGraphTensorShapedTypeDictionary](metalperformanceshadersgraph/mpsgraphtensorshapedtypedictionary.md): A dictionary of tensors and corresponding shapes for them.
- [MPSGraphWhileAfterBlock](metalperformanceshadersgraph/mpsgraphwhileafterblock.md): The block that executes after the condition evaluates for each iteration.
- [MPSGraphWhileBeforeBlock](metalperformanceshadersgraph/mpsgraphwhilebeforeblock.md): The block that executes before the condition evaluates for each iteration.

### Enumerations

- [MPSGraphDeploymentPlatform](metalperformanceshadersgraph/mpsgraphdeploymentplatform.md): The options available to a graph.
- [MPSGraphDeviceType](metalperformanceshadersgraph/mpsgraphdevicetype.md): The device type.
- [MPSGraphExecutionStage](metalperformanceshadersgraph/mpsgraphexecutionstage.md): Execution events that can be used with shared events.
- [MPSGraphFFTScalingMode](metalperformanceshadersgraph/mpsgraphfftscalingmode.md): The scaling modes for Fourier transform operations.
- [MPSGraphLossReductionType](metalperformanceshadersgraph/mpsgraphlossreductiontype.md): The type of the reduction the graph applies in the loss operations.
- [MPSGraphNonMaximumSuppressionCoordinateMode](metalperformanceshadersgraph/mpsgraphnonmaximumsuppressioncoordinatemode.md): The non-maximum suppression coordinate mode.
- [MPSGraphOptimization](metalperformanceshadersgraph/mpsgraphoptimization.md): The optimization levels to trade compilation time for even more runtime performance by running more passes.
- [MPSGraphOptimizationProfile](metalperformanceshadersgraph/mpsgraphoptimizationprofile.md): The optimization profile used as a heuristic as the graph compiler optimizes the network.
- [MPSGraphOptions](metalperformanceshadersgraph/mpsgraphoptions.md): The options available to a graph.
- [MPSGraphPaddingMode](metalperformanceshadersgraph/mpsgraphpaddingmode.md): The tensor padding mode.
- [MPSGraphPaddingStyle](metalperformanceshadersgraph/mpsgraphpaddingstyle.md): The tensor padding style.
- [MPSGraphPoolingReturnIndicesMode](metalperformanceshadersgraph/mpsgraphpoolingreturnindicesmode.md): The flattening mode for returned indices with max-pooling.
- [MPSGraphRNNActivation](metalperformanceshadersgraph/mpsgraphrnnactivation.md): The activation modes for RNN operations.
- [MPSGraphRandomDistribution](metalperformanceshadersgraph/mpsgraphrandomdistribution.md): The distributions supported by random operations.
- [MPSGraphRandomNormalSamplingMethod](metalperformanceshadersgraph/mpsgraphrandomnormalsamplingmethod.md): The sampling method to use when generating values in the normal distribution.
- [MPSGraphReducedPrecisionFastMath](metalperformanceshadersgraph/mpsgraphreducedprecisionfastmath.md): MPSGraph could use these reduced precision paths to deliver faster math, but it is not guaranteed.
- [MPSGraphReductionMode](metalperformanceshadersgraph/mpsgraphreductionmode.md): The reduction mode.
- [MPSGraphResizeMode](metalperformanceshadersgraph/mpsgraphresizemode.md): The resize mode to use for resizing.
- [MPSGraphResizeNearestRoundingMode](metalperformanceshadersgraph/mpsgraphresizenearestroundingmode.md): The rounding mode to use when using nearest resize mode.
- [MPSGraphScatterMode](metalperformanceshadersgraph/mpsgraphscattermode.md): The scatter mode.
- [MPSGraphSparseStorageType](metalperformanceshadersgraph/mpsgraphsparsestoragetype.md): The sparse storage options in the Metal Performance Shaders Graph framework.
- [MPSGraphTensorNamedDataLayout](metalperformanceshadersgraph/mpsgraphtensornameddatalayout.md): The tensor layout.
