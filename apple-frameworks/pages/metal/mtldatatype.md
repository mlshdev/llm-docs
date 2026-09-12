> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldatatype](https://developer.apple.com/documentation/metal/mtldatatype)

# MTLDataType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The parameter type options for GPU functions, such as shaders and compute kernels.

## Declaration

```swift
enum MTLDataType
```

<a id="overview"></a>

## Overview

Metal reports or accepts this type in several reflection and configuration contexts, such as:

- The [type](mtlfunctionconstant/type.md) property of [MTLFunctionConstant](mtlfunctionconstant.md)
- The [attributeType](mtlattribute/attributetype.md) property of [MTLAttribute](mtlattribute.md)
- The [attributeType](mtlvertexattribute/attributetype.md) property of [MTLVertexAttribute](mtlvertexattribute.md)
- The [setConstantValue(\_:type:withName:)](mtlfunctionconstantvalues/setconstantvalue%28__type_withname_%29.md) method of [MTLFunctionConstantValues](mtlfunctionconstantvalues.md)

<a id="Normalized-integer-types"></a>

### Normalized integer types

Color types with `Snorm` in the name are normalized signed integer types. For these types, values in the range `[-1.0, 1.0]` map to `[MIN_INT, MAX_INT]`, where `MIN_INT` is the most negative integer and `MAX_INT` is the most positive integer for the number of bits in the storage size. Positive values and zero distribute uniformly in the range `[0.0, 1.0]`, and negative integer values greater than `(MIN_INT + 1)` distribute uniformly in the range `(-1.0, 0.0)`.

> **Important**

>  For normalized signed integer types, the values `MIN_INT` and `(MIN_INT + 1)` both map to `-1.0`.

Color types with `Unorm` in the name are normalized unsigned integer types. For these types, values in the range `[0.0, 1.0]` map to `[0, MAX_UINT]`, where `MAX_UINT` is the largest unsigned integer for the number of bits in the storage size.

Metal stores data in little-endian byte order, with the least-significant byte at the lowest memory address. Formats with multibyte components also store each component in little-endian byte order.

## Topics

### 64-bit integer types

Types for full-range 64-bit integer data.

- [MTLDataType.long](mtldatatype/long.md): A 64-bit, signed integer value.
- [MTLDataType.long2](mtldatatype/long2.md): A two-component vector with 64-bit, signed integer values.
- [MTLDataType.long3](mtldatatype/long3.md): A three-component vector with 64-bit, signed integer values.
- [MTLDataType.long4](mtldatatype/long4.md): A four-component vector with 64-bit, signed integer values.
- [MTLDataType.ulong](mtldatatype/ulong.md): A 64-bit, unsigned integer value.
- [MTLDataType.ulong2](mtldatatype/ulong2.md): A two-component vector with 64-bit, unsigned integer values.
- [MTLDataType.ulong3](mtldatatype/ulong3.md): A three-component vector with 64-bit, unsigned integer values.
- [MTLDataType.ulong4](mtldatatype/ulong4.md): A four-component vector with 64-bit, unsigned integer values.

### 64-bit color integer types

Packed, normalized integer types for high-precision color values.

- [MTLDataType.rgba16Snorm](mtldatatype/rgba16snorm.md): An ordinary pixel with four components, each of which is a 16-bit, normalized, signed integer value.
- [MTLDataType.rgba16Unorm](mtldatatype/rgba16unorm.md): An ordinary pixel with four components, each of which is a 16-bit, normalized, unsigned integer value.

### 32-bit floating-point types

Types for high-precision floating-point data.

- [MTLDataType.float](mtldatatype/float.md): A 32-bit floating-point value.
- [MTLDataType.float2](mtldatatype/float2.md): A two-component vector with 32-bit floating-point values.
- [MTLDataType.float3](mtldatatype/float3.md): A three-component vector with 32-bit floating-point values.
- [MTLDataType.float4](mtldatatype/float4.md): A four-component vector with 32-bit floating-point values.

### 32-bit floating-point matrix types

Matrix types for transformations and linear algebra operations.

- [MTLDataType.float2x2](mtldatatype/float2x2.md): A 2x2 component matrix with 32-bit floating-point values.
- [MTLDataType.float2x3](mtldatatype/float2x3.md): A 2x3 component matrix with 32-bit floating-point values.
- [MTLDataType.float2x4](mtldatatype/float2x4.md): A 2x4 component matrix with 32-bit floating-point values.
- [MTLDataType.float3x2](mtldatatype/float3x2.md): A 3x2 component matrix with 32-bit floating-point values.
- [MTLDataType.float3x3](mtldatatype/float3x3.md): A 3x3 component matrix with 32-bit floating-point values.
- [MTLDataType.float3x4](mtldatatype/float3x4.md): A 3x4 component matrix with 32-bit floating-point values.
- [MTLDataType.float4x2](mtldatatype/float4x2.md): A 4x2 component matrix with 32-bit floating-point values.
- [MTLDataType.float4x3](mtldatatype/float4x3.md): A 4x3 component matrix with 32-bit floating-point values.
- [MTLDataType.float4x4](mtldatatype/float4x4.md): A 4x4 component matrix with 32-bit floating-point values.

### 32-bit color floating-point types

Packed, floating-point types for color values.

- [MTLDataType.rgb9e5Float](mtldatatype/rgb9e5float.md): A packed 32-bit format with three color components, each of which is a 9-bit floating-point value.
- [MTLDataType.rg11b10Float](mtldatatype/rg11b10float.md): A packed 32-bit format with three floating-point color components, two of which are 11-bit values, and one is a 10-bit value.

### 32-bit color integer types

Packed, normalized integer types for color values.

- [MTLDataType.rgba8Snorm](mtldatatype/rgba8snorm.md): An ordinary pixel with four components, each of which is an 8-bit, normalized, signed integer value.
- [MTLDataType.rgba8Unorm](mtldatatype/rgba8unorm.md): An ordinary pixel with four components, each of which is an 8-bit, normalized, unsigned integer value.
- [MTLDataType.rgba8Unorm_srgb](mtldatatype/rgba8unorm_srgb.md): An ordinary pixel with four components, each of which is an 8-bit, normalized, unsigned integer value in the sRGB color space.
- [MTLDataType.rg16Snorm](mtldatatype/rg16snorm.md): An ordinary pixel with two components, each of which is a 16-bit, normalized, signed integer value.
- [MTLDataType.rg16Unorm](mtldatatype/rg16unorm.md): An ordinary pixel with two components, each of which is a 16-bit, normalized, unsigned integer value.
- [MTLDataType.rgb10a2Unorm](mtldatatype/rgb10a2unorm.md): A packed 32-bit format with three color components, each of which is a 10-bit, normalized, unsigned integer value.

### 32-bit integer types

Types for full-range 32-bit integer data.

- [MTLDataType.int](mtldatatype/int.md): A 32-bit, signed integer value.
- [MTLDataType.int2](mtldatatype/int2.md): A two-component vector with 32-bit, signed integer values.
- [MTLDataType.int3](mtldatatype/int3.md): A three-component vector with 32-bit, signed integer values.
- [MTLDataType.int4](mtldatatype/int4.md): A four-component vector with 32-bit, signed integer values.
- [MTLDataType.uint](mtldatatype/uint.md): A 32-bit, unsigned integer value.
- [MTLDataType.uint2](mtldatatype/uint2.md): A two-component vector with 32-bit, unsigned integer values.
- [MTLDataType.uint3](mtldatatype/uint3.md): A three-component vector with 32-bit, unsigned integer values.
- [MTLDataType.uint4](mtldatatype/uint4.md): A four-component vector with 32-bit, unsigned integer values.

### 16-bit floating-point types

Types for half-precision floating-point data that reduce memory bandwidth.

- [MTLDataType.half](mtldatatype/half.md): A 16-bit floating-point value.
- [MTLDataType.half2](mtldatatype/half2.md): A two-component vector with 16-bit floating-point values.
- [MTLDataType.half3](mtldatatype/half3.md): A three-component vector with 16-bit floating-point values.
- [MTLDataType.half4](mtldatatype/half4.md): A four-component vector with 16-bit floating-point values.

### 16-bit floating-point matrix types

Matrix types for transformations and linear algebra operations that reduce memory bandwidth.

- [MTLDataType.half2x2](mtldatatype/half2x2.md): A 2x2 component matrix with 16-bit floating-point values.
- [MTLDataType.half2x3](mtldatatype/half2x3.md): A 2x3 component matrix with 16-bit floating-point values.
- [MTLDataType.half2x4](mtldatatype/half2x4.md): A 2x4 component matrix with 16-bit floating-point values.
- [MTLDataType.half3x2](mtldatatype/half3x2.md): A 3x2 component matrix with 16-bit floating-point values.
- [MTLDataType.half3x3](mtldatatype/half3x3.md): A 3x3 component matrix with 16-bit floating-point values.
- [MTLDataType.half3x4](mtldatatype/half3x4.md): A 3x4 component matrix with 16-bit floating-point values.
- [MTLDataType.half4x2](mtldatatype/half4x2.md): A 4x2 component matrix with 16-bit floating-point values.
- [MTLDataType.half4x3](mtldatatype/half4x3.md): A 4x3 component matrix with 16-bit floating-point values.
- [MTLDataType.half4x4](mtldatatype/half4x4.md): A 4x4 component matrix with 16-bit floating-point values.

### 16-bit brain floating-point types

Types for machine learning workloads that balance range and precision.

- [MTLDataType.bfloat](mtldatatype/bfloat.md): A 16-bit, brain floating-point value.
- [MTLDataType.bfloat2](mtldatatype/bfloat2.md): A two-component vector with 16-bit, brain floating-point values.
- [MTLDataType.bfloat3](mtldatatype/bfloat3.md): A three-component vector with 16-bit, brain floating-point values.
- [MTLDataType.bfloat4](mtldatatype/bfloat4.md): A four-component vector with 16-bit, brain floating-point values.

### 16-bit integer types

Types for integer data that have more range than 8-bit types.

- [MTLDataType.short](mtldatatype/short.md): A 16-bit, signed integer value.
- [MTLDataType.short2](mtldatatype/short2.md): A two-component vector with 16-bit, signed integer values.
- [MTLDataType.short3](mtldatatype/short3.md): A three-component vector with 16-bit, signed integer values.
- [MTLDataType.short4](mtldatatype/short4.md): A four-component vector with 16-bit, signed integer values.
- [MTLDataType.ushort](mtldatatype/ushort.md): A 16-bit, unsigned integer value.
- [MTLDataType.ushort2](mtldatatype/ushort2.md): A two-component vector with 16-bit, unsigned integer values.
- [MTLDataType.ushort3](mtldatatype/ushort3.md): A three-component vector with 16-bit, unsigned integer values.
- [MTLDataType.ushort4](mtldatatype/ushort4.md): A four-component vector with 16-bit, unsigned integer values.

### 16-bit color integer types

Packed, normalized integer types for compact color values.

- [MTLDataType.rg8Snorm](mtldatatype/rg8snorm.md): An ordinary pixel with two components, each of which is an 8-bit, normalized, signed integer value.
- [MTLDataType.rg8Unorm](mtldatatype/rg8unorm.md): An ordinary pixel with two components, each of which is an 8-bit, normalized, unsigned integer value.
- [MTLDataType.r16Snorm](mtldatatype/r16snorm.md): An ordinary pixel with one component that’s a 16-bit, normalized, signed integer value.
- [MTLDataType.r16Unorm](mtldatatype/r16unorm.md): An ordinary pixel with one component that’s a 16-bit, normalized, unsigned integer value.

### 8-bit integer types

Integer types that reduce memory bandwidth and cache impact.

- [MTLDataType.char](mtldatatype/char.md): An 8-bit, signed integer value.
- [MTLDataType.char2](mtldatatype/char2.md): A two-component vector with 8-bit, signed integer values.
- [MTLDataType.char3](mtldatatype/char3.md): A three-component vector with 8-bit, signed integer values.
- [MTLDataType.char4](mtldatatype/char4.md): A four-component vector with 8-bit, signed integer values.
- [MTLDataType.uchar](mtldatatype/uchar.md): An 8-bit, unsigned integer value.
- [MTLDataType.uchar2](mtldatatype/uchar2.md): A two-component vector with 8-bit, unsigned integer values.
- [MTLDataType.uchar3](mtldatatype/uchar3.md): A three-component vector with 8-bit, unsigned integer values.
- [MTLDataType.uchar4](mtldatatype/uchar4.md): A four-component vector with 8-bit, unsigned integer values.

### 8-bit color integer types

Packed, normalized integer types for compact color values.

- [MTLDataType.r8Snorm](mtldatatype/r8snorm.md): An ordinary pixel with one component that’s an 8-bit, normalized, signed integer value.
- [MTLDataType.r8Unorm](mtldatatype/r8unorm.md): An ordinary pixel with one component that’s an 8-bit, normalized, unsigned integer value.

### Boolean types

Logical types for `true` or `false` values.

- [MTLDataType.bool](mtldatatype/bool.md): A Boolean value.
- [MTLDataType.bool2](mtldatatype/bool2.md): A two-component Boolean vector.
- [MTLDataType.bool3](mtldatatype/bool3.md): A three-component Boolean vector.
- [MTLDataType.bool4](mtldatatype/bool4.md): A four-component Boolean vector.

### Resource types

Types that refer to GPU resources, such as textures and buffers.

- [MTLDataType.tensor](mtldatatype/tensor.md): Represents a data type corresponding to a machine learning tensor.
- [MTLDataType.sampler](mtldatatype/sampler.md): A Metal texture sampler instance.
- [MTLDataType.texture](mtldatatype/texture.md): A Metal texture resource instance.
- [MTLDataType.renderPipeline](mtldatatype/renderpipeline.md): A Metal render pipeline instance.
- [MTLDataType.computePipeline](mtldatatype/computepipeline.md): A Metal compute pipeline instance.
- [MTLDataType.depthStencilState](mtldatatype/depthstencilstate.md): Represents a data type corresponding to a depth-stencil state object.
- [MTLDataType.indirectCommandBuffer](mtldatatype/indirectcommandbuffer.md): An indirect command buffer resource instance.
- [MTLDataType.visibleFunctionTable](mtldatatype/visiblefunctiontable.md): A table of visible functions that a render or compute pipeline can call.
- [MTLDataType.intersectionFunctionTable](mtldatatype/intersectionfunctiontable.md): A table of intersection functions that a render or compute pipeline can call.
- [MTLDataType.primitiveAccelerationStructure](mtldatatype/primitiveaccelerationstructure.md): A low-level ray-tracing acceleration structure for a set of primitives.
- [MTLDataType.instanceAccelerationStructure](mtldatatype/instanceaccelerationstructure.md): A high-level, ray-tracing acceleration structure for a set of low-level primitive instances.

### Collection types

Types for structured or indirect data access.

- [MTLDataType.struct](mtldatatype/struct.md): A structure instance.
- [MTLDataType.array](mtldatatype/array.md): An array instance.
- [MTLDataType.pointer](mtldatatype/pointer.md): A pointer.

### Sentinel values

Special values that represent something other than a valid data type.

- [MTLDataType.none](mtldatatype/none.md): A sentinel value that represents a GPU function parameter that doesn’t have a valid data type.

### Swift support

- [init(rawValue:)](mtldatatype/init%28rawvalue_%29.md): Creates a data type instance from a raw integer value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLArrayType](mtlarraytype.md): A description of an array.
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.

