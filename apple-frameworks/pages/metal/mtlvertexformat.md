> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexformat](https://developer.apple.com/documentation/metal/mtlvertexformat)

# MTLVertexFormat (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The vertex data format options for render pipelines.

## Declaration

```swift
enum MTLVertexFormat
```

<a id="overview"></a>

## Overview

Set the [format](mtlvertexattributedescriptor/format.md) property of [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md) to one of these format values. The format configures how Metal interprets the vertex data in memory for the corresponding argument in your vertex shader. Choose a format that matches the type and component count the shader expects.

<a id="Normalized-integer-formats"></a>

### Normalized integer formats

Normalized signed integer formats have `Normalized` in the name and signed types like [MTLVertexFormat.char](mtlvertexformat/char.md) or [MTLVertexFormat.short](mtlvertexformat/short.md). For these formats, values in the range `[-1.0, 1.0]` map to `[MIN_INT, MAX_INT]`, where `MIN_INT` is the most negative integer and `MAX_INT` is the most positive integer for the number of bits in the storage size. Positive values and zero distribute uniformly in the range `[0.0, 1.0]`, and negative integer values greater than `(MIN_INT + 1)` distribute uniformly in the range `(-1.0, 0.0)`.

> **Important**

>  For normalized signed integer formats, the values `MIN_INT` and `(MIN_INT + 1)` both map to `-1.0`.

Normalized unsigned integer formats have `Normalized` in the name and unsigned types like [MTLVertexFormat.uchar](mtlvertexformat/uchar.md) or [MTLVertexFormat.ushort](mtlvertexformat/ushort.md). For these formats, values in the range `[0.0, 1.0]` map to `[0, MAX_UINT]`, where `MAX_UINT` is the largest unsigned integer for the number of bits in the storage size.

Metal stores data in little-endian byte order, with the least-significant byte at the lowest memory address. Formats with multibyte components also store each component in little-endian byte order.

## Topics

### 32-bit floating-point formats

Formats for high-precision floating-point vertex data.

- [MTLVertexFormat.float](mtlvertexformat/float.md): A 32-bit floating-point value.
- [MTLVertexFormat.float2](mtlvertexformat/float2.md): A two-component vector with 32-bit floating-point values.
- [MTLVertexFormat.float3](mtlvertexformat/float3.md): A three-component vector with 32-bit floating-point values.
- [MTLVertexFormat.float4](mtlvertexformat/float4.md): A four-component vector with 32-bit floating-point values.
- [MTLVertexFormat.floatRG11B10](mtlvertexformat/floatrg11b10.md): A three-component vector with 11-bit floating-point values for red and green, and a 10-bit value for blue.
- [MTLVertexFormat.floatRGB9E5](mtlvertexformat/floatrgb9e5.md): A three-component vector with 9-bit floating-point values for red, green, and blue, and a 5-bit shared exponent.

### 32-bit integer formats

Formats for full-range integer vertex data.

- [MTLVertexFormat.int](mtlvertexformat/int.md): A 32-bit, signed integer value.
- [MTLVertexFormat.int2](mtlvertexformat/int2.md): A two-component vector with 32-bit, signed integer values.
- [MTLVertexFormat.int3](mtlvertexformat/int3.md): A three-component vector with 32-bit, signed integer values.
- [MTLVertexFormat.int4](mtlvertexformat/int4.md): A four-component vector with 32-bit, signed integer values.
- [MTLVertexFormat.uint](mtlvertexformat/uint.md): A 32-bit, unsigned integer value.
- [MTLVertexFormat.uint2](mtlvertexformat/uint2.md): A two-component vector with 32-bit, unsigned integer values.
- [MTLVertexFormat.uint3](mtlvertexformat/uint3.md): A three-component vector with 32-bit, unsigned integer values.
- [MTLVertexFormat.uint4](mtlvertexformat/uint4.md): A four-component vector with 32-bit, unsigned integer values.

### 32-bit normalized integer formats

Formats that store integer data in memory but the GPU interprets as floating-point values in the range `[0.0, 1.0]` or `[-1.0, 1.0]`.

- [MTLVertexFormat.int1010102Normalized](mtlvertexformat/int1010102normalized.md): A four-component vector with 10-bit, normalized, signed integer values for red, green, and blue, and a 2-bit value for alpha.
- [MTLVertexFormat.uint1010102Normalized](mtlvertexformat/uint1010102normalized.md): A four-component vector with 10-bit, normalized, unsigned integer values for red, green, and blue, and a 2-bit value for alpha.
- [MTLVertexFormat.uchar4Normalized_bgra](mtlvertexformat/uchar4normalized_bgra.md): A four-component vector with 8-bit, normalized, unsigned integer values for blue, green, red, and alpha.

### 16-bit floating-point formats

Formats for half-precision floating-point vertex data that reduce memory bandwidth.

- [MTLVertexFormat.half](mtlvertexformat/half.md): A 16-bit floating-point value.
- [MTLVertexFormat.half2](mtlvertexformat/half2.md): A two-component vector with 16-bit floating-point values.
- [MTLVertexFormat.half3](mtlvertexformat/half3.md): A three-component vector with 16-bit floating-point values.
- [MTLVertexFormat.half4](mtlvertexformat/half4.md): A four-component vector with 16-bit floating-point values.

### 16-bit integer formats

Formats for integer vertex data when the range of 8-bit values is insufficient.

- [MTLVertexFormat.short](mtlvertexformat/short.md): A 16-bit, signed integer value.
- [MTLVertexFormat.short2](mtlvertexformat/short2.md): A two-component vector with 16-bit, signed integer values.
- [MTLVertexFormat.short3](mtlvertexformat/short3.md): A three-component vector with 16-bit, signed integer values.
- [MTLVertexFormat.short4](mtlvertexformat/short4.md): A four-component vector with 16-bit, signed integer values.
- [MTLVertexFormat.ushort](mtlvertexformat/ushort.md): A 16-bit, unsigned integer value.
- [MTLVertexFormat.ushort2](mtlvertexformat/ushort2.md): A two-component vector with 16-bit, unsigned integer values.
- [MTLVertexFormat.ushort3](mtlvertexformat/ushort3.md): A three-component vector with 16-bit, unsigned integer values.
- [MTLVertexFormat.ushort4](mtlvertexformat/ushort4.md): A four-component vector with 16-bit, unsigned integer values.

### 16-bit normalized integer formats

Formats that store integer data in memory but the GPU interprets as floating-point values in the range `[0.0, 1.0]` or `[-1.0, 1.0]`.

- [MTLVertexFormat.shortNormalized](mtlvertexformat/shortnormalized.md): A 16-bit, normalized, signed integer value.
- [MTLVertexFormat.short2Normalized](mtlvertexformat/short2normalized.md): A two-component vector with 16-bit, normalized, signed integer values.
- [MTLVertexFormat.short3Normalized](mtlvertexformat/short3normalized.md): A three-component vector with 16-bit, normalized, signed integer values.
- [MTLVertexFormat.short4Normalized](mtlvertexformat/short4normalized.md): A four-component vector with 16-bit, normalized, signed integer values.
- [MTLVertexFormat.ushortNormalized](mtlvertexformat/ushortnormalized.md): A 16-bit, normalized, unsigned integer value.
- [MTLVertexFormat.ushort2Normalized](mtlvertexformat/ushort2normalized.md): A two-component vector with 16-bit, normalized, unsigned integer values.
- [MTLVertexFormat.ushort3Normalized](mtlvertexformat/ushort3normalized.md): A three-component vector with 16-bit, normalized, unsigned integer values.
- [MTLVertexFormat.ushort4Normalized](mtlvertexformat/ushort4normalized.md): A four-component vector with 16-bit, normalized, unsigned integer values.

### 8-bit integer formats

Formats for compact integer vertex data that reduce memory bandwidth.

- [MTLVertexFormat.char](mtlvertexformat/char.md): An 8-bit, signed integer value.
- [MTLVertexFormat.char2](mtlvertexformat/char2.md): A two-component vector with 8-bit, signed integer values.
- [MTLVertexFormat.char3](mtlvertexformat/char3.md): A three-component vector with 8-bit, signed integer values.
- [MTLVertexFormat.char4](mtlvertexformat/char4.md): A four-component vector with 8-bit, signed integer values.
- [MTLVertexFormat.uchar](mtlvertexformat/uchar.md): An 8-bit, unsigned integer value.
- [MTLVertexFormat.uchar2](mtlvertexformat/uchar2.md): A two-component vector with 8-bit, unsigned integer values.
- [MTLVertexFormat.uchar3](mtlvertexformat/uchar3.md): A three-component vector with 8-bit, unsigned integer values.
- [MTLVertexFormat.uchar4](mtlvertexformat/uchar4.md): A four-component vector with 8-bit, unsigned integer values.

### 8-bit normalized integer formats

Formats that store integer data in memory but the GPU interprets as floating-point values in the range `[0.0, 1.0]` or `[-1.0, 1.0]`.

- [MTLVertexFormat.charNormalized](mtlvertexformat/charnormalized.md): An 8-bit, normalized, signed integer value.
- [MTLVertexFormat.char2Normalized](mtlvertexformat/char2normalized.md): A two-component vector with 8-bit, normalized, signed integer values.
- [MTLVertexFormat.char3Normalized](mtlvertexformat/char3normalized.md): A three-component vector with 8-bit, normalized, signed integer values.
- [MTLVertexFormat.char4Normalized](mtlvertexformat/char4normalized.md): A four-component vector with 8-bit, normalized, signed integer values.
- [MTLVertexFormat.ucharNormalized](mtlvertexformat/ucharnormalized.md): An 8-bit, normalized, unsigned integer value.
- [MTLVertexFormat.uchar2Normalized](mtlvertexformat/uchar2normalized.md): A two-component vector with 8-bit, normalized, unsigned integer values.
- [MTLVertexFormat.uchar3Normalized](mtlvertexformat/uchar3normalized.md): A three-component vector with 8-bit, normalized, unsigned integer values.
- [MTLVertexFormat.uchar4Normalized](mtlvertexformat/uchar4normalized.md): A four-component vector with 8-bit, normalized, unsigned integer values.

### Sentinel values

Special values that represent something other than a vertex format.

- [MTLVertexFormat.invalid](mtlvertexformat/invalid.md): A sentinel value that represents an empty set of vertex format options.

### Swift support

- [init(rawValue:)](mtlvertexformat/init%28rawvalue_%29.md): Creates a vertex format from a raw integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Organizing the vertex attribute

- [format](mtlvertexattributedescriptor/format.md): The format of the vertex attribute.
- [offset](mtlvertexattributedescriptor/offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [bufferIndex](mtlvertexattributedescriptor/bufferindex.md): The index in the argument table for the associated vertex buffer.

# MTLVertexFormat (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The vertex data format options for render pipelines.

## Declaration

```objectivec
enum MTLVertexFormat : NSUInteger;
```

<a id="overview"></a>

## Overview

Set the [format](mtlvertexattributedescriptor/format.md) property of [MTLVertexAttributeDescriptor](mtlvertexattributedescriptor.md) to one of these format values. The format configures how Metal interprets the vertex data in memory for the corresponding argument in your vertex shader. Choose a format that matches the type and component count the shader expects.

<a id="Normalized-integer-formats"></a>

### Normalized integer formats

Normalized signed integer formats have `Normalized` in the name and signed types like [MTLVertexFormatChar](mtlvertexformat/char.md) or [MTLVertexFormatShort](mtlvertexformat/short.md). For these formats, values in the range `[-1.0, 1.0]` map to `[MIN_INT, MAX_INT]`, where `MIN_INT` is the most negative integer and `MAX_INT` is the most positive integer for the number of bits in the storage size. Positive values and zero distribute uniformly in the range `[0.0, 1.0]`, and negative integer values greater than `(MIN_INT + 1)` distribute uniformly in the range `(-1.0, 0.0)`.

> **Important**

>  For normalized signed integer formats, the values `MIN_INT` and `(MIN_INT + 1)` both map to `-1.0`.

Normalized unsigned integer formats have `Normalized` in the name and unsigned types like [MTLVertexFormatUChar](mtlvertexformat/uchar.md) or [MTLVertexFormatUShort](mtlvertexformat/ushort.md). For these formats, values in the range `[0.0, 1.0]` map to `[0, MAX_UINT]`, where `MAX_UINT` is the largest unsigned integer for the number of bits in the storage size.

Metal stores data in little-endian byte order, with the least-significant byte at the lowest memory address. Formats with multibyte components also store each component in little-endian byte order.

## Topics

### 32-bit floating-point formats

Formats for high-precision floating-point vertex data.

- [MTLVertexFormatFloat](mtlvertexformat/float.md): A 32-bit floating-point value.
- [MTLVertexFormatFloat2](mtlvertexformat/float2.md): A two-component vector with 32-bit floating-point values.
- [MTLVertexFormatFloat3](mtlvertexformat/float3.md): A three-component vector with 32-bit floating-point values.
- [MTLVertexFormatFloat4](mtlvertexformat/float4.md): A four-component vector with 32-bit floating-point values.
- [MTLVertexFormatFloatRG11B10](mtlvertexformat/floatrg11b10.md): A three-component vector with 11-bit floating-point values for red and green, and a 10-bit value for blue.
- [MTLVertexFormatFloatRGB9E5](mtlvertexformat/floatrgb9e5.md): A three-component vector with 9-bit floating-point values for red, green, and blue, and a 5-bit shared exponent.

### 32-bit integer formats

Formats for full-range integer vertex data.

- [MTLVertexFormatInt](mtlvertexformat/int.md): A 32-bit, signed integer value.
- [MTLVertexFormatInt2](mtlvertexformat/int2.md): A two-component vector with 32-bit, signed integer values.
- [MTLVertexFormatInt3](mtlvertexformat/int3.md): A three-component vector with 32-bit, signed integer values.
- [MTLVertexFormatInt4](mtlvertexformat/int4.md): A four-component vector with 32-bit, signed integer values.
- [MTLVertexFormatUInt](mtlvertexformat/uint.md): A 32-bit, unsigned integer value.
- [MTLVertexFormatUInt2](mtlvertexformat/uint2.md): A two-component vector with 32-bit, unsigned integer values.
- [MTLVertexFormatUInt3](mtlvertexformat/uint3.md): A three-component vector with 32-bit, unsigned integer values.
- [MTLVertexFormatUInt4](mtlvertexformat/uint4.md): A four-component vector with 32-bit, unsigned integer values.

### 32-bit normalized integer formats

Formats that store integer data in memory but the GPU interprets as floating-point values in the range `[0.0, 1.0]` or `[-1.0, 1.0]`.

- [MTLVertexFormatInt1010102Normalized](mtlvertexformat/int1010102normalized.md): A four-component vector with 10-bit, normalized, signed integer values for red, green, and blue, and a 2-bit value for alpha.
- [MTLVertexFormatUInt1010102Normalized](mtlvertexformat/uint1010102normalized.md): A four-component vector with 10-bit, normalized, unsigned integer values for red, green, and blue, and a 2-bit value for alpha.
- [MTLVertexFormatUChar4Normalized_BGRA](mtlvertexformat/uchar4normalized_bgra.md): A four-component vector with 8-bit, normalized, unsigned integer values for blue, green, red, and alpha.

### 16-bit floating-point formats

Formats for half-precision floating-point vertex data that reduce memory bandwidth.

- [MTLVertexFormatHalf](mtlvertexformat/half.md): A 16-bit floating-point value.
- [MTLVertexFormatHalf2](mtlvertexformat/half2.md): A two-component vector with 16-bit floating-point values.
- [MTLVertexFormatHalf3](mtlvertexformat/half3.md): A three-component vector with 16-bit floating-point values.
- [MTLVertexFormatHalf4](mtlvertexformat/half4.md): A four-component vector with 16-bit floating-point values.

### 16-bit integer formats

Formats for integer vertex data when the range of 8-bit values is insufficient.

- [MTLVertexFormatShort](mtlvertexformat/short.md): A 16-bit, signed integer value.
- [MTLVertexFormatShort2](mtlvertexformat/short2.md): A two-component vector with 16-bit, signed integer values.
- [MTLVertexFormatShort3](mtlvertexformat/short3.md): A three-component vector with 16-bit, signed integer values.
- [MTLVertexFormatShort4](mtlvertexformat/short4.md): A four-component vector with 16-bit, signed integer values.
- [MTLVertexFormatUShort](mtlvertexformat/ushort.md): A 16-bit, unsigned integer value.
- [MTLVertexFormatUShort2](mtlvertexformat/ushort2.md): A two-component vector with 16-bit, unsigned integer values.
- [MTLVertexFormatUShort3](mtlvertexformat/ushort3.md): A three-component vector with 16-bit, unsigned integer values.
- [MTLVertexFormatUShort4](mtlvertexformat/ushort4.md): A four-component vector with 16-bit, unsigned integer values.

### 16-bit normalized integer formats

Formats that store integer data in memory but the GPU interprets as floating-point values in the range `[0.0, 1.0]` or `[-1.0, 1.0]`.

- [MTLVertexFormatShortNormalized](mtlvertexformat/shortnormalized.md): A 16-bit, normalized, signed integer value.
- [MTLVertexFormatShort2Normalized](mtlvertexformat/short2normalized.md): A two-component vector with 16-bit, normalized, signed integer values.
- [MTLVertexFormatShort3Normalized](mtlvertexformat/short3normalized.md): A three-component vector with 16-bit, normalized, signed integer values.
- [MTLVertexFormatShort4Normalized](mtlvertexformat/short4normalized.md): A four-component vector with 16-bit, normalized, signed integer values.
- [MTLVertexFormatUShortNormalized](mtlvertexformat/ushortnormalized.md): A 16-bit, normalized, unsigned integer value.
- [MTLVertexFormatUShort2Normalized](mtlvertexformat/ushort2normalized.md): A two-component vector with 16-bit, normalized, unsigned integer values.
- [MTLVertexFormatUShort3Normalized](mtlvertexformat/ushort3normalized.md): A three-component vector with 16-bit, normalized, unsigned integer values.
- [MTLVertexFormatUShort4Normalized](mtlvertexformat/ushort4normalized.md): A four-component vector with 16-bit, normalized, unsigned integer values.

### 8-bit integer formats

Formats for compact integer vertex data that reduce memory bandwidth.

- [MTLVertexFormatChar](mtlvertexformat/char.md): An 8-bit, signed integer value.
- [MTLVertexFormatChar2](mtlvertexformat/char2.md): A two-component vector with 8-bit, signed integer values.
- [MTLVertexFormatChar3](mtlvertexformat/char3.md): A three-component vector with 8-bit, signed integer values.
- [MTLVertexFormatChar4](mtlvertexformat/char4.md): A four-component vector with 8-bit, signed integer values.
- [MTLVertexFormatUChar](mtlvertexformat/uchar.md): An 8-bit, unsigned integer value.
- [MTLVertexFormatUChar2](mtlvertexformat/uchar2.md): A two-component vector with 8-bit, unsigned integer values.
- [MTLVertexFormatUChar3](mtlvertexformat/uchar3.md): A three-component vector with 8-bit, unsigned integer values.
- [MTLVertexFormatUChar4](mtlvertexformat/uchar4.md): A four-component vector with 8-bit, unsigned integer values.

### 8-bit normalized integer formats

Formats that store integer data in memory but the GPU interprets as floating-point values in the range `[0.0, 1.0]` or `[-1.0, 1.0]`.

- [MTLVertexFormatCharNormalized](mtlvertexformat/charnormalized.md): An 8-bit, normalized, signed integer value.
- [MTLVertexFormatChar2Normalized](mtlvertexformat/char2normalized.md): A two-component vector with 8-bit, normalized, signed integer values.
- [MTLVertexFormatChar3Normalized](mtlvertexformat/char3normalized.md): A three-component vector with 8-bit, normalized, signed integer values.
- [MTLVertexFormatChar4Normalized](mtlvertexformat/char4normalized.md): A four-component vector with 8-bit, normalized, signed integer values.
- [MTLVertexFormatUCharNormalized](mtlvertexformat/ucharnormalized.md): An 8-bit, normalized, unsigned integer value.
- [MTLVertexFormatUChar2Normalized](mtlvertexformat/uchar2normalized.md): A two-component vector with 8-bit, normalized, unsigned integer values.
- [MTLVertexFormatUChar3Normalized](mtlvertexformat/uchar3normalized.md): A three-component vector with 8-bit, normalized, unsigned integer values.
- [MTLVertexFormatUChar4Normalized](mtlvertexformat/uchar4normalized.md): A four-component vector with 8-bit, normalized, unsigned integer values.

### Sentinel values

Special values that represent something other than a vertex format.

- [MTLVertexFormatInvalid](mtlvertexformat/invalid.md): A sentinel value that represents an empty set of vertex format options.

## See Also

### Organizing the vertex attribute

- [format](mtlvertexattributedescriptor/format.md): The format of the vertex attribute.
- [offset](mtlvertexattributedescriptor/offset.md): The location of an attribute in vertex data, determined by the byte offset from the start of the vertex data.
- [bufferIndex](mtlvertexattributedescriptor/bufferindex.md): The index in the argument table for the associated vertex buffer.
