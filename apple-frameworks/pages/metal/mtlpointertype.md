> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpointertype](https://developer.apple.com/documentation/metal/mtlpointertype)

# MTLPointerType (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a pointer.

## Declaration

```swift
class MTLPointerType
```

## Topics

### Describing the pointer elements

- [alignment](mtlpointertype/alignment.md): The required byte alignment in memory for the element data.
- [dataSize](mtlpointertype/datasize.md): The size, in bytes, of the element data.
- [elementType](mtlpointertype/elementtype.md): The data type of the element data.
- [access](mtlpointertype/access.md): The function’s read/write access to the element data.
- [elementIsArgumentBuffer](mtlpointertype/elementisargumentbuffer.md): A Boolean value that indicates whether the element is an argument buffer.

### Obtaining details for complex pointer elements

- [elementArrayType()](mtlpointertype/elementarraytype%28%29.md): Provides a description of the underlying array when the pointer points to an array.
- [elementStructType()](mtlpointertype/elementstructtype%28%29.md): Provides a description of the underlying struct when the pointer points to a struct.

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
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.

# MTLPointerType (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a pointer.

## Declaration

```objectivec
@interface MTLPointerType : MTLType
```

## Topics

### Describing the pointer elements

- [alignment](mtlpointertype/alignment.md): The required byte alignment in memory for the element data.
- [dataSize](mtlpointertype/datasize.md): The size, in bytes, of the element data.
- [elementType](mtlpointertype/elementtype.md): The data type of the element data.
- [access](mtlpointertype/access.md): The function’s read/write access to the element data.
- [elementIsArgumentBuffer](mtlpointertype/elementisargumentbuffer.md): A Boolean value that indicates whether the element is an argument buffer.

### Obtaining details for complex pointer elements

- [elementArrayType](mtlpointertype/elementarraytype%28%29.md): Provides a description of the underlying array when the pointer points to an array.
- [elementStructType](mtlpointertype/elementstructtype%28%29.md): Provides a description of the underlying struct when the pointer points to a struct.

## Relationships

### Inherits From

- [MTLType](mtltype.md)

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLDataType](mtldatatype.md): The parameter type options for GPU functions, such as shaders and compute kernels.
- [MTLArrayType](mtlarraytype.md): A description of an array.
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.
