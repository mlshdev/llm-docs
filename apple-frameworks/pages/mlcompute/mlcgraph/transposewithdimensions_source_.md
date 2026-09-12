> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph/transposewithdimensions:source:](https://developer.apple.com/documentation/mlcompute/mlcgraph/transposewithdimensions:source:)

# transposeWithDimensions:source:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Adds a new transpose layer to the graph using the dimensions and source tensor you specify.

## Declaration

```objectivec
- (MLCTensor *) transposeWithDimensions:(NSArray<NSNumber *> *) dimensions source:(MLCTensor *) source;
```

## Parameters

- `dimensions`: An array representing the desired ordering of dimensions.
- `source`: The source tensor.

<a id="return-value"></a>

## Return Value

A result tensor.

<a id="Discussion"></a>

## Discussion

The dimensions array specifies the input axis source for each output axis. In other words, the `n`th element in the dimensions array specifies the input axis source for the `n`th axis in the output.

> **Note**

>  The batch dimension is typically axis 0, which you can’t transpose.

## See Also

### Adding New Layers to Graphs

- [splitWithSource:splitCount:dimension:](split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [splitWithSource:splitSectionLengths:dimension:](splitwithsource_splitsectionlengths_dimension_.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [selectWithSources:condition:](selectwithsources_condition_.md): Deprecated. Adds a select layer to the graph using the condition mask and source tensors you specify.
- [concatenateWithSources:dimension:](concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshapeWithShape:source:](reshapewithshape_source_.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [gatherWithDimension:source:indices:](gather%28withdimension_source_indices_%29.md): Deprecated. Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.
- [scatterWithDimension:source:indices:copyFrom:reductionType:](scatter%28withdimension_source_indices_copyfrom_reductiontype_%29.md): Deprecated. Adds a scatter layer to the graph.
