> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsharedevent/signaledvalue](https://developer.apple.com/documentation/metal/mtlsharedevent/signaledvalue)

# signaledValue (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The current signal value for the shareable event.

## Declaration

```swift
var signaledValue: UInt64 { get set }
```

## Mentioned In

- [Synchronizing events between a GPU and the CPU](../synchronizing-events-between-a-gpu-and-the-cpu.md)

<a id="discussion"></a>

## Discussion

When you set the value of a shared event, its value is changed only if you provide a larger value than the value currently stored in the event. Setting this property signals the event. Commands waiting on the event are allowed to run if the new value is equal to or greater than the value for which they are waiting. Similarly, setting the event’s value triggers notifications if the value is equal to or greater than the value for which they are waiting.

## See Also

### Synchronizing a shareable event

- [notify(\_:atValue:block:)](notify%28__atvalue_block_%29.md): Schedules a notification handler to be called after the shareable event’s signal value equals or exceeds a given value.

# signaledValue (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The current signal value for the shareable event.

## Declaration

```objectivec
@property (readwrite) uint64_t signaledValue;
```

## Mentioned In

- [Synchronizing events between a GPU and the CPU](../synchronizing-events-between-a-gpu-and-the-cpu.md)

<a id="discussion"></a>

## Discussion

When you set the value of a shared event, its value is changed only if you provide a larger value than the value currently stored in the event. Setting this property signals the event. Commands waiting on the event are allowed to run if the new value is equal to or greater than the value for which they are waiting. Similarly, setting the event’s value triggers notifications if the value is equal to or greater than the value for which they are waiting.

## See Also

### Synchronizing a shareable event

- [notifyListener:atValue:block:](notify%28__atvalue_block_%29.md): Schedules a notification handler to be called after the shareable event’s signal value equals or exceeds a given value.
