> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/executeforward(batchsize:options:completionhandler:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/executeforward(batchsize:options:completionhandler:))

# executeForward(batchSize:options:completionHandler:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Executes the forward pass of the training graph with the batch size, execution options, and completion handler you specify.

## Declaration

```swift
func executeForward(batchSize: Int, options: MLCExecutionOptions = [], completionHandler: MLCGraphCompletionHandler? = nil) -> Bool
```

## Parameters

- `batchSize`: The batch size.
- `options`: The execution options.
- `completionHandler`: The completion handler.

<a id="return-value"></a>

## Return Value

`true` if the execution was successful.

## See Also

### Executing Forward, Gradient, and Optimizer Updates

- [executeForward(batchSize:options:outputsData:completionHandler:)](executeforward%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeForward(batchSize:options:outputsData:)](executeforward%28batchsize_options_outputsdata_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, and output data you specify.
- [executeGradient(batchSize:options:completionHandler:)](executegradient%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeGradient(batchSize:options:outputsData:completionHandler:)](executegradient%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeGradient(batchSize:options:outputsData:)](executegradient%28batchsize_options_outputsdata_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and output data you specify.
- [executeOptimizerUpdate(options:completionHandler:)](executeoptimizerupdate%28options_completionhandler_%29.md): Deprecated. Executes the optimizer update pass of the training graph with the execution options and completion handler you specify.
- [executeOptimizerUpdate(options:)](executeoptimizerupdate%28options_%29.md): Deprecated. Executes the optimizer update pass of the training graph with the execution options you specify.
- [synchronizeUpdates()](synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters(\_:)](settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.

# executeForwardWithBatchSize:options:completionHandler: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Executes the forward pass of the training graph with the batch size, execution options, and completion handler you specify.

## Declaration

```objectivec
- (BOOL) executeForwardWithBatchSize:(NSUInteger) batchSize options:(MLCExecutionOptions) options completionHandler:(MLCGraphCompletionHandler) completionHandler;
```

## Parameters

- `batchSize`: The batch size.
- `options`: The execution options.
- `completionHandler`: The completion handler.

<a id="return-value"></a>

## Return Value

`true` if the execution was successful.

## See Also

### Executing Forward, Gradient, and Optimizer Updates

- [executeForwardWithBatchSize:options:outputsData:completionHandler:](executeforward%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeGradientWithBatchSize:options:completionHandler:](executegradient%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeGradientWithBatchSize:options:outputsData:completionHandler:](executegradient%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeOptimizerUpdateWithOptions:completionHandler:](executeoptimizerupdate%28options_completionhandler_%29.md): Deprecated. Executes the optimizer update pass of the training graph with the execution options and completion handler you specify.
- [synchronizeUpdates](synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters:](settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.
