> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/compileoptimizer(_:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/compileoptimizer(_:))

# compileOptimizer(\_:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Compiles the optimizer to use with a training graph you specify.

## Declaration

```swift
func compileOptimizer(_ optimizer: MLCOptimizer) -> Bool
```

## Parameters

- `optimizer`: The optimizer.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful.

<a id="Discussion"></a>

## Discussion

Typically you specify the optimizer to use with a training graph when creating the training graph, using [init(graphObjects:lossLayer:optimizer:)](init%28graphobjects_losslayer_optimizer_%29.md). The optimizer is then compiled in when you call [compile(options:device:)](compile%28options_device_%29.md).

Alternatively, if the optimizer isn’t known when the framework creates or compiles the training graph, you can use this method to associate and compile in an optimizer.

## See Also

### Preparing Training Graphs

- [addInputs(\_:lossLabels:)](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradient(for:)](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compile(options:device:)](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradient(for:)](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# compileOptimizer: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Compiles the optimizer to use with a training graph you specify.

## Declaration

```objectivec
- (BOOL) compileOptimizer:(MLCOptimizer *) optimizer;
```

## Parameters

- `optimizer`: The optimizer.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful.

<a id="Discussion"></a>

## Discussion

Typically you specify the optimizer to use with a training graph when creating the training graph, using [graphWithGraphObjects:lossLayer:optimizer:](init%28graphobjects_losslayer_optimizer_%29.md). The optimizer is then compiled in when you call [compileWithOptions:device:](compile%28options_device_%29.md).

Alternatively, if the optimizer isn’t known when the framework creates or compiles the training graph, you can use this method to associate and compile in an optimizer.

## See Also

### Preparing Training Graphs

- [addInputs:lossLabels:](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs:lossLabels:lossLabelWeights:](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradientForTensors:](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileWithOptions:device:](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradientForTensor:](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
