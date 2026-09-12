> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder)

# BNNSGraph.Builder

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A structure thats provides a closure you can use to define the arguments and operations of a BNNS Graph.

## Declaration

```swift
struct Builder
```

## Topics

### Protocols

- [BNNSGraph.Builder.OperationParameter](builder/operationparameter.md): A protocol that allows functions to accept either tensors or collections.
- [BNNSGraph.Builder.SliceIndex](builder/sliceindex.md): A protocol that the BNNS graph builder uses to specify slice indices.

### Structures

- [BNNSGraph.Builder.SliceRange](builder/slicerange.md): A structure that represents a range.
- [BNNSGraph.Builder.Tensor](builder/tensor.md): A structure that represents an abstract handle to a tensor that you use within a `BNNSGraph.makeContext` closure.

### Instance Methods

- [argument(name:dataType:shape:intent:)](builder/argument%28name_datatype_shape_intent_%29.md): Registers and returns an input or in-out tensor argument to the graph.
- [concatenate(\_:axis:)](builder/concatenate%28__axis_%29.md): Adds a concatenation operation to the current graph.
- [constant(name:value:)](builder/constant%28name_value_%29.md): Registers and returns a tensor that contains a constant scalar value.
- [constant(name:values:shape:)](builder/constant%28name_values_shape_%29.md): Registers and returns a tensor with the specified shape that contains constant data, such as weight or bias values.
- [constant(values:rowMajor:)](builder/constant%28values_rowmajor_%29-6b7b8.md): Returns a rank 2 tensor from an array of arrays.
- [constant(values:rowMajor:)](builder/constant%28values_rowmajor_%29-7b4v2.md)

### Type Aliases

- [BNNSGraph.Builder.PoolingPadding](builder/poolingpadding.md): The padding that you use for pooling operations to specify zero-padding.

### Enumerations

- [BNNSGraph.Builder.Activation](builder/activation.md): The activation function that a recurrent operation uses.
- [BNNSGraph.Builder.CeilingMode](builder/ceilingmode.md): The pooling ceiling mode.
- [BNNSGraph.Builder.ConvolutionPadding](builder/convolutionpadding.md): The padding that you use for convolution operations to specify zero-padding.
- [BNNSGraph.Builder.Direction](builder/direction.md): The direction of a recurrent operation.
- [BNNSGraph.Builder.Intent](builder/intent.md): Constants that describe argument intents.
- [BNNSGraph.Builder.Padding](builder/padding.md): The padding that you use for pad operations.
- [BNNSGraph.Builder.PoolingFunction](builder/poolingfunction.md): The pooling function
- [BNNSGraph.Builder.ScatterMode](builder/scattermode.md): Constants that specify how scatter operations overwrite destination elements.
- [BNNSGraph.Builder.SortOrder](builder/sortorder.md): The sort order for functions such as `argsort`.

## See Also

### Building graphs in Swift

- [makeContext(options:\_:)](makecontext%28options___%29.md): Returns a new context that wraps a graph object that the given closure defines.
- [BNNSGraph.Builder.Tensor](builder/tensor.md): A structure that represents an abstract handle to a tensor that you use within a `BNNSGraph.makeContext` closure.
- [Supporting real-time ML inference on the CPU](../supporting-real-time-ml-inference-on-the-cpu.md): Add real-time digital signal processing to apps like Logic Pro X and GarageBand with the BNNS Graph API.
