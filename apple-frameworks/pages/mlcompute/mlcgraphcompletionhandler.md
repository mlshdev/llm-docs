> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraphcompletionhandler](https://developer.apple.com/documentation/mlcompute/mlcgraphcompletionhandler)

# MLCGraphCompletionHandler (Swift)

**Framework:** ML Compute  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A callback completion handler you execute when a graph finishes execution.

## Declaration

```swift
typealias MLCGraphCompletionHandler = (MLCTensor?, (any Error)?, TimeInterval) -> Void
```

## Parameters

- `resultTensor`: The result tensor.
- `error`: An error if one occured, otherwise `nil`.
- `executionTime`: The execution time.

## See Also

### Executing Inference Graphs

- [execute(inputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [execute(inputsData:outputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:)](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, and execution options you specify.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.

# MLCGraphCompletionHandler (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A callback completion handler you execute when a graph finishes execution.

## Declaration

```objectivec
typedef void (^)(MLCTensor *, NSError *, double) MLCGraphCompletionHandler;
```

## Parameters

- `resultTensor`: The result tensor.
- `error`: An error if one occured, otherwise `nil`.
- `executionTime`: The execution time.

## See Also

### Executing Inference Graphs

- [executeWithInputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [executeWithInputsData:outputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:](mlcinferencegraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [MLCExecutionOptions](mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
