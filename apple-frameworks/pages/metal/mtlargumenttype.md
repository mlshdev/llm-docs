> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumenttype](https://developer.apple.com/documentation/metal/mtlargumenttype)

# MTLArgumentType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The resource type for an argument of a function.

## Declaration

```swift
enum MTLArgumentType
```

## Topics

### Argument types

- [MTLArgumentType.buffer](mtlargumenttype/buffer.md): Deprecated. The argument is a buffer.
- [MTLArgumentType.threadgroupMemory](mtlargumenttype/threadgroupmemory.md): Deprecated. The argument is a pointer to threadgroup memory.
- [MTLArgumentType.texture](mtlargumenttype/texture.md): Deprecated. The argument is a texture.
- [MTLArgumentType.sampler](mtlargumenttype/sampler.md): Deprecated. The argument is a texture sampler.
- [MTLArgumentType.imageblock](mtlargumenttype/imageblock.md): Deprecated. The argument is an imageblock.
- [MTLArgumentType.imageblockData](mtlargumenttype/imageblockdata.md): Deprecated. The argument is imageblock data.
- [MTLArgumentType.visibleFunctionTable](mtlargumenttype/visiblefunctiontable.md): Deprecated. The argument is a visible function table.
- [MTLArgumentType.intersectionFunctionTable](mtlargumenttype/intersectionfunctiontable.md): Deprecated. The argument is an intersection function table.
- [MTLArgumentType.primitiveAccelerationStructure](mtlargumenttype/primitiveaccelerationstructure.md): Deprecated. The argument is a bottom-level ray tracing acceleraton structure for a set of primitives.
- [MTLArgumentType.instanceAccelerationStructure](mtlargumenttype/instanceaccelerationstructure.md): Deprecated. The argument is a top-level ray tracing acceleration structure for a set of instances.

### Initializers

- [init(rawValue:)](mtlargumenttype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Function arguments

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.

# MTLArgumentType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The resource type for an argument of a function.

## Declaration

```objectivec
enum MTLArgumentType : NSUInteger;
```

## Topics

### Argument types

- [MTLArgumentTypeBuffer](mtlargumenttype/buffer.md): Deprecated. The argument is a buffer.
- [MTLArgumentTypeThreadgroupMemory](mtlargumenttype/threadgroupmemory.md): Deprecated. The argument is a pointer to threadgroup memory.
- [MTLArgumentTypeTexture](mtlargumenttype/texture.md): Deprecated. The argument is a texture.
- [MTLArgumentTypeSampler](mtlargumenttype/sampler.md): Deprecated. The argument is a texture sampler.
- [MTLArgumentTypeImageblock](mtlargumenttype/imageblock.md): Deprecated. The argument is an imageblock.
- [MTLArgumentTypeImageblockData](mtlargumenttype/imageblockdata.md): Deprecated. The argument is imageblock data.
- [MTLArgumentTypeVisibleFunctionTable](mtlargumenttype/visiblefunctiontable.md): Deprecated. The argument is a visible function table.
- [MTLArgumentTypeIntersectionFunctionTable](mtlargumenttype/intersectionfunctiontable.md): Deprecated. The argument is an intersection function table.
- [MTLArgumentTypePrimitiveAccelerationStructure](mtlargumenttype/primitiveaccelerationstructure.md): Deprecated. The argument is a bottom-level ray tracing acceleraton structure for a set of primitives.
- [MTLArgumentTypeInstanceAccelerationStructure](mtlargumenttype/instanceaccelerationstructure.md): Deprecated. The argument is a top-level ray tracing acceleration structure for a set of instances.

## See Also

### Function arguments

- [MTLAttribute](mtlattribute.md): An object that describes an attribute defined in the stage-in argument for a shader.
- [MTLVertexAttribute](mtlvertexattribute.md): An instance that represents an attribute of a vertex function.
- [MTLArgument](mtlargument.md): Deprecated. Information about an argument of a graphics or compute function.
- [MTLAutoreleasedArgument](mtlautoreleasedargument.md): Deprecated. A convenience type alias for an autoreleased argument instance.
- [MTLArgumentAccess](mtlargumentaccess.md): Deprecated. Function access restrictions to argument data in the shading language code.
