> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraphcompilationoptions](https://developer.apple.com/documentation/mlcompute/mlcgraphcompilationoptions)

# MLCGraphCompilationOptions (Swift)

**Framework:** ML Compute  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A bitmask that specifies the options you use when compiling a graph.

## Declaration

```swift
struct MLCGraphCompilationOptions
```

## Topics

### Creating Graph Compilation Options

- [init(rawValue:)](mlcgraphcompilationoptions/init%28rawvalue_%29.md): Deprecated. Creates a graph compilation option with the specified raw value.
- [debugLayers](mlcgraphcompilationoptions/debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [disableLayerFusion](mlcgraphcompilationoptions/disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [linkGraphs](mlcgraphcompilationoptions/linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
- [computeAllGradients](mlcgraphcompilationoptions/computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Preparing Inference Graphs

- [addInputs(\_:)](mlcinferencegraph/addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs(\_:lossLabels:lossLabelWeights:)](mlcinferencegraph/addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs(\_:)](mlcinferencegraph/addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compile(options:device:)](mlcinferencegraph/compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [compile(options:device:inputTensors:inputTensorsData:)](mlcinferencegraph/compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [link(with:)](mlcinferencegraph/link%28with_%29.md): Deprecated. Links the inference graphs you specify.

# MLCGraphCompilationOptions (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

A bitmask that specifies the options you use when compiling a graph.

## Declaration

```objectivec
enum MLCGraphCompilationOptions : uint64_t;
```

## Topics

### Creating Graph Compilation Options

- [MLCGraphCompilationOptionsDebugLayers](mlcgraphcompilationoptions/debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [MLCGraphCompilationOptionsDisableLayerFusion](mlcgraphcompilationoptions/disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [MLCGraphCompilationOptionsLinkGraphs](mlcgraphcompilationoptions/linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
- [MLCGraphCompilationOptionsComputeAllGradients](mlcgraphcompilationoptions/computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.

### Enumeration Cases

- [MLCGraphCompilationOptionsNone](mlcgraphcompilationoptions/mlcgraphcompilationoptionsnone.md): The default option for graph compilation.

## See Also

### Preparing Inference Graphs

- [addInputs:](mlcinferencegraph/addinputs%28__%29.md): Deprecated. Adds the inputs you specify to the inference graph.
- [addInputs:lossLabels:lossLabelWeights:](mlcinferencegraph/addinputs%28__losslabels_losslabelweights_%29.md): Deprecated. Adds the inputs, loss labels, and loss label weights that you specify to the inference graph.
- [addOutputs:](mlcinferencegraph/addoutputs%28__%29.md): Deprecated. Adds the outputs you specify to the inference graph.
- [compileWithOptions:device:](mlcinferencegraph/compile%28options_device_%29.md): Deprecated. Compiles the inference graph for the options and device you specify.
- [compileWithOptions:device:inputTensors:inputTensorsData:](mlcinferencegraph/compile%28options_device_inputtensors_inputtensorsdata_%29.md): Deprecated. Compiles the inference graph for the options, device, and input tensors you specify.
- [linkWithGraphs:](mlcinferencegraph/link%28with_%29.md): Deprecated. Links the inference graphs you specify.
