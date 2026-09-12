> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedevent](https://developer.apple.com/documentation/metal/mtlsharedevent)

# MTLSharedEvent (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A type that synchronizes memory operations to one or more resources across multiple CPUs, GPUs, and processes.

## Declaration

```swift
protocol MTLSharedEvent : MTLEvent
```

## Mentioned In

- [About synchronization events](about-synchronization-events.md)
- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md)
- [Synchronizing passes with a fence](synchronizing-passes-with-a-fence.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

The [MTLSharedEvent](mtlsharedevent.md) protocol inherits the [MTLEvent](mtlevent.md) protocol. An event can only synchronize memory operations that run on a single Metal device. A shared event can synchronize memory operations across multiple Metal devices and the CPU. Shared events work anywhere you can work with a regular event.

> **Tip**

> Start with an [MTLEvent](mtlevent.md) instance until you need to synchronize work with a task that runs on the CPU or another Metal device, because an [MTLSharedEvent](mtlsharedevent.md) can add overhead that may affect your app’s performance.

Create an [MTLSharedEvent](mtlsharedevent.md) by calling the [makeSharedEvent()](mtldevice/makesharedevent%28%29.md) method of an [MTLDevice](mtldevice.md) instance.

To pass this event to another process:

1. Create a handle to the shared event by calling the [makeSharedEventHandle()](mtlsharedevent/makesharedeventhandle%28%29.md) method.
2. Transfer the handle to another process with XPC.
3. From the other process, call the [makeSharedEvent(handle:)](mtldevice/makesharedevent%28handle_%29.md) method.

For more information about shared events and synchronizing memory operations to resources, see:

- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md)
- [Synchronizing events between a GPU and the CPU](synchronizing-events-between-a-gpu-and-the-cpu.md).
- [Resource synchronization](resource-synchronization.md)

## Topics

### Synchronizing a shareable event

- [signaledValue](mtlsharedevent/signaledvalue.md): The current signal value for the shareable event.
- [notify(\_:atValue:block:)](mtlsharedevent/notify%28__atvalue_block_%29.md): Schedules a notification handler to be called after the shareable event’s signal value equals or exceeds a given value.

### Creating a shared event handle

- [makeSharedEventHandle()](mtlsharedevent/makesharedeventhandle%28%29.md): Creates a new shareable event handle.

### Instance Methods

- [valueSignaled(\_:)](mtlsharedevent/valuesignaled%28__%29.md)
- [wait(untilSignaledValue:timeoutMS:)](mtlsharedevent/wait%28untilsignaledvalue_timeoutms_%29.md)

## Relationships

### Inherits From

- [MTLEvent](mtlevent.md)
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
- [MTLSharedEventHandle](mtlsharedeventhandle.md): An instance you use to recreate a shareable event.
- [MTLSharedEventListener](mtlsharedeventlistener.md): A listener for shareable event notifications.
- [MTLSharedEventNotificationBlock](mtlsharedeventnotificationblock.md): A block of code invoked after a shareable event’s signal value equals or exceeds a given value.

# MTLSharedEvent (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A type that synchronizes memory operations to one or more resources across multiple CPUs, GPUs, and processes.

## Declaration

```objectivec
@protocol MTLSharedEvent <MTLEvent>
```

## Mentioned In

- [About synchronization events](about-synchronization-events.md)
- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md)
- [Synchronizing passes with a fence](synchronizing-passes-with-a-fence.md)
- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

The [MTLSharedEvent](mtlsharedevent.md) protocol inherits the [MTLEvent](mtlevent.md) protocol. An event can only synchronize memory operations that run on a single Metal device. A shared event can synchronize memory operations across multiple Metal devices and the CPU. Shared events work anywhere you can work with a regular event.

> **Tip**

> Start with an [MTLEvent](mtlevent.md) instance until you need to synchronize work with a task that runs on the CPU or another Metal device, because an [MTLSharedEvent](mtlsharedevent.md) can add overhead that may affect your app’s performance.

Create an [MTLSharedEvent](mtlsharedevent.md) by calling the [newSharedEvent](mtldevice/makesharedevent%28%29.md) method of an [MTLDevice](mtldevice.md) instance.

To pass this event to another process:

1. Create a handle to the shared event by calling the [newSharedEventHandle](mtlsharedevent/makesharedeventhandle%28%29.md) method.
2. Transfer the handle to another process with XPC.
3. From the other process, call the [newSharedEventWithHandle:](mtldevice/makesharedevent%28handle_%29.md) method.

For more information about shared events and synchronizing memory operations to resources, see:

- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md)
- [Synchronizing events between a GPU and the CPU](synchronizing-events-between-a-gpu-and-the-cpu.md).
- [Resource synchronization](resource-synchronization.md)

## Topics

### Synchronizing a shareable event

- [signaledValue](mtlsharedevent/signaledvalue.md): The current signal value for the shareable event.
- [notifyListener:atValue:block:](mtlsharedevent/notify%28__atvalue_block_%29.md): Schedules a notification handler to be called after the shareable event’s signal value equals or exceeds a given value.

### Creating a shared event handle

- [newSharedEventHandle](mtlsharedevent/makesharedeventhandle%28%29.md): Creates a new shareable event handle.

### Instance Methods

- [waitUntilSignaledValue:timeoutMS:](mtlsharedevent/wait%28untilsignaledvalue_timeoutms_%29.md)

## Relationships

### Inherits From

- [MTLEvent](mtlevent.md)

## See Also

### Synchronizing with events

- [Implementing a multistage image filter using heaps and events](implementing-a-multistage-image-filter-using-heaps-and-events.md): Use events to synchronize access to resources allocated on a heap.
- [About synchronization events](about-synchronization-events.md): Synchronize access to resources in your app by signaling events.
- [Synchronizing events within a single device](synchronizing-events-within-a-single-device.md): Use nonshareable events to synchronize your app’s work within a single device.
- [Synchronizing events across multiple devices or processes](synchronizing-events-across-multiple-devices-or-processes.md): Use shareable events to synchronize your app’s work across multiple devices or processes.
- [Synchronizing events between a GPU and the CPU](synchronizing-events-between-a-gpu-and-the-cpu.md): Use shareable events to synchronize your app’s work between a GPU and the CPU.
- [MTLEvent](mtlevent.md): A type that synchronizes memory operations to one or more resources within a single Metal device.
- [MTLSharedEventHandle](mtlsharedeventhandle.md): An instance you use to recreate a shareable event.
- [MTLSharedEventListener](mtlsharedeventlistener.md): A listener for shareable event notifications.
- [MTLSharedEventNotificationBlock](mtlsharedeventnotificationblock.md): A block of code invoked after a shareable event’s signal value equals or exceeds a given value.
