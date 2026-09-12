> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresidencysetdescriptor](https://developer.apple.com/documentation/metal/mtlresidencysetdescriptor)

# MTLResidencySetDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A configuration that customizes the behavior for a residency set.

## Declaration

```swift
class MTLResidencySetDescriptor
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

Make an [MTLResidencySet](mtlresidencyset.md) by creating and configuring an [MTLResidencySetDescriptor](mtlresidencysetdescriptor.md) instance and pass it to the [makeResidencySet(descriptor:)](mtldevice/makeresidencyset%28descriptor_%29.md) method of an [MTLDevice](mtldevice.md) instance.

See [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md) for more information.

## Topics

### Configuring the residency set

- [label](mtlresidencysetdescriptor/label.md): An optional name that can help you identify a residency set you create with the descriptor.
- [initialCapacity](mtlresidencysetdescriptor/initialcapacity.md): The number of allocations a new residency set can store without reallocating memory.

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

### Residency sets

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md): Organize your resources into groups and influence when they become accessible to the GPU.
- [MTLResidencySet](mtlresidencyset.md): A collection of resource allocations that can move in and out of resident memory.

# MTLResidencySetDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

A configuration that customizes the behavior for a residency set.

## Declaration

```objectivec
@interface MTLResidencySetDescriptor : NSObject
```

## Mentioned In

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md)

<a id="overview"></a>

## Overview

Make an [MTLResidencySet](mtlresidencyset.md) by creating and configuring an [MTLResidencySetDescriptor](mtlresidencysetdescriptor.md) instance and pass it to the [newResidencySetWithDescriptor:error:](mtldevice/makeresidencyset%28descriptor_%29.md) method of an [MTLDevice](mtldevice.md) instance.

See [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md) for more information.

## Topics

### Configuring the residency set

- [label](mtlresidencysetdescriptor/label.md): An optional name that can help you identify a residency set you create with the descriptor.
- [initialCapacity](mtlresidencysetdescriptor/initialcapacity.md): The number of allocations a new residency set can store without reallocating memory.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Residency sets

- [Simplifying GPU resource management with residency sets](simplifying-gpu-resource-management-with-residency-sets.md): Organize your resources into groups and influence when they become accessible to the GPU.
- [MTLResidencySet](mtlresidencyset.md): A collection of resource allocations that can move in and out of resident memory.
