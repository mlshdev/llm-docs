> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/tensorwithshape:randominitializertype:datatype:](https://developer.apple.com/documentation/mlcompute/mlctensor/tensorwithshape:randominitializertype:datatype:)

# tensorWithShape:randomInitializerType:dataType:

**Interface language:** Objective-C

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a tensor with the shape, random initializer, and data type you specify.

## Declaration

```objectivec
+ (instancetype) tensorWithShape:(NSArray<NSNumber *> *) shape randomInitializerType:(MLCRandomInitializerType) randomInitializerType dataType:(MLCDataType) dataType;
```

## Parameters

- `shape`: An array that contains the sizes of each dimension.
- `randomInitializerType`: The random initializer type you use to generate random data.
- `dataType`: The tensor data type.

<a id="return-value"></a>

## Return Value

A new [MLCTensor](../mlctensor.md) instance.

## See Also

### Creating Tensors by Specifying Shape

- [tensorWithShape:](tensorwithshape_.md): Deprecated. Creates a tensor without data, with the shape you specify.
- [tensorWithShape:dataType:](tensorwithshape_datatype_.md): Deprecated. Creates a tensor without data, with the shape and data type you specify.
- [tensorWithShape:data:dataType:](tensorwithshape_data_datatype_.md): Deprecated. Creates a tensor with the shape, data, and data type you specify.
- [tensorWithShape:fillWithData:dataType:](tensorwithshape_fillwithdata_datatype_.md): Deprecated. Creates a tensor with the shape, scalar value, and data type you specify.
- [tensorWithShape:randomInitializerType:](tensorwithshape_randominitializertype_.md): Deprecated. Creates a tensor with the shape and random initializer type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sizes and number of feature channels you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:data:](init%28width_height_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and data you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:data:dataType:](init%28width_height_featurechannelcount_batchsize_data_datatype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, data, and data type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:fillWithData:dataType:](init%28width_height_featurechannelcount_batchsize_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the sizes and number of feature channels, and filled with the data and type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:randomInitializerType:](init%28width_height_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and random data using the random initializer type you specify.
