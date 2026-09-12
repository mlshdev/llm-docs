> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvisiblefunctiontabledescriptor](https://developer.apple.com/documentation/metal/mtlvisiblefunctiontabledescriptor)

# MTLVisibleFunctionTableDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A specification of how to create a visible function table.

## Declaration

```swift
class MTLVisibleFunctionTableDescriptor
```

## Topics

### Configuring the function table

- [functionCount](mtlvisiblefunctiontabledescriptor/functioncount.md): The number of entries in the function table.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.

# MTLVisibleFunctionTableDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A specification of how to create a visible function table.

## Declaration

```objectivec
@interface MTLVisibleFunctionTableDescriptor : NSObject
```

## Topics

### Creating a visible function table descriptor

- [visibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor/visiblefunctiontabledescriptor.md): Creates a default visible function table descriptor.

### Configuring the function table

- [functionCount](mtlvisiblefunctiontabledescriptor/functioncount.md): The number of entries in the function table.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