# MTLDataType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The parameter type options for GPU functions, such as shaders and compute kernels.

## Declaration

```objectivec
enum MTLDataType : NSUInteger;
```

<a id="overview"></a>

## Overview

Metal reports or accepts this type in several reflection and configuration contexts, such as:

- The [type](mtlfunctionconstant/type.md) property of [MTLFunctionConstant](mtlfunctionconstant.md)
- The [attributeType](mtlattribute/attributetype.md) property of [MTLAttribute](mtlattribute.md)
- The [attributeType](mtlvertexattribute/attributetype.md) property of [MTLVertexAttribute](mtlvertexattribute.md)
- The [setConstantValue:type:withName:](mtlfunctionconstantvalues/setconstantvalue%28__type_withname_%29.md) method of [MTLFunctionConstantValues](mtlfunctionconstantvalues.md)

<a id="Normalized-integer-types"></a>

### Normalized integer types

Color types with `Snorm` in the name are normalized signed integer types. For these types, values in the range `[-1.0, 1.0]` map to `[MIN_INT, MAX_INT]`, where `MIN_INT` is the most negative integer and `MAX_INT` is the most positive integer for the number of bits in the storage size. Positive values and zero distribute uniformly in the range `[0.0, 1.0]`, and negative integer values greater than `(MIN_INT + 1)` distribute uniformly in the range `(-1.0, 0.0)`.

