> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/compile(options:device:inputtensors:inputtensorsdata:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/compile(options:device:inputtensors:inputtensorsdata:))

# compile(options:device:inputTensors:inputTensorsData:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Compiles the training graph for the options, device, and input tensors you specify.

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

### Preparing Training Graphs

- [addInputs(\_:lossLabels:)](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradient(for:)](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer(\_:)](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compile(options:device:)](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradient(for:)](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# compileWithOptions:device:inputTensors:inputTensorsData: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Compiles the training graph for the options, device, and input tensors you specify.

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

### Preparing Training Graphs

- [addInputs:lossLabels:](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs:lossLabels:lossLabelWeights:](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradientForTensors:](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer:](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compileWithOptions:device:](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradientForTensor:](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
