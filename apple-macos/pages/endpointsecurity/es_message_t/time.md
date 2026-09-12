> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/time](https://developer.apple.com/documentation/endpointsecurity/es_message_t/time)

# time (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The time the event occurred, expressed as a Darwin time value.

## Declaration

```swift
var time: timespec
```

## See Also

### Inspecting Timing Properties

- [mach_time](mach_time.md): The time the event occurred, as a Mach time value.
- [deadline](deadline.md): The deadline by which your app must respond to the event.
- [seq_num](seq_num.md): The sequence number of the message.
- [global_seq_num](global_seq_num.md): The global sequence number of the message.

# time (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The time the event occurred, expressed as a Darwin time value.

## Declaration

```objectivec
struct timespec time;
```

## See Also

### Inspecting Timing Properties

- [mach_time](mach_time.md): The time the event occurred, as a Mach time value.
- [deadline](deadline.md): The deadline by which your app must respond to the event.
- [seq_num](seq_num.md): The sequence number of the message.
- [global_seq_num](global_seq_num.md): The global sequence number of the message.
