> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraphcompilationoptions/computeallgradients](https://developer.apple.com/documentation/mlcompute/mlcgraphcompilationoptions/computeallgradients)

# computeAllGradients (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The option to compute all gradients during graph compilation.

## Declaration

```swift
static var computeAllGradients: MLCGraphCompilationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Include this option to compute gradients for layers with or without parameters that only take input tensors.

For example, if the first layer of a graph is a convolution layer, the framework only computes the gradients for weights and biases associated with the convolution layer, but not the gradients for the input. Include this option if you want to compute all gradients for the input.

## See Also

### Creating Graph Compilation Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates a graph compilation option with the specified raw value.
- [debugLayers](debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [disableLayerFusion](disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [linkGraphs](linkgraphs.md): Deprecated. The option to link graphs during graph compilation.

# MLCGraphCompilationOptionsComputeAllGradients (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The option to compute all gradients during graph compilation.

## Declaration

```objectivec
MLCGraphCompilationOptionsComputeAllGradients
```

<a id="Discussion"></a>

## Discussion

Include this option to compute gradients for layers with or without parameters that only take input tensors.

For example, if the first layer of a graph is a convolution layer, the framework only computes the gradients for weights and biases associated with the convolution layer, but not the gradients for the input. Include this option if you want to compute all gradients for the input.

## See Also

### Creating Graph Compilation Options

- [MLCGraphCompilationOptionsDebugLayers](debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [MLCGraphCompilationOptionsDisableLayerFusion](disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [MLCGraphCompilationOptionsLinkGraphs](linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
