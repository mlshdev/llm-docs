> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedeventlistener](https://developer.apple.com/documentation/metal/mtlsharedeventlistener)

# MTLSharedEventListener (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A listener for shareable event notifications.

## Declaration

```swift
class MTLSharedEventListener
```

## Topics

### Initializing a shareable event listener

- [init()](mtlsharedeventlistener/init%28%29.md): Creates a new shareable event listener.
- [init(dispatchQueue:)](mtlsharedeventlistener/init%28dispatchqueue_%29.md): Creates a new shareable event listener with a specific dispatch queue.

### Getting the dispatch queue

- [dispatchQueue](mtlsharedeventlistener/dispatchqueue.md): The dispatch queue used to dispatch any notifications.

### Type Methods

- [shared()](mtlsharedeventlistener/shared%28%29.md)

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
- [MTLSharedEventHandle](mtlsharedeventhandle.md): An instance you use to recreate a shareable event.
- [MTLSharedEventNotificationBlock](mtlsharedeventnotificationblock.md): A block of code invoked after a shareable event’s signal value equals or exceeds a given value.

# MTLSharedEventListener (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A listener for shareable event notifications.

## Declaration

```objectivec
@interface MTLSharedEventListener : NSObject
```

## Topics

### Initializing a shareable event listener

- [init](mtlsharedeventlistener/init%28%29.md): Creates a new shareable event listener.
- [initWithDispatchQueue:](mtlsharedeventlistener/init%28dispatchqueue_%29.md): Creates a new shareable event listener with a specific dispatch queue.

### Getting the dispatch queue

- [dispatchQueue](mtlsharedeventlistener/dispatchqueue.md): The dispatch queue used to dispatch any notifications.

### Type Methods

- [sharedListener](mtlsharedeventlistener/shared%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Synchronizing with events

- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [About synchronization events](about-synchronization-events.md): Synchronize access to resources in your app by signaling events.
- [Synchronizing events within a single device](synchronizing-events-within-a-single-device.md): Use nonshareable events to synchronize your app’s work within a single device.
- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md): Use shareable events to synchronize your app’s work across multiple devices or processes.
- [Synchronizing events between a GPU and the CPU](synchronizing-events-between-a-gpu-and-the-cpu.md): Use shareable events to synchronize your app’s work between a GPU and the CPU.
- [MTLEvent](mtlevent.md): A type that synchronizes memory operations to one or more resources within a single Metal device.
- [MTLSharedEvent](mtlsharedevent.md): A type that synchronizes memory operations to one or more resources across multiple CPUs, GPUs, and processes.
- [MTLSharedEventHandle](mtlsharedeventhandle.md): An instance you use to recreate a shareable event.
- [MTLSharedEventNotificationBlock](mtlsharedeventnotificationblock.md): A block of code invoked after a shareable event’s signal value equals or exceeds a given value.
