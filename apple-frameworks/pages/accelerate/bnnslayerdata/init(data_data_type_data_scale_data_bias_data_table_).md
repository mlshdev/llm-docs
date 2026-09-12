> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerdata/init(data:data_type:data_scale:data_bias:data_table:)](https://developer.apple.com/documentation/accelerate/bnnslayerdata/init(data:data_type:data_scale:data_bias:data_table:))

# init(data:data_type:data_scale:data_bias:data_table:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a new layer data structure.

> BNNS switched to new Layer Parameters data structures

## Declaration

```swift
init(data: UnsafeRawPointer?, data_type: BNNSDataType, data_scale: Float, data_bias: Float, data_table: UnsafePointer<Float>?)
```

## Parameters

- `data`: Pointer to layer values (weights, bias), layout and size are specific to each layer.
- `data_type`: Storage data type for the values stored in [data](data.md).
- `data_scale`: Conversion scale for values, used for integer data types only, ignored for indexed and float data types.
- `data_bias`: Conversion bias for values, used for integer data types only, ignored for indexed and float data types.
- `data_table`: Conversion table (256 values) for indexed floating point data, used for indexed data types only.

<a id="return-value"></a>

## Return Value

A new layer data structure.

## See Also

### Initializers

- [init()](init%28%29.md): Deprecated.
- [init(data:data_type:data_scale:data_bias:)](init%28data_data_type_data_scale_data_bias_%29.md): Deprecated.
