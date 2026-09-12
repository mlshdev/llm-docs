> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraphcompilationoptions/disablelayerfusion](https://developer.apple.com/documentation/mlcompute/mlcgraphcompilationoptions/disablelayerfusion)

# disableLayerFusion (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The option to disable layer fusion during graph compilation.

## Declaration

```swift
static var disableLayerFusion: MLCGraphCompilationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Include this option to disable fusion of layers, which is an important optimization that helps performance and memory footprint.

## See Also

### Creating Graph Compilation Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates a graph compilation option with the specified raw value.
- [debugLayers](debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [linkGraphs](linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
- [computeAllGradients](computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.

# MLCGraphCompilationOptionsDisableLayerFusion (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The option to disable layer fusion during graph compilation.

## Declaration

```objectivec
MLCGraphCompilationOptionsDisableLayerFusion
```

<a id="Discussion"></a>

## Discussion

Include this option to disable fusion of layers, which is an important optimization that helps performance and memory footprint.

## See Also

### Creating Graph Compilation Options

- [MLCGraphCompilationOptionsDebugLayers](debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [MLCGraphCompilationOptionsLinkGraphs](linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
- [MLCGraphCompilationOptionsComputeAllGradients](computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.
