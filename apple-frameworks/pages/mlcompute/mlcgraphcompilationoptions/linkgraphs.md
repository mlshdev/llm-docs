> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraphcompilationoptions/linkgraphs](https://developer.apple.com/documentation/mlcompute/mlcgraphcompilationoptions/linkgraphs)

# linkGraphs (Swift)

**Framework:** ML Compute  
**Kind:** Type Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The option to link graphs during graph compilation.

## Declaration

```swift
static var linkGraphs: MLCGraphCompilationOptions { get }
```

<a id="Discussion"></a>

## Discussion

Include this option when you link together one or more sub-graphs when executing the forward, gradient, and optimizer update. For example, if the full computation graph includes a layer that the framework doesn’t support, you’ll need to create multiple sub-graphs and link them together using `linkWithGraphs`. When doing so, include this option when you call `compileWithOptions` for graphs you want to link together.

## See Also

### Creating Graph Compilation Options

- [init(rawValue:)](init%28rawvalue_%29.md): Deprecated. Creates a graph compilation option with the specified raw value.
- [debugLayers](debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [disableLayerFusion](disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [computeAllGradients](computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.

# MLCGraphCompilationOptionsLinkGraphs (Objective-C)

**Framework:** ML Compute  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+

The option to link graphs during graph compilation.

## Declaration

```objectivec
MLCGraphCompilationOptionsLinkGraphs
```

<a id="Discussion"></a>

## Discussion

Include this option when you link together one or more sub-graphs when executing the forward, gradient, and optimizer update. For example, if the full computation graph includes a layer that the framework doesn’t support, you’ll need to create multiple sub-graphs and link them together using `linkWithGraphs`. When doing so, include this option when you call `compileWithOptions` for graphs you want to link together.

## See Also

### Creating Graph Compilation Options

- [MLCGraphCompilationOptionsDebugLayers](debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [MLCGraphCompilationOptionsDisableLayerFusion](disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [MLCGraphCompilationOptionsComputeAllGradients](computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.