> **Important**

>  For normalized signed integer types, the values `MIN_INT` and `(MIN_INT + 1)` both map to `-1.0`.

Color types with `Unorm` in the name are normalized unsigned integer types. For these types, values in the range `[0.0, 1.0]` map to `[0, MAX_UINT]`, where `MAX_UINT` is the largest unsigned integer for the number of bits in the storage size.

Metal stores data in little-endian byte order, with the least-significant byte at the lowest memory address. Formats with multibyte components also store each component in little-endian byte order.

## Topics

### 64-bit integer types

Types for full-range 64-bit integer data.

- [MTLDataTypeLong](mtldatatype/long.md): A 64-bit, signed integer value.
- [MTLDataTypeLong2](mtldatatype/long2.md): A two-component vector with 64-bit, signed integer values.
- [MTLDataTypeLong3](mtldatatype/long3.md): A three-component vector with 64-bit, signed integer values.
- [MTLDataTypeLong4](mtldatatype/long4.md): A four-component vector with 64-bit, signed integer values.
- [MTLDataTypeULong](mtldatatype/ulong.md): A 64-bit, unsigned integer value.
- [MTLDataTypeULong2](mtldatatype/ulong2.md): A two-component vector with 64-bit, unsigned integer values.
- [MTLDataTypeULong3](mtldatatype/ulong3.md): A three-component vector with 64-bit, unsigned integer values.
- [MTLDataTypeULong4](mtldatatype/ulong4.md): A four-component vector with 64-bit, unsigned integer values.

