> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcinferencegraph/addinputs(_:losslabels:losslabelweights:)](https://developer.apple.com/documentation/mlcompute/mlcinferencegraph/addinputs(_:losslabels:losslabelweights:))

# addInputs(\_:lossLabels:lossLabelWeights:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.

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

## See Also

### Preparing Inference Graphs

- [addInputs(\_:)](addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addOutputs(\_:)](addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compile(options:device:)](compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [link(with:)](link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.

# addInputs:lossLabels:lossLabelWeights: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.

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

## See Also

### Preparing Inference Graphs

- [addInputs:](addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addOutputs:](addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compileWithOptions:device:](compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](link%28with_%29.md): Deprecated. Links the inference graphs you specify.
- [MLCGraphCompilationOptions](../mlcgraphcompilationoptions.md): Deprecated. A bitmask that specifies the options you use when compiling a graph.
