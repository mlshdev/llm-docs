> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbufferlayoutdescriptor](https://developer.apple.com/documentation/metal/mtlbufferlayoutdescriptor)

# MTLBufferLayoutDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A description of how a compute function fetches input data for an attribute.

## Declaration

```swift
class MTLBufferLayoutDescriptor
```

## Topics

### Describing fetch behavior

- [stride](mtlbufferlayoutdescriptor/stride.md): The number of bytes from one buffer entry to the next.
- [stepFunction](mtlbufferlayoutdescriptor/stepfunction.md): Determines how and when compute functions fetch data.
- [stepRate](mtlbufferlayoutdescriptor/steprate.md): How frequently the step function should load data.
- [MTLStepFunction](mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.

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
- [MTLAttributeDescriptor](mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.

# MTLBufferLayoutDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A description of how a compute function fetches input data for an attribute.

## Declaration

```objectivec
@interface MTLBufferLayoutDescriptor : NSObject
```

## Topics

### Describing fetch behavior

- [stride](mtlbufferlayoutdescriptor/stride.md): The number of bytes from one buffer entry to the next.
- [stepFunction](mtlbufferlayoutdescriptor/stepfunction.md): Determines how and when compute functions fetch data.
- [stepRate](mtlbufferlayoutdescriptor/steprate.md): How frequently the step function should load data.
- [MTLStepFunction](mtlstepfunction.md): The frequency and locations at which a function fetches attribute data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring compute pass inputs

- [stageInputDescriptor](mtlcomputepipelinedescriptor/stageinputdescriptor.md): The organization of input and output data for the next kernel call.
- [MTLAttributeDescriptor](mtlattributedescriptor.md): A descriptor of an argument’s format and where its data is in memory.
- [MTLAttributeDescriptorArray](mtlattributedescriptorarray.md): An array of attribute descriptor objects.
- [MTLBufferLayoutDescriptorArray](mtlbufferlayoutdescriptorarray.md): An array of buffer layout descriptor objects.
