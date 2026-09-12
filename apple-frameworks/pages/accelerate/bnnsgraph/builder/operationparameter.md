> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/operationparameter](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/operationparameter)

# BNNSGraph.Builder.OperationParameter

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A protocol that allows functions to accept either tensors or collections.

## Declaration

```swift
protocol OperationParameter<Element>
```

## Topics

### Operators

- [\*(\_:\_:)](operationparameter/_%28____%29-386tk.md): Adds an element-wise multiplication operation to the current graph.
- [\*(\_:\_:)](operationparameter/_%28____%29-3h4np.md): Adds an element-wise multiplication operation to the current graph.
- [+(\_:\_:)](operationparameter/+%28____%29-2u9f3.md): Adds an element-wise addition operation to the current graph.
- [+(\_:\_:)](operationparameter/+%28____%29-8d4pt.md): Adds an element-wise addition operation to the current graph.
- [-(\_:\_:)](operationparameter/-%28____%29-8vtfy.md): Adds an element-wise subtraction operation to the current graph.
- [-(\_:\_:)](operationparameter/-%28____%29-9ywu4.md): Adds an element-wise subtraction operation to the current graph.
- [/(\_:\_:)](operationparameter/_%28____%29-1ojod.md): Adds an element-wise division operation to the current graph.
- [/(\_:\_:)](operationparameter/_%28____%29-78g8y.md): Adds an element-wise division operation to the current graph.
- [%(\_:\_:)](operationparameter/_%28____%29-8fwxf.md): Adds an element-wise remainder of division operation to the current graph.

### Associated Types

- [Element](operationparameter/element.md)

### Instance Methods

- [graphBuilderTensor(\_:)](operationparameter/graphbuildertensor%28__%29.md): Returns a tensor for the specified BNNS Graph builder.

## Relationships

### Conforming Types

- [BNNSGraph.Builder.Tensor](tensor.md)
