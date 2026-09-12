> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/sourcetensors(for:)](https://developer.apple.com/documentation/mlcompute/mlcgraph/sourcetensors(for:))

# sourceTensors(for:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Gets the source tensors for a layer in the training graph.

## Declaration

```swift
func sourceTensors(for layer: MLCLayer) -> [MLCTensor]
```

## Parameters

- `layer`: A layer in the training graph.

<a id="return-value"></a>

## Return Value

A list of source tensors.

## See Also

### Inspecting Graphs

- [resultTensors(for:)](resulttensors%28for_%29.md): Deprecated. Gets the result tensors for a layer in the training graph.
- [device](device.md): Deprecated. The device you’ll use for compiling and executing a graph.
- [layers](layers.md): Deprecated. An array that contains the layers in the graph.
- [summarizedDOTDescription](summarizeddotdescription.md): Deprecated. A DOT representation of the graph.

# sourceTensorsForLayer: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Gets the source tensors for a layer in the training graph.

## Declaration

```objectivec
- (NSArray<MLCTensor *> *) sourceTensorsForLayer:(MLCLayer *) layer;
```

## Parameters

- `layer`: A layer in the training graph.

<a id="return-value"></a>

## Return Value

A list of source tensors.

## See Also

### Inspecting Graphs

- [resultTensorsForLayer:](resulttensors%28for_%29.md): Deprecated. Gets the result tensors for a layer in the training graph.
- [device](device.md): Deprecated. The device you’ll use for compiling and executing a graph.
- [layers](layers.md): Deprecated. An array that contains the layers in the graph.
- [summarizedDOTDescription](summarizeddotdescription.md): Deprecated. A DOT representation of the graph.
