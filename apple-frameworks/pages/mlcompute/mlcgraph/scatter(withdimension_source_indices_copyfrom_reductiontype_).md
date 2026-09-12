> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/scatter(withdimension:source:indices:copyfrom:reductiontype:)](https://developer.apple.com/documentation/mlcompute/mlcgraph/scatter(withdimension:source:indices:copyfrom:reductiontype:))

# scatter(withDimension:source:indices:copyFrom:reductionType:) (Swift)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Adds a scatter layer to the graph.

## Declaration

```swift
func scatter(withDimension dimension: Int, source: MLCTensor, indices: MLCTensor, copyFrom: MLCTensor, reductionType: MLCReductionType) -> MLCTensor?
```

## Parameters

- `dimension`: The dimension along which to index.
- `source`: The source tensor.
- `indices`: The index of elements to scatter.
- `copyFrom`: The source tensor whose data is first copied to the result tensor.
- `reductionType`: The reduction type applied for all values in the source tensor that the system scatters to a specific location in the result tensor.

<a id="return-value"></a>

## Return Value

A scatter tensor.

<a id="Discussion"></a>

## Discussion

The reductionType property must be [MLCReductionType.none](../mlcreductiontype/none.md) or [MLCReductionType.sum](../mlcreductiontype/sum.md).

## See Also

### Adding New Layers to Graphs

- [split(source:splitCount:dimension:)](split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [split(source:splitSectionLengths:dimension:)](split%28source_splitsectionlengths_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [concatenate(sources:dimension:)](concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshape(shape:source:)](reshape%28shape_source_%29.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [gather(withDimension:source:indices:)](gather%28withdimension_source_indices_%29.md): Deprecated. Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.
- [transpose(dimensions:source:)](transpose%28dimensions_source_%29.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.

# scatterWithDimension:source:indices:copyFrom:reductionType: (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Adds a scatter layer to the graph.

## Declaration

```objectivec
- (MLCTensor *) scatterWithDimension:(NSUInteger) dimension source:(MLCTensor *) source indices:(MLCTensor *) indices copyFrom:(MLCTensor *) copyFrom reductionType:(MLCReductionType) reductionType;
```

## Parameters

- `dimension`: The dimension along which to index.
- `source`: The source tensor.
- `indices`: The index of elements to scatter.
- `copyFrom`: The source tensor whose data is first copied to the result tensor.
- `reductionType`: The reduction type applied for all values in the source tensor that the system scatters to a specific location in the result tensor.

<a id="return-value"></a>

## Return Value

A scatter tensor.

<a id="Discussion"></a>

## Discussion

The reductionType property must be [MLCReductionTypeNone](../mlcreductiontype/none.md) or [MLCReductionTypeSum](../mlcreductiontype/sum.md).

## See Also

### Adding New Layers to Graphs

- [splitWithSource:splitCount:dimension:](split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [splitWithSource:splitSectionLengths:dimension:](splitwithsource_splitsectionlengths_dimension_.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [selectWithSources:condition:](selectwithsources_condition_.md): Deprecated. Adds a select layer to the graph using the condition mask and source tensors you specify.
- [concatenateWithSources:dimension:](concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshapeWithShape:source:](reshapewithshape_source_.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [gatherWithDimension:source:indices:](gather%28withdimension_source_indices_%29.md): Deprecated. Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.
- [transposeWithDimensions:source:](transposewithdimensions_source_.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.
