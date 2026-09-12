> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerdata](https://developer.apple.com/documentation/accelerate/bnnslayerdata)

# BNNSLayerData (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

A structure containing common layer parameters.

> Use [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md) instead.

## Declaration

```swift
struct BNNSLayerData
```

## Topics

### Initializers

- [init()](bnnslayerdata/init%28%29.md): Deprecated.
- [init(data:data_type:data_scale:data_bias:data_table:)](bnnslayerdata/init%28data_data_type_data_scale_data_bias_data_table_%29.md): Deprecated. Returns a new layer data structure.
- [init(data:data_type:data_scale:data_bias:)](bnnslayerdata/init%28data_data_type_data_scale_data_bias_%29.md): Deprecated.

### Instance Properties

- [data](bnnslayerdata/data.md): Deprecated. Pointer to layer values (weights, bias), layout and size are specific to each layer.
- [data_bias](bnnslayerdata/data_bias.md): Deprecated. Conversion bias for values, used for integer data types only, ignored for indexed and float data types.
- [data_scale](bnnslayerdata/data_scale.md): Deprecated. Conversion scale for values, used for integer data types only, ignored for indexed and float data types.
- [data_table](bnnslayerdata/data_table.md): Deprecated. Conversion table (256 values) for indexed floating point data, used for indexed data types only.
- [data_type](bnnslayerdata/data_type.md): Deprecated. Storage data type for the values stored in data.

### Type Properties

- [zero](bnnslayerdata/zero.md): Deprecated.

### Type Methods

- [indexed8(data:data_table:)](bnnslayerdata/indexed8%28data_data_table_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### N-dimensional array descriptor essentials

- [BNNS.Shape](bnns/shape.md): Constants that describe the size and data layout of an n-dimensional array descriptor.
- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSDataLayoutGetRank(\_:)](bnnsdatalayoutgetrank%28__%29.md)

# BNNSLayerData (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure containing common layer parameters.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerData;
```

## Topics

### Instance Properties

- [data](bnnslayerdata/data.md): Deprecated. Pointer to layer values (weights, bias), layout and size are specific to each layer.
- [data_bias](bnnslayerdata/data_bias.md): Deprecated. Conversion bias for values, used for integer data types only, ignored for indexed and float data types.
- [data_scale](bnnslayerdata/data_scale.md): Deprecated. Conversion scale for values, used for integer data types only, ignored for indexed and float data types.
- [data_table](bnnslayerdata/data_table.md): Deprecated. Conversion table (256 values) for indexed floating point data, used for indexed data types only.
- [data_type](bnnslayerdata/data_type.md): Deprecated. Storage data type for the values stored in data.

## See Also

### N-dimensional array descriptor essentials

- [BNNSDataLayout](bnnsdatalayout.md): Constants that describe the data type of an n-dimensional array.
- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSNDArrayDescriptor](bnnsndarraydescriptor.md): A structure that describes the shape, stride, data type, and, optionally, the memory location of an n-dimensional array.
- [BNNSDataLayoutGetRank](bnnsdatalayoutgetrank%28__%29.md)
