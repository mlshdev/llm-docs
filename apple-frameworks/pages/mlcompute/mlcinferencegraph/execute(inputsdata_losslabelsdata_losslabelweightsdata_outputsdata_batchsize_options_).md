> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinferencegraph/execute(inputsdata:losslabelsdata:losslabelweightsdata:outputsdata:batchsize:options:)](https://developer.apple.com/documentation/mlcompute/mlcinferencegraph/execute(inputsdata:losslabelsdata:losslabelweightsdata:outputsdata:batchsize:options:))

# execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0)

Executes the inference graph with the input and output data, batch size, and execution options you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
@discardableResult func execute(inputsData: [String : MLCTensorData], lossLabelsData: [String : MLCTensorData]? = nil, lossLabelWeightsData: [String : MLCTensorData]? = nil, outputsData: [String : MLCTensorData]? = nil, batchSize: Int, options: MLCExecutionOptions = []) async throws -> (result: MLCTensor?, executionTime: TimeInterval)
```

## Parameters

- `inputsData`: A dictionary that contains input data.
- `lossLabelsData`: A dictionary that contains loss label data.
- `lossLabelWeightsData`: A dictionary that contains loss label weight data.
- `outputsData`: A dictionary that contains output data.
- `batchSize`: The batch size.
- `options`: The execution options.

<a id="return-value"></a>

## Return Value

The result tensor, if any, and the execution time if you specify [profiling](../mlcexecutionoptions/profiling.md).

## See Also

### Executing Inference Graphs

- [execute(inputsData:batchSize:options:completionHandler:)](execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [execute(inputsData:outputsData:batchSize:options:completionHandler:)](execute%28inputsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.
