> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/compile(options:device:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/compile(options:device:))

# compile(options:device:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Compiles the training graph for the options and device you specify.

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

### Preparing Training Graphs

- [addInputs(\_:lossLabels:)](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradient(for:)](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer(\_:)](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradient(for:)](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# compileWithOptions:device: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Compiles the training graph for the options and device you specify.

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

### Preparing Training Graphs

- [addInputs:lossLabels:](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs:lossLabels:lossLabelWeights:](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradientForTensors:](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer:](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradientForTensor:](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
