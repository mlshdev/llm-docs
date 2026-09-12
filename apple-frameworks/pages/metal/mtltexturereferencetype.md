> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltexturereferencetype](https://developer.apple.com/documentation/metal/mtltexturereferencetype)

# MTLTextureReferenceType (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a texture.

## Declaration

```swift
class MTLTextureReferenceType
```

## Topics

### Describing the texture

- [textureType](mtltexturereferencetype/texturetype.md): The texture type of the texture.
- [textureDataType](mtltexturereferencetype/texturedatatype.md): The data type of the texture.
- [access](mtltexturereferencetype/access.md): The texture’s read/write access to the argument.
- [isDepthTexture](mtltexturereferencetype/isdepthtexture.md): A Boolean value that indicates whether the texture is a depth texture.

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
- [MTLPointerType](mtlpointertype.md): A description of a pointer.

# MTLTextureReferenceType (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A description of a texture.

## Declaration

```objectivec
@interface MTLTextureReferenceType : MTLType
```

## Topics

### Describing the texture

- [textureType](mtltexturereferencetype/texturetype.md): The texture type of the texture.
- [textureDataType](mtltexturereferencetype/texturedatatype.md): The data type of the texture.
- [access](mtltexturereferencetype/access.md): The texture’s read/write access to the argument.
- [isDepthTexture](mtltexturereferencetype/isdepthtexture.md): A Boolean value that indicates whether the texture is a depth texture.

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
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
