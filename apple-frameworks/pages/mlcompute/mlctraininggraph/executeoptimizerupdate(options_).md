> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/executeoptimizerupdate(options:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/executeoptimizerupdate(options:))

# executeOptimizerUpdate(options:)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ (deprecated in 17.0) · iPadOS 15.0+ (deprecated in 17.0) · Mac Catalyst 15.0+ (deprecated in 17.0) · macOS 12.0+ (deprecated in 14.0) · tvOS 15.0+ (deprecated in 17.0)

Executes the optimizer update pass of the training graph with the execution options you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
@discardableResult func executeOptimizerUpdate(options: MLCExecutionOptions = []) async throws -> TimeInterval
```

## Parameters

- `options`: The execution options.

<a id="return-value"></a>

## Return Value

The execution time if you specify [profiling](../mlcexecutionoptions/profiling.md).

## See Also

### Executing Forward, Gradient, and Optimizer Updates

- [executeForward(batchSize:options:completionHandler:)](executeforward%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeForward(batchSize:options:outputsData:completionHandler:)](executeforward%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeForward(batchSize:options:outputsData:)](executeforward%28batchsize_options_outputsdata_%29.md): Deprecated. Executes the forward pass of the training graph with the batch size, execution options, and output data you specify.
- [executeGradient(batchSize:options:completionHandler:)](executegradient%28batchsize_options_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and completion handler you specify.
- [executeGradient(batchSize:options:outputsData:completionHandler:)](executegradient%28batchsize_options_outputsdata_completionhandler_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, output data, and completion handler you specify.
- [executeGradient(batchSize:options:outputsData:)](executegradient%28batchsize_options_outputsdata_%29.md): Deprecated. Executes the gradient pass of the training graph with the batch size, execution options, and output data you specify.
- [executeOptimizerUpdate(options:completionHandler:)](executeoptimizerupdate%28options_completionhandler_%29.md): Deprecated. Executes the optimizer update pass of the training graph with the execution options and completion handler you specify.
- [synchronizeUpdates()](synchronizeupdates%28%29.md): Deprecated. Synchronizes updates from device memory.
- [setTrainingTensorParameters(\_:)](settrainingtensorparameters%28__%29.md): Deprecated. Sets the input tensor parameters, which the optimizer then updates.
- [MLCExecutionOptions](../mlcexecutionoptions.md): Deprecated. A bitmask that specifies the options you use when executing a graph.
- [MLCGraphCompletionHandler](../mlcgraphcompletionhandler.md): A callback completion handler you execute when a graph finishes execution.
