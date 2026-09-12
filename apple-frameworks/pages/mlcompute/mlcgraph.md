> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgraph](https://developer.apple.com/documentation/mlcompute/mlcgraph)

# MLCGraph (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A graph of layers you use to build a training or inference graph.

## Declaration

```swift
class MLCGraph
```

## Topics

### Adding Layers to Graphs

- [node(with:source:)](mlcgraph/node%28with_source_%29.md): Deprecated. Adds the layer and source tensor that you specify to the graph.
- [node(with:sources:)](mlcgraph/node%28with_sources_%29.md): Deprecated. Adds the layer and source tensors that you specify to the graph.
- [node(with:sources:disableUpdate:)](mlcgraph/node%28with_sources_disableupdate_%29.md): Deprecated. Adds the layer, source tensors, and option to disable optimizer updates that you specify to the graph.
- [node(with:sources:lossLabels:)](mlcgraph/node%28with_sources_losslabels_%29.md): Deprecated. Adds the layer, sources, and loss labels tensors that you specify to the graph.

### Adding New Layers to Graphs

- [split(source:splitCount:dimension:)](mlcgraph/split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [split(source:splitSectionLengths:dimension:)](mlcgraph/split%28source_splitsectionlengths_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [concatenate(sources:dimension:)](mlcgraph/concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshape(shape:source:)](mlcgraph/reshape%28shape_source_%29.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [gather(withDimension:source:indices:)](mlcgraph/gather%28withdimension_source_indices_%29.md): Deprecated. Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.
- [scatter(withDimension:source:indices:copyFrom:reductionType:)](mlcgraph/scatter%28withdimension_source_indices_copyfrom_reductiontype_%29.md): Deprecated. Adds a scatter layer to the graph.
- [transpose(dimensions:source:)](mlcgraph/transpose%28dimensions_source_%29.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.

### Associating Data with Input Tensors

- [bindAndWriteData(\_:forInputs:to:batchSize:synchronous:)](mlcgraph/bindandwritedata%28__forinputs_to_batchsize_synchronous_%29.md): Deprecated. Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.
- [bindAndWriteData(\_:forInputs:to:synchronous:)](mlcgraph/bindandwritedata%28__forinputs_to_synchronous_%29.md): Deprecated. Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.

### Inspecting Graphs

- [sourceTensors(for:)](mlcgraph/sourcetensors%28for_%29.md): Deprecated. Gets the source tensors for a layer in the training graph.
- [resultTensors(for:)](mlcgraph/resulttensors%28for_%29.md): Deprecated. Gets the result tensors for a layer in the training graph.
- [device](mlcgraph/device.md): Deprecated. The device you’ll use for compiling and executing a graph.
- [layers](mlcgraph/layers.md): Deprecated. An array that contains the layers in the graph.
- [summarizedDOTDescription](mlcgraph/summarizeddotdescription.md): Deprecated. A DOT representation of the graph.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLCInferenceGraph](mlcinferencegraph.md)
- [MLCTrainingGraph](mlctraininggraph.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Graphs

- [MLCTrainingGraph](mlctraininggraph.md): Deprecated. A training graph that you create from one or more graph objects plus additional layers you add directly to the training graph.
- [MLCInferenceGraph](mlcinferencegraph.md): Deprecated. An inference graph created from one or more MLCGraph instances plus additional layers added directly to the inference graph.

# MLCGraph (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A graph of layers you use to build a training or inference graph.

## Declaration

```objectivec
@interface MLCGraph : NSObject
```

## Topics

### Creating Graphs

- [graph](mlcgraph/graph.md): Deprecated. Creates a new graph.

### Adding Layers to Graphs

- [nodeWithLayer:source:](mlcgraph/node%28with_source_%29.md): Deprecated. Adds the layer and source tensor that you specify to the graph.
- [nodeWithLayer:sources:](mlcgraph/node%28with_sources_%29.md): Deprecated. Adds the layer and source tensors that you specify to the graph.
- [nodeWithLayer:sources:disableUpdate:](mlcgraph/node%28with_sources_disableupdate_%29.md): Deprecated. Adds the layer, source tensors, and option to disable optimizer updates that you specify to the graph.
- [nodeWithLayer:sources:lossLabels:](mlcgraph/node%28with_sources_losslabels_%29.md): Deprecated. Adds the layer, sources, and loss labels tensors that you specify to the graph.

### Adding New Layers to Graphs

- [splitWithSource:splitCount:dimension:](mlcgraph/split%28source_splitcount_dimension_%29.md): Deprecated. Adds a new split layer to the graph using the source tensor, number of splits, and dimension to split the source tensor that you specify.
- [splitWithSource:splitSectionLengths:dimension:](mlcgraph/splitwithsource_splitsectionlengths_dimension_.md): Deprecated. Adds a new split layer to the graph using the source tensor, lengths of each split section, and dimension to split the source tensor that you specify.
- [selectWithSources:condition:](mlcgraph/selectwithsources_condition_.md): Deprecated. Adds a select layer to the graph using the condition mask and source tensors you specify.
- [concatenateWithSources:dimension:](mlcgraph/concatenate%28sources_dimension_%29.md): Deprecated. Adds a new concatenation layer to the graph using the source tensors and concatenation dimension you specify.
- [reshapeWithShape:source:](mlcgraph/reshapewithshape_source_.md): Deprecated. Adds a new reshape layer to the graph using the shape and source tensor you specify.
- [gatherWithDimension:source:indices:](mlcgraph/gather%28withdimension_source_indices_%29.md): Deprecated. Adds a gather layer to the graph using the source tensor, dimension along which to index, and the indices you specify.
- [scatterWithDimension:source:indices:copyFrom:reductionType:](mlcgraph/scatter%28withdimension_source_indices_copyfrom_reductiontype_%29.md): Deprecated. Adds a scatter layer to the graph.
- [transposeWithDimensions:source:](mlcgraph/transposewithdimensions_source_.md): Deprecated. Adds a new transpose layer to the graph using the dimensions and source tensor you specify.

### Associating Data with Input Tensors

- [bindAndWriteData:forInputs:toDevice:batchSize:synchronous:](mlcgraph/bindandwritedata%28__forinputs_to_batchsize_synchronous_%29.md): Deprecated. Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.
- [bindAndWriteData:forInputs:toDevice:synchronous:](mlcgraph/bindandwritedata%28__forinputs_to_synchronous_%29.md): Deprecated. Associates the given data with the input tensors, and if the device is a GPU, also copies the data to the device memory.

### Inspecting Graphs

- [sourceTensorsForLayer:](mlcgraph/sourcetensors%28for_%29.md): Deprecated. Gets the source tensors for a layer in the training graph.
- [resultTensorsForLayer:](mlcgraph/resulttensors%28for_%29.md): Deprecated. Gets the result tensors for a layer in the training graph.
- [device](mlcgraph/device.md): Deprecated. The device you’ll use for compiling and executing a graph.
- [layers](mlcgraph/layers.md): Deprecated. An array that contains the layers in the graph.
- [summarizedDOTDescription](mlcgraph/summarizeddotdescription.md): Deprecated. A DOT representation of the graph.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLCInferenceGraph](mlcinferencegraph.md)
- [MLCTrainingGraph](mlctraininggraph.md)

## See Also

### Graphs

- [MLCTrainingGraph](mlctraininggraph.md): Deprecated. A training graph that you create from one or more graph objects plus additional layers you add directly to the training graph.
- [MLCInferenceGraph](mlcinferencegraph.md): Deprecated. An inference graph created from one or more MLCGraph instances plus additional layers added directly to the inference graph.
