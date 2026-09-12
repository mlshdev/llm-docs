> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/seq_num](https://developer.apple.com/documentation/endpointsecurity/es_message_t/seq_num)

# seq_num (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The sequence number of the message.

## Declaration

```swift
var seq_num: UInt64
```

<a id="Discussion"></a>

## Discussion

Inspect the sequence number per-client and per-event-type to detect whether the kernel had to drop events for this client. If the kernel doesn’t drop any events for this client, `seq_num` increments by 1 for every message of that event type.

To determine whether the kernel dropped events, compare the previous value of `seq_num` for this event type to the value received in the latest message. When the kernel drops no events, the difference is 1, since the current message increments the counter. You can therefore calculate the number of dropped messages as follows:

```c
numberOfDroppedEvents = thisMessage.seq_num - (prevMessage.seq_num + 1)
```

Dropped events generally indicate that the kernel generated more events than the client could handle.

This field is available if the message version is greater than `2`.

> **Tip**

>  For an equivalent counter that filters only by client and not event type, see [global_seq_num](global_seq_num.md).

## See Also

### Inspecting Timing Properties

- [time](time.md): The time the event occurred, expressed as a Darwin time value.
- [mach_time](mach_time.md): The time the event occurred, as a Mach time value.
- [deadline](deadline.md): The deadline by which your app must respond to the event.
- [global_seq_num](global_seq_num.md): The global sequence number of the message.

# seq_num (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The sequence number of the message.

## Declaration

```objectivec
uint64_t seq_num;
```

<a id="Discussion"></a>

## Discussion

Inspect the sequence number per-client and per-event-type to detect whether the kernel had to drop events for this client. If the kernel doesn’t drop any events for this client, `seq_num` increments by 1 for every message of that event type.

To determine whether the kernel dropped events, compare the previous value of `seq_num` for this event type to the value received in the latest message. When the kernel drops no events, the difference is 1, since the current message increments the counter. You can therefore calculate the number of dropped messages as follows:

```c
numberOfDroppedEvents = thisMessage.seq_num - (prevMessage.seq_num + 1)
```

Dropped events generally indicate that the kernel generated more events than the client could handle.

This field is available if the message version is greater than `2`.

> **Tip**

>  For an equivalent counter that filters only by client and not event type, see [global_seq_num](global_seq_num.md).

## See Also

### Inspecting Timing Properties

- [time](time.md): The time the event occurred, expressed as a Darwin time value.
- [mach_time](mach_time.md): The time the event occurred, as a Mach time value.
- [deadline](deadline.md): The deadline by which your app must respond to the event.
- [global_seq_num](global_seq_num.md): The global sequence number of the message.
