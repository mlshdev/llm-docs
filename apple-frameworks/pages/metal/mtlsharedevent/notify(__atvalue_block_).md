> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedevent/notify(_:atvalue:block:)](https://developer.apple.com/documentation/metal/mtlsharedevent/notify(_:atvalue:block:))

# notify(\_:atValue:block:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Schedules a notification handler to be called after the shareable event’s signal value equals or exceeds a given value.

## Declaration

```swift
func notify(_ listener: MTLSharedEventListener, atValue value: UInt64, block: @escaping MTLSharedEventNotificationBlock)
```

## Parameters

- `listener`: The listener object used to dispatch the notification.
- `value`: The minimum value that needs to be signaled before the notification handler is called.
- `block`: The notification handler to call.

## Mentioned In

- [Synchronizing events between a GPU and the CPU](../synchronizing-events-between-a-gpu-and-the-cpu.md)

## See Also

### Synchronizing a shareable event

- [signaledValue](signaledvalue.md): The current signal value for the shareable event.

# notifyListener:atValue:block: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Schedules a notification handler to be called after the shareable event’s signal value equals or exceeds a given value.

## Declaration

```objectivec
- (void) notifyListener:(MTLSharedEventListener *) listener atValue:(uint64_t) value block:(MTLSharedEventNotificationBlock) block;
```

## Parameters

- `listener`: The listener object used to dispatch the notification.
- `value`: The minimum value that needs to be signaled before the notification handler is called.
- `block`: The notification handler to call.

## Mentioned In

- [Synchronizing events between a GPU and the CPU](../synchronizing-events-between-a-gpu-and-the-cpu.md)

## See Also

### Synchronizing a shareable event

- [signaledValue](signaledvalue.md): The current signal value for the shareable event.
