> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlctensor/init(width:height:featurechannelcount:batchsize:)](https://developer.apple.com/documentation/mlcompute/mlctensor/init(width:height:featurechannelcount:batchsize:))

# init(width:height:featureChannelCount:batchSize:) (Swift)

**Framework:** ML Compute  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor without data, with the sizes and number of feature channels you specify.

## Declaration

```swift
convenience init(width: Int, height: Int, featureChannelCount: Int, batchSize: Int)
```

## Parameters

- `width`: The tensor width.
- `height`: The tensor height.
- `featureChannelCount`: The number of feature channels.
- `batchSize`: The tensor batch size.

<a id="Discussion"></a>

## Discussion

The tensor data type is [MLCDataType.float32](../mlcdatatype/float32.md).

## See Also

### Creating Tensors by Specifying Shape

- [init(shape:)](init%28shape_%29.md): Deprecated. Creates a tensor without data, with the shape you specify.
- [init(shape:dataType:)](init%28shape_datatype_%29.md): Deprecated. Creates a tensor without data, with the shape and data type you specify.
- [init(shape:data:dataType:)](init%28shape_data_datatype_%29.md): Deprecated. Creates a tensor with the shape, data, and data type you specify.
- [init(shape:fillWithData:dataType:)](init%28shape_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the shape, scalar value, and data type you specify.
- [init(shape:randomInitializerType:)](init%28shape_randominitializertype_%29.md): Deprecated. Creates a tensor with the shape and random initializer type you specify.
- [init(width:height:featureChannelCount:batchSize:data:)](init%28width_height_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and data you specify.
- [init(width:height:featureChannelCount:batchSize:data:dataType:)](init%28width_height_featurechannelcount_batchsize_data_datatype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, data, and data type you specify.
- [init(width:height:featureChannelCount:batchSize:fillWithData:dataType:)](init%28width_height_featurechannelcount_batchsize_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the sizes and number of feature channels, and filled with the data and type you specify.
- [init(width:height:featureChannelCount:batchSize:randomInitializerType:)](init%28width_height_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and random data using the random initializer type you specify.

# tensorWithWidth:height:featureChannelCount:batchSize: (Objective-C)

**Framework:** ML Compute  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

Creates a tensor without data, with the sizes and number of feature channels you specify.

## Declaration

```objectivec
+ (instancetype) tensorWithWidth:(NSUInteger) width height:(NSUInteger) height featureChannelCount:(NSUInteger) featureChannelCount batchSize:(NSUInteger) batchSize;
```

## Parameters

- `width`: The tensor width.
- `height`: The tensor height.
- `featureChannelCount`: The number of feature channels.
- `batchSize`: The tensor batch size.

<a id="Discussion"></a>

## Discussion

The tensor data type is [MLCDataTypeFloat32](../mlcdatatype/float32.md).

## See Also

### Creating Tensors by Specifying Shape

- [tensorWithShape:](tensorwithshape_.md): Deprecated. Creates a tensor without data, with the shape you specify.
- [tensorWithShape:dataType:](tensorwithshape_datatype_.md): Deprecated. Creates a tensor without data, with the shape and data type you specify.
- [tensorWithShape:data:dataType:](tensorwithshape_data_datatype_.md): Deprecated. Creates a tensor with the shape, data, and data type you specify.
- [tensorWithShape:fillWithData:dataType:](tensorwithshape_fillwithdata_datatype_.md): Deprecated. Creates a tensor with the shape, scalar value, and data type you specify.
- [tensorWithShape:randomInitializerType:](tensorwithshape_randominitializertype_.md): Deprecated. Creates a tensor with the shape and random initializer type you specify.
- [tensorWithShape:randomInitializerType:dataType:](tensorwithshape_randominitializertype_datatype_.md): Deprecated. Creates a tensor with the shape, random initializer, and data type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:data:](init%28width_height_featurechannelcount_batchsize_data_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and data you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:data:dataType:](init%28width_height_featurechannelcount_batchsize_data_datatype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, data, and data type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:fillWithData:dataType:](init%28width_height_featurechannelcount_batchsize_fillwithdata_datatype_%29.md): Deprecated. Creates a tensor with the sizes and number of feature channels, and filled with the data and type you specify.
- [tensorWithWidth:height:featureChannelCount:batchSize:randomInitializerType:](init%28width_height_featurechannelcount_batchsize_randominitializertype_%29.md): Deprecated. Creates a tensor with the sizes, number of feature channels, and random data using the random initializer type you specify.
