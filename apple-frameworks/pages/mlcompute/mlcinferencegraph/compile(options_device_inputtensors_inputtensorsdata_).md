> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinferencegraph/compile(options:device:inputtensors:inputtensorsdata:)](https://developer.apple.com/documentation/mlcompute/mlcinferencegraph/compile(options:device:inputtensors:inputtensorsdata:))

# compile(options:device:inputTensors:inputTensorsData:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Compiles the inference graph for the options, device, and input tensors you specify.

## Declaration

```swift
func compile(options: MLCGraphCompilationOptions = [], device: MLCDevice, inputTensors: [String : MLCTensor]?, inputTensorsData: [String : MLCTensorData]?) -> Bool
```

## Parameters

- `options`: The compiler options.
- `device`: The device.
- `inputTensors`: The list of input tensors that are constants.
- `inputTensorsData`: The tensor data to use with the input tensors.

<a id="return-value"></a>

## Return Value

A Boolean that indicates success or failure.

<a id="Discussion"></a>

## Discussion

If you specify the list of constant tensors before the framework compiles the graph, then the framework can perform additional optimizations during the compilation.

## See Also

### Preparing Inference Graphs

- [addInputs(\_:)](addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compile(options:device:)](compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# compileWithOptions:device:inputTensors:inputTensorsData: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Compiles the inference graph for the options, device, and input tensors you specify.

## Declaration

```objectivec
- (BOOL) compileWithOptions:(MLCGraphCompilationOptions) options device:(MLCDevice *) device inputTensors:(NSDictionary<NSString *,MLCTensor *> *) inputTensors inputTensorsData:(NSDictionary<NSString *,MLCTensorData *> *) inputTensorsData;
```

## Parameters

- `options`: The compiler options.
- `device`: The device.
- `inputTensors`: The list of input tensors that are constants.
- `inputTensorsData`: The tensor data to use with the input tensors.

<a id="return-value"></a>

## Return Value

A Boolean that indicates success or failure.

<a id="Discussion"></a>

## Discussion

If you specify the list of constant tensors before the framework compiles the graph, then the framework can perform additional optimizations during the compilation.

## See Also

### Preparing Inference Graphs

- [addInputs:](addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs:lossLabels:lossLabelWeights:](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compileWithOptions:device:](compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
