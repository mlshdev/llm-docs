> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraphcompilationoptions/debuglayers](https://developer.apple.com/documentation/mlcompute/mlcgraphcompilationoptions/debuglayers)

# debugLayers (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The option to debug layers during graph compilation.

## Declaration

```swift
static var debugLayers: MLCGraphCompilationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Include this option to disable various optimizations such as layer fusion, and ensure the framework synchronizes the resulting forward and gradients tensors host memory with device memory, for layers marked as debuggable.

## See Also

### Creating Graph Compilation Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates a graph compilation option with the specified raw value.
- [disableLayerFusion](disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [linkGraphs](linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
- [computeAllGradients](computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.

# MLCGraphCompilationOptionsDebugLayers (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The option to debug layers during graph compilation.

## Declaration

```objectivec
MLCGraphCompilationOptionsDebugLayers
```

<a id="Discussion"></a>

## Discussion

Include this option to disable various optimizations such as layer fusion, and ensure the framework synchronizes the resulting forward and gradients tensors host memory with device memory, for layers marked as debuggable.

## See Also

### Creating Graph Compilation Options

- [MLCGraphCompilationOptionsDisableLayerFusion](disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [MLCGraphCompilationOptionsLinkGraphs](linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
- [MLCGraphCompilationOptionsComputeAllGradients](computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.
