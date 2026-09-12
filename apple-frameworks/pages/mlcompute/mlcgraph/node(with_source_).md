> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/node(with:source:)](https://developer.apple.com/documentation/mlcompute/mlcgraph/node(with:source:))

# node(with:source:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the layer and source tensor that you specify to the graph.

## Declaration

```swift
func node(with layer: MLCLayer, source: MLCTensor) -> MLCTensor?
```

## Parameters

- `layer`: The layer.
- `source`: The source tensor.

<a id="return-value"></a>

## Return Value

A result tensor.

## See Also

### Adding Layers to Graphs

- [node(with:sources:)](node%28with_sources_%29.md): Deprecated. Adds the layer and source tensors that you specify to the graph.
- [node(with:sources:disableUpdate:)](node%28with_sources_disableupdate_%29.md): Deprecated. Adds the layer, source tensors, and option to disable optimizer updates that you specify to the graph.
- [node(with:sources:lossLabels:)](node%28with_sources_losslabels_%29.md): Deprecated. Adds the layer, sources, and loss labels tensors that you specify to the graph.

# nodeWithLayer:source: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds the layer and source tensor that you specify to the graph.

## Declaration

```objectivec
- (MLCTensor *) nodeWithLayer:(MLCLayer *) layer source:(MLCTensor *) source;
```

## Parameters

- `layer`: The layer.
- `source`: The source tensor.

<a id="return-value"></a>

## Return Value

A result tensor.

## See Also

### Adding Layers to Graphs

- [nodeWithLayer:sources:](node%28with_sources_%29.md): Deprecated. Adds the layer and source tensors that you specify to the graph.
- [nodeWithLayer:sources:disableUpdate:](node%28with_sources_disableupdate_%29.md): Deprecated. Adds the layer, source tensors, and option to disable optimizer updates that you specify to the graph.
- [nodeWithLayer:sources:lossLabels:](node%28with_sources_losslabels_%29.md): Deprecated. Adds the layer, sources, and loss labels tensors that you specify to the graph.
