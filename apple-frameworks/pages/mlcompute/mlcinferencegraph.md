> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinferencegraph](https://developer.apple.com/documentation/mlcompute/mlcinferencegraph)

# MLCInferenceGraph (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An inference graph created from one or more MLCGraph instances plus additional layers added directly to the inference graph.

## Declaration

```swift
class MLCInferenceGraph
```

## Topics

### Creating Inference Graphs

- [init(graphObjects:)](mlcinferencegraph/init%28graphobjects_%29.md): Deprecated. Creates an inference graph with the layers from the graph objects you specify.

### Preparing Inference Graphs

- [addInputs(\_:)](mlcinferencegraph/addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](mlcinferencegraph/addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs(\_:)](mlcinferencegraph/addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compile(options:device:)](mlcinferencegraph/compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](mlcinferencegraph/compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [link(with:)](mlcinferencegraph/link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

### Executing Inference Graphs

- [execute(inputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [execute(inputsData:outputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, and execution options you specify.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

### Inspecting Inference Graphs

- [deviceMemorySize](mlcinferencegraph/devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors in the inference graph.

### Initializers

- [init()](mlcinferencegraph/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [MLCGraph](mlcgraph.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Graphs

- [MLCGraph](mlcgraph.md): Deprecated. A graph of layers you use to build a training or inference graph.
- [MLCTrainingGraph](mlctraininggraph.md): Deprecated. A training graph that you create from one or more graph objects plus additional layers you add directly to the training graph.

# MLCInferenceGraph (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An inference graph created from one or more MLCGraph instances plus additional layers added directly to the inference graph.

## Declaration

```objectivec
@interface MLCInferenceGraph : MLCGraph
```

## Topics

### Creating Inference Graphs

- [graphWithGraphObjects:](mlcinferencegraph/init%28graphobjects_%29.md): Deprecated. Creates an inference graph with the layers from the graph objects you specify.

### Preparing Inference Graphs

- [addInputs:](mlcinferencegraph/addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs:lossLabels:lossLabelWeights:](mlcinferencegraph/addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs:](mlcinferencegraph/addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compileWithOptions:device:](mlcinferencegraph/compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](mlcinferencegraph/compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](mlcinferencegraph/link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

### Executing Inference Graphs

- [executeWithInputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [executeWithInputsData:outputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

### Inspecting Inference Graphs

- [deviceMemorySize](mlcinferencegraph/devicememorysize.md): Deprecated. The device memory size in bytes for all intermediate tensors in the inference graph.

## Relationships

### Inherits From

- [MLCGraph](mlcgraph.md)

## See Also

### Graphs

- [MLCGraph](mlcgraph.md): Deprecated. A graph of layers you use to build a training or inference graph.
- [MLCTrainingGraph](mlctraininggraph.md): Deprecated. A training graph that you create from one or more graph objects plus additional layers you add directly to the training graph.
