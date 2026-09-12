> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioqueue](https://developer.apple.com/documentation/virtualization/vzvirtioqueue)

# VZVirtioQueue (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A Virtio queue.

## Declaration

```swift
class VZVirtioQueue
```

<a id="overview"></a>

## Overview

A `VZVirtioQueue` represents a virtqueue (Virtio queue) that belongs to a Virtio device. A virtqueue provides a mechanism for bulk data transport on Virtio devices, that facilitate device operations. For more information about how virtqueues work, see the [Virtio specification](https://docs.oasis-open.org/virtio/virtio/v1.3/csd01/virtio-v1.3-csd01.html).

Don’t instantiate `VZVirtioQueue` objects directly. Once you have created and configured a [VZCustomVirtioDevice](vzcustomvirtiodevice.md), you can access the Virtio queues belonging to that device through the [queue(at:)](vzcustomvirtiodevice/queue%28at_%29.md) method.

When the device receives a notification from the guest, the framework provides the queue with which the framework associates the notification as an argument when the framework calls [customVirtioDevice(\_:didReceiveNotificationFor:)](vzcustomvirtiodevicedelegate/customvirtiodevice%28__didreceivenotificationfor_%29.md).

## Topics

### Instance Properties

- [queueIndex](vzvirtioqueue/queueindex.md): The index for this queue.
- [queueSize](vzvirtioqueue/queuesize.md): Size of this queue.

### Instance Methods

- [nextElement()](vzvirtioqueue/nextelement%28%29.md): Gets the next element in this queue, if any.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioQueueElement](vzvirtioqueueelement.md): A unit of work on a Virtio queue, also known as a descriptor chain.

### Working with VirtQueues

- [VZVirtioQueueElement](vzvirtioqueueelement.md): A unit of work on a Virtio queue, also known as a descriptor chain.

# VZVirtioQueue (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A Virtio queue.

## Declaration

```objectivec
@interface VZVirtioQueue : NSObject
```

<a id="overview"></a>

## Overview

A `VZVirtioQueue` represents a virtqueue (Virtio queue) that belongs to a Virtio device. A virtqueue provides a mechanism for bulk data transport on Virtio devices, that facilitate device operations. For more information about how virtqueues work, see the [Virtio specification](https://docs.oasis-open.org/virtio/virtio/v1.3/csd01/virtio-v1.3-csd01.html).

Don’t instantiate `VZVirtioQueue` objects directly. Once you have created and configured a [VZCustomVirtioDevice](vzcustomvirtiodevice.md), you can access the Virtio queues belonging to that device through the [queueAtIndex:](vzcustomvirtiodevice/queue%28at_%29.md) method.

When the device receives a notification from the guest, the framework provides the queue with which the framework associates the notification as an argument when the framework calls [customVirtioDevice:didReceiveNotificationForQueue:](vzcustomvirtiodevicedelegate/customvirtiodevice%28__didreceivenotificationfor_%29.md).

## Topics

### Instance Properties

- [queueIndex](vzvirtioqueue/queueindex.md): The index for this queue.
- [queueSize](vzvirtioqueue/queuesize.md): Size of this queue.

### Instance Methods

- [nextElement](vzvirtioqueue/nextelement%28%29.md): Gets the next element in this queue, if any.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioQueueElement](vzvirtioqueueelement.md): A unit of work on a Virtio queue, also known as a descriptor chain.

### Working with VirtQueues

- [VZVirtioQueueElement](vzvirtioqueueelement.md): A unit of work on a Virtio queue, also known as a descriptor chain.
