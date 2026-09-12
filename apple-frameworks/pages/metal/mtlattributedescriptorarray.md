> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlattributedescriptorarray](https://developer.apple.com/documentation/metal/mtlattributedescriptorarray)

# MTLAttributeDescriptorArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An array of attribute descriptor objects.

## Declaration

```swift
class MTLAttributeDescriptorArray
```

<a id="overview"></a>

## Overview

An [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md) defines the data format and index binding for the attribute argument table, using [MTLAttributeDescriptor](mtlattributedescriptor.md) instances.

## Topics

### Accessing attribute state objects

- [subscript(\_:)](mtlattributedescriptorarray/subscript%28__%29.md): Returns the state of the specified attribute.

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
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.

# MTLAttributeDescriptorArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

An array of attribute descriptor objects.

## Declaration

```objectivec
@interface MTLAttributeDescriptorArray : NSObject
```

<a id="overview"></a>

## Overview

An [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md) defines the data format and index binding for the attribute argument table, using [MTLAttributeDescriptor](mtlattributedescriptor.md) instances.

## Topics

### Accessing attribute state objects

- [objectAtIndexedSubscript:](mtlattributedescriptorarray/subscript%28__%29.md): Returns the state of the specified attribute.
- [setObject:atIndexedSubscript:](mtlattributedescriptorarray/setobject_atindexedsubscript_.md): Sets state for the specified attribute.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptor](mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLBufferLayoutDescriptor](mtlbufferlayoutdescriptor.md): A description of how a compute function fetches input data for an attribute.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.
