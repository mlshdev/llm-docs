> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument](https://developer.apple.com/documentation/metal/mtlargument)

# MTLArgument (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Information about an argument of a graphics or compute function.

## Declaration

```swift
class MTLArgument
```

<a id="overview"></a>

## Overview

An [MTLArgument](mtlargument.md) instance describes a single argument to a Metal function. Your app uses the [MTLArgument](mtlargument.md) properties to read details about a function argument as it was defined in the Metal Shading Language. You can determine the argument’s data type, access restrictions, and its associated resource type. For buffer, texture, and threadgroup memory arguments, additional properties can be read to determine more details about the argument.

Your app does not create an [MTLArgument](mtlargument.md) instance directly. Creating an [MTLRenderPipelineState](mtlrenderpipelinestate.md) or [MTLComputePipelineState](mtlcomputepipelinestate.md) instance can generate a reflection instance ([MTLRenderPipelineReflection](mtlrenderpipelinereflection.md) or [MTLComputePipelineReflection](mtlcomputepipelinereflection.md)) that contains [MTLArgument](mtlargument.md) instances.

## Topics

### Describing the argument

- [name](mtlargument/name.md): Deprecated. The name of the argument.
- [isActive](mtlargument/isactive.md): Deprecated. A Boolean that indicates whether the compiled function uses the argument.
- [index](mtlargument/index.md): Deprecated. The index in the argument table that corresponds to the function argument.
- [type](mtlargument/type.md): Deprecated. The argument’s resource type.
- [access](mtlargument/access.md): Deprecated. The argument’s read and/or write access.

### Describing a buffer argument

- [bufferAlignment](mtlargument/bufferalignment.md): Deprecated. The required byte alignment in memory for the buffer data.
- [bufferDataSize](mtlargument/bufferdatasize.md): Deprecated. The size, in bytes, of the buffer data.
- [bufferDataType](mtlargument/bufferdatatype.md): Deprecated. The data type of the buffer data.
- [bufferStructType](mtlargument/bufferstructtype.md): Deprecated. A description of the structure data of a buffer argument.
- [bufferPointerType](mtlargument/bufferpointertype.md): Deprecated. A description of the pointer to a buffer argument.

### Describing a texture argument

- [textureDataType](mtlargument/texturedatatype.md): Deprecated. The data type of a texture argument.
- [textureType](mtlargument/texturetype.md): Deprecated. The texture type of a texture argument.
- [isDepthTexture](mtlargument/isdepthtexture.md): Deprecated. A Boolean value that indicates whether the texture is a depth texture.

### Describing an array argument

- [arrayLength](mtlargument/arraylength.md): Deprecated. The number of elements, if the argument is an array.

### Describing a threadgroup memory argument

- [threadgroupMemoryAlignment](mtlargument/threadgroupmemoryalignment.md): Deprecated. The required byte alignment in memory for the threadgroup data.
- [threadgroupMemoryDataSize](mtlargument/threadgroupmemorydatasize.md): Deprecated. The size, in bytes, of the threadgroup data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Function arguments

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.

# MTLArgument (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Information about an argument of a graphics or compute function.

## Declaration

```objectivec
@interface MTLArgument : NSObject
```

<a id="overview"></a>

## Overview

An [MTLArgument](mtlargument.md) instance describes a single argument to a Metal function. Your app uses the [MTLArgument](mtlargument.md) properties to read details about a function argument as it was defined in the Metal Shading Language. You can determine the argument’s data type, access restrictions, and its associated resource type. For buffer, texture, and threadgroup memory arguments, additional properties can be read to determine more details about the argument.

Your app does not create an [MTLArgument](mtlargument.md) instance directly. Creating an [MTLRenderPipelineState](mtlrenderpipelinestate.md) or [MTLComputePipelineState](mtlcomputepipelinestate.md) instance can generate a reflection instance ([MTLRenderPipelineReflection](mtlrenderpipelinereflection.md) or [MTLComputePipelineReflection](mtlcomputepipelinereflection.md)) that contains [MTLArgument](mtlargument.md) instances.

## Topics

### Describing the argument

- [name](mtlargument/name.md): Deprecated. The name of the argument.
- [active](mtlargument/isactive.md): Deprecated. A Boolean that indicates whether the compiled function uses the argument.
- [index](mtlargument/index.md): Deprecated. The index in the argument table that corresponds to the function argument.
- [type](mtlargument/type.md): Deprecated. The argument’s resource type.
- [access](mtlargument/access.md): Deprecated. The argument’s read and/or write access.

### Describing a buffer argument

- [bufferAlignment](mtlargument/bufferalignment.md): Deprecated. The required byte alignment in memory for the buffer data.
- [bufferDataSize](mtlargument/bufferdatasize.md): Deprecated. The size, in bytes, of the buffer data.
- [bufferDataType](mtlargument/bufferdatatype.md): Deprecated. The data type of the buffer data.
- [bufferStructType](mtlargument/bufferstructtype.md): Deprecated. A description of the structure data of a buffer argument.
- [bufferPointerType](mtlargument/bufferpointertype.md): Deprecated. A description of the pointer to a buffer argument.

### Describing a texture argument

- [textureDataType](mtlargument/texturedatatype.md): Deprecated. The data type of a texture argument.
- [textureType](mtlargument/texturetype.md): Deprecated. The texture type of a texture argument.
- [isDepthTexture](mtlargument/isdepthtexture.md): Deprecated. A Boolean value that indicates whether the texture is a depth texture.

### Describing an array argument

- [arrayLength](mtlargument/arraylength.md): Deprecated. The number of elements, if the argument is an array.

### Describing a threadgroup memory argument

- [threadgroupMemoryAlignment](mtlargument/threadgroupmemoryalignment.md): Deprecated. The required byte alignment in memory for the threadgroup data.
- [threadgroupMemoryDataSize](mtlargument/threadgroupmemorydatasize.md): Deprecated. The size, in bytes, of the threadgroup data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Function arguments

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.
