> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattributedescriptor](https://developer.apple.com/documentation/metal/mtlattributedescriptor)

# MTLAttributeDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A descriptor of an argument’s format and where its data is in memory.

## Declaration

```swift
class MTLAttributeDescriptor
```

<a id="overview"></a>

## Overview

Attribute descriptors are part of an [MTLVertexDescriptor](mtlvertexdescriptor.md) or [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md) instance to provide layout information about a function’s arguments. Each descriptor is for a single argument, containing information about the attached data, offset and stride, and data type.

## Topics

### Defining attribute location

- [bufferIndex](mtlattributedescriptor/bufferindex.md): The index in the buffer argument table for the buffer that contains the data for this attribute.
- [offset](mtlattributedescriptor/offset.md): The offset, in bytes, from the start of the buffer that contains the attribute data to the start of the data itself.
- [format](mtlattributedescriptor/format.md): The format of the attribute’s data.
- [MTLAttributeFormat](mtlattributeformat.md): The data format options for acceleration structures.

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

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.

# MTLAttributeDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A descriptor of an argument’s format and where its data is in memory.

## Declaration

```objectivec
@interface MTLAttributeDescriptor : NSObject
```

<a id="overview"></a>

## Overview

Attribute descriptors are part of an [MTLVertexDescriptor](mtlvertexdescriptor.md) or [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md) instance to provide layout information about a function’s arguments. Each descriptor is for a single argument, containing information about the attached data, offset and stride, and data type.

## Topics

### Defining attribute location

- [bufferIndex](mtlattributedescriptor/bufferindex.md): The index in the buffer argument table for the buffer that contains the data for this attribute.
- [offset](mtlattributedescriptor/offset.md): The offset, in bytes, from the start of the buffer that contains the attribute data to the start of the data itself.
- [format](mtlattributedescriptor/format.md): The format of the attribute’s data.
- [MTLAttributeFormat](mtlattributeformat.md): The data format options for acceleration structures.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.
