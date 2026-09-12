> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontabledescriptor](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontabledescriptor)

# MTLIntersectionFunctionTableDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A specification of how to create an intersection function table.

## Declaration

```swift
class MTLIntersectionFunctionTableDescriptor
```

## Topics

### Configuring the table’s size

- [functionCount](mtlintersectionfunctiontabledescriptor/functioncount.md): The number of entries in the intersection function table.

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

### Intersection function tables

- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionSignature](mtlintersectionfunctionsignature.md): Constants for specifying different types of custom intersection functions.
- [MTLIntersectionFunctionBufferArguments](mtlintersectionfunctionbufferarguments.md)

# MTLIntersectionFunctionTableDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A specification of how to create an intersection function table.

## Declaration

```objectivec
@interface MTLIntersectionFunctionTableDescriptor : NSObject
```

## Topics

### Creating an intersection function table descriptor

- [intersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor/intersectionfunctiontabledescriptor.md): Creates an intersection function table descriptor.

### Configuring the table’s size

- [functionCount](mtlintersectionfunctiontabledescriptor/functioncount.md): The number of entries in the intersection function table.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Intersection function tables

- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionSignature](mtlintersectionfunctionsignature.md): Constants for specifying different types of custom intersection functions.
- [MTLIntersectionFunctionBufferArguments](mtlintersectionfunctionbufferarguments.md)
