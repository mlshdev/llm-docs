> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/execute(inputsdata:losslabelsdata:losslabelweightsdata:outputsdata:batchsize:options:completionhandler:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/execute(inputsdata:losslabelsdata:losslabelweightsdata:outputsdata:batchsize:options:completionhandler:))

# execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Executes the training graph with the input data, output data, batch size, execution options, and completion handler that you specify.

## Declaration

```swift
func execute(inputsData: [String : MLCTensorData], lossLabelsData: [String : MLCTensorData]?, lossLabelWeightsData: [String : MLCTensorData]?, outputsData: [String : MLCTensorData]?, batchSize: Int, options: MLCExecutionOptions = [], completionHandler: MLCGraphCompletionHandler? = nil) -> Bool
```

## Parameters

- `inputsData`: A dictionary that contains input data.
- `lossLabelsData`: A dictionary that contains loss labels data.
- `lossLabelWeightsData`: A dictionary that contains loss label weights data.
- `outputsData`: A dictionary that contains output data.
- `batchSize`: The batch size.
- `options`: The execution options.
- `completionHandler`: The completion handler.

<a id="return-value"></a>

## Return Value

`true` if the execution was successful.

<a id="Discussion"></a>

## Discussion

When you execute a training iteration, if you specified an optimizer when you created the graph, the framework applies the optimizer update.

For variable length sequences for LSTMs/RNNs, use the key “`sortedSequenceLength`” and pass in tensor data created by using one of the [MLCTensor](../mlctensor.md) sequence length initializers as the value.

If you include [synchronous](../mlcexecutionoptions/synchronous.md) in `options`, the execution method only returns after the graph has finished execution. Otherwise, the execution method returns once the framework enqueues the graph for execution. However, the completion handler is still not called until after the graph has finished execution.

## See Also

### Executing Training Iterations

- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, batch size, execution options, and completion handler you specify.
- [synchronizeUpdates()](synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters(\_:)](settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

# executeWithInputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Executes the training graph with the input data, output data, batch size, execution options, and completion handler that you specify.

## Declaration

```objectivec
- (BOOL) executeWithInputsData:(NSDictionary<NSString *,MLCTensorData *> *) inputsData lossLabelsData:(NSDictionary<NSString *,MLCTensorData *> *) lossLabelsData lossLabelWeightsData:(NSDictionary<NSString *,MLCTensorData *> *) lossLabelWeightsData outputsData:(NSDictionary<NSString *,MLCTensorData *> *) outputsData batchSize:(NSUInteger) batchSize options:(MLCExecutionOptions) options completionHandler:(MLCGraphCompletionHandler) completionHandler;
```

## Parameters

- `inputsData`: A dictionary that contains input data.
- `lossLabelsData`: A dictionary that contains loss labels data.
- `lossLabelWeightsData`: A dictionary that contains loss label weights data.
- `outputsData`: A dictionary that contains output data.
- `batchSize`: The batch size.
- `options`: The execution options.
- `completionHandler`: The completion handler.

<a id="return-value"></a>

## Return Value

`true` if the execution was successful.

<a id="Discussion"></a>

## Discussion

When you execute a training iteration, if you specified an optimizer when you created the graph, the framework applies the optimizer update.

For variable length sequences for LSTMs/RNNs, use the key “`sortedSequenceLength`” and pass in tensor data created by using one of the [MLCTensor](../mlctensor.md) sequence length initializers as the value.

If you include [MLCExecutionOptionsSynchronous](../mlcexecutionoptions/synchronous.md) in `options`, the execution method only returns after the graph has finished execution. Otherwise, the execution method returns once the framework enqueues the graph for execution. However, the completion handler is still not called until after the graph has finished execution.

## See Also

### Executing Training Iterations

- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, batch size, execution options, and completion handler you specify.
- [synchronizeUpdates](synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters:](settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.
