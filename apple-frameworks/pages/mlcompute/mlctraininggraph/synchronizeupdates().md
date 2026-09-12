> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/synchronizeupdates()](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/synchronizeupdates())

# synchronizeUpdates() (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Synchronizes updates from device memory.

## Declaration

```swift
func synchronizeUpdates()
```

<a id="Discussion"></a>

## Discussion

This method synchronizes the weights/biases from convolution, fully connected and LSTM layers, and tensor parameters, from device memory to host memory.

## See Also

### Executing Training Iterations

- [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, batch size, execution options, and completion handler you specify.
- [execute(inputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:)](execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, output data, batch size, execution options, and completion handler that you specify.
- [setTrainingTensorParameters(\_:)](settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

# synchronizeUpdates (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Synchronizes updates from device memory.

## Declaration

```objectivec
- (void) synchronizeUpdates;
```

<a id="Discussion"></a>

## Discussion

This method synchronizes the weights/biases from convolution, fully connected and LSTM layers, and tensor parameters, from device memory to host memory.

## See Also

### Executing Training Iterations

- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, batch size, execution options, and completion handler you specify.
- [executeWithInputsData:lossLabelsData:lossLabelWeightsData:outputsData:batchSize:options:completionHandler:](execute%28inputsdata_losslabelsdata_losslabelweightsdata_outputsdata_batchsize_options_completionhandler_%29.md): Deprecated. Executes the training graph with the input data, output data, batch size, execution options, and completion handler that you specify.
- [setTrainingTensorParameters:](settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.
