> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexformat](https://developer.apple.com/documentation/modelio/mdlvertexformat)

# MDLVertexFormat (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.

## Declaration

```swift
enum MDLVertexFormat
```

<a id="overview"></a>

## Overview

The values for vertex formats are constructed such that you can use bit masks to infer useful information about a format:

- The lowest order byte contains the number of vector components in a vertex format. For example, the raw value for the [MDLVertexFormat.char3](mdlvertexformat/char3.md) format is the bitwise OR of the 3 (the number of components) with the [MDLVertexFormat.charBits](mdlvertexformat/charbits.md) value.
- Special packed formats such as [MDLVertexFormat.int1010102Normalized](mdlvertexformat/int1010102normalized.md) have values less than `0x10000`.
- For unpacked formats, masking away the lower four bytes leaves information about the data type for scalars or vector components.

## Topics

### Constants

- [MDLVertexFormat.invalid](mdlvertexformat/invalid.md): The vertex attribute has just been initialized or its format is unknown.
- [MDLVertexFormat.packedBit](mdlvertexformat/packedbit.md): A bit mask for vertex attributes in packed vector formats.
- [MDLVertexFormat.uCharBits](mdlvertexformat/ucharbits.md): A bit mask for vertex attributes whose components are in 8-bit unsigned integer format.
- [MDLVertexFormat.charBits](mdlvertexformat/charbits.md): A bit mask for vertex attributes whose components are in 8-bit signed integer format.
- [MDLVertexFormat.uCharNormalizedBits](mdlvertexformat/ucharnormalizedbits.md): A bit mask for vertex attributes whose components are in 8-bit unsigned normalized integer format.
- [MDLVertexFormat.charNormalizedBits](mdlvertexformat/charnormalizedbits.md): A bit mask for vertex attributes whose components are in 8-bit signed normalized integer format.
- [MDLVertexFormat.uShortBits](mdlvertexformat/ushortbits.md): A bit mask for vertex attributes whose components are in 16-bit unsigned integer format.
- [MDLVertexFormat.shortBits](mdlvertexformat/shortbits.md): A bit mask for vertex attributes whose components are in 16-bit signed integer format.
- [MDLVertexFormat.uShortNormalizedBits](mdlvertexformat/ushortnormalizedbits.md): A bit mask for vertex attributes whose components are in 16-bit unsigned normalized integer format.
- [MDLVertexFormat.shortNormalizedBits](mdlvertexformat/shortnormalizedbits.md): A bit mask for vertex attributes whose components are in 16-bit signed normalized integer format.
- [MDLVertexFormat.uIntBits](mdlvertexformat/uintbits.md): A bit mask for vertex attributes whose components are in 32-bit unsigned integer format.
- [MDLVertexFormat.intBits](mdlvertexformat/intbits.md): A bit mask for vertex attributes whose components are in 32-bit signed integer format.
- [MDLVertexFormat.halfBits](mdlvertexformat/halfbits.md): A bit mask for vertex attributes whose components are in 16-bit floating-point format.
- [MDLVertexFormat.floatBits](mdlvertexformat/floatbits.md): A bit mask for vertex attributes whose components are in 32-bit floating-point format.
- [MDLVertexFormat.uChar](mdlvertexformat/uchar.md): The attribute value for each vertex is a scalar of unsigned 8-bit integer type.
- [MDLVertexFormat.uChar2](mdlvertexformat/uchar2.md): The attribute value for each vertex is a vector with 2 components, each of unsigned 8-bit integer type.
- [MDLVertexFormat.uChar3](mdlvertexformat/uchar3.md): The attribute value for each vertex is a vector with 3 components, each of unsigned 8-bit integer type.
- [MDLVertexFormat.uChar4](mdlvertexformat/uchar4.md): The attribute value for each vertex is a vector with 4 components, each of unsigned 8-bit integer type.
- [MDLVertexFormat.char](mdlvertexformat/char.md): The attribute value for each vertex is a scalar of signed 8-bit integer type.
- [MDLVertexFormat.char2](mdlvertexformat/char2.md): The attribute value for each vertex is a vector with 2 components, each of signed 8-bit integer type.
- [MDLVertexFormat.char3](mdlvertexformat/char3.md): The attribute value for each vertex is a vector with 3 components, each of signed 8-bit integer type.
- [MDLVertexFormat.char4](mdlvertexformat/char4.md): The attribute value for each vertex is a vector with 4 components, each of signed 8-bit integer type.
- [MDLVertexFormat.uCharNormalized](mdlvertexformat/ucharnormalized.md): The attribute value for each vertex is a normalized scalar of unsigned 8-bit integer type.
- [MDLVertexFormat.uChar2Normalized](mdlvertexformat/uchar2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of unsigned 8-bit integer type.
- [MDLVertexFormat.uChar3Normalized](mdlvertexformat/uchar3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of unsigned 8-bit integer type.
- [MDLVertexFormat.uChar4Normalized](mdlvertexformat/uchar4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of unsigned 8-bit integer type.
- [MDLVertexFormat.charNormalized](mdlvertexformat/charnormalized.md): The attribute value for each vertex is a normalized scalar of signed 8-bit integer type.
- [MDLVertexFormat.char2Normalized](mdlvertexformat/char2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of signed 8-bit integer type.
- [MDLVertexFormat.char3Normalized](mdlvertexformat/char3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of signed 8-bit integer type.
- [MDLVertexFormat.char4Normalized](mdlvertexformat/char4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of signed 8-bit integer type.
- [MDLVertexFormat.uShort](mdlvertexformat/ushort.md): The attribute value for each vertex is a scalar of unsigned 16-bit integer type.
- [MDLVertexFormat.uShort2](mdlvertexformat/ushort2.md): The attribute value for each vertex is a vector with 2 components, each of unsigned 16-bit integer type.
- [MDLVertexFormat.uShort3](mdlvertexformat/ushort3.md): The attribute value for each vertex is a vector with 3 components, each of unsigned 16-bit integer type.
- [MDLVertexFormat.uShort4](mdlvertexformat/ushort4.md): The attribute value for each vertex is a vector with 4 components, each of unsigned 16-bit integer type.
- [MDLVertexFormat.short](mdlvertexformat/short.md): The attribute value for each vertex is a scalar of signed 16-bit integer type.
- [MDLVertexFormat.short2](mdlvertexformat/short2.md): The attribute value for each vertex is a vector with 2 components, each of signed 16-bit integer type.
- [MDLVertexFormat.short3](mdlvertexformat/short3.md): The attribute value for each vertex is a vector with 3 components, each of signed 16-bit integer type.
- [MDLVertexFormat.short4](mdlvertexformat/short4.md): The attribute value for each vertex is a vector with 4 components, each of signed 16-bit integer type.
- [MDLVertexFormat.uShortNormalized](mdlvertexformat/ushortnormalized.md): The attribute value for each vertex is a normalized scalar of unsigned 16-bit integer type.
- [MDLVertexFormat.uShort2Normalized](mdlvertexformat/ushort2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of unsigned 16-bit integer type.
- [MDLVertexFormat.uShort3Normalized](mdlvertexformat/ushort3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of unsigned 16-bit integer type.
- [MDLVertexFormat.uShort4Normalized](mdlvertexformat/ushort4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of unsigned 16-bit integer type.
- [MDLVertexFormat.shortNormalized](mdlvertexformat/shortnormalized.md): The attribute value for each vertex is a normalized scalar of signed 16-bit integer type.
- [MDLVertexFormat.short2Normalized](mdlvertexformat/short2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of signed 16-bit integer type.
- [MDLVertexFormat.short3Normalized](mdlvertexformat/short3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of signed 16-bit integer type.
- [MDLVertexFormat.short4Normalized](mdlvertexformat/short4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of signed 16-bit integer type.
- [MDLVertexFormat.uInt](mdlvertexformat/uint.md): The attribute value for each vertex is a scalar of unsigned 32-bit integer type.
- [MDLVertexFormat.uInt2](mdlvertexformat/uint2.md): The attribute value for each vertex is a vector with 2 components, each of unsigned 32-bit integer type.
- [MDLVertexFormat.uInt3](mdlvertexformat/uint3.md): The attribute value for each vertex is a vector with 3 components, each of unsigned 32-bit integer type.
- [MDLVertexFormat.uInt4](mdlvertexformat/uint4.md): The attribute value for each vertex is a vector with 4 components, each of unsigned 32-bit integer type.
- [MDLVertexFormat.int](mdlvertexformat/int.md): The attribute value for each vertex is a scalar of signed 32-bit integer type.
- [MDLVertexFormat.int2](mdlvertexformat/int2.md): The attribute value for each vertex is a vector with 2 components, each of signed 32-bit integer type.
- [MDLVertexFormat.int3](mdlvertexformat/int3.md): The attribute value for each vertex is a vector with 3 components, each of signed 32-bit integer type.
- [MDLVertexFormat.int4](mdlvertexformat/int4.md): The attribute value for each vertex is a vector with 4 components, each of signed 32-bit integer type.
- [MDLVertexFormat.half](mdlvertexformat/half.md): The attribute value for each vertex is a scalar of 16-bit floating-point type.
- [MDLVertexFormat.half2](mdlvertexformat/half2.md): The attribute value for each vertex is a vector with 2 components, each of 16-bit floating-point type.
- [MDLVertexFormat.half3](mdlvertexformat/half3.md): The attribute value for each vertex is a vector with 3 components, each of 16-bit floating-point type.
- [MDLVertexFormat.half4](mdlvertexformat/half4.md): The attribute value for each vertex is a vector with 4 components, each of 16-bit floating-point type.
- [MDLVertexFormat.float](mdlvertexformat/float.md): The attribute value for each vertex is a scalar of 32-bit floating-point type.
- [MDLVertexFormat.float2](mdlvertexformat/float2.md): The attribute value for each vertex is a vector with 2 components, each of 32-bit floating-point type.
- [MDLVertexFormat.float3](mdlvertexformat/float3.md): The attribute value for each vertex is a vector with 3 components, each of 32-bit floating-point type.
- [MDLVertexFormat.float4](mdlvertexformat/float4.md): The attribute value for each vertex is a vector with 4 components, each of 32-bit floating-point type.
- [MDLVertexFormat.int1010102Normalized](mdlvertexformat/int1010102normalized.md): The attribute value for each vertex is a packed vector with 4 components of signed integer type. The first three components are 10 bits each, and the fourth component is 2 bits.
- [MDLVertexFormat.uInt1010102Normalized](mdlvertexformat/uint1010102normalized.md): The attribute value for each vertex is a packed vector with 4 components of unsigned integer type. The first three components are 10 bits each, and the fourth component is 2 bits.

### Initializers

- [init(rawValue:)](mdlvertexformat/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [Vertex Attributes](vertex-attributes.md): Names that identify semantic uses for vertex attribute data, used by the [name](mdlvertexattribute/name.md) property.

# MDLVertexFormat (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Descriptions of the data size and layout for a vertex attribute, used by the [format](mdlvertexattribute/format.md) property.

## Declaration

```objectivec
enum MDLVertexFormat : NSUInteger;
```

<a id="overview"></a>

## Overview

The values for vertex formats are constructed such that you can use bit masks to infer useful information about a format:

- The lowest order byte contains the number of vector components in a vertex format. For example, the raw value for the [MDLVertexFormatChar3](mdlvertexformat/char3.md) format is the bitwise OR of the 3 (the number of components) with the [MDLVertexFormatCharBits](mdlvertexformat/charbits.md) value.
- Special packed formats such as [MDLVertexFormatInt1010102Normalized](mdlvertexformat/int1010102normalized.md) have values less than `0x10000`.
- For unpacked formats, masking away the lower four bytes leaves information about the data type for scalars or vector components.

## Topics

### Constants

- [MDLVertexFormatInvalid](mdlvertexformat/invalid.md): The vertex attribute has just been initialized or its format is unknown.
- [MDLVertexFormatPackedBit](mdlvertexformat/packedbit.md): A bit mask for vertex attributes in packed vector formats.
- [MDLVertexFormatUCharBits](mdlvertexformat/ucharbits.md): A bit mask for vertex attributes whose components are in 8-bit unsigned integer format.
- [MDLVertexFormatCharBits](mdlvertexformat/charbits.md): A bit mask for vertex attributes whose components are in 8-bit signed integer format.
- [MDLVertexFormatUCharNormalizedBits](mdlvertexformat/ucharnormalizedbits.md): A bit mask for vertex attributes whose components are in 8-bit unsigned normalized integer format.
- [MDLVertexFormatCharNormalizedBits](mdlvertexformat/charnormalizedbits.md): A bit mask for vertex attributes whose components are in 8-bit signed normalized integer format.
- [MDLVertexFormatUShortBits](mdlvertexformat/ushortbits.md): A bit mask for vertex attributes whose components are in 16-bit unsigned integer format.
- [MDLVertexFormatShortBits](mdlvertexformat/shortbits.md): A bit mask for vertex attributes whose components are in 16-bit signed integer format.
- [MDLVertexFormatUShortNormalizedBits](mdlvertexformat/ushortnormalizedbits.md): A bit mask for vertex attributes whose components are in 16-bit unsigned normalized integer format.
- [MDLVertexFormatShortNormalizedBits](mdlvertexformat/shortnormalizedbits.md): A bit mask for vertex attributes whose components are in 16-bit signed normalized integer format.
- [MDLVertexFormatUIntBits](mdlvertexformat/uintbits.md): A bit mask for vertex attributes whose components are in 32-bit unsigned integer format.
- [MDLVertexFormatIntBits](mdlvertexformat/intbits.md): A bit mask for vertex attributes whose components are in 32-bit signed integer format.
- [MDLVertexFormatHalfBits](mdlvertexformat/halfbits.md): A bit mask for vertex attributes whose components are in 16-bit floating-point format.
- [MDLVertexFormatFloatBits](mdlvertexformat/floatbits.md): A bit mask for vertex attributes whose components are in 32-bit floating-point format.
- [MDLVertexFormatUChar](mdlvertexformat/uchar.md): The attribute value for each vertex is a scalar of unsigned 8-bit integer type.
- [MDLVertexFormatUChar2](mdlvertexformat/uchar2.md): The attribute value for each vertex is a vector with 2 components, each of unsigned 8-bit integer type.
- [MDLVertexFormatUChar3](mdlvertexformat/uchar3.md): The attribute value for each vertex is a vector with 3 components, each of unsigned 8-bit integer type.
- [MDLVertexFormatUChar4](mdlvertexformat/uchar4.md): The attribute value for each vertex is a vector with 4 components, each of unsigned 8-bit integer type.
- [MDLVertexFormatChar](mdlvertexformat/char.md): The attribute value for each vertex is a scalar of signed 8-bit integer type.
- [MDLVertexFormatChar2](mdlvertexformat/char2.md): The attribute value for each vertex is a vector with 2 components, each of signed 8-bit integer type.
- [MDLVertexFormatChar3](mdlvertexformat/char3.md): The attribute value for each vertex is a vector with 3 components, each of signed 8-bit integer type.
- [MDLVertexFormatChar4](mdlvertexformat/char4.md): The attribute value for each vertex is a vector with 4 components, each of signed 8-bit integer type.
- [MDLVertexFormatUCharNormalized](mdlvertexformat/ucharnormalized.md): The attribute value for each vertex is a normalized scalar of unsigned 8-bit integer type.
- [MDLVertexFormatUChar2Normalized](mdlvertexformat/uchar2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of unsigned 8-bit integer type.
- [MDLVertexFormatUChar3Normalized](mdlvertexformat/uchar3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of unsigned 8-bit integer type.
- [MDLVertexFormatUChar4Normalized](mdlvertexformat/uchar4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of unsigned 8-bit integer type.
- [MDLVertexFormatCharNormalized](mdlvertexformat/charnormalized.md): The attribute value for each vertex is a normalized scalar of signed 8-bit integer type.
- [MDLVertexFormatChar2Normalized](mdlvertexformat/char2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of signed 8-bit integer type.
- [MDLVertexFormatChar3Normalized](mdlvertexformat/char3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of signed 8-bit integer type.
- [MDLVertexFormatChar4Normalized](mdlvertexformat/char4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of signed 8-bit integer type.
- [MDLVertexFormatUShort](mdlvertexformat/ushort.md): The attribute value for each vertex is a scalar of unsigned 16-bit integer type.
- [MDLVertexFormatUShort2](mdlvertexformat/ushort2.md): The attribute value for each vertex is a vector with 2 components, each of unsigned 16-bit integer type.
- [MDLVertexFormatUShort3](mdlvertexformat/ushort3.md): The attribute value for each vertex is a vector with 3 components, each of unsigned 16-bit integer type.
- [MDLVertexFormatUShort4](mdlvertexformat/ushort4.md): The attribute value for each vertex is a vector with 4 components, each of unsigned 16-bit integer type.
- [MDLVertexFormatShort](mdlvertexformat/short.md): The attribute value for each vertex is a scalar of signed 16-bit integer type.
- [MDLVertexFormatShort2](mdlvertexformat/short2.md): The attribute value for each vertex is a vector with 2 components, each of signed 16-bit integer type.
- [MDLVertexFormatShort3](mdlvertexformat/short3.md): The attribute value for each vertex is a vector with 3 components, each of signed 16-bit integer type.
- [MDLVertexFormatShort4](mdlvertexformat/short4.md): The attribute value for each vertex is a vector with 4 components, each of signed 16-bit integer type.
- [MDLVertexFormatUShortNormalized](mdlvertexformat/ushortnormalized.md): The attribute value for each vertex is a normalized scalar of unsigned 16-bit integer type.
- [MDLVertexFormatUShort2Normalized](mdlvertexformat/ushort2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of unsigned 16-bit integer type.
- [MDLVertexFormatUShort3Normalized](mdlvertexformat/ushort3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of unsigned 16-bit integer type.
- [MDLVertexFormatUShort4Normalized](mdlvertexformat/ushort4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of unsigned 16-bit integer type.
- [MDLVertexFormatShortNormalized](mdlvertexformat/shortnormalized.md): The attribute value for each vertex is a normalized scalar of signed 16-bit integer type.
- [MDLVertexFormatShort2Normalized](mdlvertexformat/short2normalized.md): The attribute value for each vertex is a vector with 2 components, each with a normalized value of signed 16-bit integer type.
- [MDLVertexFormatShort3Normalized](mdlvertexformat/short3normalized.md): The attribute value for each vertex is a vector with 3 components, each with a normalized value of signed 16-bit integer type.
- [MDLVertexFormatShort4Normalized](mdlvertexformat/short4normalized.md): The attribute value for each vertex is a vector with 4 components, each with a normalized value of signed 16-bit integer type.
- [MDLVertexFormatUInt](mdlvertexformat/uint.md): The attribute value for each vertex is a scalar of unsigned 32-bit integer type.
- [MDLVertexFormatUInt2](mdlvertexformat/uint2.md): The attribute value for each vertex is a vector with 2 components, each of unsigned 32-bit integer type.
- [MDLVertexFormatUInt3](mdlvertexformat/uint3.md): The attribute value for each vertex is a vector with 3 components, each of unsigned 32-bit integer type.
- [MDLVertexFormatUInt4](mdlvertexformat/uint4.md): The attribute value for each vertex is a vector with 4 components, each of unsigned 32-bit integer type.
- [MDLVertexFormatInt](mdlvertexformat/int.md): The attribute value for each vertex is a scalar of signed 32-bit integer type.
- [MDLVertexFormatInt2](mdlvertexformat/int2.md): The attribute value for each vertex is a vector with 2 components, each of signed 32-bit integer type.
- [MDLVertexFormatInt3](mdlvertexformat/int3.md): The attribute value for each vertex is a vector with 3 components, each of signed 32-bit integer type.
- [MDLVertexFormatInt4](mdlvertexformat/int4.md): The attribute value for each vertex is a vector with 4 components, each of signed 32-bit integer type.
- [MDLVertexFormatHalf](mdlvertexformat/half.md): The attribute value for each vertex is a scalar of 16-bit floating-point type.
- [MDLVertexFormatHalf2](mdlvertexformat/half2.md): The attribute value for each vertex is a vector with 2 components, each of 16-bit floating-point type.
- [MDLVertexFormatHalf3](mdlvertexformat/half3.md): The attribute value for each vertex is a vector with 3 components, each of 16-bit floating-point type.
- [MDLVertexFormatHalf4](mdlvertexformat/half4.md): The attribute value for each vertex is a vector with 4 components, each of 16-bit floating-point type.
- [MDLVertexFormatFloat](mdlvertexformat/float.md): The attribute value for each vertex is a scalar of 32-bit floating-point type.
- [MDLVertexFormatFloat2](mdlvertexformat/float2.md): The attribute value for each vertex is a vector with 2 components, each of 32-bit floating-point type.
- [MDLVertexFormatFloat3](mdlvertexformat/float3.md): The attribute value for each vertex is a vector with 3 components, each of 32-bit floating-point type.
- [MDLVertexFormatFloat4](mdlvertexformat/float4.md): The attribute value for each vertex is a vector with 4 components, each of 32-bit floating-point type.
- [MDLVertexFormatInt1010102Normalized](mdlvertexformat/int1010102normalized.md): The attribute value for each vertex is a packed vector with 4 components of signed integer type. The first three components are 10 bits each, and the fourth component is 2 bits.
- [MDLVertexFormatUInt1010102Normalized](mdlvertexformat/uint1010102normalized.md): The attribute value for each vertex is a packed vector with 4 components of unsigned integer type. The first three components are 10 bits each, and the fourth component is 2 bits.

## See Also

### Constants

- [Vertex Attributes](vertex-attributes.md): Names that identify semantic uses for vertex attribute data, used by the [name](mdlvertexattribute/name.md) property.
