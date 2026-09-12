> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedeventnotificationblock](https://developer.apple.com/documentation/metal/mtlsharedeventnotificationblock)

# MTLSharedEventNotificationBlock (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block of code invoked after a shareable event’s signal value equals or exceeds a given value.

## Declaration

```swift
typealias MTLSharedEventNotificationBlock = @Sendable (any MTLSharedEvent, UInt64) -> Void
```

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
- [MTLSharedEventListener](mtlsharedeventlistener.md): A listener for shareable event notifications.

# MTLSharedEventNotificationBlock (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A block of code invoked after a shareable event’s signal value equals or exceeds a given value.

## Declaration

```objectivec
typedef void (^)(id<MTLSharedEvent>, unsigned long long) MTLSharedEventNotificationBlock;
```

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
- [MTLSharedEventListener](mtlsharedeventlistener.md): A listener for shareable event notifications.
