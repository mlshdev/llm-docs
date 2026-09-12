> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/encodewaitforevent(_:value:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/encodewaitforevent(_:value:))

# encodeWaitForEvent(\_:value:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a command into the command buffer that pauses the GPU from running the buffer’s subsequent passes until the event equals or exceeds a value.

## Declaration

```swift
func encodeWaitForEvent(_ event: any MTLEvent, value: UInt64)
```

## Parameters

- `event`: An [MTLEvent](../mtlevent.md) instance the GPU driver waits for between passes as it runs the command buffer.

  If `event` is an [MTLSharedEvent](../mtlsharedevent.md) instance, a command buffer from any GPU device can signal this command buffer. Otherwise, only command buffers from the same GPU device can signal this command buffer.
- `value`: The event’s smallest value that allows the GPU to continue running the remaining passes in the command buffer.

## Mentioned In

- [About synchronization events](../about-synchronization-events.md)

<a id="discussion"></a>

## Discussion

This method prevents the GPU from starting the next pass in the command buffer until another command buffer signals `event` (see [encodeSignalEvent(\_:value:)](encodesignalevent%28__value_%29.md).

A command buffer can instruct the GPU to wait for an event only between passes, not within a pass. If a command buffer has an active encoder, finish using the encoder, call its [endEncoding()](../mtlcommandencoder/endencoding%28%29.md) method, and then call this method before creating another encoder.

When the GPU device reaches the wait command that this method encodes into the buffer, it checks the event’s current value. If the event’s value — which increases monotonically — is less than the `value` parameter, the GPU waits before running the next pass in the buffer. The GPU starts the next pass when the event signals a value that’s equal to or greater than the `value` parameter (see [encodeSignalEvent(\_:value:)](encodesignalevent%28__value_%29.md)). However, If the event’s value is already greater than or equal to the `value` parameter, the GPU immediately starts the next pass without waiting.

## See Also

### Synchronizing passes with events

- [encodeSignalEvent(\_:value:)](encodesignalevent%28__value_%29.md): Encodes a command that updates an event’s value, which can clear the GPU to run passes from other command buffers waiting for the event.

# encodeWaitForEvent:value: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Encodes a command into the command buffer that pauses the GPU from running the buffer’s subsequent passes until the event equals or exceeds a value.

## Declaration

```objectivec
- (void) encodeWaitForEvent:(id<MTLEvent>) event value:(uint64_t) value;
```

## Parameters

- `event`: An [MTLEvent](../mtlevent.md) instance the GPU driver waits for between passes as it runs the command buffer.

  If `event` is an [MTLSharedEvent](../mtlsharedevent.md) instance, a command buffer from any GPU device can signal this command buffer. Otherwise, only command buffers from the same GPU device can signal this command buffer.
- `value`: The event’s smallest value that allows the GPU to continue running the remaining passes in the command buffer.

## Mentioned In

- [About synchronization events](../about-synchronization-events.md)

<a id="discussion"></a>

## Discussion

This method prevents the GPU from starting the next pass in the command buffer until another command buffer signals `event` (see [encodeSignalEvent:value:](encodesignalevent%28__value_%29.md).

A command buffer can instruct the GPU to wait for an event only between passes, not within a pass. If a command buffer has an active encoder, finish using the encoder, call its [endEncoding](../mtlcommandencoder/endencoding%28%29.md) method, and then call this method before creating another encoder.

When the GPU device reaches the wait command that this method encodes into the buffer, it checks the event’s current value. If the event’s value — which increases monotonically — is less than the `value` parameter, the GPU waits before running the next pass in the buffer. The GPU starts the next pass when the event signals a value that’s equal to or greater than the `value` parameter (see [encodeSignalEvent:value:](encodesignalevent%28__value_%29.md)). However, If the event’s value is already greater than or equal to the `value` parameter, the GPU immediately starts the next pass without waiting.

## See Also

### Synchronizing passes with events

- [encodeSignalEvent:value:](encodesignalevent%28__value_%29.md): Encodes a command that updates an event’s value, which can clear the GPU to run passes from other command buffers waiting for the event.
