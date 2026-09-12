> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerdata/data_table](https://developer.apple.com/documentation/accelerate/bnnslayerdata/data_table)

# data_table (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Conversion table (256 values) for indexed floating point data, used for indexed data types only.

> BNNS switched to new Layer Parameters data structures

## Declaration

```swift
var data_table: UnsafePointer<Float>?
```

## See Also

### Instance Properties

- [data](data.md): Deprecated. Pointer to layer values (weights, bias), layout and size are specific to each layer.
- [data_bias](data_bias.md): Deprecated. Conversion bias for values, used for integer data types only, ignored for indexed and float data types.
- [data_scale](data_scale.md): Deprecated. Conversion scale for values, used for integer data types only, ignored for indexed and float data types.
- [data_type](data_type.md): Deprecated. Storage data type for the values stored in data.

# data_table (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Conversion table (256 values) for indexed floating point data, used for indexed data types only.

## Declaration

```objectivec
const float * data_table;
```

## See Also

### Instance Properties

- [data](data.md): Deprecated. Pointer to layer values (weights, bias), layout and size are specific to each layer.
- [data_bias](data_bias.md): Deprecated. Conversion bias for values, used for integer data types only, ignored for indexed and float data types.
- [data_scale](data_scale.md): Deprecated. Conversion scale for values, used for integer data types only, ignored for indexed and float data types.
- [data_type](data_type.md): Deprecated. Storage data type for the values stored in data.
