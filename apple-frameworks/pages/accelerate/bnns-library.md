> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns-library](https://developer.apple.com/documentation/accelerate/bnns-library)

# BNNS (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

Implement and run neural networks for training and inference.

<a id="overview"></a>

## Overview

The Accelerate framework’s BNNS library is a collection of functions that you use to construct neural networks for training and inference. BNNS provides routines optimized for high performance and low energy consumption across all Apple platforms.

The BNNSGraph API provides the means to build CPU based neural networks from the mlmodelc file that Xcode compiles from an ML package.

BNNSGraph allows the BNNS library to execute entire networks rather than individual layers. By considering the full model, BNNS can apply graph-level optimizations such as omitting unnecessary copy operations, fusing computational kernels, and avoiding computing redundant information. Furthermore, BNNS can optimize data layouts for constant data — such as convolution weights — and this allows the fastest execution on specific hardware. These optimizations can represent significant performance and energy-efficiency improvements.

## Topics

### Building graphs in Swift

- [makeContext(options:\_:)](bnnsgraph/makecontext%28options___%29.md): Returns a new context that wraps a graph object that the given closure defines.
- [BNNSGraph.Builder](bnnsgraph/builder.md): A structure thats provides a closure you can use to define the arguments and operations of a BNNS Graph.
- [BNNSGraph.Builder.Tensor](bnnsgraph/builder/tensor.md): A structure that represents an abstract handle to a tensor that you use within a `BNNSGraph.makeContext` closure.
- [Supporting real-time ML inference on the CPU](supporting-real-time-ml-inference-on-the-cpu.md): Add real-time digital signal processing to apps like Logic Pro X and GarageBand with the BNNS Graph API.

### Creating and executing graphs in Swift

- [BNNSGraph.Context](bnnsgraph/context.md): A wrapper around a compiled graph object that adds a required modifiable context to support dynamically sized models and set execute-time options.

### Compiling a graph object

- [bnns_graph_t](bnns_graph_t.md): The compiled graph object.
- [BNNSGraphCompileFromFile(\_:\_:\_:)](bnnsgraphcompilefromfile%28______%29.md): Compiles a source mlmodelc file to a graph object.

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault()](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy(\_:)](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath(\_:\_:)](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath(\_:)](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsSetOutputFD(\_:\_:)](bnnsgraphcompileoptionssetoutputfd%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.
- [BNNSGraphCompileOptionsGetOutputFD(\_:)](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsSetTargetSingleThread(\_:\_:)](bnnsgraphcompileoptionssettargetsinglethread%28____%29.md): Sets the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsGetTargetSingleThread(\_:)](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference(\_:\_:)](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference(\_:)](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo(\_:\_:)](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo(\_:)](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask(\_:\_:)](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask(\_:\_:)](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback(\_:\_:\_:)](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

### Querying a graph’s properties

- [BNNSGraphGetArgumentIntents(\_:\_:\_:\_:)](bnnsgraphgetargumentintents%28________%29.md): Extracts the intents of arguments for the given function argument.
- [BNNSGraphArgumentIntent](bnnsgraphargumentintent.md): Constants that describe argument intents.
- [BNNSGraphGetArgumentCount(\_:\_:)](bnnsgraphgetargumentcount%28____%29.md): Returns the number of arguments for the given function argument.
- [BNNSGraphGetArgumentNames(\_:\_:\_:\_:)](bnnsgraphgetargumentnames%28________%29.md): Extracts the names of arguments for the given function argument.
- [BNNSGraphGetFunctionCount(\_:)](bnnsgraphgetfunctioncount%28__%29.md): Returns the number of callable functions in the specified graph.
- [BNNSGraphGetFunctionNames(\_:\_:\_:)](bnnsgraphgetfunctionnames%28______%29.md): Extracts the names of callable functions in the graph.
- [BNNSGraphGetInputCount(\_:\_:)](bnnsgraphgetinputcount%28____%29.md): Returns the number of input arguments for the given function argument.
- [BNNSGraphGetInputNames(\_:\_:\_:\_:)](bnnsgraphgetinputnames%28________%29.md): Extracts the names of input arguments for the given function argument.
- [BNNSGraphGetOutputCount(\_:\_:)](bnnsgraphgetoutputcount%28____%29.md): Returns the number of output arguments for the given function argument.
- [BNNSGraphGetOutputNames(\_:\_:\_:\_:)](bnnsgraphgetoutputnames%28________%29.md): Extracts the names of output arguments for the given function argument.
- [BNNSGraphGetArgumentPosition(\_:\_:\_:)](bnnsgraphgetargumentposition%28______%29.md): Returns the index into the arguments array for the given function argument.
- [BNNSGraphGetArgumentInterleaveFactors(\_:\_:\_:\_:\_:)](bnnsgraphgetargumentinterleavefactors%28__________%29.md): Returns the interleave factors for arguments, if present

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMake(\_:)](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextMakeStreaming(\_:\_:\_:\_:)](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.
- [BNNSGraphContextDestroy(\_:)](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType(\_:\_:)](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes(\_:\_:\_:\_:)](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize(\_:\_:\_:)](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks(\_:\_:)](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize(\_:\_:)](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount(\_:\_:)](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

### Specifying a context’s execute-time message callback

- [BNNSGraphContextSetMessageLogCallback(\_:\_:\_:)](bnnsgraphcontextsetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports execution-time messages.
- [bnns_graph_execute_message_fn_t](bnns_graph_execute_message_fn_t.md): The graph execute-message logging callback function.
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

### Specifying a context’s allocation callbacks

- [BNNSGraphContextSetWorkspaceAllocationCallback(\_:\_:\_:\_:\_:)](bnnsgraphcontextsetworkspaceallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for internal workspace.
- [BNNSGraphContextSetOutputAllocationCallback(\_:\_:\_:\_:\_:)](bnnsgraphcontextsetoutputallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for function outputs.
- [bnns_graph_realloc_fn_t](bnns_graph_realloc_fn_t.md): The workspace and output allocation function.
- [bnns_graph_free_all_fn_t](bnns_graph_free_all_fn_t.md): The workspace and output deallocation function.

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSTensorGetAllocationSize(\_:)](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphContextGetTensor(\_:\_:\_:\_:\_:)](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
- [BNNSGraphTensorFillStrides(\_:\_:\_:\_:)](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.

### Executing a graph

- [BNNSGraphContextExecute(\_:\_:\_:\_:\_:\_:)](bnnsgraphcontextexecute%28____________%29.md): Executes the specified function with the given context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.

### Enumerations

- [BNNS](bnns.md): An enumeration that acts as a namespace for Swift overlays to BNNS.
- [BNNSGraph](bnnsgraph.md): An enumeration that acts as a namespace for the Swift overlays to BNNS Graph.

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.

### Protocols

- [BNNSScalar](bnnsscalar.md)

### Macros

- [BNNS_MAX_TENSOR_DIMENSION](bnns_max_tensor_dimension.md)

### Deprecated symbols

- [Classic BNNS API](classic-bnns-api.md)

## See Also

### Neural Networks

- [Training a neural network to recognize digits](training-a-neural-network-to-recognize-digits.md): Build a simple neural network and train it to recognize randomly generated numbers.

# BNNS (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

Implement and run neural networks for training and inference.

<a id="overview"></a>

## Overview

The Accelerate framework’s BNNS library is a collection of functions that you use to construct neural networks for training and inference. BNNS provides routines optimized for high performance and low energy consumption across all Apple platforms.

The BNNSGraph API provides the means to build CPU based neural networks from the mlmodelc file that Xcode compiles from an ML package.

BNNSGraph allows the BNNS library to execute entire networks rather than individual layers. By considering the full model, BNNS can apply graph-level optimizations such as omitting unnecessary copy operations, fusing computational kernels, and avoiding computing redundant information. Furthermore, BNNS can optimize data layouts for constant data — such as convolution weights — and this allows the fastest execution on specific hardware. These optimizations can represent significant performance and energy-efficiency improvements.

## Topics

### Building graphs in Swift

- [Supporting real-time ML inference on the CPU](supporting-real-time-ml-inference-on-the-cpu.md): Add real-time digital signal processing to apps like Logic Pro X and GarageBand with the BNNS Graph API.

### Compiling a graph object

- [bnns_graph_t](bnns_graph_t.md): The compiled graph object.
- [BNNSGraphCompileFromFile](bnnsgraphcompilefromfile%28______%29.md): Compiles a source mlmodelc file to a graph object.

### Specifying and querying compilation options

- [bnns_graph_compile_options_t](bnns_graph_compile_options_t.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraphCompileOptionsMakeDefault](bnnsgraphcompileoptionsmakedefault%28%29.md): Returns an allocated compilation options object with default values.
- [BNNSGraphCompileOptionsDestroy](bnnsgraphcompileoptionsdestroy%28__%29.md): Destroys the specified compilation options object.
- [BNNSGraphCompileOptionsSetOutputPath](bnnsgraphcompileoptionssetoutputpath%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file.
- [BNNSGraphCompileOptionsGetOutputPath](bnnsgraphcompileoptionsgetoutputpath%28__%29.md): Returns the option for the compiled graph’s output path.
- [BNNSGraphCompileOptionsSetOutputFD](bnnsgraphcompileoptionssetoutputfd%28____%29.md): Sets the option for graph compilation to generate the graph object directly to the specified file descriptor.
- [BNNSGraphCompileOptionsGetOutputFD](bnnsgraphcompileoptionsgetoutputfd%28__%29.md): Returns the option for the compiled graph’s output file descriptor.
- [BNNSGraphCompileOptionsSetTargetSingleThread](bnnsgraphcompileoptionssettargetsinglethread%28____%29.md): Sets the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsGetTargetSingleThread](bnnsgraphcompileoptionsgettargetsinglethread%28__%29.md): Returns the option for the compiled graph to execute on a single thread.
- [BNNSGraphCompileOptionsSetOptimizationPreference](bnnsgraphcompileoptionssetoptimizationpreference%28____%29.md): Sets the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphCompileOptionsGetOptimizationPreference](bnnsgraphcompileoptionsgetoptimizationpreference%28__%29.md): Returns the option for the compiled graph to optimize for either size or performance.
- [BNNSGraphOptimizationPreference](bnnsgraphoptimizationpreference.md): Constants that describe the compilation optimization preference.
- [BNNSGraphCompileOptionsSetGenerateDebugInfo](bnnsgraphcompileoptionssetgeneratedebuginfo%28____%29.md): Sets the option for the compiled graph to include debugging information.
- [BNNSGraphCompileOptionsGetGenerateDebugInfo](bnnsgraphcompileoptionsgetgeneratedebuginfo%28__%29.md): Returns the option for the compiled graph to include debugging information.
- [BNNSTargetSystemGeneric](bnnstargetsystemgeneric.md)

### Specifying a graph’s compile-time message callback

- [BNNSGraphCompileOptionsSetMessageLogMask](bnnsgraphcompileoptionssetmessagelogmask%28____%29.md): Sets the mask for compile-time messages.
- [BNNSGraphContextSetMessageLogMask](bnnsgraphcontextsetmessagelogmask%28____%29.md): Sets mask for log messages that are logged (either via `os_log` or the user specified callback)
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [BNNSGraphCompileOptionsSetMessageLogCallback](bnnsgraphcompileoptionssetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports compile-time messages.
- [bnns_graph_compile_message_fn_t](bnns_graph_compile_message_fn_t.md): The graph compile-message logging callback function.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

### Querying a graph’s properties

- [BNNSGraphGetArgumentIntents](bnnsgraphgetargumentintents%28________%29.md): Extracts the intents of arguments for the given function argument.
- [BNNSGraphArgumentIntent](bnnsgraphargumentintent.md): Constants that describe argument intents.
- [BNNSGraphGetArgumentCount](bnnsgraphgetargumentcount%28____%29.md): Returns the number of arguments for the given function argument.
- [BNNSGraphGetArgumentNames](bnnsgraphgetargumentnames%28________%29.md): Extracts the names of arguments for the given function argument.
- [BNNSGraphGetFunctionCount](bnnsgraphgetfunctioncount%28__%29.md): Returns the number of callable functions in the specified graph.
- [BNNSGraphGetFunctionNames](bnnsgraphgetfunctionnames%28______%29.md): Extracts the names of callable functions in the graph.
- [BNNSGraphGetInputCount](bnnsgraphgetinputcount%28____%29.md): Returns the number of input arguments for the given function argument.
- [BNNSGraphGetInputNames](bnnsgraphgetinputnames%28________%29.md): Extracts the names of input arguments for the given function argument.
- [BNNSGraphGetOutputCount](bnnsgraphgetoutputcount%28____%29.md): Returns the number of output arguments for the given function argument.
- [BNNSGraphGetOutputNames](bnnsgraphgetoutputnames%28________%29.md): Extracts the names of output arguments for the given function argument.
- [BNNSGraphGetArgumentPosition](bnnsgraphgetargumentposition%28______%29.md): Returns the index into the arguments array for the given function argument.
- [BNNSGraphGetArgumentInterleaveFactors](bnnsgraphgetargumentinterleavefactors%28__________%29.md): Returns the interleave factors for arguments, if present

### Creating and destroying a context

- [bnns_graph_context_t](bnns_graph_context_t.md): An object that wraps a compiled graph object.
- [BNNSGraphContextMake](bnnsgraphcontextmake%28__%29.md): Returns an allocated and initialized graph context from the specified graph.
- [BNNSGraphContextMakeStreaming](bnnsgraphcontextmakestreaming%28________%29.md): Returns an allocated and initialized graph context with streaming support from the specified graph.
- [BNNSGraphContextDestroy](bnnsgraphcontextdestroy%28__%29.md): Destroys the specified graph context.

### Specifying and querying a context’s properties

- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.
- [BNNSGraphContextSetArgumentType](bnnsgraphcontextsetargumenttype%28____%29.md): Specifies the argument type for a graph context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.
- [BNNSGraphContextSetDynamicShapes](bnnsgraphcontextsetdynamicshapes%28________%29.md): Specifies the dynamic shapes for a graph and, if possible, infers, the output shapes.
- [bnns_graph_shape_t](bnns_graph_shape_t.md): The specification of the shape of an argument.
- [BNNSGraphContextSetBatchSize](bnnsgraphcontextsetbatchsize%28______%29.md): Sets the batch size for a graph.
- [BNNSGraphContextEnableNanAndInfChecks](bnnsgraphcontextenablenanandinfchecks%28____%29.md): Specifies that the context checks intermediate tensors for NaNs and infinities.
- [BNNSGraphContextGetWorkspaceSize](bnnsgraphcontextgetworkspacesize%28____%29.md): Returns the minimum size, in bytes, of the workspace that graph context execution requires.
- [BNNSGraphContextSetStreamingAdvanceCount](bnnsgraphcontextsetstreamingadvancecount%28____%29.md): Sets the streaming advancement amount for cases with dynamically shaped inputs.

### Specifying a context’s execute-time message callback

- [BNNSGraphContextSetMessageLogCallback](bnnsgraphcontextsetmessagelogcallback%28______%29.md): Specifies a customized callback function that reports execution-time messages.
- [bnns_graph_execute_message_fn_t](bnns_graph_execute_message_fn_t.md): The graph execute-message logging callback function.
- [BNNSGraphMessageLevel](bnnsgraphmessagelevel.md): Constants that specify the mask for compile-time messages.
- [bnns_user_message_data_t](bnns_user_message_data_t.md): Additional user-defined logging argument for message-logging callbacks.

### Specifying a context’s allocation callbacks

- [BNNSGraphContextSetWorkspaceAllocationCallback](bnnsgraphcontextsetworkspaceallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for internal workspace.
- [BNNSGraphContextSetOutputAllocationCallback](bnnsgraphcontextsetoutputallocationcallback%28__________%29.md): Sets the allocation and deallocation callbacks for function outputs.
- [bnns_graph_realloc_fn_t](bnns_graph_realloc_fn_t.md): The workspace and output allocation function.
- [bnns_graph_free_all_fn_t](bnns_graph_free_all_fn_t.md): The workspace and output deallocation function.

### Specifying and querying a tensor’s properties

- [BNNSTensor](bnnstensor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSTensorGetAllocationSize](bnnstensorgetallocationsize%28__%29.md): Returns the minimum allocation size, in bytes, of the specified tensor.
- [BNNSGraphContextGetTensor](bnnsgraphcontextgettensor%28__________%29.md): Sets the properties of a tensor for the specified function argument.
- [BNNSGraphTensorFillStrides](bnnsgraphtensorfillstrides%28________%29.md): Sets the stride of the specifed tensor for compatibility with the given model’s input or output argument based on its current shape.

### Executing a graph

- [BNNSGraphContextExecute](bnnsgraphcontextexecute%28____________%29.md): Executes the specified function with the given context.
- [BNNSGraphArgumentType](bnnsgraphargumenttype.md): Constants that specify the argument type for a graph context.

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.

### Macros

- [BNNS_MAX_TENSOR_DIMENSION](bnns_max_tensor_dimension.md)

### Deprecated symbols

- [Classic BNNS API](classic-bnns-api.md)

## See Also

### Neural Networks

- [Training a neural network to recognize digits](training-a-neural-network-to-recognize-digits.md): Build a simple neural network and train it to recognize randomly generated numbers.