### 64-bit color integer types

Packed, normalized integer types for high-precision color values.

- [MTLDataTypeRGBA16Snorm](mtldatatype/rgba16snorm.md): An ordinary pixel with four components, each of which is a 16-bit, normalized, signed integer value.
- [MTLDataTypeRGBA16Unorm](mtldatatype/rgba16unorm.md): An ordinary pixel with four components, each of which is a 16-bit, normalized, unsigned integer value.

### 32-bit floating-point types

Types for high-precision floating-point data.

- [MTLDataTypeFloat](mtldatatype/float.md): A 32-bit floating-point value.
- [MTLDataTypeFloat2](mtldatatype/float2.md): A two-component vector with 32-bit floating-point values.
- [MTLDataTypeFloat3](mtldatatype/float3.md): A three-component vector with 32-bit floating-point values.
- [MTLDataTypeFloat4](mtldatatype/float4.md): A four-component vector with 32-bit floating-point values.

### 32-bit floating-point matrix types

Matrix types for transformations and linear algebra operations.

- [MTLDataTypeFloat2x2](mtldatatype/float2x2.md): A 2x2 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat2x3](mtldatatype/float2x3.md): A 2x3 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat2x4](mtldatatype/float2x4.md): A 2x4 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat3x2](mtldatatype/float3x2.md): A 3x2 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat3x3](mtldatatype/float3x3.md): A 3x3 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat3x4](mtldatatype/float3x4.md): A 3x4 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat4x2](mtldatatype/float4x2.md): A 4x2 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat4x3](mtldatatype/float4x3.md): A 4x3 component matrix with 32-bit floating-point values.
- [MTLDataTypeFloat4x4](mtldatatype/float4x4.md): A 4x4 component matrix with 32-bit floating-point values.

