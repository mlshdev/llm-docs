> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcexecutionoptions/init(rawvalue:)](https://developer.apple.com/documentation/mlcompute/mlcexecutionoptions/init(rawvalue:))

# init(rawValue:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates an execution option with the specified raw value.

## Declaration

```swift
init(rawValue: UInt64)
```

## Parameters

- `rawValue`: The bitmask raw value.

## See Also

### Execution Options

- [skipWritingInputDataToDevice](skipwritinginputdatatodevice.md): Deprecated. The option to skip writing input data to device memory.
- [synchronous](synchronous.md): Deprecated. The option to execute the graph synchronously.
- [profiling](profiling.md): Deprecated. The option to return profiling information in the callback before returning from execution.
- [perLayerProfiling](perlayerprofiling.md): Deprecated. The option to enable additional per-layer profiling information using signposts.
- [forwardForInference](forwardforinference.md): Deprecated. The option to execute the forward pass for inference only.
