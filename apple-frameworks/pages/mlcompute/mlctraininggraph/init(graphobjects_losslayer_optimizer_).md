> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctraininggraph/init(graphobjects:losslayer:optimizer:)](https://developer.apple.com/documentation/mlcompute/mlctraininggraph/init(graphobjects:losslayer:optimizer:))

# init(graphObjects:lossLayer:optimizer:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a training graph with the layers from the graph objects, loss layer, and optimizer you specify.

## Declaration

```swift
convenience init(graphObjects: [MLCGraph], lossLayer: MLCLayer?, optimizer: MLCOptimizer?)
```

## Parameters

- `graphObjects`: The graph objects whose layers you add to the training graph.
- `lossLayer`: The loss layer.
- `optimizer`: The optimizer.

<a id="Discussion"></a>

## Discussion

You can also add a loss layer to a training graph using the [node(with:sources:lossLabels:)](../mlcgraph/node%28with_sources_losslabels_%29.md) method.

## See Also

### Creating Training Graphs

- [Optimizers](../optimizers.md): Create an optimizer to use with the training graph.
- [MLCTensorParameter](../mlctensorparameter.md): Deprecated. A tensor parameter object.

# graphWithGraphObjects:lossLayer:optimizer: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a training graph with the layers from the graph objects, loss layer, and optimizer you specify.

## Declaration

```objectivec
+ (instancetype) graphWithGraphObjects:(NSArray<MLCGraph *> *) graphObjects lossLayer:(MLCLayer *) lossLayer optimizer:(MLCOptimizer *) optimizer;
```

## Parameters

- `graphObjects`: The graph objects whose layers you add to the training graph.
- `lossLayer`: The loss layer.
- `optimizer`: The optimizer.

<a id="Discussion"></a>

## Discussion

You can also add a loss layer to a training graph using the [nodeWithLayer:sources:lossLabels:](../mlcgraph/node%28with_sources_losslabels_%29.md) method.

## See Also

### Creating Training Graphs

- [Optimizers](../optimizers.md): Create an optimizer to use with the training graph.
- [MLCTensorParameter](../mlctensorparameter.md): Deprecated. A tensor parameter object.