### 32-bit color floating-point types

Packed, floating-point types for color values.

- [MTLDataTypeRGB9E5Float](mtldatatype/rgb9e5float.md): A packed 32-bit format with three color components, each of which is a 9-bit floating-point value.
- [MTLDataTypeRG11B10Float](mtldatatype/rg11b10float.md): A packed 32-bit format with three floating-point color components, two of which are 11-bit values, and one is a 10-bit value.

### 32-bit color integer types

Packed, normalized integer types for color values.

- [MTLDataTypeRGBA8Snorm](mtldatatype/rgba8snorm.md): An ordinary pixel with four components, each of which is an 8-bit, normalized, signed integer value.
- [MTLDataTypeRGBA8Unorm](mtldatatype/rgba8unorm.md): An ordinary pixel with four components, each of which is an 8-bit, normalized, unsigned integer value.
- [MTLDataTypeRGBA8Unorm_sRGB](mtldatatype/rgba8unorm_srgb.md): An ordinary pixel with four components, each of which is an 8-bit, normalized, unsigned integer value in the sRGB color space.
- [MTLDataTypeRG16Snorm](mtldatatype/rg16snorm.md): An ordinary pixel with two components, each of which is a 16-bit, normalized, signed integer value.
- [MTLDataTypeRG16Unorm](mtldatatype/rg16unorm.md): An ordinary pixel with two components, each of which is a 16-bit, normalized, unsigned integer value.
- [MTLDataTypeRGB10A2Unorm](mtldatatype/rgb10a2unorm.md): A packed 32-bit format with three color components, each of which is a 10-bit, normalized, unsigned integer value.

