> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcexecutionoptions/forwardforinference](https://developer.apple.com/documentation/mlcompute/mlcexecutionoptions/forwardforinference)

# forwardForInference (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The option to execute the forward pass for inference only.

## Declaration

```swift
static var forwardForInference: MLCExecutionOptions { get }
```

<a id="Discussion"></a>

## Discussion

If you include this option and execute a training graph using one of the `execute` methods, such as [execute(inputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:)](../mlctraininggraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md), the framework only executes the forward pass of the training graph, and it executes that forward pass for inference only.

If you include this option and execute a training graph using one of the `executeForward` methods, such as [executeForward(batchSize:options:completionHandler:)](../mlctraininggraph/executeforward%28batchsize_options_completionhandler_%29.md), the framework executes the forward pass for inference only.

## See Also

### Execution Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates an execution option with the specified raw value.
- [skipWritingInputDataToDevice](skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [synchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [profiling](profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [perLayerProfiling](perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.

# MLCExecutionOptionsForwardForInference (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The option to execute the forward pass for inference only.

## Declaration

```objectivec
MLCExecutionOptionsForwardForInference
```

<a id="Discussion"></a>

## Discussion

If you include this option and execute a training graph using one of the `execute` methods, such as [executeWithInputsData:lossLabelsData:lossLabelWeightsData:batchSize:options:completionHandler:](../mlctraininggraph/execute%28inputsdata_losslabelsdata_losslabelweightsdata_batchsize_options_completionhandler_%29.md), the framework only executes the forward pass of the training graph, and it executes that forward pass for inference only.

If you include this option and execute a training graph using one of the `executeForward` methods, such as [executeForwardWithBatchSize:options:completionHandler:](../mlctraininggraph/executeforward%28batchsize_options_completionhandler_%29.md), the framework executes the forward pass for inference only.

## See Also

### Execution Options

- [MLCExecutionOptionsSkipWritingInputDataToDevice](skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [MLCExecutionOptionsSynchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [MLCExecutionOptionsProfiling](profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [MLCExecutionOptionsPerLayerProfiling](perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
