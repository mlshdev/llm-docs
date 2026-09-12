> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/selectwithsources:condition:](https://developer.apple.com/documentation/mlcompute/mlcgraph/selectwithsources:condition:)

# selectWithSources:condition:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

Adds a select layer to the graph using the condition mask and source tensors you specify.

## Declaration

```objectivec
- (MLCTensor *) selectWithSources:(NSArray<MLCTensor *> *) sources condition:(MLCTensor *) condition;
```

## Parameters

- `sources`: An array that contains the source tensors.
- `condition`: The condition mask.

<a id="return-value"></a>

## Return Value

A result tensor.

## See Also

### Adding New Layers to Graphs

- [splitWithSource:splitCount:dimension:](split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [splitWithSource:splitSectionLengths:dimension:](splitwithsource_splitsectionlengths_dimension_.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [concatenateWithSources:dimension:](concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshapeWithShape:source:](reshapewithshape_source_.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [gatherWithDimension:source:indices:](gather%28withdimension_source_indices_%29.md): Deprecated. Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.
- [scatterWithDimension:source:indices:copyFrom:reductionType:](scatter%28withdimension_source_indices_copyfrom_reductiontype_%29.md): Deprecated. Adds a scatter layer to the graph.
- [transposeWithDimensions:source:](transposewithdimensions_source_.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.