### 32-bit integer types

Types for full-range 32-bit integer data.

- [MTLDataTypeInt](mtldatatype/int.md): A 32-bit, signed integer value.
- [MTLDataTypeInt2](mtldatatype/int2.md): A two-component vector with 32-bit, signed integer values.
- [MTLDataTypeInt3](mtldatatype/int3.md): A three-component vector with 32-bit, signed integer values.
- [MTLDataTypeInt4](mtldatatype/int4.md): A four-component vector with 32-bit, signed integer values.
- [MTLDataTypeUInt](mtldatatype/uint.md): A 32-bit, unsigned integer value.
- [MTLDataTypeUInt2](mtldatatype/uint2.md): A two-component vector with 32-bit, unsigned integer values.
- [MTLDataTypeUInt3](mtldatatype/uint3.md): A three-component vector with 32-bit, unsigned integer values.
- [MTLDataTypeUInt4](mtldatatype/uint4.md): A four-component vector with 32-bit, unsigned integer values.

### 16-bit floating-point types

Types for half-precision floating-point data that reduce memory bandwidth.

- [MTLDataTypeHalf](mtldatatype/half.md): A 16-bit floating-point value.
- [MTLDataTypeHalf2](mtldatatype/half2.md): A two-component vector with 16-bit floating-point values.
- [MTLDataTypeHalf3](mtldatatype/half3.md): A three-component vector with 16-bit floating-point values.
- [MTLDataTypeHalf4](mtldatatype/half4.md): A four-component vector with 16-bit floating-point values.

### 16-bit floating-point matrix types

Matrix types for transformations and linear algebra operations that reduce memory bandwidth.

- [MTLDataTypeHalf2x2](mtldatatype/half2x2.md): A 2x2 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf2x3](mtldatatype/half2x3.md): A 2x3 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf2x4](mtldatatype/half2x4.md): A 2x4 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf3x2](mtldatatype/half3x2.md): A 3x2 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf3x3](mtldatatype/half3x3.md): A 3x3 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf3x4](mtldatatype/half3x4.md): A 3x4 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf4x2](mtldatatype/half4x2.md): A 4x2 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf4x3](mtldatatype/half4x3.md): A 4x3 component matrix with 16-bit floating-point values.
- [MTLDataTypeHalf4x4](mtldatatype/half4x4.md): A 4x4 component matrix with 16-bit floating-point values.

### 16-bit brain floating-point types

Types for machine learning workloads that balance range and precision.

- [MTLDataTypeBFloat](mtldatatype/bfloat.md): A 16-bit, brain floating-point value.
- [MTLDataTypeBFloat2](mtldatatype/bfloat2.md): A two-component vector with 16-bit, brain floating-point values.
- [MTLDataTypeBFloat3](mtldatatype/bfloat3.md): A three-component vector with 16-bit, brain floating-point values.
- [MTLDataTypeBFloat4](mtldatatype/bfloat4.md): A four-component vector with 16-bit, brain floating-point values.

### 16-bit integer types

Types for integer data that have more range than 8-bit types.

- [MTLDataTypeShort](mtldatatype/short.md): A 16-bit, signed integer value.
- [MTLDataTypeShort2](mtldatatype/short2.md): A two-component vector with 16-bit, signed integer values.
- [MTLDataTypeShort3](mtldatatype/short3.md): A three-component vector with 16-bit, signed integer values.
- [MTLDataTypeShort4](mtldatatype/short4.md): A four-component vector with 16-bit, signed integer values.
- [MTLDataTypeUShort](mtldatatype/ushort.md): A 16-bit, unsigned integer value.
- [MTLDataTypeUShort2](mtldatatype/ushort2.md): A two-component vector with 16-bit, unsigned integer values.
- [MTLDataTypeUShort3](mtldatatype/ushort3.md): A three-component vector with 16-bit, unsigned integer values.
- [MTLDataTypeUShort4](mtldatatype/ushort4.md): A four-component vector with 16-bit, unsigned integer values.

### 16-bit color integer types

Packed, normalized integer types for compact color values.

