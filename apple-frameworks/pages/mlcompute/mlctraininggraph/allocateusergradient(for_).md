> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/allocateusergradient(for:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/allocateusergradient(for:))

# allocateUserGradient(for:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Allocates an entry for a gradient for the result tensor you specify.

## Declaration

```swift
func allocateUserGradient(for tensor: MLCTensor) -> MLCTensor?
```

## Parameters

- `tensor`: A result tensor.

<a id="return-value"></a>

## Return Value

A gradient tensor.

<a id="Discussion"></a>

## Discussion

Third-party numeric libraries can perform additional computations on the result tensor produced by a layer in the training graph. This external computation may produce gradients that you can backpropagate during gradient execution by using this method to allocate an entry for the gradient.

## See Also

### Preparing Training Graphs

- [addInputs(\_:lossLabels:)](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradient(for:)](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer(\_:)](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compile(options:device:)](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# allocateUserGradientForTensor: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Allocates an entry for a gradient for the result tensor you specify.

## Declaration

```objectivec
- (MLCTensor *) allocateUserGradientForTensor:(MLCTensor *) tensor;
```

## Parameters

- `tensor`: A result tensor.

<a id="return-value"></a>

## Return Value

A gradient tensor.

<a id="Discussion"></a>

## Discussion

Third-party numeric libraries can perform additional computations on the result tensor produced by a layer in the training graph. This external computation may produce gradients that you can backpropagate during gradient execution by using this method to allocate an entry for the gradient.

## See Also

### Preparing Training Graphs

- [addInputs:lossLabels:](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addInputs:lossLabels:lossLabelWeights:](addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the training graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradientForTensors:](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer:](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compileWithOptions:device:](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
