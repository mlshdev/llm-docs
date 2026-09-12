> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraphcompilationoptions/init(rawvalue:)](https://developer.apple.com/documentation/mlcompute/mlcgraphcompilationoptions/init(rawvalue:))

# init(rawValue:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a graph compilation option with the specified raw value.

## Declaration

```swift
init(rawValue: UInt64)
```

## Parameters

- `rawValue`: The bitmask raw value.

## See Also

### Creating Graph Compilation Options

- [debugLayers](debuglayers.md): Deprecated. The option to debug layers during graph compilation.
- [disableLayerFusion](disablelayerfusion.md): Deprecated. The option to disable layer fusion during graph compilation.
- [linkGraphs](linkgraphs.md): Deprecated. The option to link graphs during graph compilation.
- [computeAllGradients](computeallgradients.md): Deprecated. The option to compute all gradients during graph compilation.
