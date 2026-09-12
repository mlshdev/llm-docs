> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcexecutionoptions/profiling](https://developer.apple.com/documentation/mlcompute/mlcexecutionoptions/profiling)

# profiling (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The option to return profiling information in the callback before returning from execution.

## Declaration

```swift
static var profiling: MLCExecutionOptions { get }
```

<a id="Discussion"></a>

## Discussion

Include this option to return profiling information in the graph execute completion handler callback, including device execution time.

## See Also

### Execution Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates an execution option with the specified raw value.
- [skipWritingInputDataToDevice](skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [synchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [perLayerProfiling](perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
- [forwardForInference](forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.

# MLCExecutionOptionsProfiling (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The option to return profiling information in the callback before returning from execution.

## Declaration

```objectivec
MLCExecutionOptionsProfiling
```

<a id="Discussion"></a>

## Discussion

Include this option to return profiling information in the graph execute completion handler callback, including device execution time.

## See Also

### Execution Options

- [MLCExecutionOptionsSkipWritingInputDataToDevice](skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [MLCExecutionOptionsSynchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [MLCExecutionOptionsPerLayerProfiling](perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
- [MLCExecutionOptionsForwardForInference](forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.
