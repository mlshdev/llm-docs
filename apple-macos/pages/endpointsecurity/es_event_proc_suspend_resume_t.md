> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_proc_suspend_resume_t](https://developer.apple.com/documentation/endpointsecurity/es_event_proc_suspend_resume_t)

# es_event_proc_suspend_resume_t (Swift)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates a call to suspend, resume, or shut down sockets for a process.

## Declaration

```swift
struct es_event_proc_suspend_resume_t
```

## Topics

### Inspecting Event Properties

- [target](es_event_proc_suspend_resume_t/target.md): The process targeted by this event.
- [type](es_event_proc_suspend_resume_t/type.md): The type of event: suspend, resume, or socket shutdown.
- [es_proc_suspend_resume_type_t](es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.
- [reserved](es_event_proc_suspend_resume_t/reserved.md): An unused field reserved for future use.

### Initializers

- [init()](es_event_proc_suspend_resume_t/init%28%29.md)
- [init(target:type:reserved:)](es_event_proc_suspend_resume_t/init%28target_type_reserved_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Interprocess Events

- [es_event_trace_t](es_event_trace_t.md): A type for an event that indicates an attempt by one process to attach to another process.
- [es_event_remote_thread_create_t](es_event_remote_thread_create_t.md): A type for an event that indicates an attempt by one process to create a thread in another process.

# es_event_proc_suspend_resume_t (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Structure  
**Availability:** Mac Catalyst · macOS

A type for an event that indicates a call to suspend, resume, or shut down sockets for a process.

## Declaration

```objectivec
typedef struct { ... } es_event_proc_suspend_resume_t;
```

## Topics

### Inspecting Event Properties

- [target](es_event_proc_suspend_resume_t/target.md): The process targeted by this event.
- [type](es_event_proc_suspend_resume_t/type.md): The type of event: suspend, resume, or socket shutdown.
- [es_proc_suspend_resume_type_t](es_proc_suspend_resume_type_t.md): The type of a process suspension or resumption event.
- [reserved](es_event_proc_suspend_resume_t/reserved.md): An unused field reserved for future use.

## See Also

### Interprocess Events

- [es_event_trace_t](es_event_trace_t.md): A type for an event that indicates an attempt by one process to attach to another process.
- [es_event_remote_thread_create_t](es_event_remote_thread_create_t.md): A type for an event that indicates an attempt by one process to create a thread in another process.
