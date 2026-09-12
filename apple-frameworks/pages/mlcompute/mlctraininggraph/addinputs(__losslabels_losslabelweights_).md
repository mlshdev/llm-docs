> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/addinputs(_:losslabels:losslabelweights:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/addinputs(_:losslabels:losslabelweights:))

# addInputs(\_:lossLabels:lossLabelWeights:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the inputs, loss labels, and loss label weights that you specify to the training graph.

## Declaration

```swift
func addInputs(_ inputs: [String : MLCTensor], lossLabels: [String : MLCTensor]?, lossLabelWeights: [String : MLCTensor]?) -> Bool
```

## Parameters

- `inputs`: A dictionary that contains inputs.
- `lossLabels`: A dictionary that contains loss label inputs.
- `lossLabelWeights`: A dictionary that contains loss label weights.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful.

<a id="Discussion"></a>

## Discussion

Each input, loss label, or label weights tensor has a string identifier. When you execute the training graph, the string identifies which data object is the input for each tensor whose device memory requires updating before the framework actually executes the graph.

## See Also

### Preparing Training Graphs

- [addInputs(\_:lossLabels:)](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradient(for:)](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer(\_:)](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compile(options:device:)](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradient(for:)](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# addInputs:lossLabels:lossLabelWeights: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the inputs, loss labels, and loss label weights that you specify to the training graph.

## Declaration

```objectivec
- (BOOL) addInputs:(NSDictionary<NSString *,MLCTensor *> *) inputs lossLabels:(NSDictionary<NSString *,MLCTensor *> *) lossLabels lossLabelWeights:(NSDictionary<NSString *,MLCTensor *> *) lossLabelWeights;
```

## Parameters

- `inputs`: A dictionary that contains inputs.
- `lossLabels`: A dictionary that contains loss label inputs.
- `lossLabelWeights`: A dictionary that contains loss label weights.

<a id="return-value"></a>

## Return Value

`true` if the operation was successful.

<a id="Discussion"></a>

## Discussion

Each input, loss label, or label weights tensor has a string identifier. When you execute the training graph, the string identifies which data object is the input for each tensor whose device memory requires updating before the framework actually executes the graph.

## See Also

### Preparing Training Graphs

- [addInputs:lossLabels:](addinputs%28__losslabels_%29.md): Deprecated. Adds the inputs and loss label inputs that you specify to the training graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs to the training graph you specify.
- [stopGradientForTensors:](stopgradient%28for_%29.md): Deprecated. Adds the tensors that you specify, to indicate which contributions the graph excludes when computing gradients during gradient pass.
- [compileOptimizer:](compileoptimizer%28__%29.md): Deprecated. Compiles the optimizer to use with a training graph you specify.
- [compileWithOptions:device:](compile%28options_device_%29.md): Deprecated. Compiles the training graph for the options and device you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the training graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the training graphs you specify.
- [allocateUserGradientForTensor:](allocateusergradient%28for_%29.md): Deprecated. Allocates an entry for a gradient for the result tensor you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
