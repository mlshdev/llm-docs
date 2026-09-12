> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructtype](https://developer.apple.com/documentation/metal/mtlstructtype)

# MTLStructType (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A description of a structure.

## Declaration

```swift
class MTLStructType
```

<a id="overview"></a>

## Overview

[MTLStructType](mtlstructtype.md) is part of the reflection API that allows Metal framework code to query details of a struct that is passed as an argument of a Metal shading language function. Don’t create [MTLStructType](mtlstructtype.md) instances directly; instead query the [bufferStructType](mtlargument/bufferstructtype.md) property of an [MTLArgument](mtlargument.md) instance, or call the [structType()](mtlstructmember/structtype%28%29.md) method for an [MTLStructMember](mtlstructmember.md) instance. To examine the details of the struct, you can recursively drill down the [members](mtlstructtype/members.md) property of the [MTLStructType](mtlstructtype.md) instance, which contains details about struct members, each of which is represented by an [MTLStructMember](mtlstructmember.md) instance.

## Topics

### Obtaining information about struct members

- [members](mtlstructtype/members.md): An array of instances that describe the fields in the struct.
- [memberByName(\_:)](mtlstructtype/memberbyname%28__%29.md): Provides a representation of a struct member.

## Relationships

### Inherits From

- [MTLType](mtltype.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLDataType](mtldatatype.md): The parameter type options for GPU functions, such as shaders and compute kernels.
- [MTLArrayType](mtlarraytype.md): A description of an array.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.

# MTLStructType (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A description of a structure.

## Declaration

```objectivec
@interface MTLStructType : MTLType
```

<a id="overview"></a>

## Overview

[MTLStructType](mtlstructtype.md) is part of the reflection API that allows Metal framework code to query details of a struct that is passed as an argument of a Metal shading language function. Don’t create [MTLStructType](mtlstructtype.md) instances directly; instead query the [bufferStructType](mtlargument/bufferstructtype.md) property of an [MTLArgument](mtlargument.md) instance, or call the [structType](mtlstructmember/structtype%28%29.md) method for an [MTLStructMember](mtlstructmember.md) instance. To examine the details of the struct, you can recursively drill down the [members](mtlstructtype/members.md) property of the [MTLStructType](mtlstructtype.md) instance, which contains details about struct members, each of which is represented by an [MTLStructMember](mtlstructmember.md) instance.

## Topics

### Obtaining information about struct members

- [members](mtlstructtype/members.md): An array of instances that describe the fields in the struct.
- [memberByName:](mtlstructtype/memberbyname%28__%29.md): Provides a representation of a struct member.

## Relationships

### Inherits From

- [MTLType](mtltype.md)

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLDataType](mtldatatype.md): The parameter type options for GPU functions, such as shaders and compute kernels.
- [MTLArrayType](mtlarraytype.md): A description of an array.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.
