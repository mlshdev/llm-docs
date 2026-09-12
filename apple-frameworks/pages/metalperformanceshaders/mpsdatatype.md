> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsdatatype](https://developer.apple.com/documentation/metalperformanceshaders/mpsdatatype)

# MPSDataType (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value to specify a type of data.

## Declaration

```swift
enum MPSDataType
```

## Topics

### Constants

- [MPSDataType.floatBit](mpsdatatype/floatbit.md): A common bit for all floating point data types.
- [MPSDataType.float32](mpsdatatype/float32.md): A 32-bit floating point type (single precision).

### Enumeration Cases

- [MPSDataType.invalid](mpsdatatype/invalid.md)
- [MPSDataType.float16](mpsdatatype/float16.md)
- [MPSDataType.int16](mpsdatatype/int16.md)
- [MPSDataType.int8](mpsdatatype/int8.md)
- [MPSDataType.normalizedBit](mpsdatatype/normalizedbit.md)
- [MPSDataType.signedBit](mpsdatatype/signedbit.md)
- [MPSDataType.uInt16](mpsdatatype/uint16.md)
- [MPSDataType.uInt32](mpsdatatype/uint32.md)
- [MPSDataType.uInt8](mpsdatatype/uint8.md)
- [MPSDataType.unorm1](mpsdatatype/unorm1.md)
- [MPSDataType.unorm8](mpsdatatype/unorm8.md)
- [MPSDataType.alternateEncodingBit](mpsdatatype/alternateencodingbit.md)
- [MPSDataType.bFloat16](mpsdatatype/bfloat16.md)
- [MPSDataType.bool](mpsdatatype/bool.md)
- [MPSDataType.complexBit](mpsdatatype/complexbit.md)
- [MPSDataType.complexFloat16](mpsdatatype/complexfloat16.md)
- [MPSDataType.complexFloat32](mpsdatatype/complexfloat32.md)
- [MPSDataType.int32](mpsdatatype/int32.md)
- [MPSDataType.int4](mpsdatatype/int4.md)
- [MPSDataType.int64](mpsdatatype/int64.md)
- [MPSDataType.uInt4](mpsdatatype/uint4.md)
- [MPSDataType.uInt64](mpsdatatype/uint64.md)
- [MPSDataType.complexBFloat16](mpsdatatype/complexbfloat16.md)
- [MPSDataType.float4e2m1](mpsdatatype/float4e2m1.md)
- [MPSDataType.float8e4m3](mpsdatatype/float8e4m3.md)
- [MPSDataType.float8e5m2](mpsdatatype/float8e5m2.md)
- [MPSDataType.float8e8m0](mpsdatatype/float8e8m0.md)
- [MPSDataType.int2](mpsdatatype/int2.md)
- [MPSDataType.uInt2](mpsdatatype/uint2.md)

### Type Properties

- [intBit](mpsdatatype/intbit.md): Deprecated.

### Initializers

- [init(rawValue:)](mpsdatatype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Properties

- [rows](mpsmatrixdescriptor/rows.md): The number of rows in the matrix.
- [columns](mpsmatrixdescriptor/columns.md): The number of columns in the matrix.
- [dataType](mpsmatrixdescriptor/datatype.md): The type of the values in the matrix.
- [rowBytes](mpsmatrixdescriptor/rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [matrices](mpsmatrixdescriptor/matrices.md)
- [matrixBytes](mpsmatrixdescriptor/matrixbytes.md)

# MPSDataType (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value to specify a type of data.

## Declaration

```objectivec
enum MPSDataType : uint32_t;
```

## Topics

### Constants

- [MPSDataTypeFloatBit](mpsdatatype/floatbit.md): A common bit for all floating point data types.
- [MPSDataTypeFloat32](mpsdatatype/float32.md): A 32-bit floating point type (single precision).

### Enumeration Cases

- [MPSDataTypeInvalid](mpsdatatype/invalid.md)
- [MPSDataTypeFloat16](mpsdatatype/float16.md)
- [MPSDataTypeInt16](mpsdatatype/int16.md)
- [MPSDataTypeInt8](mpsdatatype/int8.md)
- [MPSDataTypeNormalizedBit](mpsdatatype/normalizedbit.md)
- [MPSDataTypeSignedBit](mpsdatatype/signedbit.md)
- [MPSDataTypeUInt16](mpsdatatype/uint16.md)
- [MPSDataTypeUInt32](mpsdatatype/uint32.md)
- [MPSDataTypeUInt8](mpsdatatype/uint8.md)
- [MPSDataTypeUnorm1](mpsdatatype/unorm1.md)
- [MPSDataTypeUnorm8](mpsdatatype/unorm8.md)
- [MPSDataTypeAlternateEncodingBit](mpsdatatype/alternateencodingbit.md)
- [MPSDataTypeBFloat16](mpsdatatype/bfloat16.md)
- [MPSDataTypeBool](mpsdatatype/bool.md)
- [MPSDataTypeComplexBit](mpsdatatype/complexbit.md)
- [MPSDataTypeComplexFloat16](mpsdatatype/complexfloat16.md)
- [MPSDataTypeComplexFloat32](mpsdatatype/complexfloat32.md)
- [MPSDataTypeInt32](mpsdatatype/int32.md)
- [MPSDataTypeInt4](mpsdatatype/int4.md)
- [MPSDataTypeInt64](mpsdatatype/int64.md)
- [MPSDataTypeUInt4](mpsdatatype/uint4.md)
- [MPSDataTypeUInt64](mpsdatatype/uint64.md)
- [MPSDataTypeComplexBFloat16](mpsdatatype/complexbfloat16.md)
- [MPSDataTypeFloat4e2m1](mpsdatatype/float4e2m1.md)
- [MPSDataTypeFloat8e4m3](mpsdatatype/float8e4m3.md)
- [MPSDataTypeFloat8e5m2](mpsdatatype/float8e5m2.md)
- [MPSDataTypeFloat8e8m0](mpsdatatype/float8e8m0.md)
- [MPSDataTypeInt2](mpsdatatype/int2.md)
- [MPSDataTypeUInt2](mpsdatatype/uint2.md)

### Type Properties

- [MPSDataTypeIntBit](mpsdatatype/intbit.md): Deprecated.

## See Also

### Properties

- [rows](mpsmatrixdescriptor/rows.md): The number of rows in the matrix.
- [columns](mpsmatrixdescriptor/columns.md): The number of columns in the matrix.
- [dataType](mpsmatrixdescriptor/datatype.md): The type of the values in the matrix.
- [rowBytes](mpsmatrixdescriptor/rowbytes.md): The stride, in bytes, between corresponding elements of consecutive rows in the matrix.
- [matrices](mpsmatrixdescriptor/matrices.md)
- [matrixBytes](mpsmatrixdescriptor/matrixbytes.md)
