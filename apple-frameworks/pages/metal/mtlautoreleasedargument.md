> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlautoreleasedargument](https://developer.apple.com/documentation/metal/mtlautoreleasedargument)

# MTLAutoreleasedArgument (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A convenience type alias for an autoreleased argument instance.

> Use [MTLBinding](mtlbinding.md) instead, and cast it to specific binding type, such as [MTLTextureBinding](mtltexturebinding.md), [MTLBufferBinding](mtlbufferbinding.md), and so on.

## Declaration

```swift
typealias MTLAutoreleasedArgument = MTLArgument
```

## See Also

### Function arguments

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.

# MTLAutoreleasedArgument (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A convenience type alias for an autoreleased argument instance.

> Use [MTLBinding](mtlbinding.md) instead, and cast it to specific binding type, such as [MTLTextureBinding](mtltexturebinding.md), [MTLBufferBinding](mtlbufferbinding.md), and so on.

## Declaration

```objectivec
typedef MTLArgument * MTLAutoreleasedArgument;
```

## See Also

### Function arguments

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLArgumentType](mtlargumenttype.md): Deprecated. The resource type for an argument of a function.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.
