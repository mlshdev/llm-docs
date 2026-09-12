> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattribute](https://developer.apple.com/documentation/metal/mtlattribute)

# MTLAttribute (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An object that describes an attribute defined in the stage-in argument for a shader.

## Declaration

```swift
class MTLAttribute
```

## Topics

### Reading an attribute’s properties

- [name](mtlattribute/name.md): The name of the attribute.
- [attributeIndex](mtlattribute/attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](mtlattribute/attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [isActive](mtlattribute/isactive.md): A Boolean value that indicates whether the attribute is active.
- [isPatchControlPointData](mtlattribute/ispatchcontrolpointdata.md): A Boolean value that indicates whether the attribute represents control point data.
- [isPatchData](mtlattribute/ispatchdata.md): A Boolean value that indicates whether the attribute represents tessellation patch data.

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

### Function arguments

- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.

# MTLAttribute (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An object that describes an attribute defined in the stage-in argument for a shader.

## Declaration

```objectivec
@interface MTLAttribute : NSObject
```

## Topics

### Reading an attribute’s properties

- [name](mtlattribute/name.md): The name of the attribute.
- [attributeIndex](mtlattribute/attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](mtlattribute/attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [active](mtlattribute/isactive.md): A Boolean value that indicates whether the attribute is active.
- [patchControlPointData](mtlattribute/ispatchcontrolpointdata.md): A Boolean value that indicates whether the attribute represents control point data.
- [patchData](mtlattribute/ispatchdata.md): A Boolean value that indicates whether the attribute represents tessellation patch data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Function arguments

- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.
