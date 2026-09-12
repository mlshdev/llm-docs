> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctionbufferarguments](https://developer.apple.com/documentation/metal/mtlintersectionfunctionbufferarguments)

# MTLIntersectionFunctionBufferArguments (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct MTLIntersectionFunctionBufferArguments
```

<a id="overview"></a>

## Overview

Struct containing arguments for intersection function buffers.

## Topics

### Initializers

- [init()](mtlintersectionfunctionbufferarguments/init%28%29.md)
- [init(intersectionFunctionBuffer:intersectionFunctionBufferSize:intersectionFunctionStride:)](mtlintersectionfunctionbufferarguments/init%28intersectionfunctionbuffer_intersectionfunctionbuffersize_intersectionfunctionstride_%29.md)

### Instance Properties

- [intersectionFunctionBuffer](mtlintersectionfunctionbufferarguments/intersectionfunctionbuffer.md)
- [intersectionFunctionBufferSize](mtlintersectionfunctionbufferarguments/intersectionfunctionbuffersize.md)
- [intersectionFunctionStride](mtlintersectionfunctionbufferarguments/intersectionfunctionstride.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Intersection function tables

- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionSignature](mtlintersectionfunctionsignature.md): Constants for specifying different types of custom intersection functions.

# MTLIntersectionFunctionBufferArguments (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef struct { ... } MTLIntersectionFunctionBufferArguments;
```

<a id="overview"></a>

## Overview

Struct containing arguments for intersection function buffers.

## Topics

### Instance Properties

- [intersectionFunctionBuffer](mtlintersectionfunctionbufferarguments/intersectionfunctionbuffer.md)
- [intersectionFunctionBufferSize](mtlintersectionfunctionbufferarguments/intersectionfunctionbuffersize.md)
- [intersectionFunctionStride](mtlintersectionfunctionbufferarguments/intersectionfunctionstride.md)

## See Also

### Intersection function tables

- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionSignature](mtlintersectionfunctionsignature.md): Constants for specifying different types of custom intersection functions.
