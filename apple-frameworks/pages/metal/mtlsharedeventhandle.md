> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedeventhandle](https://developer.apple.com/documentation/metal/mtlsharedeventhandle)

# MTLSharedEventHandle (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An instance you use to recreate a shareable event.

## Declaration

```swift
class MTLSharedEventHandle
```

<a id="overview"></a>

## Overview

To create a `MTLSharedEventHandle` instance, call the [makeSharedEventHandle()](mtlsharedevent/makesharedeventhandle%28%29.md) method on an [MTLSharedEvent](mtlsharedevent.md) instance. Use an XPC conection to pass a `MTLSharedEventHandle` instance to another process. To recreate the event, call the [makeSharedEvent(handle:)](mtldevice/makesharedevent%28handle_%29.md) on an [MTLDevice](mtldevice.md) instance.

## Topics

### Identifying the shareable event handle

- [label](mtlsharedeventhandle/label.md): A string that identifies the shareable event.

### Initializers

- [init(coder:)](mtlsharedeventhandle/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Synchronizing with events

- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [About synchronization events](about-synchronization-events.md): Synchronize access to resources in your app by signaling events.
- [Synchronizing events within a single device](synchronizing-events-within-a-single-device.md): Use nonshareable events to synchronize your app’s work within a single device.
- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md): Use shareable events to synchronize your app’s work across multiple devices or processes.
- [Synchronizing events between a GPU and the CPU](synchronizing-events-between-a-gpu-and-the-cpu.md): Use shareable events to synchronize your app’s work between a GPU and the CPU.
- [MTLEvent](mtlevent.md): A type that synchronizes memory operations to one or more resources within a single Metal device.
- [MTLSharedEvent](mtlsharedevent.md): A type that synchronizes memory operations to one or more resources across multiple CPUs, GPUs, and processes.
- [MTLSharedEventListener](mtlsharedeventlistener.md): A listener for shareable event notifications.
- [MTLSharedEventNotificationBlock](mtlsharedeventnotificationblock.md): A block of code invoked after a shareable event’s signal value equals or exceeds a given value.

# MTLSharedEventHandle (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

An instance you use to recreate a shareable event.

## Declaration

```objectivec
@interface MTLSharedEventHandle : NSObject
```

<a id="overview"></a>

## Overview

To create a `MTLSharedEventHandle` instance, call the [newSharedEventHandle](mtlsharedevent/makesharedeventhandle%28%29.md) method on an [MTLSharedEvent](mtlsharedevent.md) instance. Use an XPC conection to pass a `MTLSharedEventHandle` instance to another process. To recreate the event, call the [newSharedEventWithHandle:](mtldevice/makesharedevent%28handle_%29.md) on an [MTLDevice](mtldevice.md) instance.

## Topics

### Identifying the shareable event handle

- [label](mtlsharedeventhandle/label.md): A string that identifies the shareable event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Synchronizing with events

- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [About synchronization events](about-synchronization-events.md): Synchronize access to resources in your app by signaling events.
- [Synchronizing events within a single device](synchronizing-events-within-a-single-device.md): Use nonshareable events to synchronize your app’s work within a single device.
- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md): Use shareable events to synchronize your app’s work across multiple devices or processes.
- [Synchronizing events between a GPU and the CPU](synchronizing-events-between-a-gpu-and-the-cpu.md): Use shareable events to synchronize your app’s work between a GPU and the CPU.
- [MTLEvent](mtlevent.md): A type that synchronizes memory operations to one or more resources within a single Metal device.
- [MTLSharedEvent](mtlsharedevent.md): A type that synchronizes memory operations to one or more resources across multiple CPUs, GPUs, and processes.
- [MTLSharedEventListener](mtlsharedeventlistener.md): A listener for shareable event notifications.
- [MTLSharedEventNotificationBlock](mtlsharedeventnotificationblock.md): A block of code invoked after a shareable event’s signal value equals or exceeds a given value.
