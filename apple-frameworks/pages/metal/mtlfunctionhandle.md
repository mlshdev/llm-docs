> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionhandle](https://developer.apple.com/documentation/metal/mtlfunctionhandle)

# MTLFunctionHandle (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An object representing a function that you can add to a visible function table.

## Declaration

```swift
protocol MTLFunctionHandle : NSObjectProtocol, Sendable
```

## Topics

### Querying handle properties

- [device](mtlfunctionhandle/device.md): The device object that created the shader function.
- [functionType](mtlfunctionhandle/functiontype.md): The shader function’s type.
- [name](mtlfunctionhandle/name.md): The function’s name.

### Instance Properties

- [gpuResourceID](mtlfunctionhandle/gpuresourceid.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.

# MTLFunctionHandle (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

An object representing a function that you can add to a visible function table.

## Declaration

```objectivec
@protocol MTLFunctionHandle <NSObject>
```

## Topics

### Querying handle properties

- [device](mtlfunctionhandle/device.md): The device object that created the shader function.
- [functionType](mtlfunctionhandle/functiontype.md): The shader function’s type.
- [name](mtlfunctionhandle/name.md): The function’s name.

### Instance Properties

- [gpuResourceID](mtlfunctionhandle/gpuresourceid.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLVisibleFunctionTable](mtlvisiblefunctiontable.md): A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
