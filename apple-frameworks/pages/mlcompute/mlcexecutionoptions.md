> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcexecutionoptions](https://developer.apple.com/documentation/mlcompute/mlcexecutionoptions)

# MLCExecutionOptions (Swift)

**Framework:** ML Compute  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A bitmask that specifies the options you use when executing a graph.

## Declaration

```swift
struct MLCExecutionOptions
```

## Topics

### Execution Options

- [init(rawValue:)](mlcexecutionoptions/init%28rawvalue_%29.md): Deprecated. Creates an execution option with the specified raw value.
- [skipWritingInputDataToDevice](mlcexecutionoptions/skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [synchronous](mlcexecutionoptions/synchronous.md): Deprecated. The option to execute the graph synchronously.
- [profiling](mlcexecutionoptions/profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [perLayerProfiling](mlcexecutionoptions/perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
- [forwardForInference](mlcexecutionoptions/forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Executing Inference Graphs

- [execute(inputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [execute(inputsData:outputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, and execution options you specify.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

# MLCExecutionOptions (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A bitmask that specifies the options you use when executing a graph.

## Declaration

```objectivec
enum MLCExecutionOptions : uint64_t;
```

## Topics

### Execution Options

- [MLCExecutionOptionsSkipWritingInputDataToDevice](mlcexecutionoptions/skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [MLCExecutionOptionsSynchronous](mlcexecutionoptions/synchronous.md): Deprecated. The option to execute the graph synchronously.
- [MLCExecutionOptionsProfiling](mlcexecutionoptions/profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [MLCExecutionOptionsPerLayerProfiling](mlcexecutionoptions/perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
- [MLCExecutionOptionsForwardForInference](mlcexecutionoptions/forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.

### Enumeration Cases

- [MLCExecutionOptionsNone](mlcexecutionoptions/mlcexecutionoptionsnone.md): The option to execute the graph in the most efficient way possible.

## See Also

### Executing Inference Graphs

- [executeWithInputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [executeWithInputsData:outputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [MLCGraphCompletionHandler](mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.
