> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcexecutionoptions/skipwritinginputdatatodevice](https://developer.apple.com/documentation/mlcompute/mlcexecutionoptions/skipwritinginputdatatodevice)

# skipWritingInputDataToDevice (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The option to skip writing input data to device memory.

## Declaration

```swift
static var skipWritingInputDataToDevice: MLCExecutionOptions { get }
```

<a id="Discussion"></a>

## Discussion

Include this option to prevent writing the input tensors to device memory associated with these tensors when the framework executes the graph.

## See Also

### Execution Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates an execution option with the specified raw value.
- [synchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [profiling](profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [perLayerProfiling](perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
- [forwardForInference](forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.

# MLCExecutionOptionsSkipWritingInputDataToDevice (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The option to skip writing input data to device memory.

## Declaration

```objectivec
MLCExecutionOptionsSkipWritingInputDataToDevice
```

<a id="Discussion"></a>

## Discussion

Include this option to prevent writing the input tensors to device memory associated with these tensors when the framework executes the graph.

## See Also

### Execution Options

- [MLCExecutionOptionsSynchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [MLCExecutionOptionsProfiling](profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [MLCExecutionOptionsPerLayerProfiling](perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
- [MLCExecutionOptionsForwardForInference](forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.