- [MTLDataTypeRG8Snorm](mtldatatype/rg8snorm.md): An ordinary pixel with two components, each of which is an 8-bit, normalized, signed integer value.
- [MTLDataTypeRG8Unorm](mtldatatype/rg8unorm.md): An ordinary pixel with two components, each of which is an 8-bit, normalized, unsigned integer value.
- [MTLDataTypeR16Snorm](mtldatatype/r16snorm.md): An ordinary pixel with one component that’s a 16-bit, normalized, signed integer value.
- [MTLDataTypeR16Unorm](mtldatatype/r16unorm.md): An ordinary pixel with one component that’s a 16-bit, normalized, unsigned integer value.

### 8-bit integer types

Integer types that reduce memory bandwidth and cache impact.

- [MTLDataTypeChar](mtldatatype/char.md): An 8-bit, signed integer value.
- [MTLDataTypeChar2](mtldatatype/char2.md): A two-component vector with 8-bit, signed integer values.
- [MTLDataTypeChar3](mtldatatype/char3.md): A three-component vector with 8-bit, signed integer values.
- [MTLDataTypeChar4](mtldatatype/char4.md): A four-component vector with 8-bit, signed integer values.
- [MTLDataTypeUChar](mtldatatype/uchar.md): An 8-bit, unsigned integer value.
- [MTLDataTypeUChar2](mtldatatype/uchar2.md): A two-component vector with 8-bit, unsigned integer values.
- [MTLDataTypeUChar3](mtldatatype/uchar3.md): A three-component vector with 8-bit, unsigned integer values.
- [MTLDataTypeUChar4](mtldatatype/uchar4.md): A four-component vector with 8-bit, unsigned integer values.

### 8-bit color integer types

Packed, normalized integer types for compact color values.

- [MTLDataTypeR8Snorm](mtldatatype/r8snorm.md): An ordinary pixel with one component that’s an 8-bit, normalized, signed integer value.
- [MTLDataTypeR8Unorm](mtldatatype/r8unorm.md): An ordinary pixel with one component that’s an 8-bit, normalized, unsigned integer value.

### Boolean types

Logical types for `true` or `false` values.

- [MTLDataTypeBool](mtldatatype/bool.md): A Boolean value.
- [MTLDataTypeBool2](mtldatatype/bool2.md): A two-component Boolean vector.
- [MTLDataTypeBool3](mtldatatype/bool3.md): A three-component Boolean vector.
- [MTLDataTypeBool4](mtldatatype/bool4.md): A four-component Boolean vector.

### Resource types

Types that refer to GPU resources, such as textures and buffers.

- [MTLDataTypeTensor](mtldatatype/tensor.md): Represents a data type corresponding to a machine learning tensor.
- [MTLDataTypeSampler](mtldatatype/sampler.md): A Metal texture sampler instance.
- [MTLDataTypeTexture](mtldatatype/texture.md): A Metal texture resource instance.
- [MTLDataTypeRenderPipeline](mtldatatype/renderpipeline.md): A Metal render pipeline instance.
- [MTLDataTypeComputePipeline](mtldatatype/computepipeline.md): A Metal compute pipeline instance.
- [MTLDataTypeDepthStencilState](mtldatatype/depthstencilstate.md): Represents a data type corresponding to a depth-stencil state object.
- [MTLDataTypeIndirectCommandBuffer](mtldatatype/indirectcommandbuffer.md): An indirect command buffer resource instance.
- [MTLDataTypeVisibleFunctionTable](mtldatatype/visiblefunctiontable.md): A table of visible functions that a render or compute pipeline can call.
- [MTLDataTypeIntersectionFunctionTable](mtldatatype/intersectionfunctiontable.md): A table of intersection functions that a render or compute pipeline can call.
- [MTLDataTypePrimitiveAccelerationStructure](mtldatatype/primitiveaccelerationstructure.md): A low-level ray-tracing acceleration structure for a set of primitives.
- [MTLDataTypeInstanceAccelerationStructure](mtldatatype/instanceaccelerationstructure.md): A high-level, ray-tracing acceleration structure for a set of low-level primitive instances.

### Collection types

Types for structured or indirect data access.

- [MTLDataTypeStruct](mtldatatype/struct.md): A structure instance.
- [MTLDataTypeArray](mtldatatype/array.md): An array instance.
- [MTLDataTypePointer](mtldatatype/pointer.md): A pointer.

### Sentinel values

Special values that represent something other than a valid data type.

- [MTLDataTypeNone](mtldatatype/none.md): A sentinel value that represents a GPU function parameter that doesn’t have a valid data type.

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLArrayType](mtlarraytype.md): A description of an array.
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.
