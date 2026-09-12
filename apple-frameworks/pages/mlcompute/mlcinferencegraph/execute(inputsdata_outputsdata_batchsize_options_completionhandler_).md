> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinferencegraph/execute(inputsdata:outputsdata:batchsize:options:completionhandler:)](https://developer.apple.com/documentation/mlcompute/mlcinferencegraph/execute(inputsdata:outputsdata:batchsize:options:completionhandler:))

# execute(inputsData:outputsData:batchSize:options:completionHandler:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.

## Declaration

```swift
func execute(inputsData: [String : MLCTensorData], outputsData: [String : MLCTensorData]?, batchSize: Int, options: MLCExecutionOptions = [], completionHandler: MLCGraphCompletionHandler? = nil) -> Bool
```

## Parameters

- `inputsData`: A dictionary that contains input data.
- `outputsData`: A dictionary that contains output data.
- `batchSize`: The batch size.
- `options`: The execution options.
- `completionHandler`: The completion handler.

<a id="return-value"></a>

## Return Value

`true` if the execution was successful.

<a id="Discussion"></a>

## Discussion

When executing an inference graph, if an optimizer is specified, the optimizer update is applied.

For variable length sequences for LSTMs/RNNs, use the key `“sortedSequenceLengths”` and pass in tensor data created by using one of the [MLCTensor](../mlctensor.md) sequence length initializers as the value.

If [synchronous](../mlcexecutionoptions/synchronous.md) is specified in `options`, this method returns after the graph is executed. Otherwise, this method returns after the graph is queued for execution. The completion handler is called after the graph has finished execution.

## See Also

### Executing Inference Graphs

- [execute(inputsData:batchSize:options:completionHandler:)](execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, and execution options you specify.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

# executeWithInputsData:outputsData:batchSize:options:completionHandler: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Executes the inference graph with the inputs and outputs data, batch size, execution options, and completion handler that you specify.

## Declaration

```objectivec
- (BOOL) executeWithInputsData:(NSDictionary<NSString *,MLCTensorData *> *) inputsData outputsData:(NSDictionary<NSString *,MLCTensorData *> *) outputsData batchSize:(NSUInteger) batchSize options:(MLCExecutionOptions) options completionHandler:(MLCGraphCompletionHandler) completionHandler;
```

## Parameters

- `inputsData`: A dictionary that contains input data.
- `outputsData`: A dictionary that contains output data.
- `batchSize`: The batch size.
- `options`: The execution options.
- `completionHandler`: The completion handler.

<a id="return-value"></a>

## Return Value

`true` if the execution was successful.

<a id="Discussion"></a>

## Discussion

When executing an inference graph, if an optimizer is specified, the optimizer update is applied.

For variable length sequences for LSTMs/RNNs, use the key `“sortedSequenceLengths”` and pass in tensor data created by using one of the [MLCTensor](../mlctensor.md) sequence length initializers as the value.

If [MLCExecutionOptionsSynchronous](../mlcexecutionoptions/synchronous.md) is specified in `options`, this method returns after the graph is executed. Otherwise, this method returns after the graph is queued for execution. The completion handler is called after the graph has finished execution.

## See Also

### Executing Inference Graphs

- [executeWithInputsData:batchSize:options:completionHandler:](execute%28inputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the inputs data, batch size, execution options, and completion handler you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input data, batch size, execution options and completion handler you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:](execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the inference graph with the input and output data, batch size, execution options, and completion handler that you specify.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.
