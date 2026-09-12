> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinferencegraph/compile(options:device:)](https://developer.apple.com/documentation/mlcompute/mlcinferencegraph/compile(options:device:))

# compile(options:device:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Compiles the inference graph for the options and device you specify.

## Declaration

```swift
func compile(options: MLCGraphCompilationOptions = [], device: MLCDevice) -> Bool
```

## Parameters

- `options`: The compiler options.
- `device`: The device.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful.

## See Also

### Preparing Inference Graphs

- [addInputs(\_:)](addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compile(options:device:inputTensors:inputTensorsData:)](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# compileWithOptions:device: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Compiles the inference graph for the options and device you specify.

## Declaration

```objectivec
- (BOOL) compileWithOptions:(MLCGraphCompilationOptions) options device:(MLCDevice *) device;
```

## Parameters

- `options`: The compiler options.
- `device`: The device.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful.

## See Also

### Preparing Inference Graphs

- [addInputs:](addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs:lossLabels:lossLabelWeights:](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compileWithOptions:device:inputTensors:inputTensorsData:](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
