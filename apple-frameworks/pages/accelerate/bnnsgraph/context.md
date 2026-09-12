> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context](https://developer.apple.com/documentation/accelerate/bnnsgraph/context)

# BNNSGraph.Context

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

A wrapper around a compiled graph object that adds a required modifiable context to support dynamically sized models and set execute-time options.

## Declaration

```swift
class Context
```

<a id="overview"></a>

## Overview

A [BNNSGraph.Context](context.md) instance provides a wrapper around the C API [bnns_graph_t](../bnns_graph_t.md) and [bnns_graph_context_t](../bnns_graph_context_t.md) types. Because this class manages its own memory, you don’t need to call [BNNSGraphContextDestroy(\_:)](../bnnsgraphcontextdestroy%28__%29.md) to deallocate its resources.

## Topics

### Creating a graph context

- [BNNSGraph.CompileOptions](compileoptions.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.

### Specifying and querying a graph context’s properties

- [setDynamicShapes(\_:forFunction:)](context/setdynamicshapes%28__forfunction_%29.md): Specifies the dynamic shapes for a graph and, if possible, infers the output shapes.
- [BNNSGraph.Shape](shape.md): The specification of the shape of an argument.
- [argumentCount(forFunction:)](context/argumentcount%28forfunction_%29.md): Returns the number of arguments for the given function argument.
- [argumentNames(forFunction:)](context/argumentnames%28forfunction_%29.md): Returns the names of arguments for the given function argument.
- [argumentPosition(forFunction:argument:)](context/argumentposition%28forfunction_argument_%29.md): Returns the index into the arguments array for the given function argument.
- [functionCount](context/functioncount.md): The number of input arguments for the given function argument.
- [functionNames](context/functionnames.md): Returns the names of callable functions in the graph.
- [checkForNaNsAndInfinities](context/checkfornansandinfinities.md): A Boolean value that specifies that the context checks intermediate tensors for NaNs and infinities.

### Specifying a tensor’s properties

- [tensor(forFunction:argument:fillKnownDynamicShapes:)](context/tensor%28forfunction_argument_fillknowndynamicshapes_%29.md): Returns an unallocated tensor for a given function argument.

### Executing a graph

- [executeFunction(\_:arguments:)](context/executefunction%28__arguments_%29-8bhcn.md): Executes the specified function using an array of input and output tensors.
- [executeFunction(\_:arguments:)](context/executefunction%28__arguments_%29-95snr.md): Executes the specified function using an array of input and output pointers.
- [BNNSGraph.PointerArgument](pointerargument.md): A type that BNNS Graph accepts as an input-output argument.

### Handling errors

- [BNNSGraph.Error](error.md): Error codes that a graph context throws.

### Initializers

- [init(compileFromPath:functionName:options:)](context/init%28compilefrompath_functionname_options_%29-3nn5g.md): Returns a new context that wraps a graph object which represents the compiled `.mlmodelc` file.
- [init(compileFromPath:functionName:options:)](context/init%28compilefrompath_functionname_options_%29-6ghot.md): Synchronously returns a new context that wraps a graph object which represents the compiled `.mlmodelc` file.

### Instance Properties

- [streamingAdvanceCount](context/streamingadvancecount.md): Sets streaming advancement amount for cases with dynamically shaped inputs.

### Instance Methods

- [allocateTensor(forFunction:argument:fillKnownDynamicShapes:)](context/allocatetensor%28forfunction_argument_fillknowndynamicshapes_%29.md): Returns an allocated tensor for a given function argument.
- [executeFunction(\_:arguments:)](context/executefunction%28__arguments_%29-52eh3.md): Synchronously executes the specified function with the provided context.
- [setBatchSize(\_:forFunction:)](context/setbatchsize%28__forfunction_%29-4872x.md): Sets the batch size for a graph.
- [setBatchSize(\_:forFunction:)](context/setbatchsize%28__forfunction_%29-8eqzm.md): Synchronously sets the batch size for a graph.
