> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_muted_process_t](https://developer.apple.com/documentation/endpointsecurity/es_muted_process_t)

# es_muted_process_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that describes a process’s muted events.

## Declaration

```swift
struct es_muted_process_t
```

## Topics

### Accessing Muted Processes

- [audit_token](es_muted_process_t/audit_token.md): The audit token associated with a muted process.
- [events](es_muted_process_t/events.md): An array containing the muted event types.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [event_count](es_muted_process_t/event_count.md): The number of elements in the muted events array.

### Initializers

- [init()](es_muted_process_t/init%28%29.md)
- [init(audit_token:event_count:events:)](es_muted_process_t/init%28audit_token_event_count_events_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Accessing Muted Processes

- [processes](es_muted_processes_t/processes.md): An array containing the muted processes.
- [count](es_muted_processes_t/count.md): The number of elements in the processes array.

# es_muted_process_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A structure that describes a process’s muted events.

## Declaration

```objectivec
typedef struct { ... } es_muted_process_t;
```

## Topics

### Accessing Muted Processes

- [audit_token](es_muted_process_t/audit_token.md): The audit token associated with a muted process.
- [events](es_muted_process_t/events.md): An array containing the muted event types.
- [es_event_type_t](es_event_type_t.md): A type used to identify a message’s event type and subscribe to events of that type.
- [event_count](es_muted_process_t/event_count.md): The number of elements in the muted events array.

## See Also

### Accessing Muted Processes

- [processes](es_muted_processes_t/processes.md): An array containing the muted processes.
- [count](es_muted_processes_t/count.md): The number of elements in the processes array.
