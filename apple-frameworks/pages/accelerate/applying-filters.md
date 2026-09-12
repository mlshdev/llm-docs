> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/applying-filters](https://developer.apple.com/documentation/accelerate/applying-filters)

# Applying Filters (Swift)

**Framework:** Accelerate  
**Kind:** API Collection

## Topics

### Forward Propagation Functions

- [BNNSFilterApply(\_:\_:\_:)](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInput(\_:\_:\_:\_:)](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.
- [BNNSFilterApplyTwoInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.

### Backpropagation Functions

- [BNNSFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a filter backward to generate input delta, weights delta and bias delta.
- [BNNSFilterApplyBackwardTwoInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybackwardtwoinputbatch%28________________________________%29.md): Deprecated. Applies a filter backward to generate input deltas, weights delta and bias delta.

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [BNNS.Layer](bnns/layer.md): Deprecated. The base class for layer objects that wrap filters and manage deinitialization.
- [BNNS.UnaryLayer](bnns/unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](bnns/binarylayer.md): Deprecated. The base class for layers that accept two inputs.
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy(\_:)](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.

# Applying Filters (Objective-C)

**Framework:** Accelerate  
**Kind:** API Collection

## Topics

### Forward Propagation Functions

- [BNNSFilterApply](bnnsfilterapply%28______%29.md): Deprecated. Applies a filter to an input, writing the result to a specified output.
- [BNNSFilterApplyBatch](bnnsfilterapplybatch%28____________%29.md): Deprecated. Applies a filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFilterApplyTwoInput](bnnsfilterapplytwoinput%28________%29.md): Deprecated. Applies a filter to a pair of inputs, writing the result to a specified output.
- [BNNSFilterApplyTwoInputBatch](bnnsfilterapplytwoinputbatch%28________________%29.md): Deprecated. Applies a filter to a set of input object pairs, writing the result to a set of output objects.

### Backpropagation Functions

- [BNNSFilterApplyBackwardBatch](bnnsfilterapplybackwardbatch%28________________________%29.md): Deprecated. Applies a filter backward to generate input delta, weights delta and bias delta.
- [BNNSFilterApplyBackwardTwoInputBatch](bnnsfilterapplybackwardtwoinputbatch%28________________________________%29.md): Deprecated. Applies a filter backward to generate input deltas, weights delta and bias delta.

## See Also

### General filters

- [BNNSFilter](bnnsfilter.md): Deprecated. An opaque type that represents a filter.
- [BNNSFilterParameters](bnnsfilterparameters.md): A structure that contains common filter parameters.
- [BNNSFilterDestroy](bnnsfilterdestroy%28__%29.md): Deprecated. Destroys the specified filter, releasing all resources allocated for it.
- [BNNSAlloc](bnnsalloc.md): A type-alias for a user-provided memory allocation function.
- [BNNSFree](bnnsfree.md): A type-alias for a user-provided memory deallocation function.
