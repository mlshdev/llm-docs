> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/layers](https://developer.apple.com/documentation/mlcompute/mlcgraph/layers)

# layers (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains the layers in the graph.

## Declaration

```swift
var layers: [MLCLayer] { get }
```

## See Also

### Inspecting Graphs

- [sourceTensors(for:)](sourcetensors%28for_%29.md): Deprecated. Gets the source tensors for a layer in the training graph.
- [resultTensors(for:)](resulttensors%28for_%29.md): Deprecated. Gets the result tensors for a layer in the training graph.
- [device](device.md): Deprecated. The device you’ll use for compiling and executing a graph.
- [summarizedDOTDescription](summarizeddotdescription.md): Deprecated. A DOT representation of the graph.

# layers (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains the layers in the graph.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<MLCLayer *> * layers;
```

## See Also

### Inspecting Graphs

- [sourceTensorsForLayer:](sourcetensors%28for_%29.md): Deprecated. Gets the source tensors for a layer in the training graph.
- [resultTensorsForLayer:](resulttensors%28for_%29.md): Deprecated. Gets the result tensors for a layer in the training graph.
- [device](device.md): Deprecated. The device you’ll use for compiling and executing a graph.
- [summarizedDOTDescription](summarizeddotdescription.md): Deprecated. A DOT representation of the graph.
