> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_message_t/deadline](https://developer.apple.com/documentation/endpointsecurity/es_message_t/deadline)

# deadline (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The deadline by which your app must respond to the event.

## Declaration

```swift
var deadline: UInt64
```

<a id="Discussion"></a>

## Discussion

If you fail to respond to an event before this deadline, Endpoint Security may terminate the client process, or restart the process if it’s a system extension. If your client repeatedly misses deadlines, Endpoint Security may refuse new connections from [es_new_client(\_:\_:)](../es_new_client%28____%29.md) altogether.

## See Also

### Inspecting Timing Properties

- [time](time.md): The time the event occurred, expressed as a Darwin time value.
- [mach_time](mach_time.md): The time the event occurred, as a Mach time value.
- [seq_num](seq_num.md): The sequence number of the message.
- [global_seq_num](global_seq_num.md): The global sequence number of the message.

# deadline (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The deadline by which your app must respond to the event.

## Declaration

```objectivec
uint64_t deadline;
```

<a id="Discussion"></a>

## Discussion

If you fail to respond to an event before this deadline, Endpoint Security may terminate the client process, or restart the process if it’s a system extension. If your client repeatedly misses deadlines, Endpoint Security may refuse new connections from [es_new_client](../es_new_client%28____%29.md) altogether.

## See Also

### Inspecting Timing Properties

- [time](time.md): The time the event occurred, expressed as a Darwin time value.
- [mach_time](mach_time.md): The time the event occurred, as a Mach time value.
- [seq_num](seq_num.md): The sequence number of the message.
- [global_seq_num](global_seq_num.md): The global sequence number of the message.
