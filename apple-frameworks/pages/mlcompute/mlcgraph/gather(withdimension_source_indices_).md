> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/gather(withdimension:source:indices:)](https://developer.apple.com/documentation/mlcompute/mlcgraph/gather(withdimension:source:indices:))

# gather(withDimension:source:indices:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.

## Declaration

```swift
func gather(withDimension dimension: Int, source: MLCTensor, indices: MLCTensor) -> MLCTensor?
```

## Parameters

- `dimension`: The dimension along which to index.
- `source`: The source tensor.
- `indices`: The index of elements to gather.

<a id="return-value"></a>

## Return Value

A gather tensor.

## See Also

### Adding New Layers to Graphs

- [split(source:splitCount:dimension:)](split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [split(source:splitSectionLengths:dimension:)](split%28source_splitsectionlengths_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [concatenate(sources:dimension:)](concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshape(shape:source:)](reshape%28shape_source_%29.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [scatter(withDimension:source:indices:copyFrom:reductionType:)](scatter%28withdimension_source_indices_copyfrom_reductiontype_%29.md): Deprecated. Adds a scatter layer to the graph.
- [transpose(dimensions:source:)](transpose%28dimensions_source_%29.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.

# gatherWithDimension:source:indices: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.

## Declaration

```objectivec
- (MLCTensor *) gatherWithDimension:(NSUInteger) dimension source:(MLCTensor *) source indices:(MLCTensor *) indices;
```

## Parameters

- `dimension`: The dimension along which to index.
- `source`: The source tensor.
- `indices`: The index of elements to gather.

<a id="return-value"></a>

## Return Value

A gather tensor.

## See Also

### Adding New Layers to Graphs

- [splitWithSource:splitCount:dimension:](split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [splitWithSource:splitSectionLengths:dimension:](splitwithsource_splitsectionlengths_dimension_.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [selectWithSources:condition:](selectwithsources_condition_.md): Deprecated. Adds a select layer to the graph using the condition mask and source tensors you specify.
- [concatenateWithSources:dimension:](concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshapeWithShape:source:](reshapewithshape_source_.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [scatterWithDimension:source:indices:copyFrom:reductionType:](scatter%28withdimension_source_indices_copyfrom_reductiontype_%29.md): Deprecated. Adds a scatter layer to the graph.
- [transposeWithDimensions:source:](transposewithdimensions_source_.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.
