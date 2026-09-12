> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/node(with:sources:)](https://developer.apple.com/documentation/mlcompute/mlcgraph/node(with:sources:))

# node(with:sources:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the layer and source tensors that you specify to the graph.

## Declaration

```swift
func node(with layer: MLCLayer, sources: [MLCTensor]) -> MLCTensor?
```

## Parameters

- `layer`: The layer.
- `sources`: An array that contains the source tensors.

<a id="return-value"></a>

## Return Value

A result tensor.

## See Also

### Adding Layers to Graphs

- [node(with:source:)](node%28with_source_%29.md): Deprecated. Adds the layer and source tensor that you specify to the graph.
- [node(with:sources:disableUpdate:)](node%28with_sources_disableupdate_%29.md): Deprecated. Adds the layer, source tensors, and option to disable optimizer updates that you specify to the graph.
- [node(with:sources:lossLabels:)](node%28with_sources_losslabels_%29.md): Deprecated. Adds the layer, sources, and loss labels tensors that you specify to the graph.

# nodeWithLayer:sources: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the layer and source tensors that you specify to the graph.

## Declaration

```objectivec
- (MLCTensor *) nodeWithLayer:(MLCLayer *) layer sources:(NSArray<MLCTensor *> *) sources;
```

## Parameters

- `layer`: The layer.
- `sources`: An array that contains the source tensors.

<a id="return-value"></a>

## Return Value

A result tensor.

## See Also

### Adding Layers to Graphs

- [nodeWithLayer:source:](node%28with_source_%29.md): Deprecated. Adds the layer and source tensor that you specify to the graph.
- [nodeWithLayer:sources:disableUpdate:](node%28with_sources_disableupdate_%29.md): Deprecated. Adds the layer, source tensors, and option to disable optimizer updates that you specify to the graph.
- [nodeWithLayer:sources:lossLabels:](node%28with_sources_losslabels_%29.md): Deprecated. Adds the layer, sources, and loss labels tensors that you specify to the graph.
