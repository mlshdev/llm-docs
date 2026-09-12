> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlarraytype](https://developer.apple.com/documentation/metal/mtlarraytype)

# MTLArrayType (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A description of an array.

## Declaration

```swift
class MTLArrayType
```

<a id="overview"></a>

## Overview

An [MTLArrayType](mtlarraytype.md) instance provides details about an array parameter. Don’t create [MTLArrayType](mtlarraytype.md) instances directly; other reflection instances contain properties to determine if a parameter is an array and to obtain the [MTLArrayType](mtlarraytype.md) instance that describes the array.

## Topics

### Describing the array elements

- [arrayLength](mtlarraytype/arraylength.md): The number of elements in the array.
- [elementType](mtlarraytype/elementtype.md): The data type of the array’s elements.
- [stride](mtlarraytype/stride.md): The stride between array elements, in bytes.
- [argumentIndexStride](mtlarraytype/argumentindexstride.md): The stride, in bytes, between argument indices.

### Obtaining details for complex array elements

- [element()](mtlarraytype/element%28%29.md): Provides a description of the underlying type when an array holds other arrays as its elements.
- [elementStructType()](mtlarraytype/elementstructtype%28%29.md): Provides a description of the underlying struct type when an array holds structs as its elements.
- [elementPointerType()](mtlarraytype/elementpointertype%28%29.md): Provides a description of the underlying pointer type when an array holds pointers as its elements.
- [elementTextureReferenceType()](mtlarraytype/elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.

### Instance Methods

- [elementTensorReferenceType()](mtlarraytype/elementtensorreferencetype%28%29.md): Provides a description of the underlying tensor type when this array holds tensors as its elements.

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
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.

# MTLArrayType (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A description of an array.

## Declaration

```objectivec
@interface MTLArrayType : MTLType
```

<a id="overview"></a>

## Overview

An [MTLArrayType](mtlarraytype.md) instance provides details about an array parameter. Don’t create [MTLArrayType](mtlarraytype.md) instances directly; other reflection instances contain properties to determine if a parameter is an array and to obtain the [MTLArrayType](mtlarraytype.md) instance that describes the array.

## Topics

### Describing the array elements

- [arrayLength](mtlarraytype/arraylength.md): The number of elements in the array.
- [elementType](mtlarraytype/elementtype.md): The data type of the array’s elements.
- [stride](mtlarraytype/stride.md): The stride between array elements, in bytes.
- [argumentIndexStride](mtlarraytype/argumentindexstride.md): The stride, in bytes, between argument indices.

### Obtaining details for complex array elements

- [elementArrayType](mtlarraytype/element%28%29.md): Provides a description of the underlying type when an array holds other arrays as its elements.
- [elementStructType](mtlarraytype/elementstructtype%28%29.md): Provides a description of the underlying struct type when an array holds structs as its elements.
- [elementPointerType](mtlarraytype/elementpointertype%28%29.md): Provides a description of the underlying pointer type when an array holds pointers as its elements.
- [elementTextureReferenceType](mtlarraytype/elementtexturereferencetype%28%29.md): Provides a description of the underlying texture type when an array holds textures as its elements.

### Instance Methods

- [elementTensorReferenceType](mtlarraytype/elementtensorreferencetype%28%29.md): Provides a description of the underlying tensor type when this array holds tensors as its elements.

## Relationships

### Inherits From

- [MTLType](mtltype.md)

## See Also

### Shader types

- [MTLType](mtltype.md): A description of a data type.
- [MTLDataType](mtldatatype.md): The parameter type options for GPU functions, such as shaders and compute kernels.
- [MTLStructType](mtlstructtype.md): A description of a structure.
- [MTLStructMember](mtlstructmember.md): An instance that provides information about a field in a structure.
- [MTLPointerType](mtlpointertype.md): A description of a pointer.
- [MTLTextureReferenceType](mtltexturereferencetype.md): A description of a texture.
