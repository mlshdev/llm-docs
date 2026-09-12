> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructmember](https://developer.apple.com/documentation/metal/mtlstructmember)

# MTLStructMember (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that provides information about a field in a structure.

## Declaration

```swift
class MTLStructMember
```

<a id="overview"></a>

## Overview

[MTLStructMember](mtlstructmember.md) is part of the reflection API that allows Metal framework code to query details about an argument of a Metal shading language function. An [MTLStructMember](mtlstructmember.md) instance describes the data type of one field in a struct that is passed as an [MTLFunction](mtlfunction.md) argument, which is represented by [MTLArgument](mtlargument.md).

Don’t create [MTLStructMember](mtlstructmember.md) instances directly. You obtain an [MTLStructMember](mtlstructmember.md) instance from either the [members](mtlstructtype/members.md) property or the [memberByName(\_:)](mtlstructtype/memberbyname%28__%29.md) method of an [MTLStructType](mtlstructtype.md) instance. The [dataType](mtlstructmember/datatype.md) property of the [MTLStructMember](mtlstructmember.md) instance tells you what kind of data is stored in the member. Recursively drill down every struct member until you reach a data type that is neither a struct nor an array.

## Topics

### Describing the struct member

- [name](mtlstructmember/name.md): The name of the struct member.
- [dataType](mtlstructmember/datatype.md): The data type of the struct member.
- [offset](mtlstructmember/offset.md): The location of this member relative to the start of its struct, in bytes.
- [argumentIndex](mtlstructmember/argumentindex.md): The index in the argument table that corresponds to the struct member.

### Obtaining struct member details

- [arrayType()](mtlstructmember/arraytype%28%29.md): Provides a description of the underlying array when the struct member holds an array.
- [structType()](mtlstructmember/structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [pointerType()](mtlstructmember/pointertype%28%29.md): Provides a description of the underlying pointer when the struct member holds a pointer.
- [textureReferenceType()](mtlstructmember/texturereferencetype%28%29.md): Provides a description of the underlying texture when the struct member holds a texture.

### Instance Methods

- [tensorReferenceType()](mtlstructmember/tensorreferencetype%28%29.md): Provides a description of the underlying tensor type when this struct member holds a tensor.

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

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLDataType](mtldatatype.md): The parameter type options for GPU functions, such as shaders and compute kernels.
- [MTLArrayType](mtlarraytype.md): A description of an array.
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.

# MTLStructMember (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that provides information about a field in a structure.

## Declaration

```objectivec
@interface MTLStructMember : NSObject
```

<a id="overview"></a>

## Overview

[MTLStructMember](mtlstructmember.md) is part of the reflection API that allows Metal framework code to query details about an argument of a Metal shading language function. An [MTLStructMember](mtlstructmember.md) instance describes the data type of one field in a struct that is passed as an [MTLFunction](mtlfunction.md) argument, which is represented by [MTLArgument](mtlargument.md).

Don’t create [MTLStructMember](mtlstructmember.md) instances directly. You obtain an [MTLStructMember](mtlstructmember.md) instance from either the [members](mtlstructtype/members.md) property or the [memberByName:](mtlstructtype/memberbyname%28__%29.md) method of an [MTLStructType](mtlstructtype.md) instance. The [dataType](mtlstructmember/datatype.md) property of the [MTLStructMember](mtlstructmember.md) instance tells you what kind of data is stored in the member. Recursively drill down every struct member until you reach a data type that is neither a struct nor an array.

## Topics

### Describing the struct member

- [name](mtlstructmember/name.md): The name of the struct member.
- [dataType](mtlstructmember/datatype.md): The data type of the struct member.
- [offset](mtlstructmember/offset.md): The location of this member relative to the start of its struct, in bytes.
- [argumentIndex](mtlstructmember/argumentindex.md): The index in the argument table that corresponds to the struct member.

### Obtaining struct member details

- [arrayType](mtlstructmember/arraytype%28%29.md): Provides a description of the underlying array when the struct member holds an array.
- [structType](mtlstructmember/structtype%28%29.md): Provides a description of the underlying struct when the struct member holds a struct.
- [pointerType](mtlstructmember/pointertype%28%29.md): Provides a description of the underlying pointer when the struct member holds a pointer.
- [textureReferenceType](mtlstructmember/texturereferencetype%28%29.md): Provides a description of the underlying texture when the struct member holds a texture.

### Instance Methods

- [tensorReferenceType](mtlstructmember/tensorreferencetype%28%29.md): Provides a description of the underlying tensor type when this struct member holds a tensor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLDataType](mtldatatype.md): The parameter type options for GPU functions, such as shaders and compute kernels.
- [MTLArrayType](mtlarraytype.md): A description of an array.
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.
