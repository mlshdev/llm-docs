> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbufferlayoutdescriptorarray](https://developer.apple.com/documentation/metal/mtlbufferlayoutdescriptorarray)

# MTLBufferLayoutDescriptorArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An array of buffer layout descriptor objects.

## Declaration

```swift
class MTLBufferLayoutDescriptorArray
```

<a id="overview"></a>

## Overview

An [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md) defines the data layout and loading for compute data, using [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md) instances.

## Topics

### Array accessors

- [subscript(\_:)](mtlbufferlayoutdescriptorarray/subscript%28__%29.md): Returns the state of the specified buffer layout.

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

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptor](mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.

# MTLBufferLayoutDescriptorArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An array of buffer layout descriptor objects.

## Declaration

```objectivec
@interface MTLBufferLayoutDescriptorArray : NSObject
```

<a id="overview"></a>

## Overview

An [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md) defines the data layout and loading for compute data, using [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md) instances.

## Topics

### Array accessors

- [objectAtIndexedSubscript:](mtlbufferlayoutdescriptorarray/subscript%28__%29.md): Returns the state of the specified buffer layout.
- [setObject:atIndexedSubscript:](mtlbufferlayoutdescriptorarray/setobject_atindexedsubscript_.md): Sets the state of the specified buffer layout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptor](mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
