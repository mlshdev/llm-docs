> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/init(shape:randominitializertype:)](https://developer.apple.com/documentation/mlcompute/mlctensor/init(shape:randominitializertype:))

# init(shape:randomInitializerType:)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0)

Creates a tensor with the shape and random initializer type you specify.

> Use Metal Performance Shaders Graph or BNNS instead.

## Declaration

```swift
convenience init(shape: [Int], randomInitializerType: MLCRandomInitializerType)
```

## Parameters

- `shape`: An array that contains the sizes of each dimension.
- `randomInitializerType`: The random initializer type you use to generate random data.

## See Also

### Creating Tensors by Specifying Shape

- [init(shape:)](init%28shape_%29.md): Deprecated. Creates a tensor without data, with the shape you specify.
- [init(shape:dataType:)](init%28shape_datatype_%29.md): Deprecated. Creates a tensor without data, with the shape and data type you specify.
- [init(shape:data:dataType:)](init%28shape_data_datatype_%29.md): Deprecated. Creates a tensor with the shape, data, and data type you specify.
- [init(shape:fillWithData:dataType:)](init%28shape_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the shape, scalar value, and data type you specify.
- [init(width:height:featureChannelCount:batchSize:)](init%28width_height_featurechannelcount_batchsize_%29.md): Deprecated. Creates a tensor without data, with the sizes and number of feature channels you specify.
- [init(width:height:featureChannelCount:batchSize:data:)](init%28width_height_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and data you specify.
- [init(width:height:featureChannelCount:batchSize:data:dataType:)](init%28width_height_featurechannelcount_batchsize_data_datatype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, data, and data type you specify.
- [init(width:height:featureChannelCount:batchSize:fillWithData:dataType:)](init%28width_height_featurechannelcount_batchsize_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the sizes and number of feature channels, and filled with the data and type you specify.
- [init(width:height:featureChannelCount:batchSize:randomInitializerType:)](init%28width_height_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and random data using the random initializer type you specify.
