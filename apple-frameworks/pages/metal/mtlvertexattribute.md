> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexattribute](https://developer.apple.com/documentation/metal/mtlvertexattribute)

# MTLVertexAttribute (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that represents an attribute of a vertex function.

## Declaration

```swift
class MTLVertexAttribute
```

<a id="overview"></a>

## Overview

An [MTLVertexAttribute](mtlvertexattribute.md) instance represents an attribute for per-vertex input in a vertex function. You use vertex attribute instances to inspect the inputs of a vertex function by examining the [vertexAttributes](mtlfunction/vertexattributes.md) property of the corresponding [MTLFunction](mtlfunction.md) instance.

## Topics

### Describing the attribute

- [name](mtlvertexattribute/name.md): The name of the attribute.
- [attributeIndex](mtlvertexattribute/attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](mtlvertexattribute/attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [isActive](mtlvertexattribute/isactive.md): A Boolean value that indicates whether this vertex attribute is active.
- [isPatchControlPointData](mtlvertexattribute/ispatchcontrolpointdata.md): A Boolean value that indicates whether this vertex attribute represents control point data.
- [isPatchData](mtlvertexattribute/ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.

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

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.

# MTLVertexAttribute (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that represents an attribute of a vertex function.

## Declaration

```objectivec
@interface MTLVertexAttribute : NSObject
```

<a id="overview"></a>

## Overview

An [MTLVertexAttribute](mtlvertexattribute.md) instance represents an attribute for per-vertex input in a vertex function. You use vertex attribute instances to inspect the inputs of a vertex function by examining the [vertexAttributes](mtlfunction/vertexattributes.md) property of the corresponding [MTLFunction](mtlfunction.md) instance.

## Topics

### Describing the attribute

- [name](mtlvertexattribute/name.md): The name of the attribute.
- [attributeIndex](mtlvertexattribute/attributeindex.md): The index of the attribute, as declared in Metal shader source code.
- [attributeType](mtlvertexattribute/attributetype.md): The data type for the attribute, as declared in Metal shader source code.
- [active](mtlvertexattribute/isactive.md): A Boolean value that indicates whether this vertex attribute is active.
- [patchControlPointData](mtlvertexattribute/ispatchcontrolpointdata.md): A Boolean value that indicates whether this vertex attribute represents control point data.
- [patchData](mtlvertexattribute/ispatchdata.md): A Boolean value that indicates whether this vertex attribute represents patch data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Function arguments

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.
