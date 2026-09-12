> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcexecutionoptions/perlayerprofiling](https://developer.apple.com/documentation/mlcompute/mlcexecutionoptions/perlayerprofiling)

# perLayerProfiling (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 15.0+ (deprecated in 17.4) · iPadOS 15.0+ (deprecated in 17.4) · Mac Catalyst 15.0+ (deprecated in 17.4) · macOS 12.0+ (deprecated in 14.3) · tvOS 15.0+ (deprecated in 17.4)

The option to enable additional per-layer profiling information using signposts.

## Declaration

```swift
static var perLayerProfiling: MLCExecutionOptions { get }
```

<a id="Discussion"></a>

## Discussion

Visualize the layer information using the Logging profiling template in Instruments. This information may not be available for all [ML Compute](../../mlcompute.md) devices.

## See Also

### Execution Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates an execution option with the specified raw value.
- [skipWritingInputDataToDevice](skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [synchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [profiling](profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [forwardForInference](forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.

# MLCExecutionOptionsPerLayerProfiling (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+

The option to enable additional per-layer profiling information using signposts.

## Declaration

```objectivec
MLCExecutionOptionsPerLayerProfiling
```

<a id="Discussion"></a>

## Discussion

Visualize the layer information using the Logging profiling template in Instruments. This information may not be available for all [ML Compute](../../mlcompute.md) devices.

## See Also

### Execution Options

- [MLCExecutionOptionsSkipWritingInputDataToDevice](skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [MLCExecutionOptionsSynchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [MLCExecutionOptionsProfiling](profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [MLCExecutionOptionsForwardForInference](forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.
