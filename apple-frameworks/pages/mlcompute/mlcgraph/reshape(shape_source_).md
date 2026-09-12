> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/reshape(shape:source:)](https://developer.apple.com/documentation/mlcompute/mlcgraph/reshape(shape:source:))

# reshape(shape:source:)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Adds a new reshape layer to the graph using the shape and source tensor you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
func reshape(shape: [Int], source: MLCTensor) -> MLCTensor?
```

## Parameters

- `shape`: An array representing the shape of result tensor.
- `source`: The source tensor.

<a id="return-value"></a>

## Return Value

A result tensor.

## See Also

### Adding New Layers to Graphs

- [split(source:splitCount:dimension:)](split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [split(source:splitSectionLengths:dimension:)](split%28source_splitsectionlengths_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [concatenate(sources:dimension:)](concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [gather(withDimension:source:indices:)](gather%28withdimension_source_indices_%29.md): Deprecated. Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.
- [scatter(withDimension:source:indices:copyFrom:reductionType:)](scatter%28withdimension_source_indices_copyfrom_reductiontype_%29.md): Deprecated. Adds a scatter layer to the graph.
- [transpose(dimensions:source:)](transpose%28dimensions_source_%29.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.
